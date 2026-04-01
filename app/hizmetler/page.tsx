import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "@/lib/solutions";
import { buildServicesIndexJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | ERP Danışmanlığı, e-Dönüşüm, Özel Yazılım",
  description:
    "Proses Yazılım hizmetleri: ERP danışmanlığı, e-Dönüşüm entegrasyonu, özel yazılım geliştirme ve 7/24 teknik destek. Bursa ve Türkiye genelinde profesyonel hizmet.",
  keywords: [
    "ERP danışmanlığı",
    "e-Dönüşüm hizmetleri",
    "özel yazılım geliştirme",
    "Logo teknik destek",
    "ERP kurulum hizmeti",
    "Bursa yazılım hizmetleri",
  ],
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Hizmetlerimiz | Proses Yazılım",
    description:
      "ERP danışmanlığı, e-Dönüşüm, özel yazılım ve teknik destek hizmetleri.",
    url: `${siteConfig.url}/hizmetler`,
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Proses Yazılım Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hizmetlerimiz | Proses Yazılım",
    description:
      "ERP danışmanlığı, e-Dönüşüm, özel yazılım ve teknik destek hizmetleri.",
    images: [siteConfig.ogImage],
  },
};

export default function ServicesIndexPage() {
  const jsonLd = buildServicesIndexJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="relative min-h-screen w-full bg-white text-slate-900 dark:bg-deep-space dark:text-white">
        <Navbar />
        <section className="pt-32 pb-20 px-6 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hizmetlerimiz
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-16">
              Logo ERP danışmanlığından e-Dönüşüm entegrasyonuna, özel yazılım
              geliştirmeden teknik desteğe kadar uçtan uca hizmet sunuyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="group flex flex-col gap-3 p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-burgundy/30 dark:hover:border-crimson/30 transition-colors"
                >
                  <h2 className="text-xl font-semibold group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                    {s.name}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {s.seo.description}
                  </p>
                  <span className="text-sm font-medium text-burgundy dark:text-crimson mt-auto pt-2">
                    Detayları incele &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
