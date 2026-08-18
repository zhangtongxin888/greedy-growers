import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./metadata";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Greedy Growers Guide | A Safer First Harvest",
    template: "%s | Greedy Growers Guide",
  },
  description: "Start Greedy Growers with a source-checked route from river seed to harvest, then learn the core loop, progression, mistakes, and FAQ.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Greedy Growers Guide",
    title: "Greedy Growers Guide | A Safer First Harvest",
    description: "A source-checked beginner route from river seed to safer harvest, with progression, mistakes, and practical answers.",
    url: "/",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Greedy Growers Guide — Grow your first tree. Keep the harvest." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greedy Growers Guide | A Safer First Harvest",
    description: "A source-checked beginner route from river seed to safer harvest.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Greedy Growers Guide",
    url: siteUrl,
    description: "An independent, source-labelled beginner guide for Greedy Growers on Roblox.",
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
