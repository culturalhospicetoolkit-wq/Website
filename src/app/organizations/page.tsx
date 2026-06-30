import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaStrip } from "@/components/cta-strip";
import { PrimaryButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "For Organizations — Aligned",
  description:
    "Aligned is built for hospice organizations, palliative care programs, and healthcare systems that are ready to reach the communities currently going without care.",
};

const PRICING_INCLUDES = [
  "Full access to both platform modules",
  "All 10 cultural communities",
  "White-labeled with your branding",
  "Staff completion tracking & reporting",
  "Built to meet hospice and Medicare regulatory standards",
  "Content updates as new communities are added",
];

const WHO_CARDS = [
  {
    badge: "bg-gold/12 text-gold-deep",
    label: "Marketing & Outreach",
    title: "Grow census from communities you haven't reached yet.",
    body: "Your outreach team gets ready-to-deploy materials for community events, faith partners, and referral conversations — grounded in each community's own perspective on end-of-life care, not just translated. Built to open doors and grow census.",
  },
  {
    badge: "bg-teal-deep/10 text-teal-deep",
    label: "Clinical Staff",
    title: "Walk into every visit with cultural confidence — in minutes, not hours.",
    body: "Quick reference guides by topic give your full interdisciplinary team — nurses, social workers, chaplains, aides, bereavement team, and volunteers — the right cultural context at the right moment. Less time preparing. More confidence in the room.",
  },
  {
    badge: "bg-purple-deep/10 text-purple-deep",
    label: "Population Health & Palliative Care",
    title: "Earlier conversations. Better outcomes. Across every community you serve.",
    body: "Your population health and palliative care teams need to reach diverse patients earlier — before crisis forces the conversation. Aligned delivers advance care planning education across 10 cultural communities, in the cultural framework that actually opens the door. Supports value-based care goals and reduces avoidable hospitalizations through earlier engagement.",
  },
];

const ROI_STATS = [
  {
    label: "Census Growth",
    body: "Underserved communities represent the largest untapped census opportunity in most markets — already present, already in need, currently unreached.",
  },
  {
    label: "Staff Efficiency",
    body: "Quick-reference cards reduce the time staff spend preparing for cross-cultural visits — and increase confidence and effectiveness in the room.",
  },
  {
    label: "Accreditation & Compliance",
    body: "Built-in completion tracking and reporting supports cultural competency documentation requirements for accreditation and health system contracts.",
  },
  {
    label: "Advance Care Planning",
    body: "ACP education across 10 cultural communities gives health systems a scalable way to engage diverse patient populations earlier — reducing avoidable hospitalizations and supporting value-based care goals.",
  },
];

export default function OrganizationsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="For Organizations"
          title={
            <>
              The census growth tool your organization
              <br />
              <em className="text-teal-deep not-italic italic">has been missing.</em>
            </>
          }
          intro="Aligned is built for hospice organizations, palliative care programs, and healthcare systems that are ready to reach the communities currently going without care."
          washSide="right"
        />

        {/* Pricing */}
        <section className="bg-white px-6 py-24 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
              Plans &amp; Pricing
            </p>
            <h2 className="mb-10 max-w-2xl font-serif text-[clamp(32px,3.8vw,50px)] leading-[1.18] font-normal text-near-black">
              Pricing scaled to your organization.
              <br />
              <em className="text-teal-deep not-italic italic">Let&apos;s find the right fit.</em>
            </h2>
            <p className="mb-10 max-w-xl text-[15px] leading-[1.8] text-text-muted">
              Aligned offers tiered pricing based on organization size and type — from independent
              hospice programs to large health systems. Every plan includes both modules,
              white-labeling, completion tracking, and regulatory-aligned content across all 10
              cultural communities.
            </p>

            <div className="rounded-sm border border-border-soft bg-warm-white p-8 sm:p-13">
              <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <div className="mb-5 text-[10px] font-bold tracking-[0.2em] text-slate-blue uppercase">
                    What&apos;s included in every plan
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {PRICING_INCLUDES.map((item) => (
                      <li
                        key={item}
                        className="relative pl-5 text-sm leading-[1.6] text-text-muted"
                      >
                        <span className="absolute left-0 top-px text-[11px] font-bold text-teal-mid">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-border-soft md:border-l md:pl-12">
                  <div className="mb-5 text-[10px] font-bold tracking-[0.2em] text-slate-blue uppercase">
                    Ready to talk numbers?
                  </div>
                  <p className="mb-6 text-[15px] leading-[1.78] text-text-muted">
                    We&apos;ll discuss your organization&apos;s size, market, and goals — and find
                    a plan that fits. Founding organization pricing is available for a limited
                    number of early adopters.
                  </p>
                  <PrimaryButton href="/demo">Request Pricing</PrimaryButton>
                  <p className="mt-3.5 text-xs tracking-[0.04em] text-gold-deep">
                    ▸ Founding organization pricing available for early adopters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-warm-white px-6 py-24 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
              Who It&apos;s For
            </p>
            <h2 className="mb-13 max-w-2xl font-serif text-[clamp(32px,3.8vw,50px)] leading-[1.18] font-normal text-near-black">
              Built for three teams.
              <br />
              <em className="text-teal-deep not-italic italic">Serving the same mission.</em>
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {WHO_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="rounded-sm border border-border-soft bg-white px-7 py-9"
                >
                  <span
                    className={`mb-5 inline-block rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] uppercase ${card.badge}`}
                  >
                    {card.label}
                  </span>
                  <h3 className="mb-3 font-serif text-[22px] leading-[1.3] font-normal text-near-black">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-[1.78] text-text-muted">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="bg-white px-6 py-24 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
              The ROI Case
            </p>
            <h2 className="mb-13 max-w-2xl font-serif text-[clamp(32px,3.8vw,50px)] leading-[1.18] font-normal text-near-black">
              Cultural trust is your{" "}
              <em className="text-teal-deep not-italic italic">
                highest-leverage census investment.
              </em>
            </h2>
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
              <div>
                <p className="mb-5 text-[15px] leading-[1.88] text-text-body/85">
                  Every hospice organization has a marketing budget. Most of it goes toward
                  channels that reach the same communities already inclined to seek hospice care.
                  The underserved communities in your market — the ones driving the census gap —
                  aren&apos;t reached by those channels.
                </p>
                <p className="mb-5 text-[15px] leading-[1.88] text-text-body/85">
                  Aligned gives your outreach team the tools to open conversations that
                  weren&apos;t possible before. Community events, faith organizations, referral
                  partners — with culturally credible materials that build trust rather than
                  barriers.
                </p>
                <p className="text-[15px] leading-[1.88] text-text-body/85">
                  The result isn&apos;t just better care. It&apos;s sustainable census growth from
                  markets your competitors haven&apos;t figured out how to reach.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {ROI_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-r-sm border-l-3 border-amber bg-warm-white px-7 py-6"
                  >
                    <div className="mb-1.5 text-[10px] font-bold tracking-[0.16em] text-gold-deep uppercase">
                      {stat.label}
                    </div>
                    <p className="text-sm leading-[1.65] text-near-black/82">{stat.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaStrip
          heading="Ready to see it for"
          emphasis="your organization?"
          body="A real conversation about your market, your census gaps, and how Aligned closes them."
        />
      </main>
      <Footer />
    </>
  );
}
