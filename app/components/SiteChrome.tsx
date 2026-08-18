import Link from "next/link";

const navigation = [
  ["Quick start", "/getting-started"],
  ["Core loop", "/core-loop"],
  ["Progression", "/progression"],
  ["Mistakes", "/mistakes"],
  ["FAQ", "/faq"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Greedy Growers Guide home">
        <span aria-hidden="true">G</span>
        Greedy Growers Guide
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="/getting-started">Start the guide</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span aria-hidden="true">G</span>
            Greedy Growers Guide
          </Link>
          <p>An independent, source-labelled learning guide. Not affiliated with Roblox or Banjo Lady Games.</p>
        </div>
        <div className="footer-links">
          <strong>Learn</strong>
          <a href="/getting-started">Quick start</a>
          <a href="/core-loop">Core loop</a>
          <a href="/progression">Progression</a>
          <a href="/mistakes">Common mistakes</a>
        </div>
        <div className="footer-links">
          <strong>Check</strong>
          <a href="/faq">FAQ</a>
          <a href="/sources">Sources &amp; update policy</a>
          <a href="https://www.roblox.com/games/74102906764176/Greedy-Growers" rel="nofollow noopener noreferrer">Official game page ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Facts last checked August 18, 2026</span>
        <span>Place ID 74102906764176 · Universe ID 10440833423</span>
      </div>
    </footer>
  );
}
