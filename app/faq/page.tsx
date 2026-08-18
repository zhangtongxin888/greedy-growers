import { EvidenceNote, GuideLayout } from "../components/GuideLayout";
import { guideMetadata } from "../metadata";

const title = "FAQ: Harvests, Rebirths & Pets";
const description = "Source-labelled answers to Greedy Growers questions about first steps, lightning, harvest timing, mutations, Rebirths, pets, devices, and server size.";

export const metadata = guideMetadata(title, description, "/faq");

const faq = [
  {
    question: "What do I do first in Greedy Growers?",
    answer: <>Buy a seed from the river, plant it in your plot, watch it grow, and harvest before lightning strikes. That four-step loop comes from the official Roblox description. Follow the <a href="/getting-started">five-minute beginner route</a> for a conservative first cycle.</>,
    label: "Official",
  },
  {
    question: "When is the best time to harvest?",
    answer: <>Roblox does not publish a universal safe timer or multiplier. Harvest when the current return protects your next planting cycle, then take more risk only when you can afford a complete loss. The <a href="/core-loop#risk">risk table</a> explains that decision.</>,
    label: "Official gap + guide advice",
  },
  {
    question: "Does lightning always delete a tree?",
    answer: <>The official page only warns players to harvest before lightning strikes; it does not publish the exact strike result or odds. Community tests describe tree condition and value changing, so this guide does not claim lightning always has one outcome.</>,
    label: "Official gap",
  },
  {
    question: "Are mutations real?",
    answer: <>Multiple community guides report that weather events can mutate seeds, plants, and fruit, and that mutations can raise sale value. Exact chances and multipliers are not confirmed by an official public table. See the <a href="/core-loop#mutations">mutation evidence note</a>.</>,
    label: "Community-reported",
  },
  {
    question: "What does Rebirth reset?",
    answer: <>Check the current in-game confirmation panel. A July 27 community test observed cash and seeds being cleared and Basic Fertilizer unlocking, but the game has updated since that test. Use the <a href="/progression#stage-two">Rebirth check</a> before confirming.</>,
    label: "Community-tested · dated",
  },
  {
    question: "How do I get pets?",
    answer: <>An August 13 Update 2.0 guide reports buying eggs with Tickets earned from Farmer’s Market fruit requests. Treat prices, limits, and pet passives as update-sensitive; verify them in the current shop and request panels.</>,
    label: "Single editorial source · dated",
  },
  {
    question: "Can I play on mobile or console?",
    answer: <>Yes. The official listing names PC, mobile, tablet, and console support.</>,
    label: "Official",
  },
  {
    question: "How many players can share a server?",
    answer: <>The official Roblox Games API reported a maximum of four players during the August 18, 2026 check. This is a live game setting and can change.</>,
    label: "Official API · dated",
  },
];

export default function FaqPage() {
  return (
    <GuideLayout
      eyebrow="FAQ"
      title="Short answers, honest evidence labels"
      lede="Start with what the official listing confirms. Where the official material stops, the answer says exactly what community evidence supports."
      minutes={7}
      sections={[
        { id: "answers", label: "Eight answers" },
        { id: "still-stuck", label: "If you are still stuck" },
      ]}
      previous={{ href: "/mistakes", label: "Common mistakes" }}
      next={{ href: "/sources", label: "Review every source" }}
    >
      <section id="answers">
        <p className="section-marker">01</p>
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faq.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{item.question}</span><i aria-hidden="true">+</i></summary>
              <div><small>{item.label}</small><p>{item.answer}</p></div>
            </details>
          ))}
        </div>
      </section>

      <section id="still-stuck">
        <p className="section-marker">02</p>
        <h2>Match the question to the right chapter</h2>
        <div className="link-cards">
          <a href="/getting-started"><span>“What should I do now?”</span><strong>Restart the beginner route →</strong></a>
          <a href="/core-loop"><span>“Why did my plan fail?”</span><strong>Review growth versus risk →</strong></a>
          <a href="/progression"><span>“What system comes next?”</span><strong>Follow the progression route →</strong></a>
        </div>
        <EvidenceNote kind="advice">If an answer depends on a live price, timer, multiplier, or reset panel, trust the current game client over an undated guide.</EvidenceNote>
      </section>
    </GuideLayout>
  );
}
