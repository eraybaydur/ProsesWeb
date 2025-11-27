'use client';

import { Zap, ShieldCheck, Users, Clock } from 'lucide-react';

const features = [
    {
        icon: <Clock className="w-6 h-6 text-crimson" />,
        title: 'Hızlı Destek',
        description: 'Sorunlarınıza anında müdahale eden uzman destek ekibi.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-accent-red" />,
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
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Neden <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson">Proses Yazılım?</span>
                        </h2>
                        <p className="text-slate-700 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            Sadece bir yazılım tedarikçisi değil, iş ortağınız olarak büyümenize katkı sağlıyoruz.
                            Teknolojik altyapınızı güçlendirirken, operasyonel verimliliğinizi maksimuma çıkarıyoruz.
                        </p>
                        <button className="text-crimson font-bold hover:text-accent-red transition-colors flex items-center gap-2 group">
                            Hakkımızda Daha Fazla
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white dark:bg-deep-space border border-slate-200 dark:border-white/5 hover:border-crimson/30 transition-colors shadow-sm dark:shadow-none">
                                <div className="mb-4 p-3 rounded-xl bg-slate-100 dark:bg-white/5 w-fit">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-700 dark:text-gray-400 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
