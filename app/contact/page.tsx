'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal as TerminalIcon, Minimize2, Maximize2, X, ChevronRight, Hash, Command, Cpu, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Typewriter effect component
const Typewriter = ({ text, delay = 0, speed = 30, onComplete }: { text: string; delay?: number; speed?: number; onComplete?: () => void }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(prev => prev + text[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
                onComplete && onComplete();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started, onComplete]);

    return <span>{displayedText}</span>;
};

// Terminal Line Input Component
const TerminalInput = ({
    label,
    value,
    onChange,
    isActive,
    onSubmit,
    type = 'text',
    placeholder = ''
}: {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isActive: boolean;
    onSubmit?: () => void;
    type?: string;
    placeholder?: string;
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isActive && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isActive]);

    return (
        <div className={`flex flex-col md:flex-row md:items-center gap-1 md:gap-2 font-mono text-base md:text-base ${isActive ? 'opacity-100' : 'opacity-60'}`}>
            <div className="flex items-center gap-2 min-w-fit mb-1 md:mb-0">
                <span className="text-emerald-500">➜</span>
                <span className="text-cyan-400 font-semibold">{label}</span>
            </div>
            <div className="relative flex-1">
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && onSubmit) {
                            e.preventDefault();
                            onSubmit();
                        }
                    }}
                    className="w-full bg-transparent border-none outline-none text-slate-100 focus:ring-0 p-2 md:p-0 font-mono placeholder-slate-700 bg-white/5 md:bg-transparent rounded md:rounded-none"
                    disabled={!isActive}
                    placeholder={isActive ? placeholder : ''}
                    autoComplete="off"
                />
                {isActive && (
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="absolute top-2 md:top-0 w-2 h-5 bg-emerald-500 ml-0.5 pointer-events-none hidden md:block"
                        style={{ left: `${value.length}ch` }}
                    />
                )}
            </div>
        </div>
    );
};

