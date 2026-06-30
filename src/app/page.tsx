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
    body: "Advance care planning and hospice introduction presentations across 10 cultural contexts — ready for faith partners and referral conversations.",
  },
  {
    marker: "bg-teal-light",
    title: "Cultural Competency Hub",
    body: "Quick reference guides by topic, accessible through the Aligned app, so every clinician walks in with cultural context.",
  },
  {
    marker: "bg-purple-light",
    title: "Completion Tracking & ROI",
    body: "Built-in LMS with staff completion tracking, built to meet hospice and Medicare regulatory standards.",
  },
];

const WHO_CARDS = [
  {
    badge: "Marketing & Outreach",
    title: "Grow census from communities you haven't reached yet.",
  },
  {
    badge: "Clinical Staff",
    title: "Walk into every visit with cultural confidence.",
  },
  {
    badge: "Population Health & Palliative Care",
    title: "Earlier conversations. Better outcomes.",
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
      <main className="flex-1 bg-teal-deep">
        {/* HERO */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-24 text-center sm:px-12">
          <div
            className="pointer-events-none absolute top-[5%] right-[8%] h-[420px] w-[420px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(217,201,163,0.16) 0%, transparent 68%)" }}
          />
          <div
            className="pointer-events-none absolute bottom-[10%] left-[5%] h-[360px] w-[360px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(143,160,95,0.18) 0%, transparent 68%)" }}
          />
          <div className="relative z-10 mb-8">
            <LogoMark size={160} variant="light" />
          </div>
          <p className="relative z-10 mb-5 text-[11px] font-semibold tracking-[0.24em] text-teal-light uppercase">
            Culturally Adaptive Serious Illness &amp; End-of-Life Education
          </p>
          <h1 className="relative z-10 mb-7 max-w-3xl font-serif text-[clamp(42px,6vw,78px)] leading-[1.1] font-light tracking-tight text-white">
            The cultural bridge between your hospice and the{" "}
            <em className="text-peach font-normal not-italic italic">communities you&rsquo;re missing.</em>
          </h1>
          <p className="relative z-10 mb-7 font-serif text-[clamp(26px,3.2vw,40px)] leading-[1.2] font-medium text-amber">
            The fastest path to census growth in underserved markets.
          </p>
          <p className="relative z-10 mb-13 max-w-lg text-base leading-[1.8] font-light text-white/62">
            Aligned gives hospice organizations a turnkey system to reach more families, grow census, and prepare
            every member of your clinical team to serve with cultural confidence.
          </p>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-5">
            <PrimaryButton href="/demo">Request a Demo</PrimaryButton>
            <TextLink href="/platform" variant="light">
              See the platform
            </TextLink>
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
        <section className="px-6 py-22 sm:px-12">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-teal-light uppercase">The Problem</p>
            <h2 className="mb-8 max-w-2xl font-serif text-[clamp(34px,4vw,54px)] leading-[1.15] font-light text-white">
              Underserved communities aren&rsquo;t choosing other hospices.{" "}
              <em className="text-peach font-normal not-italic italic">They&rsquo;re choosing nothing.</em>
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-18">
              <p className="text-[15px] leading-[1.88] text-white/65">
                The reason isn&rsquo;t awareness alone — it&rsquo;s trust. Aligned content isn&rsquo;t translated,
                it&rsquo;s rebuilt around each community&rsquo;s own values, family structures, and relationship
                with the healthcare system. That&rsquo;s what earns trust in the room.
              </p>
              <div className="rounded-r-sm border-l-3 border-amber bg-white/5 px-7 py-6.5">
                <div className="mb-2 text-[10px] font-bold tracking-[0.2em] text-amber uppercase">Census Impact</div>
                <p className="text-[15px] leading-[1.7] text-white/75">
                  Every family you fail to reach is a census gap. Closing cultural barriers is the highest-leverage
                  path to sustainable census growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="solution" className="border-t border-white/10 px-6 py-22 sm:px-12">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-teal-light uppercase">The Platform</p>
            <h2 className="mb-10 max-w-2xl font-serif text-[clamp(34px,4vw,54px)] leading-[1.15] font-light text-white">
              A complete cultural competency system. <em className="text-peach font-normal not-italic italic">Not just content.</em>
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {SOLUTION_CARDS.map((card) => (
                <div key={card.title} className="flex flex-col rounded-sm border border-white/10 bg-white/5 p-8">
                  <div className={`mb-5 h-[3px] w-8 rounded-sm ${card.marker}`} />
                  <h3 className="mb-2.5 font-serif text-[20px] leading-[1.28] font-normal text-white">{card.title}</h3>
                  <p className="text-sm leading-[1.7] text-white/60">{card.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <TextLink href="/platform" variant="light">
                Explore the full platform →
              </TextLink>
            </div>
          </div>
        </section>

        {/* WHO */}
        <section className="border-t border-white/10 px-6 py-22 sm:px-12">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-teal-light uppercase">Who It&rsquo;s For</p>
            <h2 className="mb-10 font-serif text-[clamp(34px,4vw,54px)] leading-[1.15] font-light text-white">
              Built for three teams. <em className="text-peach font-normal not-italic italic">Serving the same mission.</em>
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {WHO_CARDS.map((card) => (
                <div key={card.badge} className="rounded-sm border border-white/10 bg-white/5 p-7">
                  <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-teal-light uppercase">
                    {card.badge}
                  </span>
                  <h3 className="font-serif text-[19px] leading-[1.3] font-light text-white">{card.title}</h3>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <TextLink href="/organizations" variant="light">
                See how Aligned serves each team →
              </TextLink>
            </div>
          </div>
        </section>

        {/* COMMUNITIES */}
        <section className="border-t border-white/10 px-6 py-20 text-center sm:px-12">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-teal-light uppercase">Cultural Communities</p>
            <h2 className="mx-auto mb-9 font-serif text-[clamp(34px,4vw,54px)] leading-[1.15] font-light text-white">
              10 communities. More in development.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {COMMUNITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium tracking-[0.04em] text-white/80 transition-colors hover:bg-amber hover:text-near-black"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <TextLink href="/communities" variant="light">
                See community-specific details →
              </TextLink>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="demo" className="border-t border-white/10 bg-near-black px-6 py-26 text-center sm:px-12">
          <p className="mb-4.5 text-[11px] font-semibold tracking-[0.2em] text-teal-light uppercase">Get Started</p>
          <h2 className="mx-auto mt-4.5 mb-4 max-w-xl font-serif text-[clamp(38px,5vw,60px)] leading-[1.12] font-light text-white">
            Ready to reach the communities <em className="text-peach font-normal not-italic italic">waiting for you?</em>
          </h2>
          <p className="mb-11 max-w-sm mx-auto text-[15px] leading-[1.78] text-white/55">
            A real conversation about where your census gaps are — and how Aligned closes them.
          </p>
          <form className="mx-auto flex max-w-md flex-wrap justify-center gap-2.5">
            <input
              type="email"
              required
              placeholder="Work email address"
              className="min-w-[220px] flex-1 rounded-sm border border-white/20 bg-white/5 px-4.5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-amber"
            />
            <button
              type="submit"
              className="rounded-sm bg-amber px-6.5 py-3.5 text-xs font-semibold tracking-[0.12em] text-near-black uppercase transition-colors hover:bg-peach-warm"
            >
              Request Demo
            </button>
          </form>
          <p className="mt-3.5 text-[11px] tracking-[0.05em] text-white/40">
            We&rsquo;ll be in touch within one business day.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
