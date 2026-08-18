import type { MetadataRoute } from "next";
import { siteUrl } from "./metadata";

const routes = ["", "/getting-started", "/core-loop", "/progression", "/mistakes", "/faq", "/sources"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: route ? `${siteUrl}${route}` : `${siteUrl}/`,
    lastModified: new Date("2026-08-18T00:00:00+08:00"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/getting-started" ? 0.9 : 0.7,
  }));
}
