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
    label: "of hospice patients are white — in communities far more diverse",
  },
  {
    number: "10",
    label: "cultural communities with ready-to-deploy content",
  },
  {
    number: "40%",
    label: "of Americans lack a completed advance directive",
  },
];

const PLATFORM_MODULES = [
  {
    marker: "bg-amber",
    title: "Community Outreach Suite",
    body: "Advance care planning and hospice introduction presentations rebuilt for 10 cultural communities — delivered in English and primary language. Ready for faith partners, community events, and referral conversations.",
    detail: "Available in three versions: full presentation, condensed leave-behind, and train-the-trainer guide.",
  },
  {
    marker: "bg-teal-mid",
    title: "Cultural Competency Hub",
    body: "Quick reference guides by community, accessible through the Aligned app, so every clinician walks into every visit with the cultural context they need. Built for the full interdisciplinary team — nurses, social workers, chaplains, aides, and bereavement staff.",
    detail: "Includes staff education guides and built-in LMS with completion tracking for Medicare compliance.",
  },
];

const WHO_CARDS = [
  {
    badge: "Marketing & Outreach",
    title: "Grow census from communities you haven't reached yet.",
    body: "Turn cultural outreach into a repeatable system — not a one-off effort.",
  },
  {
    badge: "Clinical Staff",
    title: "Walk into every visit with cultural confidence.",
    body: "Quick reference guides give your team what they need before the conversation starts.",
  },
  {
    badge: "Population Health & Palliative Care",
    title: "Earlier conversations. Better outcomes.",
    body: "Reach families sooner, when hospice can make the biggest difference.",
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

        {/* HERO — split layout */}
        <section className="relative min-h-screen bg-off-white px-6 pt-32 pb-20 sm:px-13">
          <div className="mx-auto grid max-w-[1080px] items-center gap-16 md:grid-cols-2 md:pt-20">
            <div>
              <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-teal-mid uppercase">
                For Hospice &amp; Palliative Care Organizations
              </p>
              <h1 className="mb-7 font-serif text-[clamp(38px,5vw,64px)] leading-[1.1] font-normal tracking-tight text-near-black">
                Reach the families in your market{" "}
                <em className="text-amber not-italic italic">who aren&rsquo;t choosing hospice.</em>
              </h1>
              <p className="mb-10 max-w-lg text-[16px] leading-[1.8] text-text-muted">
                Aligned gives hospice organizations culturally rebuilt outreach and clinical training —
                so your team can open doors other providers can&rsquo;t.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <PrimaryButton href="/demo">Request a Demo</PrimaryButton>
                <TextLink href="/platform">See the platform</TextLink>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <LogoMark size={320} variant="color" />
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="bg-near-black px-6 py-20 text-center sm:px-13">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-[clamp(32px,4.5vw,58px)] leading-[1.2] font-normal text-white">
              Underserved communities aren&rsquo;t choosing other hospices.{" "}
              <em className="not-italic text-terracotta">They&rsquo;re choosing nothing.</em>
            </h2>
            <p className="mt-7 text-[16px] leading-[1.8] text-white/60">
              The gap isn&rsquo;t awareness — it&rsquo;s trust, language, and the cultural frameworks
              through which families understand illness and end-of-life care. Closing that gap is the
              highest-leverage path to sustainable census growth.
            </p>
          </div>
        </section>

        {/* MARKETING ROI */}
        <section className="bg-off-white px-6 py-22 sm:px-13">
          <div className="mx-auto grid max-w-[1080px] items-start gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-teal-mid uppercase">
                The Census Opportunity
              </p>
              <h2 className="font-serif text-[clamp(30px,3.5vw,44px)] leading-[1.2] font-normal text-near-black">
                Every hospice organization has a marketing budget.{" "}
                <em className="text-amber not-italic italic">Most of it reaches the wrong communities.</em>
              </h2>
            </div>
            <div>
              <p className="mb-5.5 text-[15px] leading-[1.9] text-text-muted">
                Most marketing spend goes toward channels that reach communities already inclined to
                seek hospice care. The underserved communities in your market — the ones driving your
                census gap — aren&rsquo;t reached by those channels.
              </p>
              <p className="mb-5.5 text-[15px] leading-[1.9] text-text-muted">
                Aligned gives your outreach team the tools to open conversations that weren&rsquo;t
                possible before. Community events, faith organizations, referral partners — with
                culturally credible materials that build trust rather than barriers.
              </p>
              <div className="border-l-2 border-amber pl-6 font-serif text-xl leading-[1.5] font-normal text-near-black italic">
                &ldquo;The result isn&rsquo;t just better care. It&rsquo;s sustainable census growth
                from markets your competitors haven&rsquo;t figured out how to reach.&rdquo;
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="flex flex-wrap justify-center gap-y-8 bg-warm-white px-6 py-14 sm:px-13">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-teal-deep/10 px-10 text-center last:border-r-0 sm:border-r sm:px-16">
              <div className="mb-2 font-serif text-[52px] leading-none font-normal text-amber">
                {stat.number}
              </div>
              <div className="mx-auto max-w-[160px] text-[11px] leading-[1.5] tracking-[0.1em] text-text-muted uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* PLATFORM */}
        <section className="bg-off-white px-6 py-24 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-teal-mid uppercase">
              The Platform
            </p>
            <h2 className="mb-13 max-w-2xl font-serif text-[clamp(32px,4vw,50px)] leading-[1.15] font-normal text-near-black">
              Two modules. One complete system.{" "}
              <em className="text-amber not-italic italic">Turnkey.</em>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {PLATFORM_MODULES.map((mod) => (
                <div
                  key={mod.title}
                  className="rounded-sm border border-border-soft bg-warm-white px-8 py-9"
                >
                  <div className={`mb-5 h-0.75 w-7 rounded-sm ${mod.marker}`} />
                  <h3 className="mb-3 font-serif text-2xl leading-[1.25] font-normal text-near-black">
                    {mod.title}
                  </h3>
                  <p className="mb-4 text-[14px] leading-[1.78] text-text-muted">{mod.body}</p>
                  <p className="text-[12px] leading-[1.6] text-teal-mid italic">{mod.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <TextLink href="/platform">Explore the full platform &rarr;</TextLink>
            </div>
          </div>
        </section>

        {/* WHO */}
        <section className="bg-warm-white px-6 py-22 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-teal-mid uppercase">
              Who It&rsquo;s For
            </p>
            <h2 className="mb-12 font-serif text-[clamp(32px,4vw,50px)] leading-[1.15] font-normal text-near-black">
              Built for three teams.{" "}
              <em className="text-amber not-italic italic">Serving one mission.</em>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {WHO_CARDS.map((card) => (
                <div key={card.badge} className="rounded-sm border border-border-soft bg-off-white p-7">
                  <span className="mb-4 inline-block rounded-full bg-teal-mid/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-teal-mid uppercase">
                    {card.badge}
                  </span>
                  <h3 className="mb-2 font-serif text-[19px] leading-[1.3] font-normal text-near-black">
                    {card.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-text-muted">{card.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <TextLink href="/organizations">See how Aligned serves each team &rarr;</TextLink>
            </div>
          </div>
        </section>

        {/* COMMUNITIES */}
        <section className="bg-off-white px-6 py-20 text-center sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-teal-mid uppercase">
              Cultural Communities
            </p>
            <h2 className="mx-auto mb-3 font-serif text-[clamp(32px,4vw,50px)] leading-[1.15] font-normal text-near-black">
              10 communities. Ready to deploy.
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-[15px] leading-[1.8] text-text-muted">
              Each with content rebuilt from the ground up — not translated — around that community&rsquo;s
              values, family structures, and relationship with healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {COMMUNITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border-soft bg-warm-white px-6 py-2.5 text-sm font-medium tracking-[0.04em] text-text-muted transition-colors hover:border-amber hover:text-near-black"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <TextLink href="/communities">See community-specific details &rarr;</TextLink>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-near-black px-6 py-24 text-center sm:px-13">
          <div className="mx-auto max-w-[560px]">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-teal-light uppercase">
              Get Started
            </p>
            <h2 className="mb-5 font-serif text-[clamp(34px,4.5vw,54px)] leading-[1.15] font-normal text-white">
              Ready to reach the communities{" "}
              <em className="text-terracotta not-italic italic">waiting for you?</em>
            </h2>
            <p className="mb-10 text-[15px] leading-[1.78] text-white/55">
              A real conversation about where your census gaps are — and how Aligned closes them.
              No sales deck. Just answers.
            </p>
            <form className="flex flex-wrap justify-center gap-2.5">
              <input
                type="email"
                required
                placeholder="Work email address"
                className="min-w-[220px] flex-1 rounded-sm border border-white/15 bg-white/5 px-4.5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-amber"
              />
              <button
                type="submit"
                className="rounded-sm bg-amber px-6.5 py-3.5 text-xs font-semibold tracking-[0.12em] text-near-black uppercase transition-colors hover:bg-gold-deep hover:text-white"
              >
                Request Demo
              </button>
            </form>
            <p className="mt-4 text-[11px] tracking-[0.05em] text-white/35">
              We&rsquo;ll be in touch within one business day.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
