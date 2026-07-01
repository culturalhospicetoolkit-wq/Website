import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMark } from "@/components/logo-mark";
import { PrimaryButton, TextLink } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Aligned — The Cultural Bridge for Hospice Care",
};

const NAV_CARDS = [
  {
    marker: "bg-amber",
    eyebrow: "The Platform",
    title: "Two modules. One turnkey system.",
    body: "Community Outreach Suite and Cultural Competency Hub — white-labeled, ready to deploy, and built to meet regulatory standards from day one.",
    href: "/platform",
    cta: "See the platform",
  },
  {
    marker: "bg-teal-mid",
    eyebrow: "Cultural Communities",
    title: "Ten communities. Ready to deploy.",
    body: "Content rebuilt from the ground up — not translated — for Latino, African American, Filipino, Vietnamese, Chinese, Korean, Japanese, Hmong, Persian, and Russian communities.",
    href: "/communities",
    cta: "See all communities",
  },
  {
    marker: "bg-purple-mid",
    eyebrow: "For Organizations",
    title: "Built for three teams. One mission.",
    body: "Marketing & outreach, clinical staff, and population health — each with tools built for their role. All working toward the same goal: reaching the families going without care.",
    href: "/organizations",
    cta: "See how it works",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* HERO */}
        <section className="relative bg-off-white px-6 pt-24 pb-14 sm:px-13 md:min-h-screen md:pt-36 md:pb-20">
          <div className="mx-auto grid max-w-[1080px] items-center gap-8 md:grid-cols-2 md:gap-16 md:pt-16">
            <div>
              <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-teal-mid uppercase">
                For Hospice &amp; Palliative Care Organizations
              </p>
              <h1 className="mb-6 font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] font-normal tracking-tight text-near-black">
                Reach the families in your market{" "}
                <em className="text-amber not-italic italic">who aren&rsquo;t choosing hospice.</em>
              </h1>
              <p className="mb-10 max-w-lg text-[16px] leading-[1.8] text-text-muted">
                Aligned gives hospice organizations culturally rebuilt outreach and clinical
                training — so your team can open doors other providers can&rsquo;t.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <PrimaryButton href="/demo">Request a Demo</PrimaryButton>
                <TextLink href="/platform">See the platform</TextLink>
              </div>
            </div>

            {/* Logo — large on mobile above text (reordered via flex), right column on desktop */}
            <div className="order-first flex justify-center md:order-last md:justify-end">
              <LogoMark
                size={320}
                variant="color"
                className="w-48 h-auto sm:w-64 md:w-auto"
              />
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="bg-near-black px-6 py-12 text-center sm:px-13 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-[clamp(28px,4.5vw,56px)] leading-[1.2] font-normal text-white">
              Underserved communities aren&rsquo;t choosing other hospices.{" "}
              <em className="not-italic text-terracotta">They&rsquo;re choosing nothing.</em>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.8] text-white/58">
              The gap isn&rsquo;t awareness — it&rsquo;s trust, language, and the cultural
              frameworks through which families understand illness and end-of-life care.
              Closing that gap is the highest-leverage path to sustainable census growth.
            </p>
          </div>
        </section>

        {/* NAV CARDS */}
        <section className="bg-warm-white px-6 py-12 sm:px-13 md:py-20">
          <div className="mx-auto max-w-[1080px]">
            <div className="grid gap-6 md:grid-cols-3">
              {NAV_CARDS.map((card) => (
                <div
                  key={card.href}
                  className="flex flex-col rounded-sm border border-border-soft bg-off-white p-7"
                >
                  <div className={`mb-5 h-0.75 w-7 rounded-sm ${card.marker}`} />
                  <p className="mb-1 text-[10px] font-semibold tracking-[0.18em] text-text-muted uppercase">
                    {card.eyebrow}
                  </p>
                  <h3 className="mb-3 font-serif text-xl leading-[1.3] font-normal text-near-black">
                    {card.title}
                  </h3>
                  <p className="mb-6 flex-1 text-[13px] leading-[1.75] text-text-muted">
                    {card.body}
                  </p>
                  <TextLink href={card.href}>{card.cta} &rarr;</TextLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-near-black px-6 py-14 text-center sm:px-13 md:py-24">
          <div className="mx-auto max-w-[520px]">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-teal-light uppercase">
              Get Started
            </p>
            <h2 className="mb-5 font-serif text-[clamp(30px,4vw,50px)] leading-[1.15] font-normal text-white">
              Ready to reach the communities{" "}
              <em className="text-terracotta not-italic italic">waiting for you?</em>
            </h2>
            <p className="mb-9 text-[15px] leading-[1.78] text-white/55">
              A real conversation about where your census gaps are — and how Aligned closes them.
            </p>
            <form className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center">
              <input
                type="email"
                required
                placeholder="Work email address"
                className="w-full rounded-sm border border-white/15 bg-white/5 px-4.5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-amber sm:min-w-[200px] sm:flex-1"
              />
              <button
                type="submit"
                className="w-full rounded-sm bg-amber px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-near-black uppercase transition-colors hover:bg-gold-deep hover:text-white sm:w-auto"
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
