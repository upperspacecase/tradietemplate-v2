import * as LucideIcons from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function Services() {
    return (
        <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                        Our Services
                    </h2>
                    <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
                        Professional electrical services for homes and businesses across{" "}
                        {siteConfig.serviceArea.suburbs[0]} and surrounding areas.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteConfig.services.map((service, i) => {
                        const Icon = LucideIcons[service.icon] || LucideIcons.Zap;
                        return (
                            <a
                                key={i}
                                href="#contact"
                                className="group block bg-gray-50 hover:bg-navy rounded-lg p-6 transition-colors border border-gray-100 hover:border-navy"
                            >
                                <div className="w-12 h-12 rounded-lg bg-brand/10 group-hover:bg-brand/20 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-brand" />
                                </div>
                                <h3 className="text-lg font-semibold text-navy group-hover:text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
