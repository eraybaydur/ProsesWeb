'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, ShieldCheck, Users, Clock } from 'lucide-react';

const features = [
    {
        icon: <Clock className="w-6 h-6 text-burgundy" />,
        title: 'Hızlı Destek',
        description: 'Sorunlarınıza anında müdahale eden uzman destek ekibi.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-crimson" />,
        title: 'Sektörel Uzmanlık',
        description: '15 yılı aşkın sektör tecrübesiyle güvenilir çözümler.',
    },
    {
        icon: <Users className="w-6 h-6 text-burgundy" />,
        title: 'Yerinde Eğitim',
        description: 'Personelinize özel, yerinde veya uzaktan eğitim imkanı.',
    },
    {
        icon: <Zap className="w-6 h-6 text-crimson" />,
        title: 'Yüksek Performans',
        description: 'İş süreçlerinizi hızlandıran optimize edilmiş sistemler.',
    },
];

export default function Features() {
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
            id="features"
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
                    className="absolute top-20 right-20 w-72 h-72 bg-burgundy/10 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-56 h-56 bg-crimson/10 rounded-full blur-[100px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </motion.div>

            {/* Main Content with Parallax */}
            <motion.div
                className="container mx-auto px-6 relative z-10"
                style={{ y: contentY, scale, opacity }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-4"
                        >
                            <span className="w-8 h-px bg-burgundy" />
                            Avantajlarımız
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400">Neden</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">Proses Yazılım?</span>
                        </h2>
                        <p className="text-slate-700 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            Sadece bir yazılım tedarikçisi değil, iş ortağınız olarak büyümenize katkı sağlıyoruz.
                            Teknolojik altyapınızı güçlendirirken, operasyonel verimliliğinizi maksimuma çıkarıyoruz.
                        </p>
                        <motion.button
                            whileHover={{ x: 5 }}
                            className="text-burgundy font-bold hover:text-crimson transition-colors flex items-center gap-2 group"
                        >
                            Hakkımızda Daha Fazla
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </motion.button>
                    </motion.div>

                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-burgundy/30 transition-all duration-300 shadow-lg shadow-slate-200/20 dark:shadow-none group"
                            >
                                <motion.div
                                    className="mb-4 p-3 rounded-xl bg-slate-100 dark:bg-white/5 w-fit"
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400 group-hover:from-burgundy group-hover:to-crimson transition-all">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-700 dark:text-gray-400 text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
