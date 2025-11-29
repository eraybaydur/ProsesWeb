'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    return (
        <section className="py-24 bg-slate-50 dark:bg-deep-space relative overflow-hidden">
            {/* Grid Background - consistent with TechFlow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Gradient Overlay - burgundy to purple transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-purple-500/5" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 mx-auto bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-crimson"
                    >
                        <HelpCircle className="w-8 h-8" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson">Sorular</span>
                    </motion.h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
                    </p>
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
                                className={`!p-0 overflow-hidden transition-colors duration-300 ${activeIndex === index ? '!bg-white/80 dark:!bg-white/10 border-crimson/30' : '!bg-white/40 dark:!bg-white/5'}`}
                                hoverEffect={false}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? 'text-crimson' : 'text-slate-800 dark:text-slate-200'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-4 p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-crimson text-white rotate-180' : 'bg-slate-100 dark:bg-white/10 text-slate-500'}`}>
                                        {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
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
            </div>
        </section>
    );
}
