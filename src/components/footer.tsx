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
    <footer className="bg-near-black px-6 py-10 sm:px-13">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <LogoMark size={36} variant="light" />
        </Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-[11px] tracking-[0.06em] text-white/35 uppercase transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 text-[11px] tracking-[0.05em] text-white/22">
        © {new Date().getFullYear()} Aligned. Culturally adaptive serious illness & end-of-life education.
      </div>
    </footer>
  );
}
