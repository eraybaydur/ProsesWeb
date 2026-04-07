import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { solutions } from "@/lib/solutions";
import { buildSolutionsIndexJsonLd, siteConfig } from "@/lib/seo";
import { SolutionsIndexClient } from "@/components/pages/SolutionsIndexClient";

export const metadata: Metadata = {
  title: "Logo Yazılım Çözümleri | ERP, CRM, İş Zekası",
  description:
    "Logo Tiger 3, GO Wings, CRM, Flow, Mind ve Budget çözümlerini keşfedin. İşletmenize en uygun Logo ERP yazılımını Proses Yazılım ile belirleyin.",
  keywords: [
    "Logo Yazılım ürünleri",
    "Logo ERP çözümleri",
    "Tiger 3",
    "GO Wings",
    "Logo CRM",
    "Logo Flow",
    "Logo Mind",
    "Logo Budget",
    "ERP karşılaştırma",
  ],
  alternates: { canonical: "/cozumler" },
  openGraph: {
    title: "Logo Yazılım Çözümleri | Proses Yazılım",
    description:
      "Tiger 3, GO Wings, CRM ve daha fazlası. İşletmeniz için doğru Logo ERP çözümünü bulun.",
    url: `${siteConfig.url}/cozumler`,
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Logo Yazılım Çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Yazılım Çözümleri | Proses Yazılım",
    description:
      "Tiger 3, GO Wings, CRM ve daha fazlası. İşletmeniz için doğru Logo ERP çözümünü bulun.",
    images: [siteConfig.ogImage],
  },
};

export default function SolutionsIndexPage() {
  const jsonLd = buildSolutionsIndexJsonLd();

  const solutionData = solutions.map(({ icon, ...rest }) => rest);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="relative min-h-screen w-full bg-white text-slate-900 dark:bg-deep-space dark:text-white">
        <Navbar />
        <SolutionsIndexClient solutions={solutionData} />
        <Footer />
      </main>
    </>
  );
}
