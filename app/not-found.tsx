import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This Greedy Growers guide page could not be found.",
  alternates: {},
  robots: { index: false, follow: false },
  openGraph: {},
  twitter: {},
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found">
        <p className="eyebrow">404 · Route missing</p>
        <h1>This plot is empty.</h1>
        <p>The page you followed is not part of the current guide. Return to the beginner route and keep your next harvest moving.</p>
        <a className="button button-primary" href="/getting-started">Start the beginner route</a>
      </main>
      <SiteFooter />
    </>
  );
}
