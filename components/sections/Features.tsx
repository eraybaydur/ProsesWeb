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
        <section id="features" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-deep-space">
            {/* Grid Background - consistent with TechFlow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Gradient Overlay - purple to crimson transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-crimson/5" />

            {/* Subtle border lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
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
