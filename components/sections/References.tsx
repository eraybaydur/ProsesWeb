'use client';

const logos = [
    'Logo Yazılım', 'e-Logo', 'Microsoft', 'Oracle', 'SAP',
    'Koç Sistem', 'Turkcell', 'Vodafone', 'Türk Telekom'
];

export default function References() {
    return (
        <section id="references" className="py-16 border-t border-slate-200 dark:border-white/5 overflow-hidden bg-slate-100 dark:bg-deep-space relative">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-medium text-slate-600 dark:text-gray-500 uppercase tracking-tightst">
                    500+ Mutlu Müşteri ve İş Ortağı
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <span
                            key={index}
                            className="text-2xl font-bold text-slate-500 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default select-none"
                        >
                            {logo}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <span
                            key={index}
                            className="text-2xl font-bold text-slate-500 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default select-none"
                        >
                            {logo}
                        </span>
                    ))}
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-100 dark:from-deep-space to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-100 dark:from-deep-space to-transparent z-10 pointer-events-none" />
        </section>
    );
}
