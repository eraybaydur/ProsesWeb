import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PageTransitionProvider } from "@/components/ui/PageTransition";
import SplashScreen from "@/components/ui/SplashScreen";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Proses - Logo Yazılım Yetkili İş Ortağı | Bursa",
  description: "Bursa merkezli Logo Yazılım yetkili iş ortağı. Tiger 3, Go 3, CRM ve e-Dönüşüm çözümlerinde profesyonel danışmanlık ve entegrasyon hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${inter.variable} antialiased`}
      >
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
