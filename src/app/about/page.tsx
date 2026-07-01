import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "About — Aligned",
  description:
    "Aligned was founded by clinicians and educators who have spent careers at the intersection of healthcare and cultural diversity.",
};

const PHILOSOPHY_CARDS = [
  {
    marker: "bg-amber",
    title: "Rebuilt, Not Translated",
    body: "Every piece of community-facing content is rebuilt from the ground up around cultural values, family structures, and beliefs about death and dying — not adapted from existing Anglo-centric materials.",
  },
  {
    marker: "bg-teal-mid",
    title: "Built With Communities",
    body: "Community-facing presentations are developed in partnership with cultural collaborators who bring lived experience to the content. Authentic connection can't be researched — it has to be co-created.",
  },
  {
    marker: "bg-purple-mid",
    title: "Grounded in Clinical Reality",
    body: "Our clinical resources are built by and for the full interdisciplinary team — nurses, social workers, chaplains, aides, and bereavement team — and designed for the real conditions of field-based care.",
  },
];

const FOUNDERS = [
  {
    name: "Kirstin Oehler, RN",
    title: "Founder & Chief Education Officer",
    bios: [
      "Kirstin is a registered nurse and clinical educator whose career has been shaped equally by healthcare and culture. With a degree in cultural anthropology and deep professional roots in hospice education, she brings a rare combination of clinical rigor and cultural fluency to everything Aligned builds.",
      "Born in Germany and raised in the United States, Kirstin has spent a lifetime at the intersection of many cultures and communities. It's a life lived at the intersection of many cultures — and the foundation of everything Aligned is built on.",
    ],
  },
  {
    name: "Jesse Oehler",
    title: "Founder & CEO",
    bios: [
      "Jesse brings a global perspective shaped by a childhood spent moving across the United States and Germany as an army family. A graduate in global studies and an avid reader with wide-ranging intellectual curiosity, he has spent his career in technical recruiting — developing a deep understanding of organizations, talent, and what it takes to build something that lasts.",
      "Jesse leads Aligned's business strategy, partnerships, and growth — bringing the same cross-cultural instincts that shaped his upbringing to the work of getting Aligned into the organizations that need it most.",
    ],
  },
];

