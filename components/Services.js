"use client";

import { useEffect, useRef } from "react";

function ServiceItem({ service, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${index * 0.1}s`;
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="reveal-slide group">
      <div className="py-6 sm:py-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 cursor-default">
        <h3
          className="font-[family-name:var(--font-heading)] text-white group-hover:text-gold transition-colors duration-200"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          {service.title}
        </h3>
        <p className="font-[family-name:var(--font-body)] text-grey text-sm sm:text-base max-w-sm sm:text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function Services({ services }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-20 sm:py-28 lg:py-36">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section label */}
        <div ref={headerRef} className="reveal mb-12">
          <p className="font-[family-name:var(--font-body)] text-grey text-xs tracking-[0.3em] uppercase mb-4">
            What we do
          </p>
          <div className="h-px bg-white/10" />
        </div>

        {/* Service list */}
        {services.map((service, i) => (
          <ServiceItem key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
