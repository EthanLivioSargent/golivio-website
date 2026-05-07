import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://golivio.com";
const SITE_NAME = "Livio — AI Factory";
const TITLE_DEFAULT = "Livio — Land to Compute in 99 Days. The AI Factory for Hyperscale Data Centers.";
const DESCRIPTION =
  "Livio is the AI Factory (LAIF) — a pre-engineered, panelized building system that turns land and power into operational AI compute capacity in as little as 99 days. Spans 20 MW to 1+ GW. Includes Livio Land, Grid, Hub, and the Slart shell.";

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s — Livio",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "AI factory",
    "AI data center",
    "hyperscale data center",
    "panelized construction",
    "modular data center",
    "data center procurement",
    "long-lead equipment",
    "site intelligence",
    "land to compute",
    "LAIF",
    "Livio",
    "Livio Building Systems",
    "Livio Hub",
    "Livio Grid",
    "Livio Land",
    "Slart shell",
    "data center buildout",
    "MW data center",
    "GW data center",
  ],
  authors: [{ name: "Livio", url: SITE_URL }],
  creator: "Livio",
  publisher: "Livio",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Livio — Land to Compute in 99 Days",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
    creator: "@golivio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
  sameAs: [
    "https://www.instagram.com/go.livio/",
    "https://www.linkedin.com/company/livio-building-systems/",
  ],
  slogan: "Land to compute in 99 days.",
  description: DESCRIPTION,
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Altos",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  knowsAbout: [
    "AI data center construction",
    "Hyperscale data center buildout",
    "Panelized building systems",
    "Long-lead equipment procurement",
    "Site intelligence and selection",
    "Modular MEP integration",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Livio Stack",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Livio Land",
          url: "https://land.golivio.com",
          description: "Parcel intelligence for AI data centers — sites pre-screened for power, fiber, water, zoning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Livio Grid",
          url: "https://grid.golivio.com",
          description: "Site intelligence for hyperscale developers. Reads exact power, water, and climate variables and adapts the design in hours.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Livio Hub",
          url: "https://hub.golivio.com",
          description: "Buy-side procurement engine for AI data center developers. 80+ verified vendors, first bids in under 24 hours.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Slart Shell",
          description: "The agentic command line that ties Land, Grid, and Hub together. One prompt, the full Livio stack.",
        },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
        {/* Llms hint for AI crawlers */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-deep text-ink-base">
        <a
          href="#main"
          className="absolute left-2 top-2 z-[200] -translate-y-16 rounded-md bg-gold px-3 py-2 text-sm font-bold text-[#0a1628] focus:translate-y-0 focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
