import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "Platform — Aligned",
  description:
    "Two modules. One turnkey platform. White-labeled, ready to deploy, and built to work for your outreach teams and clinical staff from day one.",
};

const MODULE_FEATURES_1 = [
  "Culturally adapted presentations by community — rebuilt, not translated",
  "Advance directive guides designed for each cultural context",
  "Companion handouts families take home and share",
  "Content built with cultural community collaborators",
  "White-labeled with your organization's logo and branding",
  "Available in English; bilingual versions with collaborator-validated communities",
];

const MODULE_FEATURES_2 = [
  "Quick-reference cards organized by topic and culture",
  "Covers communication styles, family decision-making, spiritual care, and more",
  "Built for the full interdisciplinary team — not just nurses",
  "Designed for field use — fast to read, immediately applicable",
  "Grounded in peer-reviewed cultural competency research",
  "Accessible via app on any device",
];

const LMS_FEATURES = [
  {
    dot: "bg-teal-mid",
    title: "White-Labeled Branding",
    body: "Your logo, your colors. Community-facing materials and staff resources carry your organization's identity — not ours.",
  },
  {
    dot: "bg-amber",
    title: "Completion Tracking",
    body: "Know exactly which staff members have completed which cultural competency resources. Built-in LMS tracks progress across your entire team.",
  },
  {
    dot: "bg-purple-mid",
    title: "ROI Reporting",
    body: "Generate reports that demonstrate your cultural competency investment to accreditors, health system partners, and your own leadership.",
  },
  {
    dot: "bg-slate-blue",
    title: "App Access",
    body: "Staff access the platform on any device. Quick-reference cards are designed for mobile — easy to pull up before a visit, in the car, in the field.",
  },
  {
    dot: "bg-green-soft",
    title: "Custom Domain",
    body: "Enterprise and Standard plans can host the platform on your own domain — keeping the experience seamless for your staff and community members.",
  },
  {
    dot: "bg-peach",
    title: "Content Updates",
    body: "As we add communities and expand content, your platform updates automatically. Your subscription grows with the platform.",
  },
];