const TEAM = [
  { name: "Catherine Sarto", title: "Project Manager" },
  { name: "Michael Hinkel", title: "Arts Director" },
  { name: "Steven Hinkel", title: "Business Consultant" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Our Story"
          title={
            <>
              Built from the inside.
              <br />
              <em className="text-teal-deep not-italic italic">Not the outside looking in.</em>
            </>
          }
          intro="Aligned was founded by clinicians and educators who have spent careers at the intersection of healthcare and cultural diversity — and who saw, firsthand, what happens when that intersection is ignored."
          washSide="right"
        />

        {/* Origin story */}
        <section className="bg-white px-6 py-24 sm:px-13">
          <div className="mx-auto grid max-w-[1080px] items-start gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
                Why We Built This
              </p>
              <h2 className="font-serif text-[clamp(32px,3.8vw,48px)] leading-[1.18] font-normal text-near-black">
                Hospice is one of the greatest gifts we can offer.
                <br />
                <em className="text-teal-deep not-italic italic">Not everyone is receiving it.</em>
              </h2>
            </div>
            <div>
              <p className="mb-5.5 text-[15px] leading-[1.9] text-text-body/88">
                Hospice and end-of-life care is one of the most profound gifts the healthcare
                system offers — dignity, comfort, presence, and support at the hardest moment of a
                family&apos;s life. It&apos;s care that most people, once they understand it,
                would never want to go without.
              </p>
              <p className="mb-5.5 text-[15px] leading-[1.9] text-text-body/88">
                But only certain communities are receiving it. Hospice utilization remains
                disproportionately concentrated among white patients, while Latino, African
                American, Asian, and other culturally diverse communities are significantly
                underserved — not because they don&apos;t need hospice care, but because the doors
                to that conversation have never been opened for them.
              </p>
              <div className="my-8 border-l-2 border-teal-light pl-6.5 font-serif text-2xl leading-[1.5] font-light text-purple-deep italic">
                &ldquo;We know how to talk about death and dying with Anglo patients. We use clear
                language, we avoid euphemisms, we&apos;re direct. But that approach doesn&apos;t
                translate — and in many cultures, it closes the door before the conversation even
                starts.&rdquo;
              </div>
              <p className="mb-5.5 text-[15px] leading-[1.9] text-text-body/88">
                The gap isn&apos;t just about awareness. It&apos;s about trust, language, and the
                cultural frameworks through which families understand illness, death, and what it
                means to receive care. Hospice organizations have always known this — they just
                haven&apos;t had the tools to do anything about it.
              </p>
              <p className="text-[15px] leading-[1.9] text-text-body/88">
                Aligned was built to change that. Not with translated materials, but with content
                rebuilt from the ground up around each community&apos;s values, beliefs, and ways
                of making decisions together.
              </p>
            </div>
          </div>
        </section>

        {/* Mission strip */}
        <div className="bg-teal-deep px-6 py-10 md:py-18 text-center sm:px-13">
          <div className="mx-auto max-w-[760px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-teal-light uppercase">
              Our Mission
            </p>
            <p className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.35] font-normal text-white italic">
              &ldquo;Content built with communities, not just about them —{" "}
              <em className="text-peach not-italic">
                so every family has access to the care they deserve.
              </em>
              &rdquo;
            </p>
          </div>
        </div>

        {/* Content philosophy */}
        <section className="bg-warm-white px-6 py-24 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
              Our Approach
            </p>
            <h2 className="mb-7 md:mb-13 max-w-xl font-serif text-[clamp(32px,3.8vw,48px)] leading-[1.18] font-normal text-near-black">
              How we build content that{" "}
              <em className="text-teal-deep not-italic italic">actually works.</em>
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {PHILOSOPHY_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-sm border border-border-soft bg-white px-7 py-9"
                >
                  <div className={`mb-5 h-0.75 w-7 rounded-sm ${card.marker}`} />
                  <h3 className="mb-3 font-serif text-xl leading-[1.3] font-normal text-near-black">
                    {card.title}
                  </h3>
                  <p className="text-[13px] leading-[1.78] text-text-muted">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-white px-6 py-24 sm:px-13">
          <div className="mx-auto max-w-[1080px]">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
              The Team
            </p>
            <h2 className="mb-8 md:mb-15 max-w-xl font-serif text-[clamp(32px,3.8vw,48px)] leading-[1.18] font-normal text-near-black">
              The people behind <em className="text-teal-deep not-italic italic">Aligned.</em>
            </h2>

            <div className="mb-7 grid gap-7 sm:grid-cols-2">
              {FOUNDERS.map((person) => (
                <div
                  key={person.name}
                  className="overflow-hidden rounded-sm border border-border-soft bg-off-white"
                >
                  <div className="flex h-65 items-center justify-center border-b border-border-soft bg-warm-white">
                    <span className="text-[11px] font-medium tracking-[0.1em] text-text-muted/40 uppercase">
                      Photo — {person.name}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="mb-1 font-serif text-2xl leading-[1.2] font-normal text-near-black">
                      {person.name}
                    </div>
                    <div className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-teal-mid uppercase">
                      {person.title}
                    </div>
                    {person.bios.map((bio, i) => (
                      <p
                        key={i}
                        className={`text-sm leading-[1.78] text-text-muted ${i > 0 ? "mt-3.5" : ""}`}
                      >
                        {bio}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {TEAM.map((person) => (
                <div
                  key={person.name}
                  className="overflow-hidden rounded-sm border border-border-soft bg-off-white"
                >
                  <div className="flex h-45 items-center justify-center border-b border-border-soft bg-warm-white">
                    <span className="text-[11px] font-medium tracking-[0.1em] text-text-muted/40 uppercase">
                      Photo — {person.name}
                    </span>
                  </div>
                  <div className="p-5.5">
                    <div className="mb-1 font-serif text-xl leading-[1.2] font-normal text-near-black">
                      {person.name}
                    </div>
                    <div className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-teal-mid uppercase">
                      {person.title}
                    </div>
                    <p className="text-[13px] leading-[1.7] text-text-muted/50 italic">
                      Bio coming soon.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaStrip
          heading="Ready to bring Aligned to"
          emphasis="your organization?"
          body="See the platform in action. We'll walk you through exactly how it works for your team."
        />
      </main>
      <Footer />
    </>
  );
}
