import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMark } from "@/components/logo-mark";
import { PrimaryButton, TextLink } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Aligned — The Cultural Bridge for Hospice Care",
};

const STATS = [
  {
    number: "72%",
    color: "text-gold",
    label: "of hospice patients are Caucasian, in communities far more diverse",
  },
  {
    number: "Census",
    color: "text-teal-light",
    label: "growth starts with cultural trust — not more marketing spend",
  },
  {
    number: "10",
    color: "text-purple-light",
    label: "Cultural communities — with more in development",
  },
  {
    number: "40%",
    color: "text-slate-light",
    label: "of Americans lack a completed advance directive",
  },
];

const SOLUTION_CARDS = [
  {
    marker: "bg-amber",
    title: "Community Outreach Suite",
    body: "The materials your outreach team needs to walk into any community and start the conversation. Advance care planning and hospice introduction presentations across 10 cultural contexts — rebuilt from the ground up, not translated. Ready for faith partners, community events, and referral conversations that open doors and grow census.",
    tag: "Short videos for your website — coming in Phase 2",
  },
  {
    marker: "bg-teal-mid",
    title: "Cultural Competency Hub",
    body: "Ten cultural quick reference guides by topic — accessible on any device through the Aligned app, no binders or paper required. Your nurses, social workers, chaplains, home health aides, bereavement team, and volunteers get the right cultural context before every visit. Less time preparing. More confidence in the room.",
  },
  {
    marker: "bg-purple-mid",
    title: "Completion Tracking & ROI",
    body: "Built-in LMS with staff completion tracking and progress reporting. Document your cultural competency investment for accreditors, health system partners, and your own leadership — built to meet hospice and Medicare regulatory standards.",
  },
];

const HOW_STEPS = [
  {
    dot: "bg-amber",
    title: "Subscribe",
    body: "Immediate access to the full platform, white-labeled with your organization's logo and branding.",
  },
  {
    dot: "bg-teal-mid",
    title: "Deploy to Staff",
    body: "Clinical teams access culture-specific quick reference guides through the Aligned app — on any device, anywhere, no paper needed.",
  },
  {
    dot: "bg-slate-blue",
    title: "Reach Your Community",
    body: "Outreach teams use ready-made advance care planning presentations and hospice introductions at community events and with referral partners.",
  },
  {
    dot: "bg-purple-mid",
    title: "Measure & Grow",
    body: "Track completions, report on outcomes, and watch census grow as cultural trust becomes your competitive advantage.",
  },
];

const WHO_CARDS = [
  {
    badge: "Marketing & Outreach",
    badgeClass: "bg-teal-deep/10 text-teal-deep",
    title: "Grow census from communities you haven't reached yet.",
    body: "Your outreach team gets ready-to-deploy materials for community events, faith partners, and referral conversations — all grounded in each community's own perspective on end-of-life care, not just translated.",
    items: [
      "Advance Care Planning presentations across 10 cultural contexts",
      "“Know Us Before You Need Us: A Hospice & Palliative Care Introduction” across 10 cultural contexts",
      "Materials built around cultural values, beliefs, and family structures",
      "White-labeled with your organization's identity",
    ],
  },
  {
    badge: "Clinical Staff",
    badgeClass: "bg-purple-deep/10 text-purple-deep",
    title: "Walk into every visit with cultural confidence — in minutes, not hours.",
    body: "Quick reference guides by topic give your full interdisciplinary team the right cultural context at the right moment — on their phone, before the visit, through the Aligned app. Less time preparing. More confidence in the room.",
    items: [
      "10 cultural quick reference guides via the Aligned app — for nurses, social workers, chaplains, aides, bereavement team, and volunteers",
      "Covers communication styles, family dynamics, and spiritual care",
      "Built for nurses, social workers, chaplains, aides, bereavement team, and volunteers",
      "Completion tracking for compliance and regulatory reporting",
    ],
  },
  {
    badge: "Population Health & Palliative Care",
    badgeClass: "bg-gold-deep/10 text-gold-deep",
    title: "Earlier conversations. Better outcomes. Across every community you serve.",
    body: "Your population health and palliative care teams need to reach diverse patients earlier — before crisis forces the conversation. Aligned delivers advance care planning education across 10 cultural communities, in the cultural framework that actually opens the door.",
    items: [
      "Advance Care Planning presentations across 10 cultural contexts",
      "Supports goals-of-care conversations before acute episodes",
      "Reduces avoidable hospitalizations through earlier engagement",
      "Aligned with value-based care and population health goals",
    ],
  },
];

