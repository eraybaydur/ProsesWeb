'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const solutionImages: Record<string, string> = {
    tiger: '/images/solution-tiger.webp',
    go3: '/images/solution-go3.webp',
    crm: '/images/solution-crm.webp',
    flow: '/images/solution-flow.webp',
    mind: '/images/solution-mind.webp',
    budget: '/images/solution-budget.webp',
};

const slugMap: Record<string, string> = {
    tiger: 'logo-tiger-3',
    go3: 'logo-go-wings',
    crm: 'logo-crm',
    flow: 'logo-flow',
    mind: 'logo-mind',
    budget: 'logo-budget',
};

const solutions = [
    {
        id: 'tiger',
        name: 'Logo Tiger 3 Enterprise',
        logo: '/tiger.webp',
        headline: 'Kurumsal ERP Çözümü',
        description: 'İşletmenizi bütünleşik yönetin, sınırları aşın! Ölçeklenebilir, esnek ve sektör bağımsız yapısıyla değişen ihtiyaçlara kolayca uyum sağlayan kapsamlı ERP çözümü.',
        features: [
            'Üretim Planlama (MPS/MRP/CTP)',
            'Finans ve Maliyet Muhasebesi',
            'Tedarik ve Stok Yönetimi',
            'Satış, Dağıtım ve Fiyatlandırma',
            'Çoklu Şirket Konsolidasyonu',
            'Dış Ticaret ve Duran Varlık Yönetimi',
        ],
        color: '#f97316',
    },
    {
        id: 'go3',
        name: 'Logo GO Wings',
        logo: '/gowings.webp',
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
        color: '#3b82f6',
    },
    {
        id: 'crm',
        name: 'Logo CRM',
        logo: '/logocrm.webp',
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
        color: '#a855f7',
    },
    {
        id: 'flow',
        name: 'Logo Flow',
        logo: '/logoflow.webp',
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
        color: '#06b6d4',
    },
    {
        id: 'mind',
        name: 'Logo Mind',
        logo: '/logomind.webp',
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
        color: '#10b981',
    },
    {
        id: 'budget',
        name: 'Logo Budget',
        logo: '/logobudget.webp',
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
        color: '#f59e0b',
    },
];

function SolutionCard({
    solution,
    index,
    progress,
    range,
    targetScale,
}: {
    solution: (typeof solutions)[0];
    index: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}) {
    const isMobile = useIsMobile();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start start'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    const isReversed = index % 2 === 1;

    return (
        <div id={solution.id} ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: 0 }}
                className="relative flex flex-col w-full h-screen bg-background dark:bg-deep-space overflow-hidden origin-top will-change-transform"
            >
                {/* Minimal background gradient */}
                <div
                    className="absolute inset-0 z-0 opacity-20"
                    style={{
                        background: `radial-gradient(ellipse at ${isReversed ? '20%' : '80%'} 50%, ${solution.color}15, transparent 70%)`,
                    }}
                />

                {/* Content Grid — alternating direction */}
                <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full`}>

                    {/* Image Section */}
                    <div className={`relative overflow-hidden ${isReversed ? 'lg:order-first' : 'lg:order-last'} order-first`}>
                        <motion.div
                            style={{ scale: imageScale }}
                            className="relative w-full h-full min-h-[300px] lg:min-h-full"
                        >
                            <Image
                                src={solutionImages[solution.id] ?? '/images/solution-tiger.webp'}
                                alt={solution.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />

                            {/* Fade toward text side */}
                            <div
                                className="absolute inset-0 z-[1]"
                                style={{
                                    background: isReversed
                                        ? 'linear-gradient(to left, var(--background) 0%, var(--background) 3%, transparent 40%)'
                                        : 'linear-gradient(to right, var(--background) 0%, var(--background) 3%, transparent 40%)',
                                }}
                            />

                            {/* Bottom color accent */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-[100px] z-[2]"
                                style={{
                                    background: `linear-gradient(to top, ${solution.color}25, transparent)`,
                                }}
                            />

                            {/* Top vignette */}
                            <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-black/15 to-transparent z-[1]" />

                            {/* Logo directly on image — large, no container */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[55%] z-10">
                                <Image
                                    src={solution.logo}
                                    alt={solution.name}
                                    width={500}
                                    height={100}
                                    className="w-full h-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                                />
                            </div>

                            {/* Number watermark */}
                            <div
                                className="absolute top-6 z-[1] text-[9rem] leading-none font-black pointer-events-none select-none"
                                style={{
                                    [isReversed ? 'left' : 'right']: '1.5rem',
                                    color: `${solution.color}12`,
                                }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Section */}
                    <div className={`flex flex-col justify-center gap-8 lg:gap-10 p-8 lg:p-16 xl:p-20 ${isReversed ? 'lg:order-last' : 'lg:order-first'}`}>
                        {/* Headline */}
                        <div>
                            <p
                                className="text-sm font-semibold uppercase tracking-widest mb-4"
                                style={{ color: solution.color }}
                            >
                                {solution.headline}
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-5 leading-[1.1]">
                                {solution.name}
                            </h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                                {solution.description}
                            </p>
                        </div>

                        {/* Features — minimal dots */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl">
                            {solution.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span
                                        className="w-1.5 h-1.5 rounded-full shrink-0"
                                        style={{ backgroundColor: solution.color }}
                                    />
                                    <span className="text-sm text-slate-600 dark:text-slate-300">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA — product color */}
                        <div>
                            <Link
                                href={`/cozumler/${slugMap[solution.id] ?? solution.id}`}
                                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                style={{
                                    backgroundColor: solution.color,
                                    boxShadow: `0 4px 20px ${solution.color}30`,
                                }}
                            >
                                Detaylı Bilgi Al
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function SolutionDetails() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <div ref={containerRef} className="relative bg-background dark:bg-deep-space">
            {solutions.map((solution, index) => {
                const targetScale = 1 - (solutions.length - index) * 0.05;
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
