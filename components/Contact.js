"use client";

import { useState, useEffect, useRef } from "react";
import siteConfig from "@/config/siteConfig";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      // silent
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div ref={sectionRef} className="reveal max-w-xl mx-auto px-6 sm:px-8 text-center">
        {/* Heading */}
        <h2
          className="font-[family-name:var(--font-heading)] text-black font-bold tracking-[-0.03em] leading-none"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          LET&apos;S
          <br />
          <span className="text-gold">TALK</span>
        </h2>

        <div className="flex justify-center mt-8">
          <div className="h-px w-12 bg-gold" />
        </div>

        {submitted ? (
          <div className="mt-12">
            <p className="font-[family-name:var(--font-body)] text-black text-lg font-medium">
              We&apos;ll call you back shortly.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-block mt-6 font-[family-name:var(--font-body)] text-gold text-lg font-semibold hover:text-gold-dim transition-colors duration-200 cursor-pointer"
            >
              Or call us now: {siteConfig.phone}
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-4 text-left">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-0 py-4 bg-transparent border-b border-grey-light text-black font-[family-name:var(--font-body)] text-lg placeholder-grey focus:outline-none focus:border-gold transition-colors duration-200"
              aria-label="Your name"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone number"
              className="w-full px-0 py-4 bg-transparent border-b border-grey-light text-black font-[family-name:var(--font-body)] text-lg placeholder-grey focus:outline-none focus:border-gold transition-colors duration-200"
              aria-label="Phone number"
            />
            <div className="pt-8 text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-gold hover:bg-gold-dim text-black font-[family-name:var(--font-body)] font-semibold text-sm tracking-[0.15em] uppercase px-12 py-4 transition-colors duration-200 disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Sending..." : "Get a callback"}
              </button>
            </div>
          </form>
        )}

        {/* Direct call */}
        <div className="mt-16">
          <p className="font-[family-name:var(--font-body)] text-grey text-xs tracking-[0.3em] uppercase mb-4">
            Prefer to call?
          </p>
          <a
            href={siteConfig.phoneHref}
            className="font-[family-name:var(--font-heading)] text-black hover:text-gold transition-colors duration-200 cursor-pointer"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
