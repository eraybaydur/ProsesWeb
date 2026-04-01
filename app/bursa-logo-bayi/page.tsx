import type { Metadata } from "next";
import { regions } from "@/lib/solutions";
import { buildRegionJsonLd, siteConfig } from "@/lib/seo";
import { RegionPageClient } from "@/components/pages/RegionPageClient";

const region = regions[0];

export const metadata: Metadata = {
  title: region.seo.title,
  description: region.seo.description,
  keywords: region.seo.keywords,
  alternates: { canonical: "/bursa-logo-bayi" },
  openGraph: {
    title: region.seo.title,
    description: region.seo.description,
    url: `${siteConfig.url}/bursa-logo-bayi`,
    type: "website",
    locale: "tr_TR",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Bursa ERP Danışmanlığı" }],
  },
  twitter: {
    card: "summary_large_image",
    title: region.seo.title,
    description: region.seo.description,
    images: [siteConfig.ogImage],
  },
};

export default function RegionPage() {
  const jsonLd = buildRegionJsonLd();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RegionPageClient />
    </>
  );
}
