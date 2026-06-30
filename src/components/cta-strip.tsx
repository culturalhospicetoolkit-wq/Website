import { PrimaryButton } from "./buttons";

export function CtaStrip({
  heading,
  emphasis,
  body,
  ctaLabel = "Request a Demo",
  ctaHref = "/demo",
}: {
  heading: string;
  emphasis: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="border-t border-border-soft bg-warm-white px-6 py-20 text-center sm:px-13">
      <h2 className="mx-auto mb-4 max-w-xl font-serif text-[clamp(32px,4vw,50px)] leading-[1.15] font-light text-near-black">
        {heading} <em className="text-teal-deep not-italic font-normal italic">{emphasis}</em>
      </h2>
      <p className="mx-auto mb-9 max-w-md text-[15px] leading-[1.75] text-text-muted">{body}</p>
      <PrimaryButton href={ctaHref}>{ctaLabel}</PrimaryButton>
    </section>
  );
}
