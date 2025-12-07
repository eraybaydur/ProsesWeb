'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    ShoppingCart, Users, GraduationCap, MessageCircle, Package,
    Warehouse, Store, FileText, LayoutDashboard, Truck, CreditCard,
    BarChart3, Calendar, UserCheck, Globe, Smartphone, Shield,
    Receipt, Building2, Briefcase, HeartPulse, Factory, Utensils,
    Car, Plane, Hotel, Shirt, Cpu, Wrench
} from 'lucide-react';

// Proje kategorileri ve konuları
const projectCategories = [
    {
        category: 'E-Ticaret & Portal',
        color: 'from-orange-500 to-amber-500',
        bgColor: 'bg-orange-500/10',
        textColor: 'text-orange-500',
        projects: [
            { name: 'B2B Bayi Portalı', icon: Users, description: 'Bayi sipariş ve takip sistemi' },
            { name: 'B2C E-Ticaret', icon: ShoppingCart, description: 'Online satış platformu' },
            { name: 'Satış Portalları', icon: Store, description: 'Çok kanallı satış yönetimi' },
            { name: 'Müşteri Portalı', icon: UserCheck, description: 'Self-servis müşteri paneli' },
        ]
    },
    {
        category: 'Stok & Depo Yönetimi',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-500/10',
        textColor: 'text-blue-500',
        projects: [
            { name: 'Stok Takip Sistemi', icon: Package, description: 'Anlık stok izleme' },
            { name: 'Ambar Yönetimi', icon: Warehouse, description: 'Depo operasyonları' },
            { name: 'Lojistik Takip', icon: Truck, description: 'Sevkiyat ve teslimat' },
            { name: 'Barkod Sistemi', icon: Cpu, description: 'Otomatik tanımlama' },
        ]
    },
    {
        category: 'e-Dönüşüm & Finans',
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-500/10',
        textColor: 'text-emerald-500',
        projects: [
            { name: 'e-Fatura Entegrasyonu', icon: FileText, description: 'GİB uyumlu e-fatura' },
            { name: 'e-Arşiv Fatura', icon: Receipt, description: 'Dijital arşivleme' },
            { name: 'e-Defter (e-Defter)', icon: BarChart3, description: 'Yasal defter tutma' },
            { name: 'Ödeme Sistemleri', icon: CreditCard, description: 'Online tahsilat' },
        ]
    },
    {
        category: 'İletişim & Entegrasyon',
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-500/10',
        textColor: 'text-green-500',
        projects: [
            { name: 'WhatsApp Business API', icon: MessageCircle, description: 'Otomatik bildirimler' },
            { name: 'SMS Entegrasyonu', icon: Smartphone, description: 'Toplu mesaj gönderimi' },
            { name: 'E-Posta Otomasyonu', icon: Globe, description: 'Otomatik mail akışları' },
            { name: 'API Geliştirme', icon: Cpu, description: 'REST & SOAP servisler' },
        ]
    },
    {
        category: 'Eğitim & Kurumsal',
        color: 'from-purple-500 to-violet-500',
        bgColor: 'bg-purple-500/10',
        textColor: 'text-purple-500',
        projects: [
            { name: 'Öğrenci Kayıt Sistemi', icon: GraduationCap, description: 'Okul yönetim yazılımı' },
            { name: 'Veli İletişim Platformu', icon: Users, description: 'Okul-veli iletişimi' },
            { name: 'Online Sınav Sistemi', icon: FileText, description: 'Dijital değerlendirme' },
            { name: 'Devam Takip', icon: Calendar, description: 'Yoklama ve raporlama' },
        ]
    },
    {
        category: 'Yönetim Panelleri',
        color: 'from-rose-500 to-pink-500',
        bgColor: 'bg-rose-500/10',
        textColor: 'text-rose-500',
        projects: [
            { name: 'Admin Dashboard', icon: LayoutDashboard, description: 'Merkezi yönetim paneli' },
            { name: 'Raporlama Sistemi', icon: BarChart3, description: 'Anlık iş zekası' },
            { name: 'Kullanıcı Yönetimi', icon: Shield, description: 'Yetki ve erişim kontrolü' },
            { name: 'İş Takip Sistemi', icon: Briefcase, description: 'Proje ve görev yönetimi' },
        ]
    },
];

// Sektörel çözümler - marquee için
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

export default function References() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const backgroundY = useTransform(smoothProgress, [0, 1], ['-10%', '10%']);

    return (
        <section
            id="references"
            ref={sectionRef}
            className="py-24 overflow-hidden bg-slate-50 dark:bg-deep-space relative"
        >
            {/* Parallax Background */}
            <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-burgundy/5" />
            </motion.div>

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[120px] pointer-events-none"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-crimson/5 rounded-full blur-[100px] pointer-events-none"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-4"
                    >
                        <span className="w-8 h-px bg-burgundy" />
                        Proje Portföyümüz
                        <span className="w-8 h-px bg-burgundy" />
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Geliştirdiğimiz{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson">
                            Çözümler
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        100+ başarılı proje deneyimiyle, işletmenizin ihtiyaçlarına özel yazılım çözümleri sunuyoruz
                    </motion.p>
                </div>

                {/* Project Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {projectCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full p-6 rounded-2xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-black/5">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                        <div className="w-5 h-5 bg-white/20 rounded-md" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">
                                        {category.category}
                                    </h3>
                                </div>

                                {/* Projects List */}
                                <div className="space-y-3">
                                    {category.projects.map((project, projectIndex) => {
                                        const Icon = project.icon;
                                        return (
                                            <motion.div
                                                key={project.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: categoryIndex * 0.1 + projectIndex * 0.05 }}
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 transition-colors cursor-default"
                                            >
                                                <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                                                    <Icon className={`w-4 h-4 ${category.textColor}`} />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                                                        {project.name}
                                                    </div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                                        {project.description}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Hover Glow */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sector Solutions Marquee */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Hizmet Verdiğimiz Sektörler
                        </span>
                    </motion.div>

                    <div className="relative flex overflow-x-hidden">
                        <motion.div
                            className="animate-marquee whitespace-nowrap flex items-center gap-8 py-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            {[...sectorSolutions, ...sectorSolutions, ...sectorSolutions].map((sector, index) => {
                                const Icon = sector.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-burgundy/30 dark:hover:border-burgundy/30 transition-colors"
                                    >
                                        <Icon className="w-4 h-4 text-burgundy" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {sector.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </motion.div>

                        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-8 py-4">
                            {[...sectorSolutions, ...sectorSolutions, ...sectorSolutions].map((sector, index) => {
                                const Icon = sector.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-burgundy/30 dark:hover:border-burgundy/30 transition-colors"
                                    >
                                        <Icon className="w-4 h-4 text-burgundy" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {sector.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: '100+', label: 'Tamamlanan Proje' },
                        { value: '50+', label: 'Aktif Müşteri' },
                        { value: '15+', label: 'Yıllık Deneyim' },
                        { value: '24/7', label: 'Teknik Destek' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