export default function ContactPage() {
    const [step, setStep] = useState(0);
    const [history, setHistory] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        product: '',
        message: ''
    });
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto scroll to bottom
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [step, history, formData]);

    const handleNext = () => {
        setStep(prev => prev + 1);
        setHistory(prev => [...prev, 'OK']);
    };

    const handleProductSelect = (productName: string) => {
        setFormData({ ...formData, product: productName });
        handleNext();
    };

    const handleSubmit = async () => {
        setStep(100); // Loading state
        await new Promise(resolve => setTimeout(resolve, 2500));
        setStep(200); // Success state
    };

    const products = [
        { id: 'tiger', name: 'Logo Tiger 3' },
        { id: 'go3', name: 'Logo Go 3' },
        { id: 'crm', name: 'Logo CRM' },
        { id: 'flow', name: 'Logo Flow' },
        { id: 'mind', name: 'Logo Mind' },
        { id: 'other', name: 'Diğer' },
    ];

    const sysInfo = [
        { label: 'PROTOKOL', value: 'GÜVENLİ/HTTPS' },
        { label: 'SUNUCU', value: 'BURSA/TR_NILUFER' },
        { label: 'DURUM', value: 'AKTİF - BEKLİYOR' },
        { label: 'SÜRÜM', value: 'v2.1.4 (STABLE)' },
    ];

    return (
        <main className="min-h-screen bg-[#050505] text-slate-300 font-mono overflow-hidden">
            <Navbar />

            <div className="pt-20 pb-8 px-4 md:pt-24 md:pb-12 md:px-8 h-[100dvh] flex flex-col items-center justify-center relative">
                {/* Background Grid & Glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-6xl w-full h-[85dvh] md:h-[80vh] flex flex-col md:flex-row gap-6 relative z-10">

                    {/* Left Panel - System Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex flex-col w-72 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6"
                    >
                        <div className="flex items-center gap-3 text-emerald-400 border-b border-white/10 pb-4 mb-6">
                            <Cpu className="w-5 h-5 animate-pulse" />
                            <span className="font-bold tracking-wider">SİSTEM_DURUMU</span>
                        </div>

                        <div className="space-y-5">
                            {sysInfo.map((info, i) => (
                                <div key={i} className="flex justify-between items-center text-xs">
                                    <span className="text-slate-500 font-semibold">{info.label}</span>
                                    <span className="text-emerald-500/80 font-mono">{info.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <h3 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Doğrudan İletişim</h3>
                            <div className="space-y-3">
                                <a href="tel:+905321387868" className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group">
                                    <span className="text-emerald-600 group-hover:text-emerald-400">#</span>
                                    +90 532 138 78 68
                                </a>
                                <a href="mailto:destek@prosesyazilim.com" className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group">
                                    <span className="text-emerald-600 group-hover:text-emerald-400">@</span>
                                    destek@prosesyazilim.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded text-[10px] text-emerald-600 font-mono leading-relaxed">
                                {'>'} SYSTEM INIT... OK<br />
                                {'>'} LOADING MODULES... OK<br />
                                {'>'} WAITING FOR USER INPUT
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Panel - Terminal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Terminal Window Header */}
                        <div className="h-12 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 select-none">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-4 flex items-center gap-2 text-xs text-slate-400 font-mono opacity-60">
                                    <TerminalIcon className="w-3 h-3" />
                                    <span>user@proses-web:~/contact</span>
                                </div>
                            </div>
                            <div className="text-[10px] text-slate-600 font-mono">
                                bash — 80x24
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div
                            ref={containerRef}
                            className="flex-1 p-6 md:p-8 overflow-y-auto overflow-x-hidden font-mono text-sm md:text-base space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent scroll-smooth"
                        >
                            <div className="text-slate-500 mb-8 border-b border-white/5 pb-4">
                                Copyright (c) 2024 Proses Yazılım A.Ş. Tüm hakları saklıdır.<br />
                                İletişim Protokolü v1.0 başlatıldı.<br />
                                Lütfen aşağıdaki adımları takip ediniz.<br />
                            </div>

                            {/* Interaction Flow */}
                            <div className="space-y-6">
                                {/* Step 0: Init */}
                                <div>
                                    <span className="text-emerald-500 font-bold">proses@root:~$</span> <span className="text-slate-200">./iletisim_baslat.sh</span>
                                </div>

                                {/* Step 1: Name */}
                                {step >= 0 && (
                                    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                                        <div className="text-emerald-400 mb-2">{'>'} Kimlik doğrulama başlatılıyor... Lütfen adınızı giriniz.</div>
                                        <TerminalInput
                                            label="Adınız:"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            isActive={step === 0}
                                            onSubmit={handleNext}
                                            placeholder="İsim giriniz..."
                                        />
                                    </div>
                                )}

                                {/* Step 2: Surname */}
                                {step >= 1 && (
                                    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                                        <TerminalInput
                                            label="Soyadınız:"
                                            value={formData.surname}
                                            onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                                            isActive={step === 1}
                                            onSubmit={handleNext}
                                            placeholder="Soyisim giriniz..."
                                        />
                                    </div>
                                )}

                                {/* Step 3: Product Select */}
                                {step >= 2 && (
                                    <div className="animate-in fade-in slide-in-from-left-4 duration-500 space-y-3">
                                        <div className="text-emerald-400">{'>'} Hangi çözümümüz ile ilgileniyorsunuz? (Seçim yapınız)</div>

                                        {step === 2 ? (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-6">
                                                {products.map((p) => (
                                                    <button
                                                        key={p.id}
                                                        onClick={() => handleProductSelect(p.name)}
                                                        className="text-left px-3 py-2 border border-white/10 bg-white/5 hover:bg-emerald-500/20 hover:border-emerald-500/50 rounded transition-all text-xs text-slate-300 hover:text-white group"
                                                    >
                                                        <span className="text-emerald-600 group-hover:text-emerald-400 mr-2">[ ]</span>
                                                        {p.name}
                                                    </button>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-cyan-300 pl-6 flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4" />
                                                Seçilen: {formData.product}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Step 4: Contact Info */}
                                {step >= 3 && (
                                    <div className="animate-in fade-in slide-in-from-left-4 duration-500 space-y-4">
                                        <div className="text-emerald-400">{'>'} Size ulaşabileceğimiz iletişim bilgileri:</div>
                                        <TerminalInput
                                            label="E-posta:"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            isActive={step === 3}
                                            onSubmit={handleNext}
                                            type="email"
                                            placeholder="ornek@sirket.com"
                                        />
                                        {step >= 4 && (
                                            <TerminalInput
                                                label="Telefon:"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                isActive={step === 4}
                                                onSubmit={handleNext}
                                                type="tel"
                                                placeholder="+90 555 ..."
                                            />
                                        )}
                                    </div>
                                )}

                                {/* Step 5: Message */}
                                {step >= 5 && (
                                    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                                        <div className="text-emerald-400 mb-2">{'>'} Bize iletmek istediğiniz mesaj nedir?</div>
                                        <TerminalInput
                                            label="Mesaj:"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            isActive={step === 5}
                                            onSubmit={handleSubmit}
                                            placeholder="Mesajınızı yazıp ENTER'a basınız..."
                                        />
                                    </div>
                                )}

                                {/* Loading State */}
                                {step === 100 && (
                                    <div className="py-4 space-y-2">
                                        <div className="text-yellow-400 flex items-center gap-2">
                                            <div className="w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                                            Veriler şifreleniyor ve sunucuya iletiliyor...
                                        </div>
                                        <div className="w-64 h-1 bg-white/10 rounded overflow-hidden">
                                            <motion.div
                                                className="h-full bg-emerald-500"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Success State */}
                                {step === 200 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                            <TerminalIcon className="w-24 h-24 text-emerald-500" />
                                        </div>

                                        <div className="relative z-10">
                                            <div className="text-xl text-emerald-400 font-bold mb-2 flex items-center gap-2">
                                                <CheckCircle className="w-6 h-6" />
                                                İŞLEM BAŞARILI [200 OK]
                                            </div>
                                            <div className="text-slate-300 space-y-1 text-sm">
                                                <p>Mesajınız başarıyla sistemlerimize kaydedilmiştir.</p>
                                                <p>Referans No: <span className="text-white font-mono bg-white/10 px-1 rounded">#{Math.random().toString(36).substr(2, 8).toUpperCase()}</span></p>
                                                <p className="mt-4 text-slate-400">Ekibimiz en kısa sürede (genellikle 2-4 saat içinde) dönüş yapacaktır.</p>
                                            </div>

                                            <button
                                                onClick={() => {
                                                    setFormData({ name: '', surname: '', email: '', phone: '', product: '', message: '' });
                                                    setStep(0);
                                                    setHistory([]);
                                                }}
                                                className="mt-6 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded border border-emerald-500/50 text-xs transition-colors"
                                            >
                                                YENİ İLETİŞİM BAŞLAT
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
