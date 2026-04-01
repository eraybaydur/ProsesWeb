import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Sayfa Bulunamadı | Proses Yazılım",
  description: "Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya çözümlerimizi inceleyin.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 dark:bg-deep-space dark:text-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <span className="text-8xl font-bold text-burgundy/20 dark:text-crimson/20 mb-4">
          404
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
          Aşağıdaki bağlantılardan devam edebilirsiniz.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-burgundy hover:bg-dark-red text-white text-sm font-semibold transition-colors"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/cozumler"
            className="px-6 py-3 rounded-lg border border-slate-200 dark:border-white/[0.08] text-sm font-semibold hover:border-burgundy/30 transition-colors"
          >
            Çözümler
          </Link>
          <Link
            href="/hizmetler"
            className="px-6 py-3 rounded-lg border border-slate-200 dark:border-white/[0.08] text-sm font-semibold hover:border-burgundy/30 transition-colors"
          >
            Hizmetler
          </Link>
          <Link
            href="/iletisim"
            className="px-6 py-3 rounded-lg border border-slate-200 dark:border-white/[0.08] text-sm font-semibold hover:border-burgundy/30 transition-colors"
          >
            İletişim
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
