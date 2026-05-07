import type { Metadata } from "next";
import Script from "next/script";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bottleneck from "@/components/Bottleneck";
import Factory from "@/components/Factory";
import LiveBuild from "@/components/LiveBuild";
import Timeline from "@/components/Timeline";
import Stack from "@/components/Stack";
import Methodology from "@/components/Methodology";
import Numbers from "@/components/Numbers";
import FAQ, { faqs } from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://golivio.com";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ],
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Bottleneck />
        <Factory />
        <LiveBuild />
        <Timeline />
        <Stack />
        <Methodology />
        <Numbers />
        <FAQ />
        <CTA />
      </main>
      <Footer />

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
