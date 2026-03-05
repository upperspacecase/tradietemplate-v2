"use client";

import { Phone } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Business Name */}
                    <a href="#" className="flex items-center gap-2">
                        <span className="text-brand font-bold text-xl tracking-tight">
                            {siteConfig.businessName}
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a
                            href="#services"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#reviews"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Reviews
                        </a>
                        <a
                            href="#service-area"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Service Area
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Phone + Call Now */}
                    <div className="flex items-center gap-3">
                        <a
                            href={siteConfig.phoneHref}
                            className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-300"
                        >
                            <Phone className="w-4 h-4" />
                            {siteConfig.phone}
                        </a>
                        <a
                            href={siteConfig.phoneHref}
                            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-navy font-bold text-sm px-4 py-2 rounded-md transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">Call Now</span>
                            <span className="sm:hidden">Call</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
