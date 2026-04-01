'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight, Database, FileText, Code, Workflow, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
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

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
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

    const handleDropdownEnter = (name: string) => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setOpenDropdown(name);
    };

    const handleDropdownLeave = () => {
        closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
    };

    const closeMobileMenu = () => { setIsMobileMenuOpen(false); setOpenMobileAccordion(null); };
    const isSolutionsActive = pathname.startsWith('/cozumler');
    const isServicesActive = pathname.startsWith('/hizmetler');

    return (
        <nav
            ref={navRef}
            aria-label="Ana navigasyon"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-white/[0.06]'
                    : 'bg-transparent'
            }`}
        >
            {/* Main navbar */}
            <div className="flex items-center justify-between h-16 lg:h-[68px] px-6 xl:px-12">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Proses Yazılım"
                        width={160}
                        height={40}
                        className="w-auto h-9 lg:h-10"
                        priority
                    />
                </Link>

                {/* Desktop Navigation — ortada, geniş aralıklı */}
                <div className="hidden md:flex items-center gap-1 lg:gap-2">
                    {/* Çözümler */}
                    <div
                        className="relative"
                        onMouseEnter={() => handleDropdownEnter('solutions')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <Link
                            href="/cozumler/logo-tiger-3"
                            aria-current={isSolutionsActive ? 'true' : undefined}
                            className={`relative flex items-center gap-1 px-4 lg:px-5 py-2.5 text-sm font-medium transition-colors ${
                                isSolutionsActive || openDropdown === 'solutions'
                                    ? 'text-burgundy dark:text-crimson'
                                    : 'text-slate-700 dark:text-slate-300 hover:text-burgundy dark:hover:text-crimson'
                            }`}
                        >
                            Çözümler
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                            {isSolutionsActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-burgundy dark:bg-crimson rounded-full" />}
                        </Link>

                        <AnimatePresence>
                            {openDropdown === 'solutions' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full left-0 z-50 mt-0 w-[460px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-white/[0.08] dark:bg-[#0f0f0f]"
                                    role="menu"
                                >
                                    <div className="p-3">
                                        <div className="grid grid-cols-3 gap-1">
                                            {solutionsItems.map((item) => (
                                                <Link
                                                    key={item.id}
                                                    href={item.href}
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors"
                                                >
                                                    <div className="relative w-11 h-11 rounded-lg bg-slate-50 dark:bg-white/[0.06] overflow-hidden group-hover:bg-white dark:group-hover:bg-white/10 transition-colors">
                                                        <Image src={item.logo} alt={item.name} fill className="object-contain p-1.5" />
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold text-slate-700 dark:text-white group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
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
                    <div
                        className="relative"
                        onMouseEnter={() => handleDropdownEnter('services')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <Link
                            href="/hizmetler/erp-danismanligi"
                            aria-current={isServicesActive ? 'true' : undefined}
                            className={`flex items-center gap-1 px-4 py-2.5 text-sm font-medium transition-colors ${
                                isServicesActive || openDropdown === 'services'
                                    ? 'text-burgundy dark:text-crimson'
                                    : 'text-slate-700 dark:text-slate-300 hover:text-burgundy dark:hover:text-crimson'
                            }`}
                        >
                            Hizmetler
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                            {isServicesActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-burgundy dark:bg-crimson rounded-full" />}
                        </Link>

                        <AnimatePresence>
                            {openDropdown === 'services' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full left-0 z-50 mt-0 w-[320px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-white/[0.08] dark:bg-[#0f0f0f]"
                                    role="menu"
                                >
                                    <div className="p-2">
                                        {servicesItems.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors"
                                                >
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-burgundy/8 dark:bg-burgundy/10 flex items-center justify-center">
                                                        <Icon className="w-4 h-4 text-burgundy dark:text-crimson" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="text-sm font-medium text-slate-700 dark:text-white group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href="/bursa-logo-bayi"
                        aria-current={pathname.startsWith('/bursa-logo-bayi') ? 'page' : undefined}
                        className={`relative px-4 lg:px-5 py-2.5 text-sm font-medium transition-colors ${
                            pathname.startsWith('/bursa-logo-bayi')
                                ? 'text-burgundy dark:text-crimson'
                                : 'text-slate-700 dark:text-slate-300 hover:text-burgundy dark:hover:text-crimson'
                        }`}
                    >
                        Bursa Logo Bayi
                        {pathname.startsWith('/bursa-logo-bayi') && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-burgundy dark:bg-crimson rounded-full" />}
                    </Link>

                    <Link
                        href="/iletisim"
                        aria-current={pathname.startsWith('/iletisim') ? 'page' : undefined}
                        className={`relative px-4 lg:px-5 py-2.5 text-sm font-medium transition-colors ${
                            pathname.startsWith('/iletisim')
                                ? 'text-burgundy dark:text-crimson'
                                : 'text-slate-700 dark:text-slate-300 hover:text-burgundy dark:hover:text-crimson'
                        }`}
                    >
                        İletişim
                        {pathname.startsWith('/iletisim') && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-burgundy dark:bg-crimson rounded-full" />}
                    </Link>
                </div>

                {/* Right side */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href={CONTACT.phoneHref}
                        className="hidden lg:flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-burgundy dark:hover:text-crimson transition-colors font-medium"
                    >
                        <Phone className="w-3.5 h-3.5" />
                        {CONTACT.phone}
                    </a>
                    <span className="hidden lg:block w-px h-5 bg-slate-200 dark:bg-white/10" />
                    <ThemeToggle />
                    <Link
                        href="/iletisim"
                        className="px-6 py-2.5 rounded-lg bg-burgundy hover:bg-dark-red text-white text-sm font-semibold transition-colors shadow-sm hover:shadow-md"
                    >
                        Demo Talep Et
                    </Link>
                </div>

                {/* Mobile */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
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
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden md:hidden bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-white/[0.06]"
                    >
                        <div className="px-5 py-3 max-h-[75vh] overflow-y-auto">
                            <a
                                href={CONTACT.phoneHref}
                                className="flex items-center gap-2.5 py-3 px-4 mb-2 rounded-lg bg-burgundy/5 dark:bg-burgundy/10 text-burgundy dark:text-crimson font-semibold text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                {CONTACT.phone}
                            </a>

                            {/* Çözümler */}
                            <div className="border-b border-slate-100 dark:border-white/[0.06]">
                                <button
                                    onClick={() => setOpenMobileAccordion(openMobileAccordion === 'solutions' ? null : 'solutions')}
                                    className="w-full flex items-center justify-between py-3.5 text-base font-semibold text-slate-800 dark:text-white"
                                >
                                    Çözümler
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openMobileAccordion === 'solutions' ? 'rotate-180' : ''}`} />
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
                                                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-white/[0.04] active:bg-slate-100 transition-colors"
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
                                    className="w-full flex items-center justify-between py-3.5 text-base font-semibold text-slate-800 dark:text-white"
                                >
                                    Hizmetler
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openMobileAccordion === 'services' ? 'rotate-180' : ''}`} />
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
                                                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-white/[0.04] active:bg-slate-100 transition-colors"
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

                            <Link href="/bursa-logo-bayi" onClick={closeMobileMenu}
                                className="flex items-center justify-between py-3.5 text-base font-semibold text-slate-800 dark:text-white border-b border-slate-100 dark:border-white/[0.06]">
                                Bursa Logo Bayi
                                <ChevronRight className="w-4 h-4 text-slate-400" />
                            </Link>

                            <Link href="/iletisim" onClick={closeMobileMenu}
                                className="flex items-center justify-between py-3.5 text-base font-semibold text-slate-800 dark:text-white">
                                İletişim
                                <ChevronRight className="w-4 h-4 text-slate-400" />
                            </Link>

                            <Link
                                href="/iletisim"
                                onClick={closeMobileMenu}
                                className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-burgundy text-white font-semibold text-sm"
                            >
                                Demo Talep Et
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
