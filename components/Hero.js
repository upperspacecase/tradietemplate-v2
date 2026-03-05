import { Phone } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function Hero() {
    return (
        <section className="relative bg-navy pt-16">
            {/* Background image overlay */}
            <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {siteConfig.businessName}
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-lg">
                        {siteConfig.tagline}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-navy font-bold text-lg px-8 py-4 rounded-md transition-colors"
                        >
                            Get a Free Quote
                        </a>
                        <a
                            href={siteConfig.phoneHref}
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold text-lg px-8 py-4 rounded-md transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            {siteConfig.phone}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
