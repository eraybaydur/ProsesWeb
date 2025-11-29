'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const products = [
    { id: 'tiger', name: 'Tiger 3', logo: '/tiger.png', color: 'from-orange-500 to-red-500' },
    { id: 'go3', name: 'Go 3', logo: '/gowings.png', color: 'from-blue-500 to-indigo-500' },
    { id: 'crm', name: 'CRM', logo: '/logocrm.png', color: 'from-purple-500 to-pink-500' },
    { id: 'flow', name: 'Flow', logo: '/logoflow.png', color: 'from-cyan-500 to-blue-500' },
    { id: 'mind', name: 'Mind', logo: '/logomind.png', color: 'from-emerald-500 to-teal-500' },
    { id: 'other', name: 'Diğer', logo: null, color: 'from-slate-500 to-slate-600' },
];

const contactInfo = [
    { icon: Phone, label: 'Telefon', value: '+0 532 138 78 68', href: 'tel:+905321387868' },
    { icon: Mail, label: 'E-posta', value: 'destek@prosesyazilim.com', href: 'mailto:destek@prosesyazilim.com' },
    { icon: MapPin, label: 'Adres', value: 'Ahmet Yesevi Mah. Hudut Sk. No:1A/A Central Balat Sitesi A Blok K:35 D:305 Nilüfer, Bursa, Türkiye', href: '#' },
    { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt-Cuma: 09:00 - 18:00', href: '#' },
];

// Floating Input Component
function FloatingInput({
    id,
    name,
    type = 'text',
    label,
    value,
    onChange,
    required = false,
    textarea = false,
}: {
    id: string;
    name: string;
    type?: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    textarea?: boolean;
}) {
    const [isFocused, setIsFocused] = useState(false);
    const isActive = isFocused || value.length > 0;

    const inputClasses = `
        w-full bg-white/50 dark:bg-white/[0.03]
        border border-slate-200 dark:border-white/10
        rounded-xl px-4 py-4 pt-6
        outline-none transition-all duration-300
        text-slate-900 dark:text-white
        placeholder-transparent
        focus:border-crimson/50 focus:ring-2 focus:ring-crimson/20
        ${isFocused ? 'shadow-[0_0_20px_rgba(220,20,60,0.15)]' : ''}
    `;

    return (
        <div className="relative group">
            {/* Glow effect on focus */}
            <motion.div
                className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-burgundy to-crimson opacity-0 blur-sm transition-opacity duration-300"
                animate={{ opacity: isFocused ? 0.3 : 0 }}
            />

            <div className="relative">
                {textarea ? (
                    <textarea
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        required={required}
                        rows={4}
                        className={`${inputClasses} resize-none`}
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        required={required}
                        className={inputClasses}
                    />
                )}

                {/* Floating Label */}
                <label
                    htmlFor={id}
                    className={`
                        absolute left-4 transition-all duration-200 pointer-events-none
                        ${isActive
                            ? 'top-2 text-xs text-crimson font-medium'
                            : 'top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500'
                        }
                        ${textarea && !isActive ? 'top-4 translate-y-0' : ''}
                    `}
                >
                    {label}
                </label>
            </div>
        </div>
    );
}

// Product Card Component
function ProductCard({
    product,
    isSelected,
    onClick,
}: {
    product: typeof products[0];
    isSelected: boolean;
    onClick: () => void;
}) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
                relative p-4 rounded-xl border transition-all duration-300
                flex flex-col items-center gap-2
                ${isSelected
                    ? 'bg-gradient-to-br from-burgundy/10 to-crimson/10 border-crimson/50 shadow-[0_0_20px_rgba(220,20,60,0.2)]'
                    : 'bg-white/50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-crimson/30'
                }
            `}
        >
            {/* Selected indicator */}
            {isSelected && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-5 h-5 rounded-full bg-crimson flex items-center justify-center"
                >
                    <Check className="w-3 h-3 text-white" />
                </motion.div>
            )}

            {/* Product logo or placeholder */}
            <div className="w-12 h-12 relative flex items-center justify-center">
                {product.logo ? (
                    <Image
                        src={product.logo}
                        alt={product.name}
                        fill
                        className="object-contain"
                    />
                ) : (
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.color} opacity-50`} />
                )}
            </div>

            <span className={`text-sm font-medium ${isSelected ? 'text-crimson' : 'text-slate-600 dark:text-slate-400'}`}>
                {product.name}
            </span>
        </motion.button>
    );
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        product: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <main className="relative min-h-screen w-full bg-slate-50 dark:bg-deep-space text-slate-900 dark:text-white overflow-hidden">
            <Navbar />

            {/* Background */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-crimson/5" />

                {/* Glowing Orbs */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-burgundy/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-crimson/20 rounded-full blur-[120px]"
                />
            </div>

            {/* Content */}
            <section className="pt-28 pb-20 px-4 sm:px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-sm font-semibold text-crimson tracking-wider mb-4"
                        >
                            İLETİŞİM
                        </motion.span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            Birlikte{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">
                                Çalışalım
                            </span>
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                            Dijital dönüşüm yolculuğunuzda size rehberlik etmek için buradayız.
                        </p>
                    </motion.div>

                    {/* Split Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Left Side - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* Info Cards */}
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-crimson/30 transition-all group"
                                    >
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-burgundy to-crimson text-white group-hover:shadow-lg group-hover:shadow-crimson/20 transition-shadow">
                                            <info.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{info.label}</p>
                                            <p className="font-medium text-slate-900 dark:text-white">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Map or Additional Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-burgundy/10 to-crimson/10 border border-crimson/20"
                            >
                                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                                    Logo Yazılım Çözüm Ortağı
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    15+ yıllık deneyimimizle işletmenizin dijital dönüşümüne katkı sağlıyoruz.
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-sm text-emerald-600 dark:text-emerald-400">Aktif Destek</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-3"
                        >
                            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-white/[0.02] backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-xl">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center"
                                        >
                                            <Check className="w-10 h-10 text-white" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                            Mesajınız Alındı!
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                                            En kısa sürede sizinle iletişime geçeceğiz.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setFormData({
                                                    firstName: '',
                                                    lastName: '',
                                                    email: '',
                                                    phone: '',
                                                    product: '',
                                                    message: '',
                                                });
                                            }}
                                            className="text-crimson font-medium hover:underline"
                                        >
                                            Yeni mesaj gönder
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Fields */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <FloatingInput
                                                id="firstName"
                                                name="firstName"
                                                label="Adınız"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                            <FloatingInput
                                                id="lastName"
                                                name="lastName"
                                                label="Soyadınız"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* Contact Fields */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <FloatingInput
                                                id="email"
                                                name="email"
                                                type="email"
                                                label="E-posta Adresiniz"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <FloatingInput
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                label="Telefon Numaranız"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* Product Selection */}
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                İlgilendiğiniz Ürün
                                            </label>
                                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                                                {products.map((product) => (
                                                    <ProductCard
                                                        key={product.id}
                                                        product={product}
                                                        isSelected={formData.product === product.id}
                                                        onClick={() => setFormData((prev) => ({ ...prev, product: product.id }))}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <FloatingInput
                                            id="message"
                                            name="message"
                                            label="Mesajınız"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            textarea
                                        />

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className="w-full py-4 rounded-xl bg-gradient-to-r from-burgundy to-crimson text-white font-semibold shadow-lg shadow-burgundy/25 hover:shadow-xl hover:shadow-burgundy/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-1">
                                                        {[0, 1, 2].map((i) => (
                                                            <motion.div
                                                                key={i}
                                                                className="w-1.5 h-1.5 rounded-full bg-white"
                                                                animate={{ y: [0, -6, 0] }}
                                                                transition={{
                                                                    duration: 0.5,
                                                                    repeat: Infinity,
                                                                    delay: i * 0.1,
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span>Gönderiliyor</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <span>Mesaj Gönder</span>
                                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
