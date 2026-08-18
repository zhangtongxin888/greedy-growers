import { EvidenceNote, GuideLayout } from "../components/GuideLayout";
import { guideMetadata } from "../metadata";

const title = "Core Loop: When to Harvest";
const description = "Learn the confirmed Greedy Growers loop, why the harvest decision matters, and how to add fruit and mutations without relying on invented numbers.";

export const metadata = guideMetadata(title, description, "/core-loop");

const loop = [
  ["Buy", "Choose a seed at the river."],
  ["Plant", "Put the seed in your plot."],
  ["Grow", "Watch the tree and the risk window."],
  ["Decide", "Compare a banked result with a possible loss."],
  ["Harvest", "Cash out before lightning ends the attempt."],
  ["Reinvest", "Keep the next planting cycle alive."],
];

export default function CoreLoopPage() {
  return (
    <GuideLayout
      eyebrow="Core loop"
      title="The loop is simple. The decision is the game."
      lede="Buying and planting start the attempt. Your real choice is how much risk to carry before turning growth into a completed harvest."
      minutes={6}
      sections={[
        { id: "loop", label: "The six-part loop" },
        { id: "risk", label: "Growth versus risk" },
        { id: "fruit", label: "The fruit side-loop" },
        { id: "mutations", label: "Weather and mutations" },
      ]}
      previous={{ href: "/getting-started", label: "Quick start" }}
      next={{ href: "/progression", label: "Build your progression route" }}
    >
      <section id="loop">
        <p className="section-marker">01</p>
        <h2>Buy → Plant → Grow → Decide → Harvest → Reinvest</h2>
        <div className="loop-list">
          {loop.map(([name, text], index) => <div key={name}><span>{index + 1}</span><h3>{name}</h3><p>{text}</p></div>)}
        </div>
        <EvidenceNote>The first four game actions—buy, plant, grow, harvest—are official. “Decide” and “reinvest” describe the strategy between those confirmed actions.</EvidenceNote>
      </section>

      <section id="risk">
        <p className="section-marker">02</p>
        <h2>More waiting is not automatically better</h2>
        <p>Waiting gives the tree more time to grow, but the official listing warns that lightning can strike at any moment. That makes every live tree an open risk.</p>
        <div className="decision-table" role="table" aria-label="Harvest decision guide">
          <div role="row"><strong role="cell">Your reserve is low</strong><span role="cell">Favor a completed harvest and protect the next cycle.</span></div>
          <div role="row"><strong role="cell">A loss would be recoverable</strong><span role="cell">Test a little more waiting if you want to learn the risk.</span></div>
          <div role="row"><strong role="cell">A guide claims one magic multiplier</strong><span role="cell">Treat it cautiously; Roblox publishes no universal safe number.</span></div>
        </div>
      </section>

      <section id="fruit">
        <p className="section-marker">03</p>
        <h2>Fruit can become a second loop</h2>
        <p>A July 27 screenshot-based community test describes fertilizer as a way to establish fruit-producing trees. In that model, collecting fruit can run beside the active seed → tree → harvest loop.</p>
        <p>Before planning around it, read the current in-game fertilizer and Rebirth panels. The official public listing does not document their exact current rules.</p>
        <EvidenceNote kind="community">The fertilizer and fruit loop comes from GameStarry’s July 27, 2026 in-game test. The game updated after that test.</EvidenceNote>
      </section>

      <section id="mutations">
        <p className="section-marker">04</p>
        <h2>Treat weather as an opportunity, not a promise</h2>
        <p>Multiple community guides report that weather events can mutate seeds, planted trees, and fruit, and that mutations can raise sale value. Exact rates and multipliers are update-sensitive and do not have a public official table.</p>
        <p>Use the live game state to decide whether a mutation opportunity is worth changing your plan. Do not build a whole route around an old percentage copied without a date.</p>
        <EvidenceNote kind="community">Mechanism-level reporting is supported by Pro Game Guides and MrGuider. Precise mutation values are intentionally omitted.</EvidenceNote>
      </section>
    </GuideLayout>
  );
}
