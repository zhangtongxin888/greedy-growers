import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const siteUrl = "https://greedy-growers-guide.wiki";
const routeExpectations = [
  ["/", "Greedy Growers Guide | A Safer First Harvest", "Grow your first tree."],
  ["/getting-started", "Beginner Guide: Your First Safe Harvest", "Your first safe harvest"],
  ["/core-loop", "Core Loop: When to Harvest", "The loop is simple."],
  ["/progression", "Progression: From First Loop to Pets", "Build consistency before complexity"],
  ["/mistakes", "6 Beginner Mistakes to Avoid", "Six habits that make the early game harder"],
  ["/faq", "FAQ: Harvests, Rebirths &amp; Pets", "Short answers, honest evidence labels"],
  ["/sources", "Sources &amp; Update Policy", "What we know—and how we know it"],
];

let workerPromise;

async function getWorker() {
  workerPromise ??= import(new URL(`../dist/server/index.js?test=${process.pid}-${Date.now()}`, import.meta.url)).then((module) => module.default);
  return workerPromise;
}

async function render(route) {
  const worker = await getWorker();
  return worker.fetch(
    new Request(`${siteUrl}${route}`, { headers: { accept: route.endsWith(".xml") ? "application/xml" : "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
      IMAGES: {},
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

test("renders every public guide route with unique SEO metadata", async () => {
  const seenTitles = new Set();

  for (const [route, title, visibleText] of routeExpectations) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, route);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff", route);

    const html = await response.text();
    assert.match(html, new RegExp(`<title>${escapeRegExp(title)}(?: \\| Greedy Growers Guide)?<\\/title>`, "i"), route);
    assert.match(html, new RegExp(escapeRegExp(visibleText), "i"), route);
    assert.match(html, new RegExp(`<link rel="canonical" href="${escapeRegExp(siteUrl + (route === "/" ? "" : route))}"\\s*\\/>`, "i"), route);
    assert.match(html, /<meta name="description" content="[^"]+"\/>/i, route);
    assert.match(html, /<meta name="robots" content="index, follow"\/>/i, route);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i, route);

    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    assert.ok(titleMatch, route);
    assert.ok(!seenTitles.has(titleMatch[1]), `duplicate title: ${titleMatch[1]}`);
    seenTitles.add(titleMatch[1]);

    if (route === "/") {
      assert.match(html, /<meta property="og:image" content="https:\/\/greedy-growers-guide\.wiki\/og\.png"\/>/i);
    } else {
      assert.doesNotMatch(html, /<meta property="og:image"/i, `${route} must not inherit the homepage image`);
      assert.match(html, new RegExp(`<meta property="og:url" content="${escapeRegExp(siteUrl + route)}"\\s*\\/>`, "i"), route);
    }
  }
});

test("homepage leads with the beginner route and links every learning chapter", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(html, /Start the 5-minute route/i);
  assert.match(html, /Choose a river seed/i);
  assert.match(html, /Plant it on your plot/i);
  assert.match(html, /Harvest before lightning/i);

  for (const [route] of routeExpectations.slice(1)) {
    assert.match(html, new RegExp(`href="${escapeRegExp(route)}(?:#.*?)?"`, "i"), route);
  }
});

test("robots and sitemap expose exactly the canonical public route set", async () => {
  const robotsResponse = await render("/robots.txt");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /User-Agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, new RegExp(`Sitemap: ${escapeRegExp(siteUrl)}/sitemap\\.xml`));

  const sitemapResponse = await render("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /^application\/xml\b/i);
  const sitemap = await sitemapResponse.text();
  const sitemapRoutes = [...sitemap.matchAll(/<loc>https:\/\/greedy-growers-guide\.wiki(.*?)<\/loc>/g)].map((match) => match[1] || "/");
  assert.deepEqual(sitemapRoutes, routeExpectations.map(([route]) => route));

  const generatedRoutes = await readFile(new URL("../.next/types/routes.d.ts", import.meta.url), "utf8");
  for (const [route] of routeExpectations) {
    assert.match(generatedRoutes, new RegExp(`"${escapeRegExp(route)}"`), `build route missing: ${route}`);
  }
});

const contentSecurityPolicy = "default-src 'self'; base-uri 'self'; object-src 'none'; form-action 'self'; frame-ancestors 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https: wss: blob:; frame-src https: blob: data:; child-src https: blob: data:; worker-src 'self' blob: https:; media-src 'self' data: blob: https:";

function cspSources(policy, name) {
  const directive = policy
    .split(";")
    .map((part) => part.trim())
    .find((part) => part === name || part.startsWith(`${name} `));
  assert.ok(directive, `missing ${name}`);
  return directive.slice(name.length).trim().split(/\s+/).filter(Boolean);
}

test("production responses include the expected security policy", async () => {
  const response = await render("/");
  const policy = response.headers.get("content-security-policy") ?? "";
  assert.equal(policy, contentSecurityPolicy);
  assert.deepEqual(cspSources(policy, "default-src"), ["'self'"]);
  for (const name of ["script-src", "frame-src", "img-src", "connect-src"]) {
    assert.ok(cspSources(policy, name).includes("https:"), `${name} must allow https:`);
  }
  for (const source of ["blob:", "data:"]) {
    assert.ok(cspSources(policy, "frame-src").includes(source), `frame-src must allow ${source}`);
  }
  for (const source of ["wss:", "blob:"]) {
    assert.ok(cspSources(policy, "connect-src").includes(source), `connect-src must allow ${source}`);
  }
  assert.ok(cspSources(policy, "script-src").includes("blob:"));
  assert.ok(cspSources(policy, "media-src").includes("blob:"));
  assert.ok(cspSources(policy, "worker-src").includes("https:"));
  assert.ok(cspSources(policy, "child-src").includes("data:"));
  assert.equal(
    cspSources(policy, "script-src").some((source) =>
      ["'strict-dynamic'", "'nonce-", "'sha256-", "'sha384-", "'sha512-"].some((marker) => source.startsWith(marker)),
    ),
    false,
  );
  for (const name of ["script-src", "style-src", "img-src", "font-src", "connect-src", "frame-src", "child-src", "worker-src", "media-src"]) {
    for (const source of cspSources(policy, name)) {
      assert.doesNotMatch(source, /:\/\/|^\*\./, `${name} must not allowlist hosts (${source})`);
    }
  }

  const vercel = JSON.parse(await readFile(new URL("../vercel.json", import.meta.url), "utf8"));
  const vercelPolicy = vercel.headers
    .flatMap((group) => group.headers ?? [])
    .find((header) => header.key === "Content-Security-Policy");
  assert.equal(vercelPolicy?.value, contentSecurityPolicy);

  const adConfig = await readFile(new URL("../lib/adsterra.generated.ts", import.meta.url), "utf8");
  assert.match(adConfig, /adsterraEnablePopunder:\s*false/);
  assert.match(adConfig, /adsterraEnableSocialBar:\s*false/);
  assert.match(adConfig, /adsterraEnableStickyRail:\s*false/);

  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
});

function adPlacements(html) {
  return [...html.matchAll(/class="ad-placement ad-placement-(top|mid|bottom)"/g)].map((match) => match[1]);
}

test("content pages show one early banner plus native and rectangle, and legal pages stay empty", async () => {
  const home = await (await render("/")).text();
  const homePlacements = adPlacements(home);
  assert.deepEqual(homePlacements, ["top", "mid", "bottom"]);
  const hero = home.indexOf("Grow your first tree.");
  const top = home.indexOf('class="ad-placement ad-placement-top"');
  const quickStart = home.indexOf('id="quick-start"');
  assert.ok(hero !== -1 && hero < top && top < quickStart, "homepage banner sits after the hero");
  assert.ok(top < home.indexOf('class="ad-placement ad-placement-mid"'));
  assert.doesNotMatch(home, /ad-placement-global-fallback|ad-sticky-rail|id="adsterra-popunder"|id="adsterra-social-bar"/);

  const guide = await (await render("/getting-started")).text();
  assert.deepEqual(adPlacements(guide), ["top", "mid", "bottom"]);
  const header = guide.indexOf('class="site-header"');
  const guideTop = guide.indexOf('class="ad-placement ad-placement-top"');
  const guideMain = guide.indexOf('class="guide-main"');
  assert.ok(header !== -1 && header < guideTop && guideTop < guideMain, "guide banner sits after the header");

  const sources = await (await render("/sources")).text();
  assert.deepEqual(adPlacements(sources), []);
  assert.doesNotMatch(sources, /class="ad-shell|ad-sticky-rail|id="adsterra-popunder"|id="adsterra-social-bar"/);

  const missing = await (await render("/not-a-real-guide")).text();
  assert.deepEqual(adPlacements(missing), ["top", "mid", "bottom"]);
  assert.ok(missing.indexOf('class="site-header"') < missing.indexOf('class="ad-placement ad-placement-top"'));
});

test("unknown routes return a clean noindex page without a homepage canonical", async () => {
  const response = await render("/not-a-real-guide");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(html, /<title>Page not found \| Greedy Growers Guide<\/title>/i);
  assert.match(html, /<meta name="robots" content="noindex, nofollow"\/>/i);
  assert.doesNotMatch(html, /<meta name="robots" content="index, follow"\/>/i);
  assert.doesNotMatch(html, /<link rel="canonical"/i);
});
