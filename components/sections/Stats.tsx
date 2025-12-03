'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const stats = [
    { value: '15+', label: 'Yıl Deneyim' },
    { value: '500+', label: 'Tamamlanan Proje' },
    { value: '100%', label: 'Müşteri Memnuniyeti' },
    { value: '7/24', label: 'Teknik Destek' },
];

// Animated Counter Component
function AnimatedValue({ value, delay }: { value: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
            className="text-3xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400"
        >
            {value}
        </motion.div>
    );
}

export default function Stats() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Scroll-based parallax for smooth transition
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Parallax transforms - daha güçlü efektler
    const y = useTransform(smoothProgress, [0, 1], ['20%', '-20%']);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <section
            ref={sectionRef}
            className="py-16 relative overflow-hidden bg-slate-50 dark:bg-deep-space -mt-8 pt-24"
        >
            {/* Overlapping gradient from TechFlow */}
            <div className="absolute -top-20 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50 dark:to-deep-space pointer-events-none z-10" />

            {/* Grid Background with parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ y }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </motion.div>

            {/* Gradient Overlay for smooth color transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-burgundy/3 via-transparent to-burgundy/5" />

            {/* Subtle animated orbs */}
            <motion.div
                className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-burgundy/5 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 bg-crimson/5 rounded-full blur-[80px]"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Decorative lines */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy/20 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy/20 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.div
                className="container mx-auto px-6 relative z-10"
                style={{ opacity, scale }}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-burgundy/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <AnimatedValue value={stat.value} delay={index * 0.1} />

                                <motion.div
                                    className="text-sm font-semibold text-burgundy uppercase tracking-wider"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    {stat.label}
                                </motion.div>
                            </motion.div>

                            {/* Animated underline */}
                            <motion.div
                                className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-burgundy/30 to-transparent mx-auto"
                                initial={{ width: 0 }}
                                whileInView={{ width: '60%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom gradient for overlap with Services */}
            <div className="absolute -bottom-16 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 dark:from-deep-space to-transparent pointer-events-none z-10" />
        </section>
    );
}
