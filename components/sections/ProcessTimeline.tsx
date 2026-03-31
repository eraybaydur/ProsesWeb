'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Search, Settings, GraduationCap, Headset } from 'lucide-react';

const steps = [
    {
        id: 1,
        number: '01',
        title: 'Analiz & Planlama',
        description: 'İş süreçlerinizi detaylıca inceliyor, ihtiyaçlarınızı belirliyor ve size özel yol haritası çıkarıyoruz.',
        detail: 'Mevcut altyapı analizi, ihtiyaç tespiti, proje planı',
        icon: Search,
    },
    {
        id: 2,
        number: '02',
        title: 'Kurulum & Entegrasyon',
        description: 'Belirlenen çözümleri sisteminize entegre ediyor, veri aktarımlarını sağlıyor ve kullanıma hazırlıyoruz.',
        detail: 'Yazılım kurulumu, veri aktarımı, sistem entegrasyonu',
        icon: Settings,
    },
    {
        id: 3,
        number: '03',
        title: 'Eğitim & Uygulama',
        description: 'Ekibinize kapsamlı eğitimler veriyor, pilot uygulamalarla sistemin sorunsuz çalıştığını doğruluyoruz.',
        detail: 'Kullanıcı eğitimi, pilot uygulama, canlıya geçiş',
        icon: GraduationCap,
    },
    {
        id: 4,
        number: '04',
        title: 'Destek & Geliştirme',
        description: 'Canlıya geçiş sonrası kesintisiz destek sağlıyor, değişen ihtiyaçlarınıza göre sistemi güncel tutuyoruz.',
        detail: '7/24 teknik destek, güncelleme, sürekli iyileştirme',
        icon: Headset,
    },
];

export default function ProcessTimeline() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const backgroundY = useTransform(smoothProgress, [0, 1], ['-10%', '10%']);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-deep-space"
        >
            {/* Background */}
            <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </motion.div>

            {/* Subtle orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="site-container relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-3 text-sm font-semibold text-burgundy uppercase tracking-wider mb-5">
                            <span className="w-8 h-px bg-burgundy" />
                            Nasıl Çalışıyoruz?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            <span className="text-slate-900 dark:text-white">4 Adımda </span>
                            <span className="text-burgundy">Dijital Dönüşüm</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl text-base md:text-lg leading-relaxed">
                            Karmaşık süreçleri basitleştiriyor, işletmenizi geleceğe taşıyoruz.
                        </p>
                    </motion.div>
                </div>

                {/* Steps — Desktop: horizontal, Mobile: vertical */}
                <div className="relative">
                    {/* Desktop connecting line */}
                    <div className="hidden md:block absolute top-[60px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px z-0">
                        <motion.div
                            className="h-full bg-gradient-to-r from-burgundy/40 via-crimson/20 to-burgundy/40"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="relative group"
                                >
                                    {/* Step indicator */}
                                    <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-0">
                                        {/* Number circle */}
                                        <div className="relative z-10 shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-white dark:bg-deep-space border-2 border-burgundy/30 group-hover:border-burgundy flex items-center justify-center transition-colors duration-300 shadow-sm">
                                                <Icon className="w-5 h-5 text-burgundy" />
                                            </div>
                                            {/* Step number badge */}
                                            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-burgundy text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                                                {step.id}
                                            </span>
                                        </div>

                                        {/* Content — mobile: beside icon, desktop: below */}
                                        <div className="flex-1 md:mt-6 md:text-center pb-8 md:pb-0">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-burgundy transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                                                {step.description}
                                            </p>
                                            <span className="inline-block text-xs text-burgundy/70 dark:text-burgundy/50 font-medium tracking-wide">
                                                {step.detail}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Mobile vertical connector */}
                                    {index < steps.length - 1 && (
                                        <div className="md:hidden absolute left-[23px] top-[56px] bottom-0 w-px bg-gradient-to-b from-burgundy/30 to-transparent" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
