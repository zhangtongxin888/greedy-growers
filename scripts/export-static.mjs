import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "dist", "vercel");
const siteUrl = "https://greedy-growers-guide.wiki";
const htmlRoutes = ["/", "/getting-started", "/core-loop", "/progression", "/mistakes", "/faq", "/sources"];

const workerUrl = pathToFileURL(path.join(projectRoot, "dist", "server", "index.js"));
workerUrl.searchParams.set("export", Date.now().toString());
const worker = (await import(workerUrl)).default;

async function render(route) {
  return worker.fetch(
    new Request(`${siteUrl}${route}`),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) }, IMAGES: {} },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function save(route, destination, expectedStatus = 200) {
  const response = await render(route);
  if (response.status !== expectedStatus) {
    throw new Error(`${route} returned ${response.status}; expected ${expectedStatus}`);
  }
  await writeFile(path.join(outputRoot, destination), await response.text());
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(path.join(projectRoot, "dist", "client", "_next"), path.join(outputRoot, "_next"), { recursive: true });
await cp(path.join(projectRoot, "dist", "client", "og.png"), path.join(outputRoot, "og.png"));

for (const route of htmlRoutes) {
  const destination = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  await save(route, destination);
}

await save("/not-a-real-guide", "404.html", 404);
await save("/robots.txt", "robots.txt");
await save("/sitemap.xml", "sitemap.xml");

console.log(`Exported ${htmlRoutes.length} canonical pages to ${outputRoot}`);
