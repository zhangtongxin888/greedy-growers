import { EvidenceNote, GuideLayout } from "../components/GuideLayout";
import { guideMetadata } from "../metadata";

const title = "6 Beginner Mistakes to Avoid";
const description = "Fix risky harvest habits, all-in seed spending, outdated numbers, Rebirth surprises, and other Greedy Growers beginner mistakes.";

export const metadata = guideMetadata(title, description, "/mistakes");

const mistakes = [
  {
    title: "Waiting for a magic harvest multiplier",
    why: "Roblox publishes no universal safe multiplier, timer, or lightning probability.",
    fix: "Base the decision on whether the current harvest protects your next cycle.",
    href: "/getting-started#decision",
    link: "Use the reserve rule",
  },
  {
    title: "Putting the whole bankroll into one seed",
    why: "A live tree remains exposed to the game’s confirmed lightning risk.",
    fix: "Keep enough resources—or access to a free starter route—to recover from a loss.",
    href: "/core-loop#risk",
    link: "Review the risk table",
  },
  {
    title: "Treating the displayed multiplier as a complete formula",
    why: "Community testing reports that tree condition and mutations can affect what happens, while the official game publishes no formula.",
    fix: "Log what you actually receive and change only one variable in the next test.",
    href: "/core-loop#mutations",
    link: "Read the mutation note",
  },
  {
    title: "Hoarding without reading the Rebirth reset",
    why: "A July test saw cash and seeds cleared, but the game has updated since then.",
    fix: "Read the current confirmation panel immediately before every Rebirth.",
    href: "/progression#stage-two",
    link: "Use the Rebirth checklist",
  },
  {
    title: "Ignoring fertilizer after it becomes available",
    why: "Community tests describe fertilizer as part of establishing reliable fruit production.",
    fix: "Test the current fertilizer effect on one manageable tree before scaling the plan.",
    href: "/progression#stage-three",
    link: "Add the fruit loop",
  },
  {
    title: "Copying old seed, mutation, egg, or pet numbers",
    why: "The official API showed a game update on August 17, 2026, after several popular guides were published.",
    fix: "Prefer current in-game panels and dated sources; treat unexplained exact values as provisional.",
    href: "/sources",
    link: "See our source policy",
  },
];

export default function MistakesPage() {
  return (
    <GuideLayout
      eyebrow="Common mistakes"
      title="Six habits that make the early game harder"
      lede="Most beginner problems come from treating uncertain numbers as promises or risking the next run for one bigger tree."
      minutes={6}
      sections={[
        { id: "mistakes", label: "Six mistakes" },
        { id: "recovery", label: "A simple recovery loop" },
        { id: "unknowns", label: "What remains unknown" },
      ]}
      previous={{ href: "/progression", label: "Progression route" }}
      next={{ href: "/faq", label: "Check the FAQ" }}
    >
      <section id="mistakes">
        <p className="section-marker">01</p>
        <h2>Error → consequence → correction</h2>
        <div className="mistake-list">
          {mistakes.map((mistake, index) => (
            <article key={mistake.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{mistake.title}</h3><p><strong>Why it hurts:</strong> {mistake.why}</p><p><strong>Correction:</strong> {mistake.fix}</p><a href={mistake.href}>{mistake.link} →</a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="recovery">
        <p className="section-marker">02</p>
        <h2>When a run stalls, shrink the experiment</h2>
        <ol className="recovery-steps">
          <li><span>1</span>Return to the cheapest recoverable river route available in your current game.</li>
          <li><span>2</span>Finish one conservative harvest before increasing the risk again.</li>
          <li><span>3</span>Keep the next cycle funded, then change one decision at a time.</li>
        </ol>
        <EvidenceNote kind="advice">This recovery loop is deliberately number-free because costs and yields can change.</EvidenceNote>
      </section>

      <section id="unknowns">
        <p className="section-marker">03</p>
        <h2>Unknown is better than invented</h2>
        <p>The public official materials do not give exact lightning odds, one best harvest multiplier, universal growth times, a current Rebirth reset table, or a complete sale-value formula.</p>
        <p>If a future creator-owned source publishes those details, the <a href="/sources">source page</a> will record the date and update this guide. Until then, the site labels community findings and avoids false precision.</p>
        <EvidenceNote>The official page supports the basic loop and lightning warning, not the missing numeric details.</EvidenceNote>
      </section>
    </GuideLayout>
  );
}
