'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navLinks = [
    { name: 'Çözümler', href: '#solutions' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Referanslar', href: '#references' },
    { name: 'Kurumsal', href: '#corporate' },
    { name: 'İletişim', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 ${isScrolled
                ? 'bg-white/5 dark:bg-black/5 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-3">
                    <img src="/proseslogoswhite.png" alt="Proses Yazılım" className="h-10 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-burgundy to-crimson text-white font-medium text-sm hover:shadow-[0_0_20px_rgba(139,0,0,0.5)] transition-all transform hover:-translate-y-0.5">
                        Demo Talep Et
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
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
                        className="absolute top-full left-0 right-0 bg-white/95 dark:bg-deep-space/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 p-6 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-between group"
                                >
                                    {link.name}
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-crimson" />
                                </Link>
                            ))}
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
