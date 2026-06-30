import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Request a Demo — Aligned",
  description:
    "See Aligned in action for your organization. A real conversation about where your census gaps are and how Aligned closes that gap.",
};

const PROMISES = [
  "We'll walk you through both modules — Community Outreach Suite and Cultural Competency Hub — and show you exactly what your team would have access to.",
  "We'll talk about your market — which communities are in your service area, what your census goals are, and which tier fits your organization.",
  "Founding organization pricing is available for early adopters who help shape the platform. Mention it and we'll discuss.",
  "We'll follow up within one business day to schedule a time that works for your team.",
];

export default function DemoPage() {
  return (
    <>
      <Nav />
      <main className="grid min-h-screen pt-18 lg:grid-cols-2">
        <div className="relative flex flex-col justify-center overflow-hidden bg-teal-deep px-6 py-20 sm:px-16">
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-[400px] w-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(217,201,163,0.12) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10 max-w-md">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-teal-light uppercase">
              Let&apos;s Talk
            </p>
            <h1 className="mb-5 font-serif text-[clamp(36px,4vw,54px)] leading-[1.15] font-light text-white">
              See Aligned in action for <em className="text-peach not-italic italic">your organization.</em>
            </h1>
            <p className="mb-12 max-w-sm text-[15px] leading-[1.78] text-white/62">
              No pressure. A real conversation about where your census gaps are, which communities
              you&apos;re trying to reach, and how Aligned closes that gap.
            </p>
            <div className="flex flex-col gap-4">
              {PROMISES.map((promise, i) => {
                const [bold, ...rest] = promise.split(" — ");
                const remainder = rest.join(" — ");
                return (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber" />
                    <p className="text-sm leading-[1.65] text-white/62">
                      <strong className="font-medium text-white">{bold}</strong>
                      {remainder ? ` — ${remainder}` : ""}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white px-6 py-20 sm:px-16">
          <div className="mx-auto w-full max-w-md">
            <h2 className="mb-9 font-serif text-[28px] leading-[1.3] font-normal text-near-black">
              Tell us a little about your organization.
            </h2>
            <form className="flex flex-col">
              <div className="mb-5">
                <label className="mb-2 block text-[11px] font-semibold tracking-[0.12em] text-text-muted uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-sm border border-slate-blue/20 bg-off-white px-4 py-3.5 text-sm text-near-black outline-none transition-colors placeholder:text-text-muted/50 focus:border-teal-mid"
                />
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-[11px] font-semibold tracking-[0.12em] text-text-muted uppercase">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="you@organization.org"
                  className="w-full rounded-sm border border-slate-blue/20 bg-off-white px-4 py-3.5 text-sm text-near-black outline-none transition-colors placeholder:text-text-muted/50 focus:border-teal-mid"
                />
              </div>
              <div className="mb-5 grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.12em] text-text-muted uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full rounded-sm border border-slate-blue/20 bg-off-white px-4 py-3.5 text-sm text-near-black outline-none transition-colors placeholder:text-text-muted/50 focus:border-teal-mid"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.12em] text-text-muted uppercase">
                    Your Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Executive Director"
                    className="w-full rounded-sm border border-slate-blue/20 bg-off-white px-4 py-3.5 text-sm text-near-black outline-none transition-colors placeholder:text-text-muted/50 focus:border-teal-mid"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-[11px] font-semibold tracking-[0.12em] text-text-muted uppercase">
                  Organization Name
                </label>
                <input
                  type="text"
                  placeholder="Organization name"
                  className="w-full rounded-sm border border-slate-blue/20 bg-off-white px-4 py-3.5 text-sm text-near-black outline-none transition-colors placeholder:text-text-muted/50 focus:border-teal-mid"
                />
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-[11px] font-semibold tracking-[0.12em] text-text-muted uppercase">
                  Organization Type
                </label>
                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-sm border border-slate-blue/20 bg-off-white px-4 py-3.5 text-sm text-near-black outline-none transition-colors focus:border-teal-mid"
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option>Hospice Organization</option>
                  <option>Palliative Care Program</option>
                  <option>Health System / Hospital</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-[11px] font-semibold tracking-[0.12em] text-text-muted uppercase">
                  What communities are you trying to reach?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Latino, Vietnamese, African American..."
                  className="w-full rounded-sm border border-slate-blue/20 bg-off-white px-4 py-3.5 text-sm text-near-black outline-none transition-colors placeholder:text-text-muted/50 focus:border-teal-mid"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-sm bg-amber px-4 py-4 text-xs font-semibold tracking-[0.13em] text-near-black uppercase transition-colors hover:bg-peach-warm"
              >
                Submit Request
              </button>
              <p className="mt-3 text-center text-[11px] tracking-[0.04em] text-text-muted/65">
                We&apos;ll be in touch within one business day.
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
