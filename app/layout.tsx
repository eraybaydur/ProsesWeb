import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
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
