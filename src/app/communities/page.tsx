import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "Communities — Aligned",
  description:
    "Every community in the Aligned platform has its own distinct content — grounded in that community's values, beliefs about death and dying, family decision-making, and relationship with healthcare.",
};

const FEATURED_COMMUNITY = {
  name: "Latino / Hispanic",
  body: "Content grounded in familismo (family-centeredness), personalismo (personal relationship-building), and the role of faith in end-of-life decision-making. Addresses indirect communication styles around death and the central role of family in care decisions.",
  includes: [
    "Cultural quick reference guide",
    "Staff education guide",
    "Advance Care Planning presentation — English & Spanish",
    "Know Us Before You Need Us: A Hospice & Palliative Care Introduction — English & Spanish",
    "Companion handouts — English & Spanish",
  ],
};

const COMMUNITIES = [
  {
    name: "African American",
    body: "Addresses historical mistrust of the medical system, the role of faith and church community, and cultural values around fighting and strength. Builds the trust foundation that hospice conversations require.",
  },
  {
    name: "Filipino / Tagalog",
    body: "Addresses bahala na (leaving things to God/fate), the role of Catholicism, family obligation and hiya (sense of shame/propriety), and the cultural preference for protecting patients from difficult diagnoses.",
  },
  {
    name: "Vietnamese",
    body: "Addresses Confucian values around filial piety (respect and care for elders), indirect communication about death, Buddhist and Catholic frameworks, and the importance of dying at home.",
  },
  {
    name: "Chinese",
    body: "Addresses beliefs around fate, the avoidance of death discussion, family-centered decision-making, and the significance of dying at home. Covers both Mainland Chinese and Chinese American cultural contexts.",
  },
  {
    name: "Korean",
    body: "Addresses Confucian filial piety (respect and care for elders), the role of the eldest son, nondisclosure of terminal diagnoses, and the intersection of Buddhism and Christianity in end-of-life care.",
  },
  {
    name: "Japanese",
    body: "Addresses amae (dependence and indulgence in close relationships), the concept of enryo (restraint and deference), group harmony over individual expression (wa), and the role of Buddhist and Shinto traditions in death and dying.",
  },
  {
    name: "Hmong",
    body: "Addresses animist and shamanic traditions, the role of the txiv neeb (shaman/spiritual healer), strong beliefs about the spirit and body at death, and deep family and clan involvement in end-of-life decisions.",
  },
  {
    name: "Persian / Iranian",
    body: "Developed in partnership with a Persian cultural collaborator. Addresses Zoroastrian, Muslim, and secular Iranian frameworks around death and dying, family decision-making, and trust in the healthcare system.",
  },
  {
    name: "Russian",
    body: "Addresses deep-rooted distrust of the healthcare system shaped by Soviet-era medical culture — including historic undertreatment of pain — alongside Orthodox Christian frameworks, stoicism, the protective role of family, and cultural norms around direct communication about death.",
  },
];

const COMING_SOON = [
  {
    name: "Arabic-Speaking Communities",
    body: "Covering Islamic and cultural frameworks around death and dying, family-centered decision-making, and the role of faith in end-of-life care across Arabic-speaking communities.",
  },
  {
    name: "Ukrainian",
    body: "Addressing Ukrainian Orthodox Christian traditions, cultural attitudes toward death and dying, and family dynamics in end-of-life decision-making.",
  },
  {
    name: "Additional Communities",
    body: "We're actively expanding. Tell us which communities matter most in your market and we'll prioritize accordingly.",
  },
];

