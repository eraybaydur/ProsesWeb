"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CONTACT } from "@/lib/contact";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    description: "Hafta içi 09:00 - 18:00",
  },
  {
    icon: Mail,
    label: "E-posta",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    description: "En geç 24 saat içinde dönüş",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: CONTACT.address.building,
    href: CONTACT.maps.url,
    description: `${CONTACT.address.street.split(" ").slice(0, 3).join(" ")}... ${CONTACT.address.district.split(",")[0]}`,
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pazartesi - Cuma",
    href: undefined,
    description: "09:00 - 18:00",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export const ContactPageClient = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-burgundy/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-crimson/5 blur-[100px]" />
        </div>

        <div className="site-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-burgundy/20 bg-burgundy/10 px-4 py-1.5 text-sm font-medium text-burgundy">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-burgundy" />
              İletişim
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Bizimle <span className="text-burgundy">İletişime</span> Geçin
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Logo ERP çözümleri, özel yazılım ve dijital dönüşüm hizmetleri hakkında bilgi almak
              için bize ulaşın. Uzman ekibimiz size yardımcı olmak için hazır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16 md:pb-24">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const Wrapper = info.href ? "a" : "div";
              const wrapperProps = info.href
                ? {
                    href: info.href,
                    target: info.href.startsWith("http") ? "_blank" : undefined,
                    rel: info.href.startsWith("http") ? "noreferrer" : undefined,
                    "aria-label": `${info.label} bilgisi`,
                  }
                : {};

              return (
                <motion.div
                  key={info.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Wrapper
                    {...wrapperProps}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-burgundy/30 hover:shadow-lg hover:shadow-burgundy/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-burgundy/30"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 transition-colors group-hover:bg-burgundy/20">
                      <Icon className="h-5 w-5 text-burgundy" />
                    </div>
                    <span className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {info.label}
                    </span>
                    <span className="mb-1 text-base font-semibold text-slate-900 dark:text-white">
                      {info.value}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {info.description}
                    </span>
                    {info.href && (
                      <ArrowRight className="mt-auto h-4 w-4 -translate-x-2 pt-2 text-burgundy opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    )}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-24">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[450px] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 md:h-[500px]">
              <iframe
                title="Proses Yazılım Konum"
                src={CONTACT.maps.embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />

              {/* Map overlay card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-200 bg-white/90 p-5 backdrop-blur-md dark:border-white/10 dark:bg-black/80 sm:right-auto sm:max-w-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-burgundy/10">
                    <MapPin className="h-5 w-5 text-burgundy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Proses Yazılım
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      {CONTACT.address.street}
                      <br />
                      {CONTACT.address.building}
                      <br />
                      {CONTACT.address.district}
                    </p>
                    <a
                      href={CONTACT.maps.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1 text-xs font-medium text-burgundy hover:underline"
                      aria-label="Google Maps üzerinde yol tarifi al"
                    >
                      Yol tarifi al
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
