import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./SiteChrome";

type GuideLink = { href: string; label: string };

export function EvidenceNote({ children, kind = "official" }: { children: ReactNode; kind?: "official" | "community" | "advice" }) {
  const labels = {
    official: "Officially confirmed",
    community: "Community-tested · may change",
    advice: "Guide advice",
  };

  return (
    <aside className={`evidence-note evidence-${kind}`}>
      <strong>{labels[kind]}</strong>
      <p>{children}</p>
    </aside>
  );
}

export function GuideLayout({
  eyebrow,
  title,
  lede,
  minutes,
  sections,
  previous,
  next,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  minutes: number;
  sections: { id: string; label: string }[];
  previous?: GuideLink;
  next?: GuideLink;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="guide-main">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>{eyebrow}</span></div>
        <header className="guide-hero">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{lede}</p>
          <div className="guide-meta"><span>{minutes} min read</span><span>Checked Aug 18, 2026</span><a href="/sources">How we verify</a></div>
        </header>
        <div className="guide-layout">
          <aside className="guide-toc">
            <p>On this page</p>
            {sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>{String(index + 1).padStart(2, "0")}</span>{section.label}</a>)}
          </aside>
          <article className="guide-article">{children}</article>
        </div>
        <nav className="chapter-nav" aria-label="Guide chapters">
          {previous ? <a className="chapter-previous" href={previous.href}><span>Previous</span><strong>← {previous.label}</strong></a> : <span />}
          {next ? <a className="chapter-next" href={next.href}><span>Continue</span><strong>{next.label} →</strong></a> : <span />}
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
