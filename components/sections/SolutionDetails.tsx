'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const solutions = [
    {
        id: 'tiger',
        name: 'Logo Tiger 3 Enterprise',
        logo: '/tiger.png',
        headline: 'Kurumsal ERP Çözümü',
        description: 'Orta ve büyük ölçekli işletmeler için tasarlanmış, tüm iş süreçlerinizi tek bir platformda yönetmenizi sağlayan kapsamlı ERP çözümü.',
        features: [
            'Finans ve Muhasebe Yönetimi',
            'Satış ve Satın Alma Süreçleri',
            'Üretim Planlama ve Kontrol',
            'Stok ve Depo Yönetimi',
            'İnsan Kaynakları Modülü',
            'Raporlama ve İş Zekası',
        ],
        benefits: ['%40 verimlilik artışı', '7/24 teknik destek', 'Bulut ve On-Premise seçenekleri'],
        gradient: 'from-orange-500/10 to-red-500/10',
        accentColor: 'text-orange-500',
        bgGradient: 'from-orange-500/5 via-transparent to-red-500/5',
        blobColors: ['bg-orange-500/20', 'bg-red-500/15'],
        color: '#f97316'
    },
    {
        id: 'go3',
        name: 'Logo Go 3',
        logo: '/gowings.png',
        headline: 'KOBİ Dostu ERP',
        description: 'Küçük ve orta ölçekli işletmelerin ihtiyaçlarına özel olarak tasarlanmış, kullanımı kolay ve ekonomik ERP çözümü.',
        features: [
            'Kolay Kurulum ve Kullanım',
            'Temel Muhasebe İşlemleri',
            'Stok Takibi',
            'Fatura ve İrsaliye Yönetimi',
            'Banka Entegrasyonu',
            'e-Dönüşüm Uyumlu',
        ],
        benefits: ['Hızlı kurulum', 'Uygun maliyet', 'Mobil erişim'],
        gradient: 'from-blue-500/10 to-indigo-500/10',
        accentColor: 'text-blue-500',
        bgGradient: 'from-blue-500/5 via-transparent to-indigo-500/5',
        blobColors: ['bg-blue-500/20', 'bg-indigo-500/15'],
        color: '#3b82f6'
    },
    {
        id: 'crm',
        name: 'Logo CRM',
        logo: '/logocrm.png',
        headline: 'Müşteri İlişkileri Yönetimi',
        description: 'Müşteri ilişkilerinizi güçlendirin, satış süreçlerinizi optimize edin ve müşteri memnuniyetini artırın.',
        features: [
            'Müşteri Veri Yönetimi',
            'Satış Fırsatı Takibi',
            'Teklif ve Sipariş Yönetimi',
            'Kampanya Yönetimi',
            'Servis ve Destek Takibi',
            '360° Müşteri Görünümü',
        ],
        benefits: ['Satışlarda %25 artış', 'Müşteri sadakati', 'Veri odaklı kararlar'],
        gradient: 'from-purple-500/10 to-pink-500/10',
        accentColor: 'text-purple-500',
        bgGradient: 'from-purple-500/5 via-transparent to-pink-500/5',
        blobColors: ['bg-purple-500/20', 'bg-pink-500/15'],
        color: '#a855f7'
    },
    {
        id: 'flow',
        name: 'Logo Flow',
        logo: '/logoflow.png',
        headline: 'İş Süreçleri Otomasyonu',
        description: 'İş akışlarınızı dijitalleştirin, onay mekanizmalarını otomatikleştirin ve operasyonel verimliliği artırın.',
        features: [
            'Süreç Tasarım Editörü',
            'Onay Mekanizmaları',
            'Görev Yönetimi',
            'Bildirim Sistemi',
            'Entegrasyon API\'leri',
            'Performans Raporları',
        ],
        benefits: ['%60 zaman tasarrufu', 'Hatasız süreçler', 'Tam izlenebilirlik'],
        gradient: 'from-cyan-500/10 to-blue-500/10',
        accentColor: 'text-cyan-500',
        bgGradient: 'from-cyan-500/5 via-transparent to-blue-500/5',
        blobColors: ['bg-cyan-500/20', 'bg-blue-500/15'],
        color: '#06b6d4'
    },
    {
        id: 'mind',
        name: 'Logo Mind',
        logo: '/logomind.png',
        headline: 'İş Zekası Platformu',
        description: 'Verilerinizi anlamlandırın, güçlü analizlerle stratejik kararlar alın ve rekabet avantajı elde edin.',
        features: [
            'Gelişmiş Raporlama',
            'Dashboard Tasarımı',
            'Veri Görselleştirme',
            'Tahminleme Modelleri',
            'KPI Takibi',
            'Çoklu Veri Kaynağı Desteği',
        ],
        benefits: ['Anlık içgörüler', 'Özelleştirilebilir panolar', 'Mobil erişim'],
        gradient: 'from-emerald-500/10 to-teal-500/10',
        accentColor: 'text-emerald-500',
        bgGradient: 'from-emerald-500/5 via-transparent to-teal-500/5',
        blobColors: ['bg-emerald-500/20', 'bg-teal-500/15'],
        color: '#10b981'
    },
    {
        id: 'budget',
        name: 'Logo Budget',
        logo: '/logobudget.png',
        headline: 'Bütçe Planlama Sistemi',
        description: 'Bütçe planlama, takip ve raporlama süreçlerinizi profesyonelce yönetin, mali hedeflerinize ulaşın.',
        features: [
            'Bütçe Planlama',
            'Gerçekleşen-Bütçe Karşılaştırma',
            'Revizyon Yönetimi',
            'Senaryo Analizi',
            'Konsolidasyon',
            'Detaylı Raporlama',
        ],
        benefits: ['Mali disiplin', 'Sapma analizi', 'Stratejik planlama'],
        gradient: 'from-amber-500/10 to-yellow-500/10',
        accentColor: 'text-amber-500',
        bgGradient: 'from-amber-500/5 via-transparent to-yellow-500/5',
        blobColors: ['bg-amber-500/20', 'bg-yellow-500/15'],
        color: '#f59e0b'
    },
];

