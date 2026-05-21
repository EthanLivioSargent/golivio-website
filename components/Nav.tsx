import Logo from "./Logo";
import { CALENDLY_URL } from "@/lib/site";

const links = [
  { href: "#stack",       label: "Solutions" },
  { href: "#factory",     label: "The Factory" },
  { href: "#designs",     label: "Designs" },
  { href: "#methodology", label: "Methodology" },
  { href: "#faq",         label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream-50/85 backdrop-blur-xl">
      <nav className="container-page flex h-[72px] items-center justify-between gap-3">
        <a href="/" className="group flex items-center gap-3 text-text-hi" aria-label="Livio home">
          <Logo className="h-7 w-auto text-text-hi transition-colors group-hover:text-gold-700" />
          <span className="hidden h-4 w-px bg-line2 lg:inline-block" aria-hidden />
          <span className="hidden text-[13px] font-semibold tracking-[-0.005em] text-text-mid lg:inline-block">
            Technology for data center construction
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-[15px] font-medium text-text-mid transition-colors hover:bg-text-hi/[0.04] hover:text-text-hi"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold py-2 text-[14px] md:text-[15px]"
          >
            Book a<span className="hidden sm:inline"> 15-min</span> call
            <span aria-hidden>→</span>
          </a>

          {/* Mobile menu — CSS-only disclosure, no JS */}
          <details className="group relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line2 text-text-hi [&::-webkit-details-marker]:hidden">
              <svg className="group-open:hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
              <svg className="hidden group-open:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
              <span className="sr-only">Menu</span>
            </summary>
            <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-2xl border border-line2 bg-cream-50 p-2 shadow-elev">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-text-mid transition-colors hover:bg-text-hi/[0.05] hover:text-text-hi"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
