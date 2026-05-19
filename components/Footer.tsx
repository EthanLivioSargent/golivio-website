import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-invert-low">
      <div className="container-page grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 text-invert-hi"><Logo className="h-6 w-auto" /></div>
          <p className="mt-3 max-w-sm text-[0.92rem] leading-relaxed text-invert-low">
            Livio is the AI Factory. 75% faster land to compute — under one methodology, one spec dictionary, and one command line.
          </p>
          <p className="mt-4 text-[0.82rem] text-invert-dim">Los Altos, California · est. as Livio Building Systems</p>
        </div>

        <FooterCol title="The Stack" links={[
          { label: "Livio Grid · free",     href: "https://grid.golivio.com", domain: "grid.golivio.com" },
          { label: "Livio Hub · free",      href: "https://hub.golivio.com",  domain: "hub.golivio.com" },
          { label: "Livio Smart Shell",     href: "#factory",                  domain: "smart>" },
          { label: "LAIF (full EPC)",       href: "#stack",                    domain: "golivio.com" },
          { label: "Livio Review · free",   href: "#stack",                    domain: "review.golivio.com" },
        ]} />

        <FooterCol title="Company" links={[
          { label: "Console",       href: "https://console.golivio.com" },
          { label: "Methodology",   href: "#methodology" },
          { label: "Factory",       href: "#factory" },
          { label: "FAQ",           href: "#faq" },
        ]} />

        <FooterCol title="For builders" links={[
          { label: "Start an RFQ",      href: "https://hub.golivio.com" },
          { label: "Vendor portal",     href: "https://hub.golivio.com/manufacturer" },
          { label: "Open Grid",         href: "https://grid.golivio.com" },
        ]} />
      </div>

      <div className="container-page mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-lineDark/60 pt-6 text-[0.84rem] text-invert-dim">
        <span>© {new Date().getFullYear()} Livio. All rights reserved.</span>
        <div className="flex flex-wrap gap-5">
          <a href="/privacy" className="hover:text-invert-mid">Privacy</a>
          <a href="/terms" className="hover:text-invert-mid">Terms</a>
          <a href="/llms.txt" className="font-mono hover:text-gold-400">llms.txt</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string; domain?: string }[] }) {
  return (
    <div className="md:col-span-2">
      <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-invert-mid">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group inline-flex flex-col text-[0.92rem] text-invert-low transition-colors hover:text-gold-400">
              <span>{l.label}</span>
              {l.domain && <span className="font-mono text-[0.7rem] text-invert-dim group-hover:text-gold-400/80">{l.domain}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
