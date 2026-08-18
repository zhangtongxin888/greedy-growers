import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../dist/vercel/", import.meta.url);
const siteUrl = "https://greedy-growers-guide.wiki";
const routes = ["/", "/getting-started", "/core-loop", "/progression", "/mistakes", "/faq", "/sources"];

test("Vercel static export contains every canonical guide page", async () => {
  for (const route of routes) {
    const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
    const html = await readFile(new URL(file, output), "utf8");
    const canonical = siteUrl + (route === "/" ? "" : route);
    assert.match(html, new RegExp(`<link rel="canonical" href="${canonical.replaceAll(".", "\\.")}"\\s*\\/>`, "i"), route);
    assert.match(html, /<meta name="robots" content="index, follow"\/>/i, route);
  }
});

test("Vercel static export includes crawler files and public assets", async () => {
  const robots = await readFile(new URL("robots.txt", output), "utf8");
  const sitemap = await readFile(new URL("sitemap.xml", output), "utf8");
  const notFound = await readFile(new URL("404.html", output), "utf8");

  assert.match(robots, /Sitemap: https:\/\/greedy-growers-guide\.wiki\/sitemap\.xml/);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, routes.length);
  assert.doesNotMatch(sitemap, /vercel\.app|workers\.dev/);
  assert.match(notFound, /<meta name="robots" content="noindex, nofollow"\/>/i);
  await access(new URL("og.png", output));
  await access(new URL("_next/static/css/", output));
});
