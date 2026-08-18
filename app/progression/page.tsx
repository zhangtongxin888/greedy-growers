import { EvidenceNote, GuideLayout } from "../components/GuideLayout";
import { guideMetadata } from "../metadata";

const title = "Progression: From First Loop to Pets";
const description = "A cautious Greedy Growers route covering reliable harvests, Rebirth checks, fertilizer, fruit, mutations, Market requests, Tickets, and pets.";

export const metadata = guideMetadata(title, description, "/progression");

export default function ProgressionPage() {
  return (
    <GuideLayout
      eyebrow="Progression"
      title="Build consistency before complexity"
      lede="Progression is easier to reason about when you add one system at a time and verify every reset or cost in the current game client."
      minutes={7}
      sections={[
        { id: "stage-one", label: "Stable harvests" },
        { id: "stage-two", label: "Rebirth checks" },
        { id: "stage-three", label: "Fruit and mutations" },
        { id: "stage-four", label: "Tickets and pets" },
      ]}
      previous={{ href: "/core-loop", label: "Core loop" }}
      next={{ href: "/mistakes", label: "Avoid progression mistakes" }}
    >
      <section id="stage-one">
        <p className="section-marker">Stage 01</p>
        <h2>Make ordinary harvests reliable</h2>
        <p>Repeat the basic loop until a single lightning loss no longer ends the run. The milestone is not a particular balance; it is being able to buy or obtain another useful seed after a mistake.</p>
        <ul className="priority-list">
          <li><strong>Learn the river route.</strong><span>Reduce time spent searching for the next seed.</span></li>
          <li><strong>Protect a next-run reserve.</strong><span>Avoid putting the entire session into one exposed tree.</span></li>
          <li><strong>Change one variable at a time.</strong><span>Longer wait, different seed, or new system—not all three together.</span></li>
        </ul>
        <EvidenceNote kind="advice">These milestones are conservative guide advice. The game does not publish a fixed “early game complete” threshold.</EvidenceNote>
      </section>

      <section id="stage-two">
        <p className="section-marker">Stage 02</p>
        <h2>Read the live Rebirth panel before confirming</h2>
        <p>A July 27 community test observed that an early Rebirth cleared cash and seeds and unlocked free Basic Fertilizer. Because the game was updated on August 17, do not assume the current reset list is identical.</p>
        <div className="warning-card"><strong>Before you Rebirth</strong><p>Open the in-game confirmation, note what will reset and what will unlock, then spend or preserve resources according to that current wording.</p></div>
        <EvidenceNote kind="community">The cash-and-seeds reset and fertilizer unlock are community-tested, not documented on the official public listing.</EvidenceNote>
      </section>

      <section id="stage-three">
        <p className="section-marker">Stage 03</p>
        <h2>Add fruit and mutation opportunities</h2>
        <p>Community tests describe fertilizer as important for establishing fruit-producing trees. Separate community guides agree that weather can produce mutations affecting seeds, plants, or fruit.</p>
        <div className="two-column-notes">
          <article><span>Fruit loop</span><h3>Let passive output support active runs</h3><p>Collect fruit while continuing the familiar buy, plant, grow, and harvest loop. Confirm fertilizer behavior in the current client first.</p></article>
          <article><span>Mutation layer</span><h3>React to weather without chasing old tables</h3><p>Use current conditions as a bonus opportunity. Treat copied chances and multipliers as stale unless they are dated and rechecked.</p></article>
        </div>
      </section>

      <section id="stage-four">
        <p className="section-marker">Stage 04</p>
        <h2>Use current Market requests to work toward pets</h2>
        <p>An August 13 Update 2.0 guide reports that Farmer’s Market fruit requests award Tickets, and Tickets buy eggs from the Pet Shop. It reports three base equipped slots, with additional slots purchasable using Robux.</p>
        <p>That is a useful route to look for—not a guarantee that today’s egg prices, slot rules, or passives match the article. Read the current shop and request panels before committing fruit.</p>
        <EvidenceNote kind="community">Pets, Tickets, eggs, and Farmer’s Market routing are supported by a single dated editorial source and should be rechecked after updates.</EvidenceNote>
      </section>
    </GuideLayout>
  );
}
