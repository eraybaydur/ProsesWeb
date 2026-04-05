'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, Phone } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { getOtherSolutions } from '@/lib/solutions';
import type { Solution } from '@/lib/solutions';

type SolutionPageProps = {
  solution: Omit<Solution, 'icon'>;
};

const heroImages: Record<string, string> = {
  'logo-tiger-3': '/images/factory.jpg',
  'logo-go-3': '/images/consulting.jpg',
  'logo-crm': '/images/team-meeting.jpg',
  'logo-flow': '/images/dashboard-analytics.jpg',
  'logo-mind': '/images/data-screen.jpg',
  'logo-budget': '/images/erp-dashboard.jpg',
};

export function SolutionPageClient({ solution }: SolutionPageProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const otherSolutions = getOtherSolutions(solution.slug);
  const descriptionParagraphs = solution.description.split('\n\n');
  const heroImage = heroImages[solution.slug] || '/images/erp-dashboard.jpg';

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${solution.name}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        </div>

        <div className="site-container relative z-10 pb-16 md:pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Breadcrumb
              items={[
                { label: 'Çözümler', href: '/#cozumler' },
                { label: solution.name },
              ]}
            />
          </motion.div>

          <div className="mt-10 max-w-3xl">
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 overflow-hidden shrink-0">
                <Image
                  src={solution.logo}
                  alt={solution.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                {solution.name}
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white/65 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {solution.headline}
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-medium text-sm transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: solution.color }}
              >
                Demo Talep Et
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:08506776737"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-white/80 text-sm border border-white/15 hover:border-white/30 transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5" />
                0850 677 67 37
              </a>
            </motion.div>
          </div>

          {/* Benefits */}
          <motion.div
            className="mt-12 flex gap-10 md:gap-14 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {solution.benefits.map((benefit, i) => (
              <div key={i}>
                <span className="block text-2xl md:text-3xl font-bold text-white">
                  {benefit.value}
                </span>
                <span className="text-xs text-white/40 mt-1 block uppercase tracking-wide">
                  {benefit.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HAKKINDA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Decorative side patterns */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Left dot grid */}
          <svg className="absolute left-4 md:left-8 top-12 w-48 h-48 opacity-[0.12] dark:opacity-[0.15]" viewBox="0 0 200 200">
            {Array.from({ length: 100 }).map((_, i) => (
              <circle key={i} cx={(i % 10) * 20 + 10} cy={Math.floor(i / 10) * 20 + 10} r="2" fill={solution.color} />
            ))}
          </svg>
          {/* Right decorative circles */}
          <svg className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.08] dark:opacity-[0.12]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" stroke={solution.color} strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="60" stroke={solution.color} strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="30" stroke={solution.color} strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div className="site-container relative">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground sticky top-28">
                Hakkında
              </h2>
            </div>
            <div className="space-y-5">
              {descriptionParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-xl text-slate-700 dark:text-slate-300 leading-relaxed'
                      : 'text-base text-slate-500 dark:text-slate-400 leading-relaxed'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLIKLER */}
      <section className="relative py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04] overflow-hidden">
        {/* Decorative cross pattern - right side */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute right-4 md:right-8 top-16 w-40 h-[calc(100%-8rem)] opacity-[0.08] dark:opacity-[0.1]" preserveAspectRatio="none" viewBox="0 0 100 400">
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 20} x2="100" y2={i * 20} stroke={solution.color} strokeWidth="0.5" />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="400" stroke={solution.color} strokeWidth="0.5" />
            ))}
          </svg>
          {/* Left accent line */}
          <div
            className="absolute left-0 top-24 w-[2px] h-40 opacity-20 dark:opacity-25"
            style={{ backgroundColor: solution.color }}
          />
        </div>

        <div className="site-container relative">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-14">
            Özellikler
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {solution.features.map((feature, i) => (
              <div
                key={i}
                className="py-7 border-b border-slate-100 dark:border-white/[0.04]"
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="text-sm tabular-nums text-slate-300 dark:text-white/15 font-medium shrink-0"
                  >
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

      {/* MODÜLLER */}
      <section className="relative py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04] overflow-hidden">
        {/* Decorative diamond pattern - left side */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-56 h-56 opacity-[0.1] dark:opacity-[0.12]" viewBox="0 0 200 200">
            <rect x="60" y="60" width="80" height="80" transform="rotate(45 100 100)" stroke={solution.color} strokeWidth="1.5" fill="none" />
            <rect x="75" y="75" width="50" height="50" transform="rotate(45 100 100)" stroke={solution.color} strokeWidth="1.5" fill="none" />
            <rect x="90" y="90" width="20" height="20" transform="rotate(45 100 100)" stroke={solution.color} strokeWidth="1" fill={solution.color} fillOpacity="0.15" />
          </svg>
          {/* Right dot column */}
          <svg className="absolute right-6 md:right-10 top-20 w-8 h-64 opacity-[0.15] dark:opacity-[0.18]" viewBox="0 0 20 300">
            {Array.from({ length: 15 }).map((_, i) => (
              <circle key={i} cx="10" cy={i * 20 + 10} r="2" fill={solution.color} />
            ))}
          </svg>
        </div>

        <div className="site-container relative">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Modüller
            </h2>
            <span className="text-sm text-slate-400 dark:text-slate-500 hidden md:block">
              {solution.modules.length} modül
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {solution.modules.map((mod, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/[0.03] text-sm text-foreground"
              >
                <div
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: solution.color }}
                />
                {mod}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KİMLER İÇİN + ENTEGRASYONLAR */}
      <section className="relative py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04] overflow-hidden">
        {/* Decorative corner brackets */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Top-right bracket */}
          <svg className="absolute right-8 md:right-12 top-12 w-24 h-24 opacity-[0.12] dark:opacity-[0.15]" viewBox="0 0 60 60">
            <path d="M20 0 L60 0 L60 40" stroke={solution.color} strokeWidth="1.5" fill="none" />
          </svg>
          {/* Bottom-left bracket */}
          <svg className="absolute left-8 md:left-12 bottom-12 w-24 h-24 opacity-[0.12] dark:opacity-[0.15]" viewBox="0 0 60 60">
            <path d="M40 60 L0 60 L0 20" stroke={solution.color} strokeWidth="1.5" fill="none" />
          </svg>
          {/* Center-left plus signs */}
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-48 opacity-[0.1] dark:opacity-[0.14]" viewBox="0 0 30 200">
            {[40, 100, 160].map((y, i) => (
              <g key={i}>
                <line x1="15" y1={y - 8} x2="15" y2={y + 8} stroke={solution.color} strokeWidth="1" />
                <line x1="7" y1={y} x2="23" y2={y} stroke={solution.color} strokeWidth="1" />
              </g>
            ))}
          </svg>
        </div>

        <div className="site-container relative">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-5">
                Kimler İçin?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {solution.targetAudience}
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-5">
                Entegrasyonlar
              </h2>
              <ul className="space-y-3">
                {solution.integrations.map((integration, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                    <Check
                      className="w-4 h-4 shrink-0 mt-1"
                      style={{ color: solution.color }}
                    />
                    <span className="text-sm">{integration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="relative py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04] overflow-hidden">
        {/* Decorative question mark inspired pattern */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute right-4 md:right-10 top-20 w-48 h-48 opacity-[0.08] dark:opacity-[0.1]" viewBox="0 0 200 200">
            {Array.from({ length: 64 }).map((_, i) => (
              <circle key={i} cx={(i % 8) * 25 + 12} cy={Math.floor(i / 8) * 25 + 12} r="1.5" fill={solution.color} />
            ))}
          </svg>
          {/* Left vertical dashes */}
          <svg className="absolute left-4 top-16 w-4 h-80 opacity-[0.12] dark:opacity-[0.15]" viewBox="0 0 10 400">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={i} x1="5" y1={i * 40} x2="5" y2={i * 40 + 20} stroke={solution.color} strokeWidth="1.5" />
            ))}
          </svg>
        </div>

        <div className="site-container relative">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground sticky top-28">
                Sıkça Sorulan Sorular
              </h2>
            </div>

            <div>
              {solution.faq.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={i}
                    className="border-b border-slate-200 dark:border-white/[0.06]"
                  >
                    <button
                      onClick={() => setActiveIndex(isActive ? null : i)}
                      className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
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
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
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

      {/* DİĞER ÇÖZÜMLER */}
      <section className="relative py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04] overflow-hidden">
        {/* Decorative hexagon pattern */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute left-4 md:left-8 bottom-8 w-40 h-40 opacity-[0.08] dark:opacity-[0.12]" viewBox="0 0 200 200">
            <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" stroke={solution.color} strokeWidth="1.5" fill="none" />
            <polygon points="100,40 160,67 160,133 100,160 40,133 40,67" stroke={solution.color} strokeWidth="1" fill="none" />
          </svg>
          <svg className="absolute right-4 md:right-8 top-10 w-8 h-64 opacity-[0.12] dark:opacity-[0.15]" viewBox="0 0 15 300">
            {Array.from({ length: 12 }).map((_, i) => (
              <rect key={i} x="4" y={i * 25} width="7" height="7" transform={`rotate(45 7.5 ${i * 25 + 3.5})`} stroke={solution.color} strokeWidth="0.5" fill="none" />
            ))}
          </svg>
        </div>

        <div className="site-container relative">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10">
            Diğer Çözümlerimiz
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherSolutions.map((other) => (
              <Link
                key={other.slug}
                href={`/cozumler/${other.slug}`}
                className="group flex items-center gap-4 p-4 rounded-lg border border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/12 transition-colors duration-200 cursor-pointer"
              >
                <div
                  className="relative w-10 h-10 rounded-lg shrink-0 overflow-hidden"
                  style={{ backgroundColor: other.color + '10' }}
                >
                  <Image
                    src={other.logo}
                    alt={other.name}
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-foreground text-sm block">{other.name}</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 truncate block">{other.shortDescription}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-white/15 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/code-office.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{ backgroundColor: solution.color }}
        />

        <div className="site-container relative z-10 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Projeleriniz İçin Yanınızdayız
            </h2>
            <p className="text-white/60 text-base mb-8 leading-relaxed">
              {solution.name} hakkında detaylı bilgi almak ve işletmenize özel
              çözüm önerilerimizi dinlemek için bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white font-medium text-sm hover:bg-white/95 transition-colors duration-200"
                style={{ color: solution.color }}
              >
                İletişime Geçin
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:08506776737"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-white/80 text-sm border border-white/20 hover:border-white/35 transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5" />
                0850 677 67 37
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
