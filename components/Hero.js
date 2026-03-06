"use client";

import { useEffect } from "react";
import { Phone, ChevronDown } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function Hero() {
    useEffect(() => {
        document.querySelectorAll(".animation-line").forEach((path) => {
            const len = path.getTotalLength();
            path.style.strokeDasharray = `${len}px`;
            path.style.strokeDashoffset = `${len}px`;
            setTimeout(() => {
                path.style.transition = "stroke-dashoffset 2s ease-in-out";
                path.style.strokeDashoffset = "0px";
            }, 500);
        });
    }, []);

    return (
        <>
            <style>
                {`
                    @keyframes gradient {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes patternScroll {
                        0% { transform: translate(-5%, -5%); }
                        100% { transform: translate(5%, 5%); }
                    }
                    @keyframes bounce-slow {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(6px); }
                    }
                    .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
                    .animate-fadeIn-delay-1 { opacity: 0; animation: fadeIn 1s ease-out 0.3s forwards; }
                    .animate-fadeIn-delay-2 { opacity: 0; animation: fadeIn 1s ease-out 0.6s forwards; }
                    .animate-fadeIn-delay-3 { opacity: 0; animation: fadeIn 1s ease-out 0.9s forwards; }
                    .animate-patternScroll { animation: patternScroll 20s linear infinite; }
                    .gradient-text {
                        background: linear-gradient(270deg, #0EA5E9, #38BDF8, #7DD3FC, #0EA5E9);
                        background-size: 600% 600%;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        animation: gradient 8s ease infinite;
                    }
                    .animation-line { fill: none; stroke: rgba(14, 165, 233, 0.15); stroke-width: 2; }
                    @keyframes pulse-cta {
                        0% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4); }
                        70% { box-shadow: 0 0 0 12px rgba(249, 115, 22, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0); }
                    }
                    .pulse-cta { animation: pulse-cta 2s infinite; }
                    .bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
                    @media (prefers-reduced-motion: reduce) {
                        .gradient-text, .animate-patternScroll, .pulse-cta, .bounce-slow { animation: none; }
                        .animate-fadeIn, .animate-fadeIn-delay-1, .animate-fadeIn-delay-2, .animate-fadeIn-delay-3 {
                            animation: none; opacity: 1;
                        }
                    }
                `}
            </style>

            <section className="relative min-h-screen flex items-center justify-center bg-primary-dark text-white overflow-hidden pt-16">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <svg className="absolute w-full h-full" viewBox="0 0 177 159" preserveAspectRatio="none">
                        <path className="animation-line" d="M176 1L53.5359 1C52.4313 1 51.5359 1.89543 51.5359 3L51.5359 56C51.5359 57.1046 50.6405 58 49.5359 58L0 58" />
                    </svg>
                    <svg className="absolute w-full h-full" viewBox="0 0 176 59" preserveAspectRatio="none">
                        <path className="animation-line" d="M0 1L122.464 1C123.569 1 124.464 1.89543 124.464 3L124.464 56C124.464 57.1046 125.36 58 126.464 58L176 58" />
                    </svg>
                </div>

                <div
                    className="absolute w-[200%] h-[200%] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(14,165,233,0.03)_10px,rgba(14,165,233,0.03)_20px)] animate-patternScroll"
                    style={{ top: "-50%", left: "-50%" }}
                />

                <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
                    <p className="text-primary-light font-medium text-sm sm:text-base tracking-widest uppercase mb-6 animate-fadeIn-delay-1">
                        {siteConfig.licenseNumber} &middot; Est. {siteConfig.yearEstablished}
                    </p>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-heading)]">
                        <span className="gradient-text">{siteConfig.businessName}</span>
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-sky-200 max-w-2xl mx-auto animate-fadeIn-delay-1">
                        {siteConfig.tagline}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn-delay-2">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center bg-cta hover:bg-cta-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:translate-y-[-2px] pulse-cta cursor-pointer"
                        >
                            Get a Free Quote
                        </a>
                        <a
                            href={siteConfig.phoneHref}
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-primary-light text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
                        >
                            <Phone className="w-5 h-5" />
                            {siteConfig.phone}
                        </a>
                    </div>

                    {siteConfig.emergencyAvailable && (
                        <p className="mt-8 text-sky-300/60 text-sm animate-fadeIn-delay-2">
                            24/7 Emergency Service Available
                        </p>
                    )}
                </div>

                <a
                    href="#services"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors duration-200 animate-fadeIn-delay-3 cursor-pointer"
                    aria-label="Scroll down"
                >
                    <ChevronDown className="w-6 h-6 bounce-slow" />
                </a>
            </section>
        </>
    );
}
