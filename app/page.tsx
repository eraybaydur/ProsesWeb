import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import TechFlow from "@/components/sections/TechFlow";
// import LogoSolutions from "@/components/sections/LogoSolutions";
const SolutionDetails = dynamic(() => import("@/components/sections/SolutionDetails"));
const Features = dynamic(() => import("@/components/sections/Features"));
const References = dynamic(() => import("@/components/sections/References"));
const ProcessTimeline = dynamic(() => import("@/components/sections/ProcessTimeline"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const CTA = dynamic(() => import("@/components/sections/CTA"));
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"));
import { buildHomeJsonLd, siteConfig } from "../lib/seo";

export const metadata: Metadata = {
  title: "Proses Yazılım | Logo Yazılım Çözümleri ve ERP Danışmanlığı",
  description:
    "Bursa'da Logo Yazılım yetkili iş ortağı Proses ile Tiger 3, GO Wings, CRM, e-Dönüşüm, entegrasyon ve kurumsal dijital dönüşüm danışmanlığı alın.",
  keywords: [
    "Logo Yazılım Bursa",
    "Logo Tiger 3",
    "Logo GO Wings",
    "Logo CRM",
    "ERP danışmanlığı",
    "e-Dönüşüm çözümleri",
    "Logo entegrasyon",
    "Bursa yazılım firması",
    "Proses Yazılım",
    "Proses ERP",
    "Web Tasarım",
    "Bursa Yazılım Firması",
    "Bursa Yazılım Şirketi",
    "Bursa Yazılım Hizmetleri",
    "Bursa Yazılım Çözümleri",
    "Bursa Yazılım Danışmanlığı",
    "Bursa Yazılım Entegrasyonu",
    "Bursa Yazılım Desteği",
    "Bursa Yazılım Geliştirme",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Proses | Logo Yazılım Çözümleri ve ERP Danışmanlığı",
    description:
      "Tiger 3, GO Wings, CRM ve e-Dönüşüm projelerinde uçtan uca kurulum, entegrasyon ve destek hizmetleri.",
    url: siteConfig.url,
    type: "website",
    locale: "tr_TR",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Proses Yazılım",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proses | Logo Yazılım Çözümleri ve ERP Danışmanlığı",
    description:
      "Bursa merkezli Logo Yazılım iş ortağı ile ERP ve dijital dönüşüm projelerinizi hızlandırın.",
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  const homeJsonLd = buildHomeJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <main id="main-content" className="relative min-h-screen w-full bg-white text-slate-900 selection:bg-crimson/20 selection:text-crimson dark:bg-deep-space dark:text-white dark:selection:bg-crimson/30 dark:selection:text-white">
        <Navbar />
        
        {/* Value proposition */}
        <TechFlow />

        {/* Trust layer */}
        <Stats />

        {/* Service overview */}
        <Services />
        <ProcessTimeline />

        {/* Product depth */}
        {/* <LogoSolutions /> */}
        <SolutionDetails />

        {/* Supporting differentiators */}
        <Features />

        {/* Proof + objections */}
        <References />
        <FAQ />

        {/* Final conversion */}
        <CTA />

        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
