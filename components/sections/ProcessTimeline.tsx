'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
    const sectionRef = useRef<HTMLDivElement>(null);

    // Scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Parallax transforms - daha güçlü efektler
    const backgroundY = useTransform(smoothProgress, [0, 1], ['-15%', '15%']);
    const orbsY = useTransform(smoothProgress, [0, 1], ['50%', '-50%']);
    const contentY = useTransform(smoothProgress, [0, 1], ['8%', '-8%']);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    return (
        <section
            ref={sectionRef}
            className="py-32 relative overflow-hidden bg-slate-50 dark:bg-deep-space"
        >
            {/* Parallax Background Layer */}
            <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-burgundy/5" />
            </motion.div>

            {/* Parallax Floating Orbs */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbsY }}>
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-burgundy/5 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-20 right-20 w-64 h-64 bg-crimson/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-48 h-48 bg-accent-red/10 rounded-full blur-[80px]"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </motion.div>

            {/* Main Content with Parallax */}
            <motion.div
                className="container mx-auto px-6 relative z-10"
                style={{ y: contentY, scale, opacity }}
            >
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-burgundy font-semibold tracking-wider uppercase text-sm mb-4"
                    >
                        <span className="w-8 h-px bg-burgundy" />
                        Nasıl Çalışıyoruz?
                        <span className="w-8 h-px bg-burgundy" />
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
                    >
                        4 Adımda <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">Dijital Dönüşüm</span>
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
                    <motion.div
                        className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 z-0 overflow-hidden"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <div className="w-full h-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 via-orange-500/30 to-emerald-500/30" />
                    </motion.div>

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
                                <motion.div
                                    className={`absolute left-1/2 -translate-x-1/2 -top-6 w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-xl z-20 ${step.glow} ring-4 ring-slate-50 dark:ring-deep-space`}
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {step.id}
                                </motion.div>

                                <GlassCard className="pt-12 pb-8 px-6 text-center h-full !bg-white/50 dark:!bg-white/5 hover:!bg-white dark:hover:!bg-white/10 transition-all duration-300 group-hover:-translate-y-2">
                                    <motion.div
                                        className={`w-12 h-12 mx-auto mb-6 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center`}
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className={step.color.replace('bg-', 'text-')}>
                                            {step.icon}
                                        </div>
                                    </motion.div>
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
            </motion.div>
        </section>
    );
}
