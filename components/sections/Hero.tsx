'use client';

import MagneticButton from '@/components/ui/MagneticButton';
import FloatingProductCards from '@/components/ui/FloatingProductCards';
import SubtleWaves from '@/components/ui/SubtleWaves';
import GlassCard from '@/components/ui/GlassCard';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-dot">
            {/* Modern Gradient Background */}
            <div className="absolute inset-0 -z-10">
                {/* Base background */}
                <div className="absolute inset-0 bg-slate-50 dark:bg-deep-space" />

                {/* Grid pattern - consistent with TechFlow */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Gradient Overlay - starts burgundy, ends crimson for smooth transition to Stats */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-crimson/5" />

                {/* Glowing orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-burgundy/20 dark:bg-burgundy/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-crimson/15 dark:bg-crimson/25 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-red/10 dark:bg-accent-red/20 rounded-full blur-[80px]"
                />
            </div>

            {/* Subtle wave animation - above background, below content */}
            <div className="absolute inset-0 z-0 opacity-50">
                <SubtleWaves />
            </div>

            {/* Gradient Overlay for content readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-deep-space/80 z-[1] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center justify-between gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 inline-block"
                        >
                            <GlassCard className="px-4 py-2 rounded-full !bg-white/40 dark:!bg-white/5 !border-burgundy/20">
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-crimson"></span>
                                    </span>
                                    <span className="text-sm text-slate-800 dark:text-slate-200 tracking-tight font-medium whitespace-nowrap">
                                        Logo Yazılım Yetkili İş Ortağı
                                    </span>
                                </div>
                            </GlassCard>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900 dark:text-white"
                        >
                            İş Süreçlerinizi{' '}
                            <span className="relative whitespace-nowrap">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red animate-gradient bg-300%">
                                    Dijitalleştirin
                                </span>
                                <span className="absolute -bottom-2 left-0 right-0 h-[0.2em] bg-crimson/20 -z-10 skew-x-12 blur-sm" />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl leading-relaxed font-light"
                        >
                            Bursa merkezli uzman kadromuzla, işletmenizin dijital dönüşüm yolculuğunda yanınızdayız.
                            <span className="block mt-4 text-slate-500 dark:text-slate-400 text-lg">
                                Tiger 3, Go 3 ve e-Dönüşüm süreçlerinde profesyonel entegrasyon ve danışmanlık hizmetleri.
                            </span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <MagneticButton>
                                <span className="flex items-center gap-2 px-2">
                                    Hizmetleri İncele <ArrowRight className="w-5 h-5" />
                                </span>
                            </MagneticButton>

                            <MagneticButton className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-burgundy/5 hover:border-burgundy/30 text-slate-900 dark:text-white backdrop-blur-sm">
                                <span className="flex items-center gap-2 px-2">
                                    <Phone className="w-4 h-4" /> İletişime Geçin
                                </span>
                            </MagneticButton>
                        </motion.div>
                    </div>

                    {/* Floating Product Cards */}
                    <div className="hidden xl:block relative z-20">
                        <FloatingProductCards />
                    </div>
                </div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute top-1/2 right-10 hidden 2xl:block pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="space-y-6"
                >
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -15, 0],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                            }}
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-burgundy to-crimson shadow-[0_0_15px_rgba(220,20,60,0.5)]"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
