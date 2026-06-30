import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  washSide = "right",
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  washSide?: "left" | "right";
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-16 sm:px-13 sm:pt-44 sm:pb-20">
      <div
        className={`pointer-events-none absolute top-0 h-[500px] w-[500px] rounded-full ${
          washSide === "right" ? "right-0" : "left-0"
        }`}
        style={{
          background:
            washSide === "right"
              ? "radial-gradient(circle, rgba(205,185,140,0.15) 0%, transparent 68%)"
              : "radial-gradient(circle, rgba(122,114,86,0.1) 0%, transparent 68%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1080px]">
        <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-slate-blue uppercase">
          {eyebrow}
        </p>
        <h1 className="mb-7 max-w-3xl font-serif text-[clamp(42px,5.5vw,72px)] leading-[1.1] font-light text-near-black">
          {title}
        </h1>
        <p className="max-w-xl text-[17px] leading-[1.8] font-light text-text-muted">{intro}</p>
      </div>
    </section>
  );
}
