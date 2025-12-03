'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const logos = [
    'Logo Yazılım', 'e-Logo', 'Microsoft', 'Oracle', 'SAP',
    'Koç Sistem', 'Turkcell', 'Vodafone', 'Türk Telekom'
];

export default function References() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Parallax transforms - daha güçlü efektler
    const backgroundY = useTransform(smoothProgress, [0, 1], ['-10%', '10%']);
    const contentY = useTransform(smoothProgress, [0, 1], ['8%', '-8%']);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    return (
        <section
            id="references"
            ref={sectionRef}
            className="py-20 overflow-hidden bg-slate-50 dark:bg-deep-space relative"
        >
            {/* Parallax Background Layer */}
            <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-burgundy/5" />
            </motion.div>

            {/* Parallax Floating Orbs */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-burgundy/5 rounded-full blur-[100px] pointer-events-none"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="container mx-auto px-6 mb-10 text-center relative z-10"
                style={{ y: contentY, scale, opacity }}
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-2"
                >
                    <span className="w-8 h-px bg-burgundy" />
                    Referanslarımız
                    <span className="w-8 h-px bg-burgundy" />
                </motion.span>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg font-medium text-slate-600 dark:text-gray-400"
                >
                    500+ Mutlu Müşteri ve İş Ortağı
                </motion.p>
            </motion.div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <motion.span
                            key={index}
                            className="text-2xl font-bold text-slate-400 dark:text-gray-600 hover:text-burgundy dark:hover:text-crimson transition-colors cursor-default select-none"
                            whileHover={{ scale: 1.1 }}
                        >
                            {logo}
                        </motion.span>
                    ))}
                </motion.div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <motion.span
                            key={index}
                            className="text-2xl font-bold text-slate-400 dark:text-gray-600 hover:text-burgundy dark:hover:text-crimson transition-colors cursor-default select-none"
                            whileHover={{ scale: 1.1 }}
                        >
                            {logo}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
        </section>
    );
}
