'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight, Database, FileText, Code, Workflow } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Çözümler dropdown items - Logo ERP ürünleri
const solutionsItems = [
    {
        name: 'Logo Tiger 3',
        description: 'Kurumsal ERP çözümü',
        href: '/#tiger',
        logo: '/tiger.png',
    },
    {
        name: 'Logo Go 3',
        description: 'KOBİ dostu ERP',
        href: '/#go3',
        logo: '/gowings.png',
    },
    {
        name: 'Logo CRM',
        description: 'Müşteri ilişkileri yönetimi',
        href: '/#crm',
        logo: '/logocrm.png',
    },
    {
        name: 'Logo Flow',
        description: 'İş süreçleri otomasyonu',
        href: '/#flow',
        logo: '/logoflow.png',
    },
    {
        name: 'Logo Mind',
        description: 'İş zekası platformu',
        href: '/#mind',
        logo: '/logomind.png',
    },
    {
        name: 'Logo Budget',
        description: 'Bütçe planlama sistemi',
        href: '/#budget',
        logo: '/logobudget.png',
    },
];

// Hizmetler dropdown items - Services section'dan
const servicesItems = [
    {
        name: 'Logo ERP Çözümleri',
        description: 'Tiger 3, Go 3 kurulum ve destek',
        href: '/#services',
        icon: Database,
    },
    {
        name: 'e-Dönüşüm',
        description: 'e-Fatura, e-Arşiv, e-Defter',
        href: '/#services',
        icon: FileText,
    },
    {
        name: 'Özel Yazılım',
        description: '.NET ve SQL tabanlı çözümler',
        href: '/#techflow',
        icon: Code,
    },
    {
        name: 'Süreç Danışmanlığı',
        description: 'İş akışı analizi ve dijitalleşme',
        href: '/#features',
        icon: Workflow,
    },
];

