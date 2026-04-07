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

  const nameParts = service.name.split(' ');
  const lastWord = nameParts.pop();
  const firstWords = nameParts.join(' ');

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="site-container">
          <Breadcrumb
            items={[
              { label: 'Hizmetler', href: '/hizmetler' },
              { label: service.name },
            ]}
          />

          <div className="mt-10 flex items-center gap-12">
            <div className="max-w-2xl lg:w-1/2">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-6">
                <span className="w-8 h-px bg-burgundy" />
                Hizmetler
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {firstWords}{firstWords ? ' ' : ''}
                <span className="text-burgundy">{lastWord}</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
                {service.headline}
              </p>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-lg bg-burgundy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-dark-red"
              >
                Teklif Alın
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="hidden lg:block lg:w-1/2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={heroImages[service.slug] ?? '/images/consulting.jpg'}
                  alt={service.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, var(--background) 0%, transparent 30%)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04]">
        <div className="site-container">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:sticky md:top-28">
              Hakkında
            </h2>
            <div className="space-y-5">
              {service.description.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-xl text-slate-800 dark:text-slate-200 leading-relaxed'
                      : 'text-base text-slate-600 dark:text-slate-400 leading-relaxed'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04]">
          <div className="site-container">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-12">
              {service.name} Çözümleri
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200/80 dark:bg-white/[0.06] rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/[0.06]">
              {service.subServices.map((sub, i) => (
                <div
                  key={sub.name}
                  className="bg-white dark:bg-deep-space p-6 md:p-8 flex flex-col"
                >
                  <span className="text-xs font-mono text-slate-300 dark:text-white/15 mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04]">
        <div className="site-container">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Özellikler
            </h2>
            <span className="text-sm text-slate-400 dark:text-slate-500 hidden md:block">
              {service.features.length} özellik
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="py-6 border-b border-slate-100 dark:border-white/[0.04]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-sm tabular-nums text-slate-300 dark:text-white/15 font-mono shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04]">
        <div className="site-container">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:sticky md:top-28">
              Sıkça Sorulan Sorular
            </h2>

            <div className="divide-y divide-slate-200 dark:divide-white/[0.06]">
              {service.faq.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setActiveIndex(isActive ? null : i)}
                      className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
                    >
                      <span className="font-medium text-foreground pr-4 text-[15px]">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      {relatedSolutions.length > 0 && (
        <section className="py-16 border-t border-slate-200/60 dark:border-white/[0.04]">
          <div className="site-container">
            <h2 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-6">
              İlgili Çözümler
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedSolutions.map((solution) => {
                if (!solution) return null;
                return (
                  <Link
                    key={solution.slug}
                    href={`/cozumler/${solution.slug}`}
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/12 transition-colors"
                  >
                    <div className="relative h-6 w-6 shrink-0">
                      <Image
                        src={solution.logo}
                        alt={solution.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {solution.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-white/[0.03] border-t border-slate-200/60 dark:border-white/[0.04]">
        <div className="site-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Detaylı Bilgi Almak İster Misiniz?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base mb-8 max-w-xl mx-auto">
            {service.name} hizmeti hakkında detaylı bilgi almak ve işletmenize özel teklif için
            bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-lg bg-burgundy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-dark-red"
          >
            İletişime Geçin
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
