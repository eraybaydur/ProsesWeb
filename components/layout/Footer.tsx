'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 pt-16 pb-8">
            <div className="site-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center mb-6">
                            <Image
                                src="/logo.png"
                                alt="Proses Yazılım"
                                width={128}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-slate-700 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            İşletmenizin dijital dönüşüm yolculuğunda güvenilir teknoloji ortağınız. Logo ERP çözümleri ve özel yazılım geliştirme hizmetleri.
                        </p>
                        <div className="flex gap-4">
                            <a href={CONTACT.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-crimson transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                            <a href={CONTACT.social.instagram} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-crimson transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Hızlı Bağlantılar</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Ana Sayfa</Link></li>
                            <li><Link href="/cozumler/logo-tiger-3" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Logo Tiger 3</Link></li>
                            <li><Link href="/cozumler/logo-go-3" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Logo Go 3</Link></li>
                            <li><Link href="/cozumler/logo-crm" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Logo CRM</Link></li>
                            <li><Link href="/iletisim" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Hizmetlerimiz</h3>
                        <ul className="space-y-3">
                            <li><Link href="/hizmetler/erp-danismanligi" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Logo ERP Çözümleri</Link></li>
                            <li><Link href="/hizmetler/e-donusum" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">e-Dönüşüm</Link></li>
                            <li><Link href="/hizmetler/ozel-yazilim" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Özel Yazılım</Link></li>
                            <li><Link href="/hizmetler/erp-danismanligi" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">Süreç Danışmanlığı</Link></li>
                            <li><Link href="/hizmetler/ozel-yazilim" className="text-slate-700 dark:text-gray-400 hover:text-crimson text-sm transition-colors">B2B / B2C Sistemler</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-700 dark:text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-crimson shrink-0" />
                                <span>{CONTACT.address.street} {CONTACT.address.building}<br />{CONTACT.address.district}</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 dark:text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-crimson shrink-0" />
                                <a href={CONTACT.phoneHref} className="hover:text-crimson transition-colors">{CONTACT.phone}</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 dark:text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-crimson shrink-0" />
                                <a href={CONTACT.emailHref} className="hover:text-crimson transition-colors">{CONTACT.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 dark:text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} Proses Yazılım. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/iletisim" className="text-slate-600 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">Gizlilik Politikası</Link>
                        <Link href="/iletisim" className="text-slate-600 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">Kullanım Şartları</Link>
                        <Link href="/iletisim" className="text-slate-600 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">KVKK</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
