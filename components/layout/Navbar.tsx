'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight, Database, FileText, Code, Workflow, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { CONTACT } from '@/lib/contact';

const solutionsItems = [
    { id: 'tiger', name: 'Logo Tiger 3', description: 'Kurumsal ERP çözümü', logo: '/tiger.webp', href: '/cozumler/logo-tiger-3' },
    { id: 'go3', name: 'Logo Go 3', description: 'KOBİ dostu ERP', logo: '/gowings.webp', href: '/cozumler/logo-go-3' },
    { id: 'crm', name: 'Logo CRM', description: 'Müşteri ilişkileri yönetimi', logo: '/logocrm.webp', href: '/cozumler/logo-crm' },
    { id: 'flow', name: 'Logo Flow', description: 'İş süreçleri otomasyonu', logo: '/logoflow.webp', href: '/cozumler/logo-flow' },
    { id: 'mind', name: 'Logo Mind', description: 'İş zekası platformu', logo: '/logomind.webp', href: '/cozumler/logo-mind' },
    { id: 'budget', name: 'Logo Budget', description: 'Bütçe planlama sistemi', logo: '/logobudget.webp', href: '/cozumler/logo-budget' },
];

const servicesItems = [
    { name: 'ERP Danışmanlığı', description: 'Kurulum, eğitim ve süreç analizi', href: '/hizmetler/erp-danismanligi', icon: Database },
    { name: 'e-Dönüşüm', description: 'e-Fatura, e-Arşiv, e-İrsaliye, e-Defter', href: '/hizmetler/e-donusum', icon: FileText },
    { name: 'Özel Yazılım', description: 'B2B portal, REST API, entegrasyon', href: '/hizmetler/ozel-yazilim', icon: Code },
    { name: 'Teknik Destek', description: '7/24 destek ve bakım hizmeti', href: '/hizmetler/teknik-destek', icon: Workflow },
];

