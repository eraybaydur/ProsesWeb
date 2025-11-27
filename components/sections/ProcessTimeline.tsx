'use client';

import { motion } from 'framer-motion';
import { Search, Settings, GraduationCap, Headset, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const steps = [
    {
        id: 1,
        title: 'Analiz & Planlama',
        description: 'İş süreçlerinizi detaylıca inceliyor, ihtiyaçlarınızı belirliyor ve size özel en uygun yol haritasını çıkarıyoruz.',
        icon: <Search className="w-6 h-6" />,
        color: 'bg-blue-500',
        glow: 'shadow-[0_0_20px_rgba(59,130,246,0.5)]'
    },
    {
        id: 2,
        title: 'Kurulum & Entegrasyon',
        description: 'Belirlenen çözümleri sisteminize entegre ediyor, veri aktarımlarını sağlıyor ve sistemi kullanıma hazır hale getiriyoruz.',
        icon: <Settings className="w-6 h-6" />,
        color: 'bg-purple-500',
        glow: 'shadow-[0_0_20px_rgba(168,85,247,0.5)]'
    },
    {
        id: 3,
        title: 'Eğitim & Uygulama',
        description: 'Ekibinize detaylı kullanıcı eğitimleri veriyor, pilot uygulamalarla sistemin sorunsuz işlediğinden emin oluyoruz.',
        icon: <GraduationCap className="w-6 h-6" />,
        color: 'bg-orange-500',
        glow: 'shadow-[0_0_20px_rgba(249,115,22,0.5)]'
    },
    {
        id: 4,
        title: 'Destek & Geliştirme',
        description: 'Canlıya geçiş sonrası 7/24 destek sağlıyor, değişen ihtiyaçlarınıza göre sistemi sürekli güncel tutuyoruz.',
        icon: <Headset className="w-6 h-6" />,
        color: 'bg-emerald-500',
        glow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]'
    }
];

export default function ProcessTimeline() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-deep-space">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-crimson/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-crimson font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Nasıl Çalışıyoruz?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
                    >
                        4 Adımda <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson">Dijital Dönüşüm</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Karmaşık süreçleri basitleştiriyor, işletmenizi geleceğe taşıyan profesyonel bir yolculuk sunuyoruz.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative group"
                            >
                                {/* Step Number Badge */}
                                <div className={`absolute left-1/2 -translate-x-1/2 -top-6 w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-xl z-20 ${step.glow} ring-4 ring-slate-50 dark:ring-deep-space transition-transform duration-300 group-hover:scale-110`}>
                                    {step.id}
                                </div>

                                <GlassCard className="pt-12 pb-8 px-6 text-center h-full !bg-white/50 dark:!bg-white/5 hover:!bg-white dark:hover:!bg-white/10 transition-all duration-300 group-hover:-translate-y-2">
                                    <div className={`w-12 h-12 mx-auto mb-6 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center text-${step.color.replace('bg-', '')}`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </GlassCard>

                                {/* Arrow for mobile flow */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden flex justify-center my-4 text-slate-300 dark:text-white/20">
                                        <ArrowRight className="w-6 h-6 rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
