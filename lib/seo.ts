import { CONTACT } from "@/lib/contact";
import { siteUrl } from "@/lib/env";
import type { Solution, Service, SolutionFaq } from "@/lib/solutions";

export const siteConfig = {
  name: "Proses Yazılım",
  legalName: "Proses Yazılım Bilişim San. Tic. Ltd. Şti.",
  url: siteUrl,
  ogImage: "/logo.png",
  locale: "tr_TR",
  country: "TR",
  city: "Bursa",
} as const;

export const buildHomeJsonLd = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    sameAs: [CONTACT.social.linkedin, CONTACT.social.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT.phone,
        contactType: "customer support",
        email: CONTACT.email,
        availableLanguage: ["Turkish"],
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT.address.street}, ${CONTACT.address.building}`,
      addressLocality: "Nilüfer",
      addressRegion: "Bursa",
      postalCode: "16140",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.maps.lat,
      longitude: CONTACT.maps.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    priceRange: "$$",
  };

  return [websiteSchema, organizationSchema, localBusinessSchema];
};

export function buildSolutionJsonLd(solution: Solution) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: solution.name,
      description: solution.shortDescription,
      image: `${siteConfig.url}${solution.logo}`,
      brand: { "@type": "Brand", name: "Logo Yazılım" },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "TRY",
        seller: { "@type": "Organization", name: siteConfig.name },
      },
    },
    buildFaqJsonLd(solution.faq),
    buildBreadcrumbJsonLd([
      { name: "Çözümler", url: `${siteConfig.url}/cozumler` },
      {
        name: solution.name,
        url: `${siteConfig.url}/cozumler/${solution.slug}`,
      },
    ]),
  ];
}

export function buildServiceJsonLd(service: Service) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.seo.description,
      provider: {
        "@type": "Organization",
        name: siteConfig.legalName,
        url: siteConfig.url,
      },
      areaServed: { "@type": "Country", name: "Türkiye" },
    },
    buildFaqJsonLd(service.faq),
    buildBreadcrumbJsonLd([
      { name: "Hizmetler", url: `${siteConfig.url}/hizmetler` },
      {
        name: service.name,
        url: `${siteConfig.url}/hizmetler/${service.slug}`,
      },
    ]),
  ];
}

export function buildRegionJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteConfig.name,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      url: siteConfig.url,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${CONTACT.address.street}, ${CONTACT.address.building}`,
        addressLocality: "Nilüfer",
        addressRegion: "Bursa",
        postalCode: "16140",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: CONTACT.maps.lat,
        longitude: CONTACT.maps.lng,
      },
      areaServed: { "@type": "City", name: "Bursa" },
      priceRange: "$$",
    },
    buildBreadcrumbJsonLd([
      {
        name: "Bursa ERP Danışmanlığı",
        url: `${siteConfig.url}/bursa-logo-bayi`,
      },
    ]),
  ];
}

function buildFaqJsonLd(faqItems: SolutionFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Anasayfa",
        item: siteConfig.url,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };
}

export const buildContactJsonLd = () => {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "İletişim",
      url: `${siteConfig.url}/iletisim`,
      description:
        "Proses Yazılım iletişim sayfası. ERP danışmanlığı ve Logo Yazılım çözümleri için destek alın.",
      inLanguage: "tr-TR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Anasayfa",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "İletişim",
          item: `${siteConfig.url}/iletisim`,
        },
      ],
    },
  ];
};
