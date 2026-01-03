'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const faqs = [
    {
        question: 'Logo ürünleri için demo talep edebilir miyim?',
        answer: 'Evet, ilgilendiğiniz Logo ürünü için ücretsiz demo sunumu yapıyoruz. Uzman ekibimiz, işletmenizin ihtiyaçlarına uygun ürünü belirlemenize yardımcı olmak için size özel bir sunum gerçekleştirecektir.'
    },
    {
        question: 'e-Dönüşüm (e-Fatura, e-Arşiv) süreçlerinde destek veriyor musunuz?',
        answer: 'Kesinlikle. e-Dönüşüm süreçlerinde başvuru aşamasından entegrasyona, kontör takibinden teknik desteğe kadar uçtan uca hizmet veriyoruz. Mevcut sisteminizle tam uyumlu çalışacak şekilde yapılandırma sağlıyoruz.'
    },
    {
        question: 'Mevcut verilerimi yeni sisteme aktarabilir misiniz?',
        answer: 'Evet, veri taşıma (migrasyon) konusunda uzmanız. Eski yazılımınızdaki cari, stok, fatura gibi kritik verilerinizi güvenli bir şekilde yeni Logo sisteminize aktarıyoruz.'
    },
    {
        question: 'Teknik destek hizmetiniz neleri kapsıyor?',
        answer: 'Destek hizmetimiz; telefonla anında destek, uzak bağlantı ile müdahale ve gerektiğinde yerinde servisi kapsar. Ayrıca versiyon güncellemeleri, yedekleme takibi ve periyodik sistem kontrolleri de hizmetimize dahildir.'
    },
    {
        question: 'Özel yazılım geliştirme hizmetiniz var mı?',
        answer: 'Standart Logo ürünlerinin yetersiz kaldığı durumlarda, işletmenize özel butik çözümler ve entegrasyonlar geliştiriyoruz. Logo Object (uyarlama) araçları ile sisteminizi ihtiyaçlarınıza göre özelleştiriyoruz.'
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Parallax transforms - daha güçlü efektler
    const backgroundY = useTransform(smoothProgress, [0, 1], ['-15%', '15%']);
    const orbsY = useTransform(smoothProgress, [0, 1], ['50%', '-50%']);
    const contentY = useTransform(smoothProgress, [0, 1], ['8%', '-8%']);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    return (
        <section
            ref={sectionRef}
            className="py-32 bg-slate-50 dark:bg-deep-space relative overflow-hidden"
        >
            {/* Parallax Background Layer */}
            <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-burgundy/5" />
            </motion.div>

            {/* Parallax Floating Orbs */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbsY }}>
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-burgundy/10 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-56 h-56 bg-crimson/10 rounded-full blur-[100px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </motion.div>

            {/* Main Content with Parallax */}
            <motion.div
                className="container mx-auto px-6 max-w-4xl relative z-10"
                style={{ y: contentY, scale, opacity }}
            >
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 mx-auto bg-white/50 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-burgundy border border-slate-200 dark:border-white/10"
                    >
                        <HelpCircle className="w-8 h-8" />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-4"
                    >
                        <span className="w-8 h-px bg-burgundy" />
                        SSS
                        <span className="w-8 h-px bg-burgundy" />
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400">Sıkça Sorulan</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">Sorular</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 text-lg"
                    >
                        Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard
                                className={`!p-0 overflow-hidden transition-all duration-300 ${activeIndex === index ? '!bg-white/80 dark:!bg-white/10 border-burgundy/30' : '!bg-white/40 dark:!bg-white/5'}`}
                                hoverEffect={false}
                            >
                                <motion.button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? 'text-burgundy' : 'text-slate-800 dark:text-slate-200'}`}>
                                        {faq.question}
                                    </span>
                                    <motion.span
                                        className={`ml-4 p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-burgundy text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-500'}`}
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    >
                                        {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </motion.span>
                                </motion.button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
