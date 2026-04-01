'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

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
        <section
            id="faq"
            className="py-24 md:py-32 bg-slate-50 dark:bg-deep-space"
        >
            <div className="site-container max-w-4xl">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-14 h-14 mx-auto bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-5 text-burgundy border border-slate-200 dark:border-white/10">
                            <HelpCircle className="w-7 h-7" />
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-4">
                            <span className="w-8 h-px bg-burgundy" />
                            SSS
                            <span className="w-8 h-px bg-burgundy" />
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            <span className="text-slate-900 dark:text-white">Sıkça Sorulan</span>{' '}
                            <span className="text-burgundy">Sorular</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <div
                                className={`rounded-2xl overflow-hidden border transition-colors duration-200 ${
                                    activeIndex === index
                                        ? 'bg-white dark:bg-white/[0.06] border-burgundy/20'
                                        : 'bg-white/60 dark:bg-white/[0.03] border-slate-200 dark:border-white/10'
                                }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    aria-expanded={activeIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors"
                                >
                                    <span className={`text-base md:text-lg font-semibold transition-colors ${
                                        activeIndex === index ? 'text-burgundy' : 'text-slate-800 dark:text-slate-200'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-4 p-1.5 rounded-full transition-colors ${
                                        activeIndex === index
                                            ? 'bg-burgundy text-white'
                                            : 'bg-slate-100 dark:bg-white/10 text-slate-500'
                                    }`}>
                                        {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: 'easeOut' }}
                                            id={`faq-answer-${index}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${index}`}
                                        >
                                            <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
