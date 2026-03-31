"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { regions, solutions, services } from "@/lib/solutions";
import { CONTACT } from "@/lib/contact";

const region = regions[0];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const heroStats = [
  { value: "15+", label: "Yıl Deneyim" },
  { value: "200+", label: "Müşteri" },
  { value: "7/24", label: "Destek" },
];

export const RegionPageClient = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-burgundy/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-crimson/5 blur-[100px]" />
        </div>

        <div className="site-container relative z-10">
          <div className="flex items-start gap-12 lg:gap-16">
            {/* Left: Text Content (60%) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[60%]"
            >
              <div className="mb-8">
                <Breadcrumb
                  items={[{ label: "Bursa Logo Danışmanlığı" }]}
                />
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-burgundy/20 bg-burgundy/10 px-4 py-1.5 text-sm font-medium text-burgundy">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-burgundy" />
                Bursa&apos;nın Güvenilir Logo Ortağı
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="text-burgundy">Bursa&apos;da</span> Logo
                <br />
                Çözüm Ortağınız
              </h1>

              <div className="max-w-xl space-y-4">
                {region.description.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats Row */}
              <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex flex-col"
                  >
                    <span className="text-3xl font-bold text-burgundy md:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 rounded-xl bg-burgundy px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-dark-red hover:shadow-lg hover:shadow-burgundy/25"
                >
                  Ücretsiz Danışmanlık Alın
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-burgundy/30 px-6 py-3 text-sm font-semibold text-burgundy transition-all duration-300 hover:bg-burgundy/5"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT.phone}
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Decorative Watermark (40%) */}
            <div className="pointer-events-none hidden select-none lg:flex lg:w-[40%] lg:items-center lg:justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <span className="text-[12rem] font-black leading-none tracking-tighter text-burgundy/[0.05] xl:text-[14rem]">
                  BURSA
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-burgundy/10 bg-burgundy/5 backdrop-blur-sm">
                    <MapPin className="h-12 w-12 text-burgundy/40" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz / Highlights — Timeline Style */}
      <section className="pb-16 md:pb-24">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFade}
            className="mb-12 max-w-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Neden <span className="text-burgundy">Proses Yazılım</span>?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Bursa iş dünyasının güvenilir teknoloji ortağı olarak fark
              yaratan avantajlarımız.
            </p>
          </motion.div>

          <div className="relative ml-4 border-l-2 border-burgundy/20 pl-8 md:ml-8 md:pl-12">
            {region.highlights.map((highlight, i) => (
              <motion.div
                key={highlight}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative mb-8 last:mb-0"
              >
                {/* Timeline node */}
                <div className="absolute -left-[calc(2rem+9px)] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-burgundy bg-background transition-colors group-hover:bg-burgundy md:-left-[calc(3rem+9px)]">
                  <div className="h-2 w-2 rounded-full bg-burgundy transition-colors group-hover:bg-white" />
                </div>

                {/* Content */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-burgundy/30 hover:shadow-lg hover:shadow-burgundy/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-burgundy/30">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-burgundy" />
                    <span className="text-base font-medium text-slate-900 dark:text-white">
                      {highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Çözümlerimiz — 3x2 Grid with Color Strip */}
      <section className="pb-16 md:pb-24">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFade}
            className="mb-12 max-w-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Logo <span className="text-burgundy">Çözümlerimiz</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              İşletmenizin ihtiyaçlarına uygun Logo ürün ailesi çözümleri.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={`/cozumler/${solution.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-none"
                >
                  {/* Color strip at top */}
                  <div
                    className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                    style={{ backgroundColor: solution.color }}
                  />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Product logo centered */}
                    <div className="mb-5 flex justify-center">
                      <div className="relative w-[72px] h-[72px] rounded-xl bg-white dark:bg-white/10 overflow-hidden">
                        <Image
                          src={solution.logo}
                          alt={solution.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>

                    <h3 className="mb-2 text-center text-lg font-semibold text-slate-900 dark:text-white">
                      {solution.name}
                    </h3>

                    <p className="mb-5 flex-1 text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {solution.shortDescription}
                    </p>

                    <span className="mx-auto inline-flex items-center gap-1.5 text-sm font-medium text-burgundy transition-all group-hover:gap-2.5">
                      İncele
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz — 2x2 Grid, Numbered */}
      <section className="pb-16 md:pb-24">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFade}
            className="mb-12 max-w-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              <span className="text-burgundy">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Danışmanlıktan teknik desteğe, kurulumdan özel yazılıma kadar
              kapsamlı hizmet yelpazesi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-burgundy/30 hover:shadow-lg hover:shadow-burgundy/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-burgundy/30"
                >
                  {/* Number */}
                  <span className="mb-4 text-3xl font-black text-burgundy/20 transition-colors group-hover:text-burgundy/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                    {service.name}
                  </h3>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description.length > 180
                      ? `${service.description.slice(0, 180)}...`
                      : service.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-burgundy transition-all group-hover:gap-2.5">
                    Detaylı Bilgi
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Harita / Konum — Full-Width with Prominent Overlay */}
      <section className="pb-16 md:pb-24">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFade}
            className="mb-12 max-w-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              <span className="text-burgundy">Konumumuz</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Bursa Nilüfer&apos;deki ofisimizde sizi ağırlamaktan mutluluk
              duyarız.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[450px] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 md:h-[500px]">
              <iframe
                title="Proses Yazılım Konum"
                src={CONTACT.maps.embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />

              {/* Prominent overlay card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-black/90 sm:right-auto sm:max-w-md">
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-burgundy/10">
                    <MapPin className="h-6 w-6 text-burgundy" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900 dark:text-white">
                      Proses Yazılım
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {CONTACT.address.street}
                      <br />
                      {CONTACT.address.building}
                      <br />
                      {CONTACT.address.district}
                    </p>
                  </div>
                </div>

                {/* Contact info */}
                <div className="mb-4 flex flex-col gap-2 border-t border-slate-200 pt-4 dark:border-white/10">
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-burgundy dark:text-slate-300"
                  >
                    <Phone className="h-4 w-4 text-burgundy" />
                    {CONTACT.phone}
                  </a>
                  <a
                    href={CONTACT.emailHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-burgundy dark:text-slate-300"
                  >
                    <Mail className="h-4 w-4 text-burgundy" />
                    {CONTACT.email}
                  </a>
                  <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="h-4 w-4 text-burgundy/60" />
                    {CONTACT.workingHours}
                  </div>
                </div>

                <a
                  href={CONTACT.maps.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-burgundy/10 px-4 py-2 text-sm font-medium text-burgundy transition-colors hover:bg-burgundy/20"
                  aria-label="Google Maps üzerinde yol tarifi al"
                >
                  Yol tarifi al
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section — Full-Width Burgundy Gradient */}
      <section className="pb-16 md:pb-24">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFade}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-burgundy via-crimson to-dark-red p-10 text-center md:p-16 lg:p-20"
          >
            {/* Decorative blur orbs */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
            </div>

            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Hemen Arayın
              </h2>
              <p className="mx-auto mb-6 max-w-lg text-base leading-relaxed text-white/80">
                Bursa&apos;daki işletmeniz için en uygun Logo çözümünü
                birlikte belirleyelim. Ücretsiz keşif görüşmesi için hemen
                bize ulaşın.
              </p>

              {/* Phone number prominent */}
              <a
                href={CONTACT.phoneHref}
                className="mb-8 inline-flex items-center gap-3 text-2xl font-bold text-white transition-opacity hover:opacity-90 md:text-3xl"
              >
                <Phone className="h-7 w-7" />
                {CONTACT.phone}
              </a>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-burgundy transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                >
                  İletişime Geçin
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