export default function CommunitiesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Cultural Communities"
          title={
            <>
              Content built with communities,
              <br />
              <em className="text-teal-deep not-italic italic">not just about them.</em>
            </>
          }
          intro="Every community in the Aligned platform has its own distinct content — grounded in that community's values, beliefs about death and dying, family decision-making, and relationship with healthcare. Not translated. Rebuilt."
          washSide="left"
        />

        <div className="bg-teal-deep px-6 py-16 text-center sm:px-13">
          <p className="mx-auto max-w-3xl font-serif text-[clamp(22px,2.8vw,34px)] leading-[1.45] font-normal text-white italic">
            &ldquo;Translation is not enough. We rebuild content around each community&apos;s{" "}
            <em className="text-peach not-italic">own framework</em>{" "}
            for understanding serious illness and end-of-life care.&rdquo;
          </p>
        </div>

        <section className="bg-white px-6 py-24 sm:px-13">
          <div className="mx-auto max-w-[1080px] text-center">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
              Available Now
            </p>
            <h2 className="mx-auto mb-7 md:mb-13 max-w-2xl font-serif text-[clamp(32px,3.8vw,50px)] leading-[1.18] font-normal text-near-black">
              Ten communities.
              <br />
              <em className="text-teal-deep not-italic italic">Ready to deploy.</em>
            </h2>

            <div className="grid gap-6 text-left sm:grid-cols-2">
              <div className="rounded-sm border-2 border-teal-deep/25 bg-off-white p-9 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(75,82,54,0.12)] sm:col-span-2">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                  <div className="font-serif text-2xl leading-[1.2] font-normal text-near-black">
                    {FEATURED_COMMUNITY.name}
                  </div>
                  <span className="rounded-full bg-gold-deep/15 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-gold-deep uppercase">
                    Full Package
                  </span>
                </div>
                <p className="mb-5 text-sm leading-[1.78] text-text-muted">
                  {FEATURED_COMMUNITY.body}
                </p>
                <ul className="flex flex-col gap-2">
                  {FEATURED_COMMUNITY.includes.map((item) => (
                    <li key={item} className="relative pl-4.5 text-xs leading-[1.55] text-text-muted">
                      <span className="absolute left-0 top-0.5 text-[10px] font-bold text-teal-mid">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {COMMUNITIES.map((community) => (
                <div
                  key={community.name}
                  className="rounded-sm border border-border-soft bg-off-white p-9 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(75,82,54,0.08)]"
                >
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                    <div className="font-serif text-2xl leading-[1.2] font-normal text-near-black">
                      {community.name}
                    </div>
                    <span className="rounded-full bg-teal-deep/10 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-teal-deep uppercase">
                      Guide Available
                    </span>
                  </div>
                  <p className="mb-5 text-sm leading-[1.78] text-text-muted">{community.body}</p>
                  <ul className="flex flex-col gap-2">
                    <li className="relative pl-4.5 text-xs leading-[1.55] text-text-muted">
                      <span className="absolute left-0 top-0.5 text-[10px] font-bold text-teal-mid">
                        ✓
                      </span>
                      Cultural quick reference guide
                    </li>
                    <li className="relative pl-4.5 text-xs leading-[1.55] text-text-muted">
                      <span className="absolute left-0 top-0.5 text-[10px] font-bold text-teal-mid">
                        ✓
                      </span>
                      Staff education guide
                    </li>
                    <li className="relative pl-4.5 text-xs leading-[1.55] text-text-muted/55 italic">
                      <span className="absolute left-0 top-0.5 text-[10px] text-purple-mid">◦</span>
                      Advance Care Planning presentation — coming soon
                    </li>
                    <li className="relative pl-4.5 text-xs leading-[1.55] text-text-muted/55 italic">
                      <span className="absolute left-0 top-0.5 text-[10px] text-purple-mid">◦</span>
                      Know Us Before You Need Us presentation — coming soon
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-warm-white px-6 py-20 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
              In Development
            </p>
            <h2 className="mb-10 max-w-2xl font-serif text-[clamp(32px,3.8vw,50px)] leading-[1.18] font-normal text-near-black">
              More communities <em className="text-teal-deep not-italic italic">coming soon.</em>
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {COMING_SOON.map((item) => (
                <div
                  key={item.name}
                  className="rounded-sm border border-border-soft bg-white p-7 opacity-75"
                >
                  <span className="mb-3 inline-block rounded-full bg-purple-mid/8 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-purple-mid uppercase">
                    Coming Soon
                  </span>
                  <div className="mb-2 font-serif text-xl font-normal text-near-black">
                    {item.name}
                  </div>
                  <p className="text-[13px] leading-[1.7] text-text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaStrip
          heading="Don't see your community?"
          emphasis="Let's talk."
          body="We're actively expanding. Tell us which communities matter most in your market and we'll prioritize accordingly."
          ctaHref="/demo"
        />
      </main>
      <Footer />
    </>
  );
}
