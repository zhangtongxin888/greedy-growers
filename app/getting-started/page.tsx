import { EvidenceNote, GuideLayout } from "../components/GuideLayout";
import { guideMetadata } from "../metadata";

const title = "Beginner Guide: Your First Safe Harvest";
const description = "Follow the confirmed river-to-harvest loop, protect your next run, and learn which Greedy Growers details are official versus community-tested.";

export const metadata = guideMetadata(title, description, "/getting-started");

export default function GettingStartedPage() {
  return (
    <GuideLayout
      eyebrow="Quick start"
      title="Your first safe harvest"
      lede="Complete the official four-step loop once, then repeat it without letting one unlucky tree end your whole run."
      minutes={5}
      sections={[
        { id: "route", label: "The first run" },
        { id: "decision", label: "The harvest decision" },
        { id: "repeat", label: "Make it repeatable" },
        { id: "next", label: "Where to go next" },
      ]}
      next={{ href: "/core-loop", label: "Understand the core loop" }}
    >
      <section id="route">
        <p className="section-marker">01</p>
        <h2>Run the route the game teaches</h2>
        <p className="article-lede">Do these in order. You do not need a perfect seed, secret timer, or giant multiplier to learn the game.</p>
        <ol className="action-list">
          <li><span>1</span><div><h3>Go to the river and choose a seed</h3><p>The official listing begins at the river. Community-tested guides report that a free starter seed can appear there, so learn the route before spending heavily.</p></div></li>
          <li><span>2</span><div><h3>Return to your plot and plant it</h3><p>Planting turns the purchase into a live growing attempt. For the first run, focus on the one tree you can actually watch.</p></div></li>
          <li><span>3</span><div><h3>Watch the tree grow</h3><p>The official page says lightning can strike at any moment. Roblox does not publish a safe timer, exact strike chance, or guaranteed best multiplier.</p></div></li>
          <li><span>4</span><div><h3>Harvest before lightning strikes</h3><p>Your first goal is to finish a complete cycle. Banking a smaller result teaches more than losing the run while waiting for an unconfirmed “perfect” number.</p></div></li>
        </ol>
        <EvidenceNote>The river → plot → grow → harvest sequence comes directly from the official Roblox game description.</EvidenceNote>
      </section>

      <section id="decision">
        <p className="section-marker">02</p>
        <h2>Decide with your next run in mind</h2>
        <p>There is no official one-size-fits-all harvest point. Use a simple beginner question instead:</p>
        <blockquote>“If this tree were lost now, could I still start another useful planting cycle?”</blockquote>
        <p>If the answer is no, taking the available harvest is the conservative choice. If the answer is yes, you can test a little more risk without putting the whole session at stake.</p>
        <EvidenceNote kind="advice">This reserve rule is guide strategy derived from the confirmed lightning risk. It is not an official formula.</EvidenceNote>
      </section>

      <section id="repeat">
        <p className="section-marker">03</p>
        <h2>Make the loop repeatable</h2>
        <div className="check-grid">
          <div><span>✓</span><h3>Know the river route</h3><p>You can reach a seed source without wandering.</p></div>
          <div><span>✓</span><h3>Finish one harvest</h3><p>You have seen the full cycle from purchase to cash-out.</p></div>
          <div><span>✓</span><h3>Keep a reserve</h3><p>One failed tree does not leave you unable to continue.</p></div>
          <div><span>✓</span><h3>Change one thing</h3><p>Test a slightly longer wait or different seed—not every variable at once.</p></div>
        </div>
      </section>

      <section id="next">
        <p className="section-marker">04</p>
        <h2>Choose the next lesson by your problem</h2>
        <div className="link-cards">
          <a href="/core-loop"><span>Understand the system</span><strong>See where the “decide” step fits →</strong></a>
          <a href="/mistakes"><span>Recover a stalled run</span><strong>Fix the most common early mistakes →</strong></a>
          <a href="/faq"><span>Need one answer</span><strong>Jump to the source-labelled FAQ →</strong></a>
        </div>
      </section>
    </GuideLayout>
  );
}
