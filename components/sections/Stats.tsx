'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Clock, FolderCheck, Heart, Headset } from 'lucide-react';

// Count-up hook using IntersectionObserver
function useCountUp(target: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;
        const startTime = Date.now();
        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [hasStarted, target, duration]);

    return { count, ref };
}

interface StatItem {
    value: number;
    suffix: string;
    label: string;
    description: string;
    icon: React.ElementType;
}

const stats: StatItem[] = [
    {
        value: 15,
        suffix: '+',
        label: 'Yıl Deneyim',
        description: 'Sektörde güvenilir çözüm ortağı',
        icon: Clock,
    },
    {
        value: 500,
        suffix: '+',
        label: 'Tamamlanan Proje',
        description: 'Başarıyla hayata geçirilen proje',
        icon: FolderCheck,
    },
    {
        value: 100,
        suffix: '%',
        label: 'Müşteri Memnuniyeti',
        description: 'Sürekli artan memnuniyet oranı',
        icon: Heart,
    },
    {
        value: 7,
        suffix: '/24',
        label: 'Teknik Destek',
        description: 'Kesintisiz profesyonel destek',
        icon: Headset,
    },
];

// Individual stat card with count-up animation
function StatCard({ stat, index }: { stat: StatItem; index: number }) {
    const { count, ref } = useCountUp(stat.value, 2000 + index * 200);
    const Icon = stat.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="text-center group relative"
        >
            <motion.div
                className="relative p-6 md:p-8 rounded-3xl bg-white/50 dark:bg-white/[0.03] backdrop-blur-sm border border-slate-200/60 dark:border-white/[0.06] hover:border-burgundy/30 dark:hover:border-burgundy/20 transition-all duration-500"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-burgundy/[0.06] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <motion.div
                    className="mx-auto mb-4 w-12 h-12 rounded-2xl bg-burgundy/10 dark:bg-burgundy/15 flex items-center justify-center"
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 + index * 0.12 }}
                >
                    <Icon className="w-5 h-5 text-burgundy" strokeWidth={1.8} />
                </motion.div>

                {/* Animated number */}
                <div className="relative">
                    <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400 tracking-tight leading-none">
                        {count}
                    </span>
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-burgundy to-crimson">
                        {stat.suffix}
                    </span>
                </div>

                {/* Label */}
                <motion.div
                    className="mt-3 text-sm font-semibold text-burgundy uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.12 }}
                >
                    {stat.label}
                </motion.div>

                {/* Description */}
                <motion.p
                    className="mt-2 text-xs text-slate-500 dark:text-slate-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.12 }}
                >
                    {stat.description}
                </motion.p>

                {/* Bottom accent line */}
                <motion.div
                    className="mt-5 h-0.5 bg-gradient-to-r from-transparent via-burgundy/40 to-transparent mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: '50%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.12 }}
                />
            </motion.div>
        </motion.div>
    );
}

export default function Stats() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Scroll-based parallax for smooth transition
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Parallax transforms
    const y = useTransform(smoothProgress, [0, 1], ['20%', '-20%']);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-deep-space -mt-8 pt-24"
        >
            {/* Overlapping gradient from TechFlow */}
            <div className="absolute -top-20 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50 dark:to-deep-space pointer-events-none z-10" />

            {/* Grid Background with parallax */}
            <motion.div className="absolute inset-0" style={{ y }}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </motion.div>

            {/* Gradient Overlay for smooth color transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-burgundy/3 via-transparent to-burgundy/5" />

            {/* Radial gradient accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(219,26,93,0.06)_0%,transparent_70%)]" />

            {/* Subtle animated orbs */}
            <motion.div
                className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-burgundy/5 rounded-full blur-[120px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute top-1/2 right-1/4 -translate-y-1/2 w-56 h-56 bg-crimson/5 rounded-full blur-[100px]"
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
                className="site-container relative z-10"
                style={{ opacity, scale }}
            >
                {/* Section heading */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        Rakamlarla{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy to-crimson">
                            Proses
                        </span>
                    </h2>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                        Yılların getirdiği tecrübe ve güvenle, işletmenizin dijital dönüşümüne değer katıyoruz.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </motion.div>

            {/* Bottom gradient for overlap with Services */}
            <div className="absolute -bottom-16 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 dark:from-deep-space to-transparent pointer-events-none z-10" />
        </section>
    );
}
