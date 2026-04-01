'use client';

import { motion } from 'framer-motion';
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
    return (
        <section
            id="features"
            className="py-24 md:py-32 bg-slate-50 dark:bg-deep-space"
        >
            <div className="site-container">
                <div className="flex flex-col md:flex-row items-start justify-between gap-16">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-4">
                            <span className="w-8 h-px bg-burgundy" />
                            Avantajlarımız
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-slate-900 dark:text-white">Neden</span>{' '}
                            <span className="text-burgundy">Proses Yazılım?</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                            Sadece bir yazılım tedarikçisi değil, iş ortağınız olarak büyümenize katkı sağlıyoruz.
                            Teknolojik altyapınızı güçlendirirken, operasyonel verimliliğinizi maksimuma çıkarıyoruz.
                        </p>
                        <button className="text-burgundy font-bold hover:text-crimson transition-colors flex items-center gap-2 group">
                            Hakkımızda Daha Fazla
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </motion.div>

                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-burgundy/30 transition-all duration-300 hover:-translate-y-0.5 group"
                            >
                                <div className="mb-4 p-3 rounded-xl bg-slate-100 dark:bg-white/5 w-fit">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-burgundy transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