// Dropdown component for desktop
function DropdownMenu({
    title,
    items,
    type,
    isOpen,
    onToggle,
}: {
    title: string;
    items: typeof solutionsItems | typeof servicesItems;
    type: 'solutions' | 'services';
    isOpen: boolean;
    onToggle: () => void;
}) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={onToggle}
                className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group flex items-center gap-1"
            >
                {title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson transition-all group-hover:w-full" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-3 w-72 bg-white/95 dark:bg-deep-space/95 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl shadow-black/10 overflow-hidden z-50"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-burgundy/5 to-crimson/5 pointer-events-none" />

                        <div className="relative p-2">
                            {type === 'solutions' ? (
                                // Solutions with logos
                                <div className="grid grid-cols-2 gap-1">
                                    {(items as typeof solutionsItems).map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={onToggle}
                                            className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group"
                                        >
                                            <div className="relative w-12 h-12 rounded-lg bg-slate-100 dark:bg-white/10 overflow-hidden">
                                                <Image
                                                    src={item.logo}
                                                    alt={item.name}
                                                    fill
                                                    className="object-contain p-1"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xs font-medium text-slate-900 dark:text-white group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                                                    {item.name}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                // Services with icons
                                <div className="space-y-1">
                                    {(items as typeof servicesItems).map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                onClick={onToggle}
                                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group"
                                            >
                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-burgundy/10 to-crimson/10 flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-burgundy dark:text-crimson" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Footer link */}
                        <div className="relative border-t border-slate-200 dark:border-white/10 p-3">
                            <Link
                                href={type === 'solutions' ? '/#solutions' : '/#services'}
                                onClick={onToggle}
                                className="flex items-center justify-center gap-2 text-sm font-medium text-burgundy dark:text-crimson hover:underline"
                            >
                                Tümünü Gör
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Mobile accordion item
function MobileAccordion({
    title,
    items,
    type,
    isOpen,
    onToggle,
    onClose,
}: {
    title: string;
    items: typeof solutionsItems | typeof servicesItems;
    type: 'solutions' | 'services';
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}) {
    return (
        <div className="border-b border-slate-200 dark:border-white/10 last:border-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-4 text-lg font-medium text-slate-700 dark:text-gray-300"
            >
                {title}
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 space-y-2">
                            {type === 'solutions' ? (
                                <div className="grid grid-cols-3 gap-2">
                                    {(items as typeof solutionsItems).map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={onClose}
                                            className="flex flex-col items-center gap-2 p-2 rounded-xl bg-slate-100 dark:bg-white/5"
                                        >
                                            <div className="relative w-10 h-10 rounded-lg bg-white dark:bg-white/10 overflow-hidden">
                                                <Image
                                                    src={item.logo}
                                                    alt={item.name}
                                                    fill
                                                    className="object-contain p-1"
                                                />
                                            </div>
                                            <span className="text-[10px] text-center font-medium text-slate-700 dark:text-gray-300 line-clamp-1">
                                                {item.name.replace('Logo ', '')}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                (items as typeof servicesItems).map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={onClose}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-white/5"
                                        >
                                            <Icon className="w-5 h-5 text-burgundy dark:text-crimson" />
                                            <div>
                                                <div className="text-sm font-medium text-slate-900 dark:text-white">
                                                    {item.name}
                                                </div>
                                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const toggleMobileAccordion = (name: string) => {
        setOpenMobileAccordion(openMobileAccordion === name ? null : name);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenMobileAccordion(null);
    };

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 ${isScrolled
                ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-3">
                    {/* Desktop Dark Mode Logo */}
                    <div className="relative h-10 w-auto hidden dark:md:block group">
                        <img
                            src="/proseslogoswhite.png"
                            alt="Proses Yazılım"
                            className="h-10 w-auto opacity-0"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-[#00FF41] to-emerald-500"
                            style={{
                                maskImage: 'url(/proseslogoswhite.png)',
                                WebkitMaskImage: 'url(/proseslogoswhite.png)',
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'left',
                                WebkitMaskPosition: 'left',
                                filter: 'drop-shadow(0 0 8px rgba(0, 255, 65, 0.5))'
                            }}
                        />
                    </div>

                    {/* Desktop Light Mode Logo */}
                    <img
                        src="/proseslogoswhite.png"
                        alt="Proses Yazılım"
                        className="h-10 w-auto hidden md:block dark:hidden"
                    />

                    {/* Mobile Dark Mode Logo */}
                    <div className="relative h-10 w-auto hidden dark:block dark:md:hidden">
                        <img
                            src="/prosesminiwhite.png"
                            alt="Proses Yazılım"
                            className="h-10 w-auto opacity-0"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-[#00FF41] to-emerald-500"
                            style={{
                                maskImage: 'url(/prosesminiwhite.png)',
                                WebkitMaskImage: 'url(/prosesminiwhite.png)',
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'left',
                                WebkitMaskPosition: 'left',
                                filter: 'drop-shadow(0 0 8px rgba(0, 255, 65, 0.5))'
                            }}
                        />
                    </div>
                    {/* Mobile Light Mode Logo */}
                    <img
                        src="/prosesminik.png"
                        alt="Proses Yazılım"
                        className="h-10 w-auto block md:hidden dark:hidden"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Çözümler Dropdown */}
                    <DropdownMenu
                        title="Çözümler"
                        items={solutionsItems}
                        type="solutions"
                        isOpen={openDropdown === 'solutions'}
                        onToggle={() => toggleDropdown('solutions')}
                    />

                    {/* Hizmetler Dropdown */}
                    <DropdownMenu
                        title="Hizmetler"
                        items={servicesItems}
                        type="services"
                        isOpen={openDropdown === 'services'}
                        onToggle={() => toggleDropdown('services')}
                    />

                    {/* İletişim - Normal link */}
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
                    >
                        İletişim
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson transition-all group-hover:w-full" />
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    {/* <ThemeToggle /> */}
                    <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-burgundy to-crimson text-white font-medium text-sm hover:shadow-[0_0_20px_rgba(139,0,0,0.5)] transition-all transform hover:-translate-y-0.5">
                        Demo Talep Et
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* <ThemeToggle /> */}
                    <button
                        className="text-slate-900 dark:text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white/95 dark:bg-deep-space/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 p-6 md:hidden max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex flex-col">
                            {/* Çözümler Accordion */}
                            <MobileAccordion
                                title="Çözümler"
                                items={solutionsItems}
                                type="solutions"
                                isOpen={openMobileAccordion === 'solutions'}
                                onToggle={() => toggleMobileAccordion('solutions')}
                                onClose={closeMobileMenu}
                            />

                            {/* Hizmetler Accordion */}
                            <MobileAccordion
                                title="Hizmetler"
                                items={servicesItems}
                                type="services"
                                isOpen={openMobileAccordion === 'services'}
                                onToggle={() => toggleMobileAccordion('services')}
                                onClose={closeMobileMenu}
                            />

                            {/* İletişim */}
                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="flex items-center justify-between py-4 text-lg font-medium text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
                            >
                                İletişim
                                <ChevronRight className="w-5 h-5 text-crimson" />
                            </Link>

                            {/* CTA Button */}
                            <button className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-burgundy to-crimson text-white font-bold">
                                Demo Talep Et
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