const HOW_STEPS = [
  {
    dot: "bg-amber",
    title: "Subscribe",
    body: "Immediate access to the full platform, white-labeled with your organization's branding.",
  },
  {
    dot: "bg-teal-mid",
    title: "Deploy to Staff",
    body: "Clinical teams access quick-reference cards through a simple app. No IT setup required.",
  },
  {
    dot: "bg-slate-blue",
    title: "Reach Your Community",
    body: "Outreach teams deploy presentations and advance directive guides at community events and with referral partners.",
  },
  {
    dot: "bg-purple-mid",
    title: "Measure & Grow",
    body: "Track staff completions, report on outcomes, and watch census grow as cultural trust becomes your competitive advantage.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="The Platform"
          title={
            <>
              Everything your organization needs.
              <br />
              <em className="text-teal-deep not-italic italic">Nothing you don&apos;t.</em>
            </>
          }
          intro="Two modules. One turnkey platform. White-labeled, ready to deploy, and built to work for your outreach teams and clinical staff from day one."
          washSide="right"
        />

        {/* Module 1 */}
        <section className="bg-white px-6 py-24 sm:px-13">
          <div className="mx-auto grid max-w-[1080px] items-start gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <span className="mb-5 inline-block rounded-full bg-gold/12 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-gold uppercase">
                Module 01
              </span>
              <h2 className="mb-5 font-serif text-[clamp(28px,3.2vw,42px)] leading-[1.2] font-light text-near-black">
                Community Outreach Suite
              </h2>
              <p className="mb-4.5 text-[15px] leading-[1.88] text-text-body/85">
                Your outreach team needs more than translated flyers. They need materials that
                open doors — presentations grounded in how each community understands illness,
                family, and end-of-life care.
              </p>
              <p className="mb-4.5 text-[15px] leading-[1.88] text-text-body/85">
                The Community Outreach Suite gives your team everything they need to show up at
                community events, faith organizations, and referral partner conversations with
                culturally credible, ready-to-use content.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {MODULE_FEATURES_1.map((item) => (
                  <li key={item} className="relative pl-5.5 text-sm leading-[1.6] text-text-muted">
                    <span className="absolute left-0 top-0.5 text-[11px] text-amber">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex min-h-[300px] items-center justify-center rounded-sm border border-border-soft bg-warm-white px-9 py-12">
              <p className="text-center text-[11px] font-medium tracking-[0.1em] text-text-muted/35 uppercase">
                Screenshot placeholder
                <br />
                Community Outreach Suite
              </p>
            </div>
          </div>
        </section>

        {/* Module 2 */}
        <section className="bg-warm-white px-6 py-24 sm:px-13">
          <div className="mx-auto grid max-w-[1080px] items-start gap-10 md:grid-cols-2 md:gap-20">
            <div className="order-2 flex min-h-[300px] items-center justify-center rounded-sm border border-border-soft bg-off-white px-9 py-12 md:order-1">
              <p className="text-center text-[11px] font-medium tracking-[0.1em] text-text-muted/35 uppercase">
                Screenshot placeholder
                <br />
                Cultural Competency Hub
              </p>
            </div>
            <div className="order-1 md:order-2">
              <span className="mb-5 inline-block rounded-full bg-teal-deep/10 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-teal-deep uppercase">
                Module 02
              </span>
              <h2 className="mb-5 font-serif text-[clamp(28px,3.2vw,42px)] leading-[1.2] font-light text-near-black">
                Cultural Competency Hub
              </h2>
              <p className="mb-4.5 text-[15px] leading-[1.88] text-text-body/85">
                Your clinical staff — nurses, social workers, chaplains, home health aides,
                volunteers — need cultural knowledge they can actually use in the field. Not a
                training module they complete once. A living resource they reach for before every
                visit.
              </p>
              <p className="mb-4.5 text-[15px] leading-[1.88] text-text-body/85">
                The Cultural Competency Hub delivers quick-reference cards by topic, organized by
                cultural community. The right information, in the right format, exactly when your
                team needs it. Less time preparing. More confidence in the room.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {MODULE_FEATURES_2.map((item) => (
                  <li key={item} className="relative pl-5.5 text-sm leading-[1.6] text-text-muted">
                    <span className="absolute left-0 top-0.5 text-[11px] text-amber">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Platform features */}
        <section className="bg-off-white px-6 py-24 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
              Platform Features
            </p>
            <h2 className="mb-13 max-w-2xl font-serif text-[clamp(32px,3.8vw,50px)] leading-[1.18] font-light text-near-black">
              Built for how healthcare organizations{" "}
              <em className="text-teal-deep not-italic italic">actually work.</em>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LMS_FEATURES.map((card) => (
                <div
                  key={card.title}
                  className="rounded-sm border border-border-soft bg-white px-7 py-9"
                >
                  <div className={`mb-5 h-2.5 w-2.5 rounded-full ${card.dot}`} />
                  <h3 className="mb-2.5 font-serif text-xl leading-[1.3] font-normal text-near-black">
                    {card.title}
                  </h3>
                  <p className="text-[13px] leading-[1.75] text-text-muted">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-near-black px-6 py-24 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-teal-light uppercase">
              How It Works
            </p>
            <h2 className="mb-15 max-w-2xl font-serif text-[clamp(32px,3.8vw,50px)] leading-[1.18] font-light text-white">
              Turnkey from day one.
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {HOW_STEPS.map((step) => (
                <div key={step.title}>
                  <div className={`mb-6 h-5 w-5 rounded-full opacity-75 ${step.dot}`} />
                  <h3 className="mb-2.5 font-serif text-xl leading-[1.3] font-normal text-white">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.72] text-white/42">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaStrip
          heading="See Aligned in action for"
          emphasis="your organization."
          body="We'll walk you through both modules and show you exactly how it works for your team size and market."
        />
      </main>
      <Footer />
    </>
  );
}
