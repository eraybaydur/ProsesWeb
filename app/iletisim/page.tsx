import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/ContactPageClient";
import { buildContactJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "İletişim | Logo Yazılım ERP Danışmanlığı",
  description:
    "Proses Yazılım ile iletişime geçin. Bursa'da Logo ERP, CRM, e-Dönüşüm ve entegrasyon çözümleri için uzman ekibimizden destek alın.",
  keywords: [
    "Proses iletişim",
    "Logo Yazılım iletişim",
    "Bursa ERP danışmanlığı",
    "Logo destek Bursa",
  ],
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: "İletişim | Proses Yazılım",
    description:
      "ERP ve Logo Yazılım projeleriniz için uzman ekibimizle iletişime geçin.",
    url: `${siteConfig.url}/iletisim`,
    type: "website",
    locale: "tr_TR",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | Proses Yazılım",
    description:
      "Logo Yazılım ve ERP projeleriniz için destek almak üzere bizimle iletişime geçin.",
    images: [siteConfig.ogImage],
  },
};

export default function ContactPage() {
  const contactJsonLd = buildContactJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactPageClient />
    </>
  );
}
