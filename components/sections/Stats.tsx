'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
    const { count, ref } = useCountUp(stat.value, 2000 + index * 200);
    const Icon = stat.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
        >
            <div className="p-6 md:p-8 rounded-3xl bg-white/50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06] hover:border-burgundy/30 dark:hover:border-burgundy/20 transition-colors duration-300">
                <div className="mx-auto mb-4 w-12 h-12 rounded-2xl bg-burgundy/10 dark:bg-burgundy/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-burgundy" strokeWidth={1.8} />
                </div>

                <div>
                    <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400 tracking-tight leading-none">
                        {count}
                    </span>
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-burgundy to-crimson">
                        {stat.suffix}
                    </span>
                </div>

                <div className="mt-3 text-sm font-semibold text-burgundy uppercase tracking-wider">
                    {stat.label}
                </div>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {stat.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-deep-space">
            <div className="site-container relative z-10">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
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

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