const COMMUNITIES = [
  "Latino / Hispanic",
  "African American",
  "Filipino / Tagalog",
  "Vietnamese",
  "Chinese",
  "Korean",
  "Japanese",
  "Hmong",
  "Persian / Iranian",
  "Russian",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-24 text-center sm:px-12">
          <div
            className="pointer-events-none absolute top-[5%] right-[8%] h-[420px] w-[420px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,184,112,0.22) 0%, transparent 68%)" }}
          />
          <div
            className="pointer-events-none absolute bottom-[10%] left-[5%] h-[360px] w-[360px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(30,92,74,0.10) 0%, transparent 68%)" }}
          />
          <div
            className="pointer-events-none absolute top-[20%] left-[15%] h-[300px] w-[300px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(122,104,168,0.09) 0%, transparent 68%)" }}
          />
          <div className="relative z-10 mb-8">
            <LogoMark size={160} />
          </div>
          <p className="relative z-10 mb-5 text-[11px] font-semibold tracking-[0.24em] text-slate-blue uppercase">
            Culturally Adaptive Serious Illness &amp; End-of-Life Education
          </p>
          <h1 className="relative z-10 mb-7 max-w-3xl font-serif text-[clamp(42px,6vw,78px)] leading-[1.1] font-light tracking-tight text-near-black">
            The cultural bridge between your hospice and the{" "}
            <em className="text-teal-deep font-normal italic">communities you&rsquo;re missing.</em>
          </h1>
          <p className="relative z-10 mb-7 font-serif text-[clamp(26px,3.2vw,40px)] leading-[1.2] font-medium text-gold-deep">
            The fastest path to census growth in underserved markets.
          </p>
          <p className="relative z-10 mb-13 max-w-lg text-base leading-[1.8] font-light text-text-muted">
            Aligned gives hospice organizations a turnkey system to reach more families, grow census, and prepare
            every member of your clinical team to serve with cultural confidence — built to meet hospice and
            Medicare regulatory standards.
          </p>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-5">
            <PrimaryButton href="/demo">Request a Demo</PrimaryButton>
            <TextLink href="/platform">See the platform</TextLink>
          </div>
        </section>

        {/* STAT STRIP */}
        <div className="flex flex-wrap justify-center gap-x-0 gap-y-8 bg-near-black px-6 py-13 sm:px-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-white/8 px-7 text-center last:border-r-0 sm:border-r sm:px-14">
              <div className={`mb-2 font-serif text-[52px] leading-none font-light ${stat.color}`}>{stat.number}</div>
              <div className="mx-auto max-w-[160px] text-[11px] leading-[1.5] tracking-[0.1em] text-white/38 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* PROBLEM */}
        <section className="bg-white px-6 py-26 sm:px-12">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-slate-blue uppercase">The Problem</p>
            <h2 className="mb-6 max-w-2xl font-serif text-[clamp(34px,4vw,54px)] leading-[1.15] font-light text-near-black">
              Underserved communities aren&rsquo;t choosing other hospices.{" "}
              <em className="text-teal-deep font-normal italic">They&rsquo;re choosing nothing.</em>
            </h2>
            <div className="mt-13 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-18">
              <div>
                <p className="mb-5.5 text-[15px] leading-[1.88] text-text-body/88">
                  Hospice organizations know the gap exists. Latino families, African American communities, Filipino,
                  Vietnamese, Chinese, Korean, Japanese, Hmong, Russian, and Persian households — all significantly
                  less likely to access hospice and palliative care. The reason isn&rsquo;t awareness alone.
                  It&rsquo;s trust. And trust is built through cultural understanding.
                </p>
                <p className="mb-5.5 text-[15px] leading-[1.88] text-text-body/88">
                  Aligned content isn&rsquo;t translated — it&rsquo;s rebuilt. Each community&rsquo;s materials are
                  grounded in their specific values, family structures, spiritual frameworks, and historical
                  relationships with the healthcare system. That&rsquo;s what earns trust in the room.
                </p>
                <div className="mt-7 rounded-r-sm border-l-3 border-gold bg-warm-white px-7 py-6.5">
                  <div className="mb-2 text-[10px] font-bold tracking-[0.2em] text-gold-deep uppercase">
                    Census Impact
                  </div>
                  <p className="text-[15px] leading-[1.7] text-near-black/82">
                    Every family you fail to reach is a census gap. Closing cultural barriers is the highest-leverage
                    path to sustainable census growth — and the communities are already in your market.
                  </p>
                </div>
                <div className="mt-7 rounded-r-sm border-l-3 border-slate-blue bg-warm-white px-6.5 py-5.5">
                  <div className="mb-2 text-[10px] font-bold tracking-[0.2em] text-slate-blue uppercase">
                    Regulatory Alignment
                  </div>
                  <p className="text-[14px] leading-[1.7] text-near-black/78">
                    All Aligned content is built to meet hospice and Medicare regulatory standards — so your
                    organization stays compliant while expanding its cultural reach.
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-5.5 text-[15px] leading-[1.88] text-text-body/88">
                  Generic translated materials don&rsquo;t close that gap. Neither does a diversity training your
                  staff completed once. The communities you most need to reach require a deeper approach — one built
                  around their values, their family structures, and their relationship with death and dying.
                </p>
                <p className="mb-5.5 text-[15px] leading-[1.88] text-text-body/88">
                  Census stalls. Referral relationships don&rsquo;t deepen. Clinical staff feel underprepared for the
                  conversations that matter most. It&rsquo;s not a training problem — it&rsquo;s a system problem.
                  And Aligned is the system.
                </p>
                <div className="mt-2 border-l-2 border-teal-light pl-6.5 font-serif text-[25px] leading-[1.48] font-light text-purple-deep italic">
                  &ldquo;We knew our community needed us. We didn&rsquo;t know how to reach them.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="solution" className="bg-off-white px-6 py-26 sm:px-12">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-slate-blue uppercase">The Platform</p>
            <h2 className="mb-6 max-w-2xl font-serif text-[clamp(34px,4vw,54px)] leading-[1.15] font-light text-near-black">
              A complete cultural competency system. <em className="text-teal-deep font-normal italic">Not just content.</em>
            </h2>
            <p className="mb-13 max-w-xl text-base leading-[1.8] text-text-muted">
              Content built with communities, not just about them. Two modules. One turnkey platform. Everything your
              organization needs to reach underserved communities and serve them well — white-labeled and ready to
              deploy.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {SOLUTION_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col rounded-sm border border-purple-deep/8 bg-white p-9 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(30,92,74,0.08)]"
                >
                  <div className={`mb-6 h-[3px] w-8 rounded-sm ${card.marker}`} />
                  <h3 className="mb-3 font-serif text-[22px] leading-[1.28] font-normal text-near-black">{card.title}</h3>
                  <p className="text-sm leading-[1.8] text-text-muted">{card.body}</p>
                  {card.tag && (
                    <span className="mt-3.5 w-full border-t border-border-soft pt-3 text-[10px] font-semibold tracking-[0.12em] text-purple-mid uppercase">
                      ▸ {card.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-warm-white px-6 py-26 sm:px-12">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-slate-blue uppercase">How It Works</p>
            <h2 className="mb-6 font-serif text-[clamp(34px,4vw,54px)] leading-[1.15] font-light text-near-black">
              Turnkey from day one.
            </h2>
            <div className="relative mt-15 grid grid-cols-2 gap-10 md:grid-cols-4">
              <div className="absolute top-2.5 right-2 left-2 hidden h-px bg-gradient-to-r from-amber via-teal-light to-purple-light opacity-40 md:block" />
              {HOW_STEPS.map((step) => (
                <div key={step.title} className="relative pt-1">
                  <div className={`relative z-10 mb-6 h-5 w-5 rounded-full opacity-75 ${step.dot}`} />
                  <h3 className="mb-2.5 font-serif text-[21px] font-normal text-near-black">{step.title}</h3>
                  <p className="text-[13px] leading-[1.75] text-text-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO */}
        <section className="bg-white px-6 py-26 sm:px-12">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-slate-blue uppercase">Who It&rsquo;s For</p>
            <h2 className="mb-6 font-serif text-[clamp(34px,4vw,54px)] leading-[1.15] font-light text-near-black">
              Built for three teams. <em className="text-teal-deep font-normal italic">Serving the same mission.</em>
            </h2>
            <div className="mt-13 grid grid-cols-1 gap-7 md:grid-cols-3">
              {WHO_CARDS.map((card) => (
                <div key={card.badge} className="rounded-sm border border-border-soft bg-off-white p-10">
                  <span className={`mb-5 inline-block rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] uppercase ${card.badgeClass}`}>
                    {card.badge}
                  </span>
                  <h3 className="mb-3.5 font-serif text-[27px] leading-[1.28] font-light text-near-black">{card.title}</h3>
                  <p className="mb-6.5 text-sm leading-[1.8] text-text-muted">{card.body}</p>
                  <ul className="flex flex-col gap-2.5">
                    {card.items.map((item) => (
                      <li key={item} className="relative pl-5 text-[13px] leading-[1.6] text-text-muted">
                        <span className="absolute top-0.5 left-0 text-[11px] text-amber">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITIES */}
        <section className="bg-off-white px-6 py-20 text-center sm:px-12">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-slate-blue uppercase">Cultural Communities</p>
            <h2 className="mx-auto mb-4 font-serif text-[clamp(34px,4vw,54px)] leading-[1.15] font-light text-near-black">
              10 communities. More in development.
            </h2>
            <p className="mb-10 text-sm tracking-[0.02em] text-text-muted italic">
              Content built for the communities already in your market — with additional cultures added regularly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {COMMUNITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-teal-deep/20 bg-white px-6 py-2.5 text-sm font-medium tracking-[0.04em] text-teal-deep transition-colors hover:bg-amber hover:text-near-black"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs tracking-[0.06em] text-text-muted/60 uppercase">
              Arabic, Ukrainian, and additional communities in development
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="demo" className="border-t border-purple-deep/10 bg-warm-white px-6 py-28 text-center sm:px-12">
          <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-slate-blue uppercase">Get Started</p>
          <h2 className="mx-auto mt-4.5 mb-4 max-w-xl font-serif text-[clamp(38px,5vw,60px)] leading-[1.12] font-light text-near-black">
            Ready to reach the communities <em className="text-teal-deep font-normal italic">waiting for you?</em>
          </h2>
          <p className="mb-5 font-serif text-[clamp(22px,2.4vw,32px)] font-medium tracking-[0.01em] text-gold-deep">
            Census growth starts with cultural trust.
          </p>
          <p className="mx-auto mb-11 max-w-sm text-[15px] leading-[1.78] text-text-muted">
            A real conversation about where your census gaps are — and how Aligned closes them.
          </p>
          <form className="mx-auto flex max-w-md flex-wrap justify-center gap-2.5">
            <input
              type="email"
              required
              placeholder="Work email address"
              className="min-w-[220px] flex-1 rounded-sm border border-purple-deep/20 bg-white px-4.5 py-3.5 text-sm text-near-black outline-none transition-colors focus:border-teal-mid"
            />
            <button
              type="submit"
              className="rounded-sm bg-amber px-6.5 py-3.5 text-xs font-semibold tracking-[0.12em] text-near-black uppercase transition-colors hover:bg-peach-warm"
            >
              Request Demo
            </button>
          </form>
          <p className="mt-3.5 text-[11px] tracking-[0.05em] text-text-muted/65">
            We&rsquo;ll be in touch within one business day.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
