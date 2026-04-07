'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Solution } from '@/lib/solutions';

type Props = {
  solutions: Omit<Solution, 'icon'>[];
};

export function SolutionsIndexClient({ solutions }: Props) {
  return (
    <section className="pt-32 pb-24">
      <div className="site-container">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-burgundy" />
            Çözümlerimiz
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Logo Yazılım Çözümleri
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            İşletmenizin büyüklüğüne ve ihtiyacına uygun Logo ERP çözümünü
            keşfedin. Kurulum, eğitim ve destek hizmetleriyle yanınızdayız.
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200/80 dark:bg-white/[0.06] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.06]">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/cozumler/${solution.slug}`}
                className="group flex flex-col h-full bg-white dark:bg-deep-space p-8 md:p-10 transition-colors duration-300 hover:bg-slate-50 dark:hover:bg-white/[0.02]"
              >
                {/* Logo */}
                <div className="relative w-12 h-12 rounded-xl overflow-hidden mb-8 bg-slate-50 dark:bg-white/[0.06]">
                  <Image
                    src={solution.logo}
                    alt={solution.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Text */}
                <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                  {solution.name}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 line-clamp-3">
                  {solution.shortDescription}
                </p>

                {/* Link */}
                <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-slate-500 group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                  Detayları incele
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
