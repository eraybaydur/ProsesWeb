'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-crimson to-accent-red rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <span className="text-slate-900 dark:text-white">Proses<span className="text-crimson">Yazılım</span></span>
                        </Link>
                        <p className="text-slate-700 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            İşletmenizin dijital dönüşüm yolculuğunda güvenilir teknoloji ortağınız. Logo ERP çözümleri ve özel yazılım geliştirme hizmetleri.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-500 dark:text-gray-400 hover:text-crimson transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-500 dark:text-gray-400 hover:text-crimson transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-500 dark:text-gray-400 hover:text-crimson transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-500 dark:text-gray-400 hover:text-crimson transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Hızlı Bağlantılar</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Ana Sayfa</Link></li>
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Hakkımızda</Link></li>
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Kariyer</Link></li>
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Hizmetlerimiz</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Logo ERP Çözümleri</Link></li>
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">e-Dönüşüm</Link></li>
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Özel Yazılım</Link></li>
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Süreç Danışmanlığı</Link></li>
                            <li><Link href="#" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">B2B / B2C Sistemler</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-700 dark:text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-crimson shrink-0" />
                                <span>Ahmet Yesevi Mah. Hudut Sk. No:1A/A Central Balat Sitesi A Blok K:35 D:305<br />Nilüfer, Bursa, Türkiye</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 dark:text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-crimson shrink-0" />
                                <span>+90 532 138 78 68</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 dark:text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-crimson shrink-0" />
                                <span>destek@prosesyazilim.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 dark:text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} Proses Yazılım. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-slate-600 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">Gizlilik Politikası</Link>
                        <Link href="#" className="text-slate-600 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">Kullanım Şartları</Link>
                        <Link href="#" className="text-slate-600 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">KVKK</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