function NavLink({ href, children, isActive = false, onClick }: { href: string; children: React.ReactNode; isActive?: boolean; onClick?: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`group relative rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                    ? 'text-slate-900 dark:text-white bg-slate-100/90 dark:bg-white/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/75 dark:hover:bg-white/5'
            }`}
        >
            {children}
            <span
                className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-burgundy to-crimson transition-all duration-300 ${
                    isActive ? 'w-8' : 'w-0 group-hover:w-6'
                }`}
            />
        </Link>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return;
            setOpenDropdown(null);
            setOpenMobileAccordion(null);
            setIsMobileMenuOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const toggleDropdown = (name: string) => setOpenDropdown(openDropdown === name ? null : name);
    const closeMobileMenu = () => { setIsMobileMenuOpen(false); setOpenMobileAccordion(null); };
    const isSolutionsActive = pathname.startsWith('/cozumler');
    const isServicesActive = pathname.startsWith('/hizmetler');

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'h-20 px-3 sm:px-5 pt-2'
                    : 'h-20 px-3 sm:px-5'
            }`}
        >
            <div className={`mx-auto h-full max-w-6xl flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
                isScrolled
                    ? 'rounded-2xl border border-slate-200/80 dark:border-white/[0.08] bg-white/85 dark:bg-black/75 backdrop-blur-2xl shadow-[0_1px_3px_rgba(15,23,42,0.06),0_14px_32px_rgba(15,23,42,0.12)]'
                    : 'border border-transparent bg-transparent'
            }`}>
                {/* Logo */}
                <Link href="/" className="relative group">
                    <Image
                        src="/logo.png"
                        alt="Proses Yazılım"
                        width={160}
                        height={40}
                        className={`w-auto transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10'}`}
                        priority
                    />
                    <div className="absolute -inset-2 bg-burgundy/0 group-hover:bg-burgundy/5 rounded-xl transition-colors duration-300" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {/* Çözümler */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('solutions')}
                            aria-haspopup="menu"
                            aria-expanded={openDropdown === 'solutions'}
                            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-all ${
                                openDropdown === 'solutions' || isSolutionsActive
                                    ? 'text-slate-900 dark:text-white bg-slate-100/90 dark:bg-white/10'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5'
                            }`}
                        >
                            Çözümler
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {openDropdown === 'solutions' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.15, ease: 'easeOut' }}
                                    className="absolute top-full left-1/2 z-50 mt-2 w-[500px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/[0.10] dark:bg-[#0a0a0a]/95"
                                    role="menu"
                                >
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-burgundy/35 to-transparent" />
                                    <div className="p-3">
                                        <div className="grid grid-cols-3 gap-1">
                                            {solutionsItems.map((item) => (
                                                <Link
                                                    key={item.id}
                                                    href={item.href}
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="group flex flex-col items-center gap-2.5 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-200"
                                                >
                                                    <div className="relative w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/[0.06] overflow-hidden group-hover:bg-white dark:group-hover:bg-white/10 group-hover:shadow-md transition-all duration-200">
                                                        <Image src={item.logo} alt={item.name} fill className="object-contain p-1.5" />
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold text-slate-800 dark:text-white group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 leading-tight">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Hizmetler */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('services')}
                            aria-haspopup="menu"
                            aria-expanded={openDropdown === 'services'}
                            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-all ${
                                openDropdown === 'services' || isServicesActive
                                    ? 'text-slate-900 dark:text-white bg-slate-100/90 dark:bg-white/10'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5'
                            }`}
                        >
                            Hizmetler
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {openDropdown === 'services' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.15, ease: 'easeOut' }}
                                    className="absolute top-full left-1/2 z-50 mt-2 w-[350px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/[0.10] dark:bg-[#0a0a0a]/95"
                                    role="menu"
                                >
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-burgundy/35 to-transparent" />
                                    <div className="p-2">
                                        {servicesItems.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="group flex items-center gap-3.5 px-3 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-200"
                                                >
                                                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-burgundy/8 dark:bg-burgundy/10 flex items-center justify-center group-hover:bg-burgundy/15 transition-colors">
                                                        <Icon className="w-4 h-4 text-burgundy dark:text-crimson" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="text-sm font-medium text-slate-800 dark:text-white group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-xs text-slate-400 dark:text-slate-500 truncate">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 ml-auto shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <NavLink href="/bursa-logo-bayi" isActive={pathname.startsWith('/bursa-logo-bayi')}>Bursa</NavLink>
                    <NavLink href="/iletisim" isActive={pathname.startsWith('/iletisim')}>İletişim</NavLink>
                </div>

                {/* Right side */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href={CONTACT.phoneHref}
                        className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-burgundy dark:hover:text-crimson transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        <span>{CONTACT.phone}</span>
                    </a>
                    <ThemeToggle />
                    <Link
                        href="/iletisim"
                        className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:shadow-lg hover:shadow-burgundy/25"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-burgundy to-crimson" />
                        <div className="absolute inset-0 bg-gradient-to-r from-crimson to-burgundy opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center gap-1.5">
                            Demo Talep Et
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </Link>
                </div>

                {/* Mobile */}
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <button
                        className="relative w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden md:hidden bg-white/98 dark:bg-[#0a0a0a]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-white/[0.06]"
                    >
                        <div className="px-6 py-4 max-h-[75vh] overflow-y-auto">
                            <a
                                href={CONTACT.phoneHref}
                                className="flex items-center gap-3 py-3 px-4 mb-2 rounded-xl bg-burgundy/5 dark:bg-burgundy/10 text-burgundy dark:text-crimson font-semibold text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                {CONTACT.phone}
                            </a>
                            {/* Çözümler */}
                            <div className="border-b border-slate-100 dark:border-white/[0.06]">
                                <button
                                    onClick={() => setOpenMobileAccordion(openMobileAccordion === 'solutions' ? null : 'solutions')}
                                    className="w-full flex items-center justify-between py-4 text-base font-semibold text-slate-800 dark:text-white"
                                >
                                    Çözümler
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${openMobileAccordion === 'solutions' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openMobileAccordion === 'solutions' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid grid-cols-3 gap-2 pb-4">
                                                {solutionsItems.map((item) => (
                                                    <Link
                                                        key={item.id}
                                                        href={item.href}
                                                        onClick={closeMobileMenu}
                                                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] active:bg-slate-100 dark:active:bg-white/[0.08] transition-colors"
                                                    >
                                                        <div className="relative w-10 h-10 rounded-lg bg-white dark:bg-white/10 overflow-hidden">
                                                            <Image src={item.logo} alt={item.name} fill className="object-contain p-1" />
                                                        </div>
                                                        <span className="text-[10px] text-center font-medium text-slate-700 dark:text-slate-300 leading-tight">
                                                            {item.name.replace('Logo ', '')}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Hizmetler */}
                            <div className="border-b border-slate-100 dark:border-white/[0.06]">
                                <button
                                    onClick={() => setOpenMobileAccordion(openMobileAccordion === 'services' ? null : 'services')}
                                    className="w-full flex items-center justify-between py-4 text-base font-semibold text-slate-800 dark:text-white"
                                >
                                    Hizmetler
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${openMobileAccordion === 'services' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openMobileAccordion === 'services' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="space-y-1 pb-4">
                                                {servicesItems.map((item) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            onClick={closeMobileMenu}
                                                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] active:bg-slate-100 transition-colors"
                                                        >
                                                            <Icon className="w-4 h-4 text-burgundy dark:text-crimson shrink-0" />
                                                            <div className="min-w-0">
                                                                <div className="text-sm font-medium text-slate-800 dark:text-white">{item.name}</div>
                                                                <div className="text-[11px] text-slate-400 truncate">{item.description}</div>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Direct links */}
                            <Link href="/bursa-logo-bayi" onClick={closeMobileMenu}
                                className="flex items-center justify-between py-4 text-base font-semibold text-slate-800 dark:text-white border-b border-slate-100 dark:border-white/[0.06]">
                                Bursa
                                <ChevronRight className="w-4 h-4 text-burgundy" />
                            </Link>

                            <Link href="/iletisim" onClick={closeMobileMenu}
                                className="flex items-center justify-between py-4 text-base font-semibold text-slate-800 dark:text-white">
                                İletişim
                                <ChevronRight className="w-4 h-4 text-burgundy" />
                            </Link>

                            {/* Mobile CTA */}
                            <Link
                                href="/iletisim"
                                onClick={closeMobileMenu}
                                className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-burgundy to-crimson text-white font-semibold text-sm"
                            >
                                Demo Talep Et
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
