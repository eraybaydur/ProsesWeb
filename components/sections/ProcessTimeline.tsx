'use client';

import { motion } from 'framer-motion';
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
    return (
        <section className="py-24 md:py-32 bg-slate-50 dark:bg-deep-space">
            <div className="site-container">
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

                {/* Steps */}
                <div className="relative">
                    {/* Desktop connecting line */}
                    <div className="hidden md:block absolute top-[60px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px z-0">
                        <motion.div
                            className="h-full bg-gradient-to-r from-burgundy/30 via-burgundy/15 to-burgundy/30"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.12 }}
                                    className="relative group"
                                >
                                    <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-0">
                                        {/* Number circle */}
                                        <div className="relative z-10 shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-white dark:bg-deep-space border-2 border-slate-200 dark:border-white/10 group-hover:border-burgundy flex items-center justify-center transition-colors duration-300">
                                                <Icon className="w-5 h-5 text-burgundy" />
                                            </div>
                                            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-burgundy text-white text-[10px] font-bold flex items-center justify-center">
                                                {step.id}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 md:mt-6 md:text-center pb-8 md:pb-0">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-burgundy transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                                                {step.description}
                                            </p>
                                            <span className="inline-block text-xs text-burgundy/60 font-medium tracking-wide">
                                                {step.detail}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Mobile vertical connector */}
                                    {index < steps.length - 1 && (
                                        <div className="md:hidden absolute left-[23px] top-[56px] bottom-0 w-px bg-gradient-to-b from-burgundy/20 to-transparent" />
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
