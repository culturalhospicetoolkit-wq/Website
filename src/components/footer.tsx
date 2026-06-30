import Link from "next/link";
import { LogoMark } from "./logo-mark";

const LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/communities", label: "Communities" },
  { href: "/about", label: "About" },
  { href: "/organizations", label: "For Organizations" },
  { href: "/demo", label: "Demo" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 bg-near-black px-6 py-11 sm:px-13">
      <Link href="/" className="flex items-center gap-2.5 font-serif text-lg tracking-[0.15em] text-teal-light uppercase">
        <LogoMark size={26} />
        Aligned
      </Link>
      <ul className="flex flex-wrap gap-7">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[11px] tracking-[0.06em] text-white/35 uppercase transition-colors hover:text-white/70"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-[11px] tracking-[0.05em] text-white/22">
        © {new Date().getFullYear()} Aligned. Culturally adaptive serious illness & end-of-life education.
      </div>
    </footer>
  );
}
