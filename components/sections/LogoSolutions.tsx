'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { usePageTransition } from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

const solutions = [
    {
        id: 'tiger',
        name: 'Logo Tiger 3',
        logo: '/tiger.png',
        description: 'Orta ve büyük ölçekli işletmeler için kapsamlı ERP çözümü.',
        color: 'from-orange-400 to-amber-600'
    },
    {
        id: 'go3',
        name: 'Logo Go 3',
        logo: '/gowings.png',
        description: "KOBİ'ler için kullanımı kolay ve ekonomik ERP çözümü.",
        color: 'from-blue-400 to-indigo-600'
    },
    {
        id: 'crm',
        name: 'Logo CRM',
        logo: '/logocrm.png',
        description: 'Müşteri ilişkilerinizi ve satış süreçlerinizi profesyonelce yönetin.',
        color: 'from-purple-400 to-pink-600'
    },
    {
        id: 'flow',
        name: 'Logo Flow',
        logo: '/logoflow.png',
        description: 'İş süreçlerinizi, onay mekanizmalarınızı ve akışlarınızı otomatikleştirin.',
        color: 'from-emerald-400 to-teal-600'
    },
    {
        id: 'mind',
        name: 'Logo Mind',
        logo: '/logomind.png',
        description: 'İş zekası çözümleri ile verilerinizi analiz edip anlamlandırın.',
        color: 'from-cyan-400 to-blue-600'
    },
    {
        id: 'budget',
        name: 'Logo Budget',
        logo: '/logobudget.png',
        description: 'Bütçe planlama ve yönetim süreçlerinizi hatasız gerçekleştirin.',
        color: 'from-rose-400 to-red-600'
    }
];

export default function LogoSolutions() {
    const { navigateToSection } = usePageTransition();

    return (
        <section className="py-32 relative overflow-hidden bg-slate-50 dark:bg-deep-space">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Ambient Glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-burgundy/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/5 border border-burgundy/10 text-burgundy dark:text-crimson mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold tracking-wide uppercase">Dijital Dönüşüm</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Logo ERP <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">Çözümlerimiz</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        İşletmenizin ihtiyaçlarına özel, verimliliği artıran ve büyümeyi hızlandıran entegre yazılım çözümleri.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => navigateToSection(solution.id)}
                            className="group cursor-pointer"
                        >
                            <GlassCard className="h-full p-8 !bg-white/50 dark:!bg-white/5 hover:!bg-white/80 dark:hover:!bg-white/10 transition-all duration-500 group-hover:-translate-y-2">
                                <div className="flex flex-col h-full items-center text-center">
                                    {/* Logo Container */}
                                    <div className="relative w-full h-32 mb-8 p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm group-hover:shadow-md transition-all duration-500">
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                        <Image
                                            src={solution.logo}
                                            alt={solution.name}
                                            fill
                                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-crimson transition-colors">
                                        {solution.name}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                                        {solution.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-crimson font-semibold group/btn">
                                        <span className="relative">
                                            İncele
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson transition-all duration-300 group-hover/btn:w-full" />
                                        </span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
