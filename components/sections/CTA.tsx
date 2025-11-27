'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with Gradient and Noise */}
            <div className="absolute inset-0 bg-slate-900 dark:bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 via-slate-900 to-slate-900 dark:from-burgundy/20 dark:via-black dark:to-black" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

                {/* Glowing Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-burgundy/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                        İşletmenizi Dijital Geleceğe <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">Taşımaya Hazır mısınız?</span>
                    </h2>

                    <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-light">
                        Uzman ekibimizle tanışın, ihtiyaçlarınıza en uygun çözümleri birlikte belirleyelim.
                        Hemen ücretsiz demo talep edin.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <MagneticButton className="!bg-white !text-slate-900 hover:!bg-slate-100 border-none min-w-[200px]">
                            <span className="flex items-center justify-center gap-2 font-bold text-lg">
                                Hemen Başlayın <ArrowRight className="w-5 h-5" />
                            </span>
                        </MagneticButton>

                        <MagneticButton className="!bg-transparent border border-white/20 text-white hover:!bg-white/10 min-w-[200px]">
                            <span className="flex items-center justify-center gap-2 font-medium text-lg">
                                <Phone className="w-5 h-5" /> Bizi Arayın
                            </span>
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
