'use client';

import { motion } from 'framer-motion';
import { Database, FileText, Code, Workflow, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        title: 'Logo ERP Kurulum & Destek',
        description:
            'Tiger 3, GO Wings ve J-Platform kurulum, eğitim ve destek hizmetleri ile işletmenizin verimliliğini artırın.',
        icon: Database,
        image: '/images/erp-dashboard.jpg',
        color: '#f97316',
        href: '/hizmetler/erp-danismanligi',
    },
    {
        title: 'e-Dönüşüm Entegrasyonu',
        description:
            'e-Fatura, e-Arşiv, e-Defter ve e-İrsaliye entegrasyonlarıyla yasal süreçlerinizi dijitalleştirin.',
        icon: FileText,
        image: '/images/digital-transform.jpg',
        color: '#a855f7',
        href: '/hizmetler/e-donusum',
    },
    {
        title: 'Özel Yazılım Geliştirme',
        description:
            '.NET ve SQL tabanlı butik çözümlerle işletmenize özel ihtiyaçları karşılıyoruz.',
        icon: Code,
        image: '/images/code-office.jpg',
        color: '#db1a5d',
        href: '/hizmetler/ozel-yazilim',
    },
    {
        title: 'Süreç Danışmanlığı',
        description:
            'Şirket içi iş akışlarının analizi ve dijitalleştirilmesi konusunda uzman danışmanlık.',
        icon: Workflow,
        image: '/images/consulting.jpg',
        color: '#06b6d4',
        href: '/hizmetler/teknik-destek',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

function ServiceCard({
    service,
    index,
}: {
    service: (typeof services)[0];
    index: number;
}) {
    const Icon = service.icon;

    return (
        <motion.div variants={cardVariants} className="group relative">
            <Link href={service.href} className="block">
                <div className="relative h-[240px] md:h-[260px] rounded-2xl overflow-hidden">
                    {/* Background image */}
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/85 group-hover:via-black/40" />

                    {/* Color accent overlay on hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: `linear-gradient(135deg, ${service.color}20, transparent 60%)`,
                        }}
                    />

                    {/* Top accent line */}
                    <div
                        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ backgroundColor: service.color }}
                    />

                    {/* Content — bottom aligned */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10 shrink-0"
                                style={{ backgroundColor: `${service.color}25` }}
                            >
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight truncate">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 text-xs md:text-sm leading-snug line-clamp-2 mt-0.5">
                                    {service.description}
                                </p>
                            </div>
                        </div>

                        <ArrowRight
                            className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                            style={{ color: service.color }}
                        />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-20 relative bg-slate-50 dark:bg-deep-space">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-burgundy/[0.02] to-transparent pointer-events-none" />

            <div className="site-container relative z-10">
                {/* Header */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-4">
                        <span className="w-8 h-px bg-burgundy" />
                        Hizmetlerimiz
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400">
                            Dijital Dönüşüm
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">
                            Çözümlerimiz
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
                        İşletmenizin ihtiyaçlarına yönelik uçtan uca teknoloji çözümleri sunuyoruz.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
