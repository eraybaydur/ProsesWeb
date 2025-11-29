'use client';

const logos = [
    'Logo Yazılım', 'e-Logo', 'Microsoft', 'Oracle', 'SAP',
    'Koç Sistem', 'Turkcell', 'Vodafone', 'Türk Telekom'
];

export default function References() {
    return (
        <section id="references" className="py-16 overflow-hidden bg-slate-50 dark:bg-deep-space relative">
            {/* Grid Background - consistent with TechFlow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Gradient Overlay - crimson to burgundy transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 via-transparent to-burgundy/5" />

            <div className="container mx-auto px-6 mb-8 text-center relative z-10">
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
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 dark:from-deep-space to-transparent z-10 pointer-events-none" />
        </section>
    );
}
