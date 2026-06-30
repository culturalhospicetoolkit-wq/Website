import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaStrip } from "@/components/cta-strip";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ — Aligned",
  description:
    "Answers to the most common questions about the Aligned platform, our content, and how it works for your organization.",
};

const FAQ_CATEGORIES = [
  {
    label: "About the Platform",
    items: [
      {
        question: "What exactly is included in a subscription?",
        answer:
          "Every subscription includes access to both the Community Outreach Suite and the Cultural Competency Hub for all available cultural communities, white-labeling with your organization's branding, staff completion tracking, and progress reporting. Higher tiers add custom domain, onboarding support, and advanced features.",
      },
      {
        question: "How does the white-labeling work?",
        answer:
          "Your organization's logo appears on community-facing materials including presentations and handouts. Staff-facing resources are also branded to your organization. Standard and Enterprise plans can host the platform on a custom domain (e.g. learn.yourorganization.com) so the experience is fully seamless for your team.",
      },
      {
        question: "How do staff access the platform?",
        answer:
          "Staff access Aligned through any web browser or mobile device — no app download required. Quick-reference cards are optimized for mobile so staff can pull them up before or during visits. No IT setup or integration is needed to get started.",
      },
      {
        question: "Does Aligned integrate with our existing LMS or EMR?",
        answer:
          "Aligned has its own built-in LMS with completion tracking and reporting. Integration with existing systems is available for Enterprise customers. For most organizations, Aligned works as a standalone platform — staff get a login, access content, and completions are tracked automatically.",
      },
    ],
  },
  {
    label: "About the Content",
    items: [
      {
        question: "How is this different from translated materials?",
        answer:
          "Translation changes the language. Aligned rebuilds the content. Community-facing materials are developed around each community's own framework for understanding illness, death, family decision-making, and the role of healthcare — not adapted from existing Anglo-centric materials. That distinction is what earns trust in the room.",
      },
      {
        question: "Who develops the content?",
        answer:
          "Aligned was founded by a registered nurse and clinical educator with a degree in cultural anthropology and deep hospice education experience. Clinical staff resources are grounded in peer-reviewed cultural competency research. Community-facing presentations are developed in partnership with cultural community collaborators who bring lived experience to every word.",
      },
      {
        question: "How often is content updated?",
        answer:
          "Content is reviewed and updated regularly as new communities are added and existing content is refined. Standard and Enterprise subscribers receive quarterly content updates. All subscribers receive updates automatically — your platform always reflects the current content library.",
      },
    ],
  },
  {
    label: "Pricing & Getting Started",
    items: [
      {
        question: "How long does it take to get up and running?",
        answer:
          "Most organizations are fully deployed within a week of subscribing. White-labeling setup typically takes 2–3 business days. From there, staff access is immediate — no training or onboarding required to start using the quick-reference cards.",
      },
      {
        question: "Is there a contract or can we cancel anytime?",
        answer:
          "Aligned is an annual subscription. We'll discuss contract terms during the demo conversation based on your organization's needs and tier.",
      },
      {
        question: "What is founding organization pricing?",
        answer:
          "We're offering reduced pricing for a limited number of early adopter organizations who help shape the platform in its first year — providing feedback, testing new content, and helping us understand what works in the field. Mention it when you request a demo and we'll discuss whether it's a fit.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="FAQ"
          title={<>Questions we <em className="text-teal-deep not-italic italic">hear often.</em></>}
          intro="Answers to the most common questions about the Aligned platform, our content, and how it works for your organization."
          washSide="right"
        />

        <section className="bg-off-white px-6 py-20 sm:px-13">
          <div className="mx-auto max-w-[760px]">
            <div className="mb-12 flex items-start gap-3 rounded-sm border border-amber/25 bg-warm-white px-6 py-5">
              <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber" />
              <p className="text-sm leading-[1.6] text-text-body">
                <strong className="font-semibold">Placeholder page.</strong> These are starter
                questions — add, remove, or edit based on what you actually hear in sales
                conversations.
              </p>
            </div>

            {FAQ_CATEGORIES.map((category) => (
              <div key={category.label} className="mb-12 last:mb-0">
                <div className="mb-2 text-[11px] font-semibold tracking-[0.16em] text-gold-deep uppercase">
                  {category.label}
                </div>
                <FaqAccordion items={category.items} />
              </div>
            ))}
          </div>
        </section>

        <CtaStrip
          heading="Still have questions?"
          emphasis="Let's talk."
          body="The fastest way to get answers is a real conversation about your organization specifically."
        />
      </main>
      <Footer />
    </>
  );
}
