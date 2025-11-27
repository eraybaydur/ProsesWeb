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
        <section className="py-10 border-y border-black/5 dark:border-white/5 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
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
