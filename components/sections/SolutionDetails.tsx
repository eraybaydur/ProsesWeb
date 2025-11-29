'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

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
    },
];

// Floating geometric shapes component
function FloatingShapes({ colors, index }: { colors: string[]; index: number }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated gradient blobs */}
            <motion.div
                className={`absolute w-[500px] h-[500px] rounded-full ${colors[0]} blur-3xl`}
                style={{ top: '-10%', right: index % 2 === 0 ? '-10%' : 'auto', left: index % 2 === 0 ? 'auto' : '-10%' }}
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className={`absolute w-[400px] h-[400px] rounded-full ${colors[1]} blur-3xl`}
                style={{ bottom: '-5%', left: index % 2 === 0 ? '10%' : 'auto', right: index % 2 === 0 ? 'auto' : '10%' }}
                animate={{
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />

            {/* Floating geometric shapes */}
            <motion.div
                className="absolute w-20 h-20 border border-current opacity-10 rounded-2xl"
                style={{ top: '20%', left: '15%' }}
                animate={{
                    rotate: [0, 90, 180, 270, 360],
                    y: [0, -15, 0],
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
            />
            <motion.div
                className="absolute w-12 h-12 border border-current opacity-10 rounded-full"
                style={{ top: '60%', right: '20%' }}
                animate={{
                    scale: [1, 1.2, 1],
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                }}
            />
            <motion.div
                className="absolute w-16 h-16 border border-current opacity-10"
                style={{ bottom: '25%', left: '25%', transform: 'rotate(45deg)' }}
                animate={{
                    rotate: [45, 135, 225, 315, 405],
                    x: [0, 10, 0],
                }}
                transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                    x: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                }}
            />

            {/* Small floating dots */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full ${colors[0]}`}
                    style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 18}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                    }}
                />
            ))}

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, currentColor 1px, transparent 1px),
                        linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />
        </div>
    );
}

import { useIsMobile } from '@/hooks/use-mobile';

export default function SolutionDetails() {
    const isMobile = useIsMobile();
    return (
        <div className="relative">
            {solutions.map((solution, index) => (
                <section
                    key={solution.id}
                    id={solution.id}
                    className={`relative py-24 overflow-hidden bg-slate-50 dark:bg-deep-space`}
                >
                    {/* Grid Background - consistent with TechFlow */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                    {/* Animated background - Only on desktop */}
                    {!isMobile && <FloatingShapes colors={solution.blobColors} index={index} />}

                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} pointer-events-none`} />

                    {/* Section divider line */}
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-slate-300 dark:via-white/20 to-transparent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    />

                    {/* Section number indicator */}
                    <motion.div
                        className="absolute top-24 left-6 lg:left-12 hidden md:block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <span className="text-7xl lg:text-8xl font-bold text-slate-200/50 dark:text-white/5 select-none">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </motion.div>

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Image/Logo Side */}
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className={`relative p-12 rounded-3xl bg-gradient-to-br ${solution.gradient} border border-slate-200 dark:border-white/10 backdrop-blur-sm`}
                                >
                                    {/* Animated background decoration */}
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                        <motion.div
                                            className={`absolute top-0 right-0 w-64 h-64 ${solution.blobColors[0]} rounded-full blur-3xl`}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 0.8, 0.5],
                                            }}
                                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                        />
                                        <motion.div
                                            className={`absolute bottom-0 left-0 w-64 h-64 ${solution.blobColors[1]} rounded-full blur-3xl`}
                                            animate={{
                                                scale: [1.2, 1, 1.2],
                                                opacity: [0.8, 0.5, 0.8],
                                            }}
                                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                        />
                                    </div>

                                    {/* Subtle shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                        animate={{
                                            x: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: 'linear',
                                            repeatDelay: 2,
                                        }}
                                    />

                                    <div className="relative flex items-center justify-center">
                                        <motion.div
                                            animate={{
                                                y: [0, -8, 0],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            <Image
                                                src={solution.logo}
                                                alt={solution.name}
                                                width={280}
                                                height={200}
                                                className="object-contain drop-shadow-xl"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Benefits badges */}
                                    <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                                        {solution.benefits.map((benefit, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-sm font-medium text-slate-700 dark:text-gray-300 shadow-lg shadow-black/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm cursor-default transition-shadow hover:shadow-xl"
                                            >
                                                {benefit}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <span className={`text-sm font-semibold ${solution.accentColor} uppercase tracking-tightr`}>
                                        {solution.headline}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                                        {solution.name}
                                    </h2>
                                    <p className="text-lg text-slate-700 dark:text-gray-400 leading-relaxed mb-8">
                                        {solution.description}
                                    </p>

                                    {/* Features list */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {solution.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + i * 0.05 }}
                                                whileHover={{ x: 4 }}
                                                className="flex items-center gap-3 p-2 -ml-2 rounded-lg hover:bg-slate-100/50 dark:hover:bg-white/5 transition-colors cursor-default group"
                                            >
                                                <motion.div
                                                    className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-burgundy to-crimson flex items-center justify-center shadow-md shadow-burgundy/20"
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ type: 'spring', stiffness: 300 }}
                                                >
                                                    <Check className="w-4 h-4 text-white" />
                                                </motion.div>
                                                <span className="text-slate-700 dark:text-gray-300 text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-burgundy to-crimson text-white font-medium overflow-hidden shadow-lg shadow-burgundy/20 hover:shadow-xl hover:shadow-burgundy/30 transition-shadow"
                                    >
                                        {/* Button shine effect */}
                                        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                        <span className="relative">Detaylı Bilgi Al</span>
                                        <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}
        </div>
    );
}
