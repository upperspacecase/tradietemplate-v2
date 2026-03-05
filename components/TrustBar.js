import { Star, ShieldCheck, Clock, Award } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function TrustBar() {
    const { trustBar } = siteConfig;

    const items = [
        {
            icon: Star,
            label: `${trustBar.googleRating} Stars`,
            value: `${trustBar.googleReviewCount} Google Reviews`,
        },
        {
            icon: Clock,
            label: `${trustBar.yearsInBusiness}+ Years`,
            value: "In Business",
        },
        {
            icon: ShieldCheck,
            label: "Licensed",
            value: "& Insured",
        },
        {
            icon: Award,
            label: trustBar.credential,
            value: "Certified",
        },
    ];

    return (
        <section className="bg-navy-light border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 justify-center lg:justify-start"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-brand" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">{item.label}</p>
                                <p className="text-gray-400 text-xs">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
