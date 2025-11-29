'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '15+', label: 'Yıl Deneyim' },
    { value: '500+', label: 'Tamamlanan Proje' },
    { value: '100%', label: 'Müşteri Memnuniyeti' },
    { value: '7/24', label: 'Teknik Destek' },
];

export default function Stats() {
    return (
        <section className="py-10 relative overflow-hidden bg-slate-50 dark:bg-deep-space">
            {/* Grid Background - consistent with TechFlow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Gradient Overlay - starts crimson (from Hero), ends purple for smooth transition to Services */}
            <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 via-transparent to-purple-500/5" />

            {/* Subtle border lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-crimson uppercase tracking-tightr">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
