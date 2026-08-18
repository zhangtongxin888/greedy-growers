import { GuideLayout } from "../components/GuideLayout";
import { guideMetadata } from "../metadata";

const title = "Sources & Update Policy";
const description = "See which Greedy Growers facts come from official Roblox materials, which come from dated community tests, and which numbers this guide omits.";

export const metadata = guideMetadata(title, description, "/sources");

const sources = [
  {
    tier: "Official",
    title: "Greedy Growers Roblox listing",
    date: "Checked Aug 18, 2026",
    supports: "Game name, creator-facing listing, river → plot → grow → harvest loop, lightning warning, and device support.",
    href: "https://www.roblox.com/games/74102906764176/Greedy-Growers",
  },
  {
    tier: "Official API",
    title: "Roblox Games API · Universe 10440833423",
    date: "Checked Aug 18, 2026",
    supports: "Place/Universe mapping, Banjo Lady Games creator, Simulation/Tycoon genres, four-player server maximum, and Aug 17 update timestamp.",
    href: "https://games.roblox.com/v1/games?universeIds=10440833423",
  },
  {
    tier: "Community test",
    title: "GameStarry harvest, Rebirth, fertilizer, and fruit test",
    date: "Published Jul 27, 2026",
    supports: "Screenshot-backed free starter route, live harvesting, displayed value/multiplier, Dead Tree example, Rebirth observation, and fruit loop.",
    href: "https://www.gamestarry.com/greedy-growers-money-guide-harvest-tracker/",
  },
  {
    tier: "Editorial guide",
    title: "Pro Game Guides seed and mutation reporting",
    date: "Updated Jul 28, 2026",
    supports: "River seed variety and mechanism-level mutation reporting. Exact tables are intentionally not reproduced here.",
    href: "https://progameguides.com/roblox/all-greedy-growers-seeds-costs-rarities-spawn-chances/",
  },
  {
    tier: "Editorial guide",
    title: "MrGuider seed and mutation reporting",
    date: "Published Jul 28, 2026",
    supports: "Independent agreement that weather events can affect wild/planted seeds, plants, and fruit. Precise rates remain provisional.",
    href: "https://www.mrguider.org/guides/greedy-growers-seeds-list-cost-and-spawn-rate/",
  },
  {
    tier: "Single editorial source",
    title: "Pro Game Guides pet reporting",
    date: "Published Aug 13, 2026",
    supports: "Update 2.0 route from Farmer’s Market fruit requests to Tickets, eggs, and pets. Current values require in-game recheck.",
    href: "https://progameguides.com/roblox/all-greedy-growers-pets/",
  },
];

export default function SourcesPage() {
  return (
    <GuideLayout
      eyebrow="Sources"
      title="What we know—and how we know it"
      lede="Every meaningful gameplay claim is either tied to an official source, marked as dated community evidence, or presented clearly as guide advice."
      minutes={5}
      sections={[
        { id: "labels", label: "Evidence labels" },
        { id: "source-list", label: "Source register" },
        { id: "unknown", label: "Intentionally unknown" },
        { id: "updates", label: "Update policy" },
      ]}
      previous={{ href: "/faq", label: "FAQ" }}
      next={{ href: "/getting-started", label: "Return to the beginner route" }}
    >
      <section id="labels">
        <p className="section-marker">01</p>
        <h2>Three labels keep claims in proportion</h2>
        <div className="label-grid">
          <div><span>Officially confirmed</span><p>Visible on the Roblox listing or returned by a Roblox API during our dated check.</p></div>
          <div><span>Community-tested</span><p>Supported by screenshots, observations, or multiple editorial guides, but not documented publicly by the creator.</p></div>
          <div><span>Guide advice</span><p>A cautious strategy derived from known mechanics, never presented as a hidden official rule.</p></div>
        </div>
      </section>

      <section id="source-list">
        <p className="section-marker">02</p>
        <h2>Source register</h2>
        <div className="source-list">
          {sources.map((source) => (
            <article key={source.href}>
              <div><span>{source.tier}</span><small>{source.date}</small></div>
              <h3>{source.title}</h3>
              <p>{source.supports}</p>
              <a href={source.href} rel="nofollow noopener noreferrer">Open source ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section id="unknown">
        <p className="section-marker">03</p>
        <h2>Exact values this guide does not invent</h2>
        <ul className="unknown-list">
          <li>Lightning probability or a guaranteed strike schedule</li>
          <li>One universal “best” harvest multiplier</li>
          <li>Official growth times for every seed</li>
          <li>A creator-published sale-value formula</li>
          <li>A current official Rebirth reset table</li>
          <li>Guaranteed current mutation, egg, or pet values</li>
        </ul>
      </section>

      <section id="updates">
        <p className="section-marker">04</p>
        <h2>How the guide handles updates</h2>
        <p>The official API showed that Greedy Growers updated on August 17, 2026. When a guide predates the latest game update, its system details stay labelled with the publication date.</p>
        <p>We only promote an exact value to “official” when it appears in a creator-owned public source or a current official API. Otherwise, the live in-game panel wins.</p>
      </section>
    </GuideLayout>
  );
}