// Card component implementing the stacking effect
function SolutionCard({
    solution,
    index,
    progress,
    range,
    targetScale
}: {
    solution: typeof solutions[0];
    index: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}) {
    const isMobile = useIsMobile();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale: scale,
                    top: 0
                }}
                className="relative flex flex-col w-full h-full bg-background dark:bg-deep-space overflow-hidden origin-top will-change-transform border-t border-white/20"
            >
                {/* Background Gradients */}
                <div className="absolute inset-0 z-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-30`} />
                    {/* Decorative blobs */}
                    <div className={`absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 animate-blob ${solution.blobColors[0]}`} />
                    <div className={`absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 animate-blob animation-delay-2000 ${solution.blobColors[1]}`} />
                </div>

                {/* Content Grid */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">

                    {/* Feature Image/Visual Section */}
                    <div className="p-8 lg:p-20 flex items-center justify-center relative order-first lg:order-last">
                        <motion.div
                            style={{ scale: imageScale }}
                            className="relative w-full max-w-[600px] aspect-square flex items-center justify-center"
                        >
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${solution.gradient} blur-[100px] opacity-30`} />

                            <div className="relative z-10 bg-white/5 dark:bg-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 shadow-2xl">
                                <Image
                                    src={solution.logo}
                                    alt={solution.name}
                                    width={400}
                                    height={400}
                                    className="object-contain drop-shadow-2xl w-auto h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content Section */}
                    <div className="p-8 lg:p-20 flex flex-col justify-center gap-8 lg:gap-12">
                        <div className="max-w-xl">
                            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-white/10 border border-white/10 mb-6 backdrop-blur-sm ${solution.accentColor}`}>
                                {solution.headline}
                            </span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                                {solution.name}
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                                {solution.description}
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl">
                            {solution.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/50 dark:bg-white/5 shadow-sm border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform ${solution.accentColor}`}>
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-base font-medium text-slate-700 dark:text-slate-200 group-hover:text-foreground transition-colors">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-8">
                            <button className={`group flex items-center gap-4 px-10 py-5 rounded-full bg-foreground text-background font-bold text-lg hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1`}>
                                <span>Çözümü İncele</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Number Watermark */}
                <div className="absolute top-8 right-12 text-[12rem] leading-none font-bold text-black/5 dark:text-white/5 pointer-events-none select-none z-0">
                    {index + 1}
                </div>
            </motion.div>
        </div>
    );
}

export default function SolutionDetails() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        // Increased height to allow for proper scrolling distance
        <div ref={containerRef} className="relative bg-background dark:bg-deep-space">
            {solutions.map((solution, index) => {
                const targetScale = 1 - ((solutions.length - index) * 0.05);
                return (
                    <SolutionCard
                        key={solution.id}
                        index={index}
                        solution={solution}
                        progress={scrollYProgress}
                        range={[index * 0.1, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </div>
    );
}
