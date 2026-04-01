'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
    Factory, Store, HeartPulse, Building2, Utensils,
    Car, Plane, Hotel, Shirt, Cpu, Wrench, Truck,
} from 'lucide-react';

const sectorSolutions = [
    { name: 'Üretim & Sanayi', icon: Factory },
    { name: 'Perakende & AVM', icon: Store },
    { name: 'Sağlık & Hastane', icon: HeartPulse },
    { name: 'İnşaat & Gayrimenkul', icon: Building2 },
    { name: 'Gıda & Restoran', icon: Utensils },
    { name: 'Otomotiv', icon: Car },
    { name: 'Turizm & Seyahat', icon: Plane },
    { name: 'Otelcilik', icon: Hotel },
    { name: 'Tekstil & Moda', icon: Shirt },
    { name: 'Teknoloji', icon: Cpu },
    { name: 'Servis & Bakım', icon: Wrench },
    { name: 'Lojistik & Taşımacılık', icon: Truck },
];

function MarqueeItem({ sector }: { sector: typeof sectorSolutions[number] }) {
    const Icon = sector.icon;
    return (
        <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10">
            <div className="w-8 h-8 rounded-xl bg-burgundy/10 flex items-center justify-center">
                <Icon className="w-4.5 h-4.5 text-burgundy" />
            </div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {sector.name}
            </span>
        </div>
    );
}

export default function References() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="references"
            className="py-32 overflow-hidden bg-slate-50 dark:bg-deep-space relative"
        >
            <div className="site-container relative z-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-6">
                        <span className="w-10 h-px bg-gradient-to-r from-transparent to-burgundy" />
                        Güvenilir Çözüm Ortağınız
                        <span className="w-10 h-px bg-gradient-to-l from-transparent to-burgundy" />
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400">
                            Bize Güvendikleri İçin
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">
                            Teşekkür Ederiz
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Türkiye genelinde 200&apos;den fazla işletme, iş süreçlerini dijitalleştirmek için bizi tercih etti.
                        Her projede kalite ve güven odaklı çözümler sunuyoruz.
                    </p>
                </motion.div>
            </div>

            {/* Sector Solutions Marquee */}
            <div className="relative mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                        Hizmet Verdiğimiz Sektörler
                    </span>
                </motion.div>

                {shouldReduceMotion ? (
                    <div className="site-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4">
                        {sectorSolutions.map((sector) => (
                            <MarqueeItem key={sector.name} sector={sector} />
                        ))}
                    </div>
                ) : (
                    <div className="relative flex overflow-x-hidden">
                        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-3">
                            {[...sectorSolutions, ...sectorSolutions].map((sector, index) => (
                                <MarqueeItem key={index} sector={sector} />
                            ))}
                        </div>
                        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-6 py-3">
                            {[...sectorSolutions, ...sectorSolutions].map((sector, index) => (
                                <MarqueeItem key={index} sector={sector} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
