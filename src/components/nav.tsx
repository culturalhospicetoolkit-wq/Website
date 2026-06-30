"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "./logo-mark";

const LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/communities", label: "Communities" },
  { href: "/about", label: "About" },
  { href: "/organizations", label: "For Organizations" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-off-white/95 backdrop-blur-md">
      <div className="flex items-center justify-between gap-6 px-6 py-4 sm:px-13">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <LogoMark size={48} />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[11px] font-medium tracking-[0.08em] uppercase transition-colors hover:text-teal-deep ${
                  pathname === link.href ? "text-teal-deep" : "text-text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/demo"
              className="rounded-sm bg-amber px-5.5 py-2.5 text-[11px] font-medium tracking-[0.08em] text-near-black uppercase transition-colors hover:bg-peach-warm"
            >
              Request a Demo
            </Link>
          </li>
        </ul>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-5 bg-near-black transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-near-black transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border-soft px-6 py-4 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2.5 text-[12px] font-medium tracking-[0.08em] uppercase ${
                  pathname === link.href ? "text-teal-deep" : "text-text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/demo"
              onClick={() => setOpen(false)}
              className="inline-block rounded-sm bg-amber px-5.5 py-2.5 text-[11px] font-medium tracking-[0.08em] text-near-black uppercase"
            >
              Request a Demo
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
