import { EvidenceNote } from "./components/GuideLayout";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const firstRun = [
  ["01", "Choose a river seed", "Start with the seed-buying step the official description teaches."],
  ["02", "Plant it on your plot", "Move straight into a real growing attempt."],
  ["03", "Watch the tree grow", "Learn the pace without chasing an unconfirmed magic number."],
  ["04", "Harvest before lightning", "Complete the loop before you test bigger risks."],
];

const faq = [
  ["When is the best time to harvest?", "Roblox publishes no universal safe timer or multiplier. A beginner-friendly rule is to harvest when the result protects your next planting cycle."],
  ["What does Rebirth reset?", "Check the current in-game panel. A July community test saw cash and seeds reset, but the game has updated since then."],
  ["Are mutations real?", "Multiple community guides report weather-driven mutations affecting seeds, plants, and fruit. Exact rates do not have a public official table."],
  ["Can I play on mobile or console?", "Yes. The official listing supports PC, mobile, tablet, and console."],
];

export default function Home() {
  const learningSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Greedy Growers Beginner Guide",
    url: "https://greedy-growers-guide.wiki/",
    description: "A source-labelled beginner route through the core Greedy Growers gameplay loop.",
    educationalLevel: "Beginner",
    isAccessibleForFree: true,
  };

  return (
    <>
      <SiteHeader />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningSchema).replace(/</g, "\\u003c") }} />
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">New player field guide</p>
            <h1>Grow your first tree.<br /><em>Keep the harvest.</em></h1>
            <p className="hero-lede">A calm, source-checked route through your first Greedy Growers runs—from the river seed to a safer harvest before lightning strikes.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#quick-start">Start the 5-minute route</a>
              <a className="button button-secondary" href="/core-loop">Understand the core loop</a>
            </div>
            <p className="verified"><span aria-hidden="true">✓</span> Core loop checked against the official game description</p>
          </div>

          <aside className="route-card" aria-label="Your first safe harvest route">
            <p className="route-label">Your first safe harvest</p>
            {firstRun.map(([number, title]) => <div className="route-step" key={number}><span>{number}</span><strong>{title}</strong></div>)}
            <p className="route-note">The goal is one complete loop—not the tallest possible first tree.</p>
          </aside>
        </section>

        <section className="section quick-start" id="quick-start">
          <div className="section-heading">
            <div><p className="kicker">01 · Quick start</p><h2>Four moves to your first harvest</h2></div>
            <p>Follow the game’s official loop in order. Finish a clean cycle before experimenting with longer waits or more expensive choices.</p>
          </div>
          <div className="step-grid">
            {firstRun.map(([number, title, body]) => <article className="step-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className="section-action"><a href="/getting-started">Open the complete beginner route <span>→</span></a><p>Includes the harvest decision, recovery plan, and next-step checklist.</p></div>
        </section>

        <section className="section loop-section" id="core-loop">
          <div className="split-heading">
            <div><p className="kicker">02 · Core gameplay loop</p><h2>The loop is simple. The decision is the game.</h2></div>
            <EvidenceNote>The official listing confirms buy → plant → grow → harvest. “Decide” and “reinvest” are our strategy layer.</EvidenceNote>
          </div>
          <div className="home-loop" aria-label="Core gameplay loop">
            {[
              ["Buy", "River"], ["Plant", "Plot"], ["Grow", "Watch"], ["Decide", "Risk"], ["Harvest", "Bank"], ["Reinvest", "Repeat"],
            ].map(([title, label], index) => <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><small>{label}</small></div>)}
          </div>
          <div className="section-action"><a href="/core-loop">Learn how to judge growth versus risk <span>→</span></a><p>No invented timers, guaranteed multipliers, or hidden formulas.</p></div>
        </section>

        <section className="section progression-section" id="progression">
          <div className="section-heading">
            <div><p className="kicker">03 · Progression route</p><h2>Add one new system at a time</h2></div>
            <p>Build ordinary harvest consistency first. Then verify the live Rebirth panel before adding fertilizer, fruit, weather mutations, Tickets, or pets.</p>
          </div>
          <div className="phase-grid">
            <article><span>Stage 01</span><h3>Stable harvests</h3><p>Keep the next planting cycle alive even after one failed tree.</p><a href="/progression#stage-one">Build consistency →</a></article>
            <article><span>Stage 02</span><h3>Rebirth checks</h3><p>Read the current reset and unlock list before you confirm.</p><a href="/progression#stage-two">Prepare for Rebirth →</a></article>
            <article><span>Stage 03</span><h3>Fruit &amp; mutations</h3><p>Add update-sensitive systems only after the core loop feels recoverable.</p><a href="/progression#stage-three">Layer the systems →</a></article>
            <article><span>Stage 04</span><h3>Tickets &amp; pets</h3><p>Use the current Market and Pet Shop panels over old copied values.</p><a href="/progression#stage-four">Check the reported route →</a></article>
          </div>
        </section>

        <section className="section mistake-section" id="mistakes">
          <div className="mistake-intro"><p className="kicker">04 · Common mistakes</p><h2>Three habits to stop early</h2><p>These corrections come from the confirmed risk loop and dated community tests—not from imaginary “secret” game rules.</p><a className="text-link" href="/mistakes">See all six mistakes →</a></div>
          <div className="mistake-preview-list">
            <article><span>01</span><div><h3>Waiting for a magic multiplier</h3><p>There is no official universal safe number. Protect the next cycle instead.</p></div></article>
            <article><span>02</span><div><h3>Going all-in on one seed</h3><p>One exposed tree should not decide whether the whole session can continue.</p></div></article>
            <article><span>03</span><div><h3>Trusting old exact values</h3><p>Mutation, egg, pet, and Rebirth details can change after updates.</p></div></article>
          </div>
        </section>

        <section className="section home-faq" id="faq">
          <div className="faq-heading"><p className="kicker">05 · FAQ</p><h2>Answers with their uncertainty left intact</h2><p>Official fact, community observation, or guide advice—the label matters.</p></div>
          <div className="faq-list">
            {faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><i aria-hidden="true">+</i></summary><div><p>{answer}</p></div></details>)}
          </div>
          <div className="section-action"><a href="/faq">Read all source-labelled answers <span>→</span></a><p>Harvest timing, lightning, Rebirths, mutations, pets, devices, and server size.</p></div>
        </section>

        <section className="section closing-route">
          <p className="kicker">Your next five minutes</p>
          <h2>Start with one clean loop.</h2>
          <p>Use the river route, plant the seed, watch the risk, and turn growth into a completed harvest. Everything else can wait.</p>
          <a className="button button-primary" href="/getting-started">Begin the guided route</a>
          <a className="source-link" href="/sources">Review the evidence behind this guide</a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
