import type { Metadata } from "next";

export const siteUrl = "https://greedy-growers-guide.wiki";

export function guideMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      siteName: "Greedy Growers Guide",
      title,
      description,
      url: path,
      images: [],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [],
    },
  };
}
