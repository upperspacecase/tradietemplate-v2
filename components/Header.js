"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#reviews", label: "Reviews" },
        { href: "#service-area", label: "Area" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="flex items-center gap-2">
                        <span className="text-primary font-bold text-xl tracking-tight font-[family-name:var(--font-heading)]">
                            {siteConfig.businessName}
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-text-muted hover:text-primary transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={siteConfig.phoneHref}
                            className="hidden sm:flex items-center gap-2 text-sm font-medium text-text-muted"
                        >
                            <Phone className="w-4 h-4" />
                            {siteConfig.phone}
                        </a>
                        <a
                            href={siteConfig.phoneHref}
                            className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">Call Now</span>
                            <span className="sm:hidden">Call</span>
                        </a>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 text-text-muted cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-text-muted hover:text-primary text-base font-medium transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
