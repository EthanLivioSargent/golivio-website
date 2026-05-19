import Logo from "./Logo";

const links = [
  { href: "#stack",       label: "The Stack" },
  { href: "#factory",     label: "The Factory" },
  { href: "#methodology", label: "Methodology" },
  { href: "#faq",         label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream-50/85 backdrop-blur-xl">
      <nav className="container-page flex h-[68px] items-center justify-between gap-4">
        <a href="/" className="group flex items-center gap-2 text-text-hi" aria-label="Livio home">
          <Logo className="h-6 w-auto text-text-hi transition-colors group-hover:text-gold-700" />
          <span className="ml-1 hidden rounded-full border border-gold/30 bg-gold/10 px-2 py-[2px] text-[10px] font-bold uppercase tracking-[0.12em] text-gold-700 sm:inline-block">
            AI Factory
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-2 text-[0.92rem] font-medium text-text-mid transition-colors hover:bg-text-hi/[0.04] hover:text-text-hi">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="https://console.golivio.com" className="hidden rounded-full border border-line2 px-3 py-[7px] text-[0.88rem] font-semibold text-text-mid transition-all hover:border-text-hi hover:text-text-hi sm:inline-flex">
            Sign in
          </a>
          <a href="#stack" className="btn-gold py-[8px] text-[0.9rem]">
            Explore the stack
            <span aria-hidden>→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
