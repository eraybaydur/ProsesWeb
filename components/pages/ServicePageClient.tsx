'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { getSolutionBySlug } from '@/lib/solutions';
import type { Service } from '@/lib/solutions';

type ServiceData = Omit<Service, 'icon'>;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const heroImages: Record<string, string> = {
  'e-donusum': '/images/digital-transform.jpg',
  'ozel-yazilim': '/images/code-office.jpg',
  'erp-danismanligi': '/images/consulting.jpg',
  'teknik-destek': '/images/support-team.jpg',
};

export function ServicePageClient({ service }: { service: ServiceData }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const relatedSolutions = service.relatedSolutions
    .map((slug) => getSolutionBySlug(slug))
    .filter(Boolean);

  // Split the service name to apply burgundy gradient to the last word
  const nameParts = service.name.split(' ');
  const lastWord = nameParts.pop();
  const firstWords = nameParts.join(' ');

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-28">
        {/* Grid background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

        {/* Burgundy glow orb top-right */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-burgundy/10 blur-[120px]" />

        <div className="site-container relative z-10">
          <Breadcrumb
            items={[
              { label: 'Hizmetler', href: '/#hizmetler' },
              { label: service.name },
            ]}
          />

          <div className="mt-8 flex items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl lg:w-1/2"
            >
              {/* Badge pill */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-burgundy/20 bg-burgundy/10 px-4 py-1.5 text-sm font-medium text-burgundy">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-burgundy" />
                Hizmetler
              </div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                {firstWords}{firstWords ? ' ' : ''}
                <span className="bg-gradient-to-r from-burgundy to-crimson bg-clip-text text-transparent">
                  {lastWord}
                </span>
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {service.headline}
              </p>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-xl bg-burgundy px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-burgundy/25 transition-all duration-300 hover:bg-dark-red hover:shadow-xl hover:shadow-burgundy/30"
              >
                Teklif Alin
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block lg:w-1/2"
            >
              <div className="relative h-[400px] rounded-r-2xl overflow-hidden">
                <Image
                  src={heroImages[service.slug] ?? '/images/consulting.jpg'}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                {/* Fade gradient toward text side */}
                <div
                  className="absolute inset-0 z-[1]"
                  style={{ background: 'linear-gradient(to right, var(--background) 0%, var(--background) 3%, transparent 40%)' }}
                />
                {/* Bottom color accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[100px] z-[2] bg-gradient-to-t from-burgundy/25 to-transparent" />
                {/* Top vignette */}
                <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-black/15 to-transparent z-[1]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-24">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl border-l-4 border-burgundy/30 pl-6"
          >
            {service.description.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className={`mb-6 leading-relaxed last:mb-0 ${
                  i === 0
                    ? 'text-xl font-medium text-slate-800 dark:text-slate-200'
                    : 'text-base text-slate-600 dark:text-slate-400'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sub-services */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Alt Hizmetler
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {service.name} kapsaminda sunduğumuz çözümler
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
              {service.subServices.map((sub, i) => (
                <motion.div
                  key={sub.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-burgundy/40 hover:shadow-lg hover:shadow-burgundy/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-burgundy/40"
                >
                  {/* Large number indicator */}
                  <span className="mb-4 block text-4xl font-bold leading-none text-burgundy/20 transition-colors duration-300 group-hover:text-burgundy/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {sub.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {sub.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features — Bento Grid */}
      <section className="py-16 md:py-24">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Özellikler
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              {service.name} hizmetimizin temel özellikleri
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:shadow-burgundy/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                {/* Burgundy accent bar */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-burgundy to-crimson" />

                <div className="mt-2 flex items-start gap-4">
                  <span className="shrink-0 text-3xl font-bold leading-none text-burgundy/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — Minimalist */}
      <section className="py-16 md:py-24">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          <div className="mx-auto max-w-3xl divide-y divide-slate-200 dark:divide-white/10">
            {service.faq.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-base font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      activeIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="border-l-4 border-burgundy/40 pb-6 pl-6">
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions — Pill Cards */}
      {relatedSolutions.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                İlgili Çözümler
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                Bu hizmetle birlikte kullanabileceğiniz Logo ürünleri
              </p>
            </motion.div>

            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4">
              {relatedSolutions.map((solution, i) => {
                if (!solution) return null;
                return (
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
                      className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-burgundy/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-burgundy/30"
                    >
                      <div className="relative h-8 w-8 shrink-0 rounded-lg bg-white dark:bg-white/10 overflow-hidden">
                        <Image
                          src={solution.logo}
                          alt={solution.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {solution.name}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-burgundy" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA — Full-width gradient */}
      <section className="py-16 md:py-24">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/boardroom.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-burgundy/90 via-crimson/90 to-burgundy/90" />

            {/* Decorative orbs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />

            <div className="relative z-10 px-8 py-16 text-center md:px-16 md:py-20">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Detayli Bilgi Almak İster Misiniz?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-white/80">
                {service.name} hizmeti hakkinda detayli bilgi almak ve işletmenize özel teklif için
                bizimle iletişime geçin.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-burgundy"
              >
                İletişime Geçin
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
