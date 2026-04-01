import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PageTransitionProvider } from "@/components/ui/PageTransition";
import SplashScreen from "@/components/ui/SplashScreen";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { siteConfig } from "../lib/seo";

const alibabaSans = localFont({
  src: [
    {
      path: "./fonts/AlibabaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AlibabaSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AlibabaSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-alibaba-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Proses - Logo Yazılım Yetkili İş Ortağı | Bursa",
    template: "%s | Proses Yazılım",
  },
  description:
    "Bursa merkezli Logo Yazılım yetkili iş ortağı. Tiger 3, GO 3, CRM ve e-Dönüşüm çözümlerinde profesyonel danışmanlık ve entegrasyon hizmetleri.",
  keywords: [
    "Logo Yazılım",
    "Logo ERP Bursa",
    "Tiger 3",
    "GO 3",
    "Logo CRM",
    "e-Dönüşüm",
    "ERP danışmanlığı",
    "Bursa yazılım",
  ],
  category: "technology",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Proses - Logo Yazılım Yetkili İş Ortağı | Bursa",
    description:
      "Bursa merkezli Logo Yazılım yetkili iş ortağı. Tiger 3, GO 3, CRM ve e-Dönüşüm çözümlerinde profesyonel danışmanlık ve entegrasyon hizmetleri.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
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
    title: "Proses - Logo Yazılım Yetkili İş Ortağı | Bursa",
    description:
      "Bursa merkezli Logo Yazılım yetkili iş ortağı. Tiger 3, GO 3, CRM ve e-Dönüşüm çözümlerinde profesyonel danışmanlık ve entegrasyon hizmetleri.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "tr-TR": siteConfig.url,
    },
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${alibabaSans.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-burgundy focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          İçeriğe atla
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransitionProvider>
            <SmoothScroll>
              <SplashScreen />
              {children}
            </SmoothScroll>
          </PageTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
