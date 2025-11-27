'use client';

import TiltCard from '@/components/ui/TiltCard';
import { Database, FileText, Code, Workflow, ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: 'Logo ERP Çözümleri',
        description: 'Tiger 3, Go 3 ve J-Platform kurulum, eğitim ve destek hizmetleri ile işletmenizin verimliliğini artırın.',
        icon: <Database className="w-8 h-8 text-crimson" />,
        colSpan: 'md:col-span-2',
    },
    {
        title: 'e-Dönüşüm',
        description: 'e-Fatura, e-Arşiv, e-Defter ve e-İrsaliye entegrasyonlarıyla yasal süreçlerinizi dijitalleştirin.',
        icon: <FileText className="w-8 h-8 text-accent-red" />,
        colSpan: 'md:col-span-1',
    },
    {
        title: 'Özel Yazılım Geliştirme',
        description: '.NET ve SQL tabanlı butik çözümlerle işletmenize özel ihtiyaçları karşılıyoruz.',
        icon: <Code className="w-8 h-8 text-burgundy" />,
        colSpan: 'md:col-span-1',
    },
    {
        title: 'Süreç Danışmanlığı',
        description: 'Şirket içi iş akışlarının analizi ve dijitalleştirilmesi konusunda uzman danışmanlık.',
        icon: <Workflow className="w-8 h-8 text-slate-900 dark:text-white" />,
        colSpan: 'md:col-span-2',
    },
];

import { usePageTransition } from '@/components/ui/PageTransition';

export default function Services() {
    const { navigateToSection } = usePageTransition();

    return (
        <section id="services" className="py-24 relative bg-white dark:bg-transparent">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Dijital Dönüşüm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson">Çözümlerimiz</span>
                    </h2>
                    <p className="text-slate-700 dark:text-gray-400 max-w-2xl text-lg">
                        İşletmenizin ihtiyaçlarına yönelik uçtan uca teknoloji çözümleri sunuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className={`${service.colSpan}`}>
                            <TiltCard className="h-full">
                                <div
                                    onClick={() => navigateToSection(service.title)}
                                    className="h-full p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors group relative overflow-hidden cursor-pointer"
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="w-6 h-6 text-slate-900 dark:text-white" />
                                    </div>

                                    <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-white/5 w-fit backdrop-blur-sm shadow-sm dark:shadow-none">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                                    <p className="text-slate-700 dark:text-gray-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
