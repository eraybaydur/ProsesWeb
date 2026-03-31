'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import {
    ShoppingCart, Users, GraduationCap, MessageCircle, Package,
    Warehouse, Store, FileText, LayoutDashboard, Truck, CreditCard,
    BarChart3, Calendar, UserCheck, Globe, Smartphone, Shield,
    Receipt, Building2, Briefcase, HeartPulse, Factory, Utensils,
    Car, Plane, Hotel, Shirt, Cpu, Wrench, CheckCircle2, Award, TrendingUp
} from 'lucide-react';
import Image from 'next/image';

const categoryImages: Record<string, string> = {
    'E-Ticaret & Portal': '/images/dashboard-analytics.jpg',
    'Stok & Depo Yönetimi': '/images/factory.jpg',
    'e-Dönüşüm & Finans': '/images/digital-transform.jpg',
    'İletişim & Entegrasyon': '/images/server-tech.jpg',
    'Eğitim & Kurumsal': '/images/team-meeting.jpg',
    'Yönetim Panelleri': '/images/erp-dashboard.jpg',
};

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

// Stats data
const stats = [
    { value: '200+', label: 'Mutlu Müşteri', icon: Users, color: 'from-burgundy to-crimson' },
    { value: '100+', label: 'Tamamlanan Proje', icon: CheckCircle2, color: 'from-emerald-500 to-teal-500' },
    { value: '15+', label: 'Yıllık Deneyim', icon: Award, color: 'from-amber-500 to-orange-500' },
    { value: '%99', label: 'Müşteri Memnuniyeti', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
];

export default function References() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

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
            className="py-32 overflow-hidden bg-slate-50 dark:bg-deep-space relative"
        >
            {/* Parallax Background */}
            <motion.div className="absolute inset-0 -z-10" style={{ y: shouldReduceMotion ? 0 : backgroundY }}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-burgundy/5" />
            </motion.div>

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-burgundy/8 rounded-full blur-[150px] pointer-events-none"
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-crimson/8 rounded-full blur-[120px] pointer-events-none"
                animate={shouldReduceMotion ? undefined : { scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy/3 rounded-full blur-[200px] pointer-events-none"
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={shouldReduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            />

            <div className="site-container relative z-10">

                {/* Trust Stats - Hero-level prominence at the top */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-6"
                    >
                        <span className="w-10 h-px bg-gradient-to-r from-transparent to-burgundy" />
                        Güvenilir Çözüm Ortağınız
                        <span className="w-10 h-px bg-gradient-to-l from-transparent to-burgundy" />
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400">Bize Güvendikleri İçin</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">
                            Teşekkür Ederiz
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Türkiye genelinde 200&apos;den fazla işletme, iş süreçlerini dijitalleştirmek için bizi tercih etti.
                        Her projede kalite ve güven odaklı çözümler sunuyoruz.
                    </motion.p>
                </motion.div>

                {/* Big Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24 max-w-5xl mx-auto"
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="group relative text-center p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm border border-slate-200/80 dark:border-white/[0.08] hover:border-burgundy/20 dark:hover:border-burgundy/20 transition-all duration-500 hover:shadow-2xl hover:shadow-burgundy/5"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson mb-2 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400">
                                    {stat.label}
                                </div>
                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-burgundy/0 to-crimson/0 group-hover:from-burgundy/5 group-hover:to-crimson/5 transition-all duration-500 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Sector Solutions Marquee - Two rows */}
                <div className="relative mb-24">
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
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4">
                            {sectorSolutions.map((sector) => {
                                const Icon = sector.icon;
                                return (
                                    <div
                                        key={sector.name}
                                        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10"
                                    >
                                        <Icon className="w-5 h-5 text-burgundy" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {sector.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {/* Row 1 - Left to Right */}
                            <div className="relative flex overflow-x-hidden">
                                <motion.div
                                    className="animate-marquee whitespace-nowrap flex items-center gap-6 py-3"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    {[...sectorSolutions, ...sectorSolutions, ...sectorSolutions].map((sector, index) => {
                                        const Icon = sector.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 hover:border-burgundy/40 dark:hover:border-burgundy/40 transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/5 hover:scale-105"
                                            >
                                                <div className="w-8 h-8 rounded-xl bg-burgundy/10 flex items-center justify-center">
                                                    <Icon className="w-4.5 h-4.5 text-burgundy" />
                                                </div>
                                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    {sector.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </motion.div>

                                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-6 py-3">
                                    {[...sectorSolutions, ...sectorSolutions, ...sectorSolutions].map((sector, index) => {
                                        const Icon = sector.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 hover:border-burgundy/40 dark:hover:border-burgundy/40 transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/5 hover:scale-105"
                                            >
                                                <div className="w-8 h-8 rounded-xl bg-burgundy/10 flex items-center justify-center">
                                                    <Icon className="w-4.5 h-4.5 text-burgundy" />
                                                </div>
                                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    {sector.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Row 2 - Right to Left (reverse direction) */}
                            <div className="relative flex overflow-x-hidden">
                                <motion.div
                                    className="animate-marquee-reverse whitespace-nowrap flex items-center gap-6 py-3"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    {[...sectorSolutions.slice().reverse(), ...sectorSolutions.slice().reverse(), ...sectorSolutions.slice().reverse()].map((sector, index) => {
                                        const Icon = sector.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 hover:border-crimson/40 dark:hover:border-crimson/40 transition-all duration-300 hover:shadow-lg hover:shadow-crimson/5 hover:scale-105"
                                            >
                                                <div className="w-8 h-8 rounded-xl bg-crimson/10 flex items-center justify-center">
                                                    <Icon className="w-4.5 h-4.5 text-crimson" />
                                                </div>
                                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    {sector.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </motion.div>

                                <div className="absolute top-0 animate-marquee-reverse2 whitespace-nowrap flex items-center gap-6 py-3">
                                    {[...sectorSolutions.slice().reverse(), ...sectorSolutions.slice().reverse(), ...sectorSolutions.slice().reverse()].map((sector, index) => {
                                        const Icon = sector.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 hover:border-crimson/40 dark:hover:border-crimson/40 transition-all duration-300 hover:shadow-lg hover:shadow-crimson/5 hover:scale-105"
                                            >
                                                <div className="w-8 h-8 rounded-xl bg-crimson/10 flex items-center justify-center">
                                                    <Icon className="w-4.5 h-4.5 text-crimson" />
                                                </div>
                                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    {sector.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
                </div>

                {/* Section Divider */}
                <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-burgundy uppercase tracking-wider px-4"
                    >
                        Proje Portföyümüz
                    </motion.span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />
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
                            <div className="relative h-full p-6 rounded-2xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 overflow-hidden">
                                {/* Background stock image */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <Image
                                        src={categoryImages[category.category] ?? '/images/consulting.jpg'}
                                        alt=""
                                        fill
                                        className="object-cover opacity-[0.10] dark:opacity-[0.12] group-hover:opacity-[0.18] dark:group-hover:opacity-[0.20] transition-opacity duration-500"
                                    />
                                </div>
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                                        <div className="w-5 h-5 bg-white/20 rounded-md" />
                                    </div>
                                    <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400">
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

                {/* Bottom Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-burgundy/5 dark:bg-burgundy/10 border border-burgundy/10 dark:border-burgundy/20">
                        <div className="flex -space-x-2">
                            {[0, 1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-burgundy to-crimson border-2 border-white dark:border-deep-space flex items-center justify-center"
                                >
                                    <span className="text-[10px] font-bold text-white">
                                        {['P', 'R', 'O', 'S'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            200+ işletme bize güveniyor
                        </span>
                        <span className="flex items-center gap-1 text-burgundy font-semibold text-sm">
                            <TrendingUp className="w-4 h-4" />
                            %99 Memnuniyet
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
