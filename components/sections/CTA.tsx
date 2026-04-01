'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, Phone } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CTA() {
    const router = useRouter();

    return (
        <section id="cta" className="py-32 relative overflow-hidden">
            {/* Dark Background with subtle gradient */}
            <div className="absolute inset-0 bg-slate-900 dark:bg-deep-space -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy/15 via-transparent to-crimson/10" />
            </div>

            <div className="site-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-6">
                        <span className="w-8 h-px bg-burgundy" />
                        Hemen Başlayın
                        <span className="w-8 h-px bg-burgundy" />
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            İşletmenizi Dijital Geleceğe
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">
                            Taşımaya Hazır mısınız?
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-light"
                    >
                        Uzman ekibimizle tanışın, ihtiyaçlarınıza en uygun çözümleri birlikte belirleyelim.
                        Hemen ücretsiz demo talep edin.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <MagneticButton
                            onClick={() => router.push('/iletisim')}
                            className="!bg-white !text-slate-900 hover:!bg-slate-100 border-none min-w-[200px]"
                            aria-label="Ücretsiz demo talep formuna git"
                        >
                            <span className="flex items-center justify-center gap-2 font-bold text-lg">
                                Hemen Başlayın <ArrowRight className="w-5 h-5" />
                            </span>
                        </MagneticButton>

                        <MagneticButton
                            onClick={() => window.open('tel:+905321387868', '_self')}
                            className="!bg-transparent border border-white/20 text-white hover:!bg-white/10 min-w-[200px]"
                            aria-label="Proses Yazılım telefon numarasını ara"
                        >
                            <span className="flex items-center justify-center gap-2 font-medium text-lg">
                                <Phone className="w-5 h-5" /> Bizi Arayın
                            </span>
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
