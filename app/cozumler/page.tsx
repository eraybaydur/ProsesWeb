import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { solutions } from "@/lib/solutions";
import { buildSolutionsIndexJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Logo Yazılım Çözümleri | ERP, CRM, İş Zekası",
  description:
    "Logo Tiger 3, Go 3, CRM, Flow, Mind ve Budget çözümlerini keşfedin. İşletmenize en uygun Logo ERP yazılımını Proses Yazılım ile belirleyin.",
  keywords: [
    "Logo Yazılım ürünleri",
    "Logo ERP çözümleri",
    "Tiger 3",
    "Go 3",
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
      "Tiger 3, Go 3, CRM ve daha fazlası. İşletmeniz için doğru Logo ERP çözümünü bulun.",
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
      "Tiger 3, Go 3, CRM ve daha fazlası. İşletmeniz için doğru Logo ERP çözümünü bulun.",
    images: [siteConfig.ogImage],
  },
};

export default function SolutionsIndexPage() {
  const jsonLd = buildSolutionsIndexJsonLd();

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
              Logo Yazılım Çözümleri
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-16">
              İşletmenizin büyüklüğüne ve ihtiyacına uygun Logo ERP çözümünü
              keşfedin. Kurulum, eğitim ve entegrasyon desteğiyle yanınızdayız.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <Link
                  key={s.slug}
                  href={`/cozumler/${s.slug}`}
                  className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-burgundy/30 dark:hover:border-crimson/30 transition-colors"
                >
                  <div className="relative w-14 h-14 rounded-xl bg-slate-50 dark:bg-white/[0.06] overflow-hidden">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-1 group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                      {s.name}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {s.shortDescription}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-burgundy dark:text-crimson mt-auto">
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
