import Link from "next/link";
import type { ReactNode } from "react";

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-sm bg-amber px-9.5 py-4 text-xs font-semibold tracking-[0.13em] text-near-black uppercase transition-all hover:-translate-y-px hover:bg-peach-warm"
    >
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: ReactNode;
  variant?: "default" | "light";
}) {
  const className =
    variant === "light"
      ? "border-b border-white/35 pb-0.5 text-[13px] font-medium text-white/85 transition-colors hover:border-amber hover:text-amber"
      : "border-b border-slate-blue/35 pb-0.5 text-[13px] font-medium text-slate-blue transition-colors hover:border-teal-deep hover:text-teal-deep";
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
