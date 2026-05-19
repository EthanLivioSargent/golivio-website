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
      <nav className="container-page flex h-[72px] items-center justify-between gap-4">
        <a href="/" className="group flex items-center gap-3 text-text-hi" aria-label="Livio home">
          <Logo className="h-7 w-auto text-text-hi transition-colors group-hover:text-gold-700" />
          <span className="hidden h-4 w-px bg-line2 sm:inline-block" aria-hidden />
          <span className="hidden text-[13px] font-semibold tracking-[-0.005em] text-text-mid sm:inline-block">The AI factory for data centers</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-2 text-[15px] font-medium text-text-mid transition-colors hover:bg-text-hi/[0.04] hover:text-text-hi">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="https://console.golivio.com" className="hidden rounded-full border border-line2 px-4 py-2 text-[14px] font-semibold text-text-mid transition-all hover:border-text-hi hover:text-text-hi sm:inline-flex">
            Sign in
          </a>
          <a href="#stack" className="btn-gold py-2 text-[15px]">
            Explore the stack
            <span aria-hidden>→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
