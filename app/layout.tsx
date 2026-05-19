import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://golivio.com";
const SITE_NAME = "Livio — AI Factory";
const TITLE_DEFAULT = "Livio — 75% Faster Land to Compute. The AI Factory for Hyperscale Data Centers.";
const DESCRIPTION = "Livio is the AI Factory (LAIF) — engineering, procurement, and a pre-assembled building system that delivers AI data centers 75% faster, land to operational compute. Includes Livio Grid (engineering & underwriting), Livio Hub (procurement), Livio Smart Shell (panelized buildings), Livio Review (proposal QA), and LAIF (full EPC).";

export const viewport: Viewport = {
  themeColor: "#f7f7f2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE_DEFAULT, template: "%s — Livio" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "AI factory","AI data center","hyperscale data center",
    "panelized construction","modular data center","pre-assembled building",
    "data center procurement","buy-side procurement","long-lead equipment",
    "site intelligence","DC engineering","DC underwriting","first principles physics",
    "EPC","data center EPC","land to compute","LAIF",
    "Livio","Livio Grid","Livio Hub","Livio Smart Shell","Livio Review","Livio Land",
    "MW data center","GW data center","75% faster construction",
  ],
  authors: [{ name: "Livio", url: SITE_URL }],
  creator: "Livio",
  publisher: "Livio",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", siteName: SITE_NAME, url: SITE_URL,
    title: TITLE_DEFAULT, description: DESCRIPTION, locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Livio — 75% Faster Land to Compute" }],
  },
  twitter: {
    card: "summary_large_image", title: TITLE_DEFAULT, description: DESCRIPTION,
    images: ["/opengraph-image"], creator: "@golivio",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "technology",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Livio",
  alternateName: ["LIVIO AI Factory", "LAIF", "Livio Building Systems"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  sameAs: ["https://www.instagram.com/go.livio/","https://www.linkedin.com/company/livio-building-systems/"],
  slogan: "75% faster land to compute.",
  description: DESCRIPTION,
  foundingLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Los Altos", addressRegion: "CA", addressCountry: "US" } },
  knowsAbout: [
    "AI data center construction","Hyperscale data center buildout",
    "Panelized building systems","Long-lead equipment procurement",
    "Site intelligence and selection","Modular MEP integration",
    "Data center EPC","First-principles DC engineering",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Livio Stack",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Livio Grid", url: "https://grid.golivio.com", description: "AI DC Engineering & Underwriting from first principles of physics in 30 minutes. Perpetually free." } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Livio Hub",  url: "https://hub.golivio.com",  description: "Buy-side procurement engine for AI data center developers. Perpetually free." } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Livio Smart Shell", description: "Pre-assembled, panelized building system for 75% faster AI data center construction." } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Livio AI Factory (LAIF)", url: SITE_URL, description: "End-to-end EPC for AI data centers — 75% faster land to compute." } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Livio Review", description: "AI data center proposal review for offtakers and buyers, from first principles of physics, in 5 minutes. Perpetually free." } },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: { "@type": "SearchAction", target: `${SITE_URL}/?q={search_term_string}`, "query-input": "required name=search_term_string" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <Script id="org-jsonld" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Script id="website-jsonld" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body className="min-h-screen bg-cream text-text-hi">
        <a href="#main" className="absolute left-2 top-2 z-[200] -translate-y-16 rounded-full bg-gold px-3 py-2 text-base font-bold text-[#0a1628] focus:translate-y-0 focus:outline-none">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
