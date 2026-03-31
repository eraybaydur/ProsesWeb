'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';
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

      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        {/* Background gradient with product color */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${solution.color}08 0%, transparent 50%, ${solution.color}12 100%)`,
          }}
        />
        {/* Decorative blur orbs */}
        <div
          className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.07] pointer-events-none"
          style={{ backgroundColor: solution.color }}
        />
        <div
          className="absolute bottom-0 left-[5%] w-[300px] h-[300px] rounded-full blur-[120px] opacity-[0.05] pointer-events-none"
          style={{ backgroundColor: solution.color }}
        />

        <div className="site-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb
              items={[
                { label: 'Çözümler', href: '/#cozumler' },
                { label: solution.name },
              ]}
            />
          </motion.div>

          <div className="mt-12 md:mt-16 flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
            {/* Left column: text content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
                {/* Product Logo */}
                <motion.div
                  className="shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div
                    className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-2xl bg-white dark:bg-white/10 p-4 overflow-hidden"
                    style={{
                      boxShadow: `0 20px 60px -15px ${solution.color}40, 0 0 0 1px ${solution.color}15`,
                    }}
                  >
                    <Image
                      src={solution.logo}
                      alt={solution.name}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                </motion.div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    {solution.name}
                  </motion.h1>

                  <motion.p
                    className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {solution.headline}
                  </motion.p>

                  {/* Benefit pills */}
                  <motion.div
                    className="mt-10 flex flex-wrap gap-4 md:gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {solution.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-start"
                      >
                        <span
                          className="text-2xl md:text-3xl font-bold"
                          style={{ color: solution.color }}
                        >
                          {benefit.value}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                          {benefit.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px]"
                      style={{
                        backgroundColor: solution.color,
                        boxShadow: `0 4px 20px -5px ${solution.color}50`,
                      }}
                    >
                      Detaylı Bilgi Al
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right column: Hero image (desktop only) */}
            <motion.div
              className="hidden lg:block shrink-0 w-[420px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-r-2xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt={`${solution.name} görsel`}
                  fill
                  className="object-cover"
                  sizes="420px"
                  priority
                />
                {/* Right-to-left fade gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(to right, var(--background) 0%, var(--background) 3%, transparent 40%)`,
                  }}
                />
                {/* Bottom color accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none"
                  style={{
                    background: `linear-gradient(to top, ${solution.color}25, transparent)`,
                  }}
                />
                {/* Top vignette */}
                <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-black/15 to-transparent pointer-events-none" />
                {/* Product logo */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
                  <Image
                    src={solution.logo}
                    alt={solution.name}
                    width={200}
                    height={80}
                    className="w-[55%] h-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HAKKINDA SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="site-container">
          <motion.div
            className="flex flex-col md:flex-row gap-10 md:gap-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Left accent */}
            <div className="shrink-0 flex flex-col items-start">
              <div
                className="w-1 h-20 md:h-32 rounded-full"
                style={{ backgroundColor: solution.color }}
              />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-foreground writing-vertical-lr md:writing-normal">
                Hakkında
              </h2>
            </div>

            {/* Right text */}
            <div className="flex-1 space-y-5">
              {descriptionParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light'
                      : 'text-base text-slate-600 dark:text-slate-400 leading-relaxed'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OZELLIKLER SECTION
          ═══════════════════════════════════════════ */}
      <section
        className="py-20 md:py-32"
        style={{
          background: `linear-gradient(180deg, ${solution.color}04 0%, transparent 50%, ${solution.color}04 100%)`,
        }}
      >
        <div className="site-container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Özellikler
          </motion.h2>

          <div className="space-y-0">
            {solution.features.map((feature, i) => (
              <motion.div
                key={i}
                className="group py-8 md:py-10 border-b border-slate-200 dark:border-white/[0.06] first:border-t"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-6 md:gap-10">
                  {/* Number */}
                  <span
                    className="text-4xl md:text-5xl font-bold leading-none shrink-0 opacity-30 group-hover:opacity-60 transition-opacity duration-300 tabular-nums"
                    style={{ color: solution.color }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MODULLER SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="site-container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Modüller
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {solution.modules.map((mod, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:translate-y-[-2px] hover:shadow-md transition-all duration-300"
                style={{
                  borderLeftWidth: '3px',
                  borderLeftColor: solution.color,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{
                  borderLeftColor: solution.color,
                  boxShadow: `0 8px 30px -10px ${solution.color}20`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: solution.color }}
                />
                <span className="text-sm font-medium text-foreground">
                  {mod}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          KIMLER ICIN + ENTEGRASYONLAR SECTION
          ═══════════════════════════════════════════ */}
      <section
        className="py-20 md:py-32"
        style={{
          background: `linear-gradient(180deg, ${solution.color}04 0%, transparent 100%)`,
        }}
      >
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Kimler Icin */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold"
                  style={{ backgroundColor: solution.color }}
                >
                  ?
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Kimler İçin?
                </h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {solution.targetAudience}
              </p>
              {/* Illustrative image */}
              <div className="mt-8 relative h-[200px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/tech-woman.jpg"
                  alt="Teknoloji ile çalışan profesyonel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-burgundy to-transparent" />
              </div>
              {/* Decorative element */}
              <div
                className="mt-8 w-full h-px"
                style={{
                  background: `linear-gradient(to right, ${solution.color}40, transparent)`,
                }}
              />
            </motion.div>

            {/* Entegrasyonlar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Entegrasyonlar
              </h2>
              <ul className="space-y-3">
                {solution.integrations.map((integration, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <Check
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: solution.color }}
                    />
                    <span>{integration}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SSS (FAQ) SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="site-container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Sıkça Sorulan Sorular
          </motion.h2>

          <div className="max-w-3xl">
            {solution.faq.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={i}
                  className="border-b border-slate-200 dark:border-white/[0.06]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      borderLeft: isActive ? `3px solid ${solution.color}` : '3px solid transparent',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    <button
                      onClick={() => setActiveIndex(isActive ? null : i)}
                      className="w-full flex items-center justify-between py-6 pl-5 pr-2 text-left group"
                    >
                      <span className="font-medium text-foreground pr-4 group-hover:translate-x-1 transition-transform duration-300">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pl-5 pr-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DIGER COZUMLER SECTION
          ═══════════════════════════════════════════ */}
      <section
        className="py-20 md:py-32"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${solution.color}04 50%, transparent 100%)`,
        }}
      >
        <div className="site-container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Diğer Çözümlerimiz
          </motion.h2>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
            {otherSolutions.map((other, i) => (
              <motion.div
                key={other.slug}
                className="snap-start shrink-0 w-[280px] md:w-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/cozumler/${other.slug}`}
                  className="group block h-full rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] overflow-hidden hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
                  style={{
                    borderTopWidth: '3px',
                    borderTopColor: other.color,
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-xl bg-white dark:bg-white/10 shrink-0 overflow-hidden">
                        <Image
                          src={other.logo}
                          alt={other.name}
                          fill
                          className="object-contain p-1.5"
                        />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-burgundy transition-colors">
                        {other.name}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {other.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: other.color }}>
                      <span>İncele</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/code-office.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Full-width gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${solution.color}cc 0%, ${solution.color}99 50%, ${solution.color}88 100%)`,
          }}
        />

        {/* Decorative blur orbs */}
        <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] rounded-full bg-white/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-30px] w-[250px] h-[250px] rounded-full bg-white/[0.07] blur-[60px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-white/[0.05] blur-[100px] pointer-events-none" />

        <div className="site-container relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Projeleriniz İçin Yanınızdayız
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              {solution.name} hakkında detaylı bilgi almak ve işletmenize özel
              çözüm önerilerimizi dinlemek için bizimle iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-xl bg-white font-semibold transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] hover:bg-white/95"
              style={{ color: solution.color }}
            >
              İletişime Geçin
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
