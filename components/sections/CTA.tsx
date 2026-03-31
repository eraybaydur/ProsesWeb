'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, Phone } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CTA() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const shouldReduceMotion = useReducedMotion();

    // Scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Parallax transforms - daha güçlü efektler
    const backgroundY = useTransform(smoothProgress, [0, 1], ['-15%', '15%']);
    const orbsY = useTransform(smoothProgress, [0, 1], ['50%', '-50%']);
    const contentY = useTransform(smoothProgress, [0, 1], ['10%', '-10%']);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    return (
        <section
            id="cta"
            ref={sectionRef}
            className="py-32 relative overflow-hidden"
        >
            {/* Background with Gradient */}
            <motion.div
                className="absolute inset-0 bg-slate-900 dark:bg-deep-space -z-10"
                style={{ y: shouldReduceMotion ? 0 : backgroundY }}
            >
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/10 via-transparent to-burgundy/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 via-transparent to-transparent" />
            </motion.div>

            {/* Parallax Glowing Orbs */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ y: shouldReduceMotion ? 0 : orbsY }}>
                <motion.div
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy/15 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"
                    animate={shouldReduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-crimson/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"
                    animate={shouldReduceMotion ? undefined : { scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </motion.div>

            {/* Main Content with Parallax */}
            <motion.div
                className="site-container relative z-10 text-center"
                style={{
                    y: shouldReduceMotion ? 0 : contentY,
                    scale: shouldReduceMotion ? 1 : scale,
                    opacity: shouldReduceMotion ? 1 : opacity
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-6"
                    >
                        <span className="w-8 h-px bg-burgundy" />
                        Hemen Başlayın
                        <span className="w-8 h-px bg-burgundy" />
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">İşletmenizi Dijital Geleceğe</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">Taşımaya Hazır mısınız?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-light"
                    >
                        Uzman ekibimizle tanışın, ihtiyaçlarınıza en uygun çözümleri birlikte belirleyelim.
                        Hemen ücretsiz demo talep edin.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <MagneticButton
                            onClick={() => router.push('/iletisim')}
                            className="!bg-white !text-slate-900 hover:!bg-slate-100 border-none min-w-[200px]"
                            aria-label="Ücretsiz demo talep formuna git"
                        >
                            <span className="flex items-center justify-center gap-2 font-bold text-lg">
                                Hemen Başlayın <ArrowRight className="w-5 h-5" />
                            </span>
                        </MagneticButton>

                        <MagneticButton
                            onClick={() => window.open('tel:+905321387868', '_self')}
                            className="!bg-transparent border border-white/20 text-white hover:!bg-white/10 min-w-[200px]"
                            aria-label="Proses Yazılım telefon numarasını ara"
                        >
                            <span className="flex items-center justify-center gap-2 font-medium text-lg">
                                <Phone className="w-5 h-5" /> Bizi Arayın
                            </span>
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
