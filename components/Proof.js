"use client";

import { useEffect, useRef } from "react";

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewQuote({ review, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${index * 0.15}s`;
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="reveal py-12 sm:py-16 lg:py-20">
      {/* Giant quotation mark */}
      <span
        className="block font-[family-name:var(--font-heading)] text-gold/20 leading-none select-none"
        style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p
        className="font-[family-name:var(--font-heading)] text-black leading-snug -mt-8 sm:-mt-12"
        style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
      >
        {review.text}
      </p>

      {/* Attribution */}
      <div className="mt-6 sm:mt-8 flex items-center gap-4">
        <div className="h-px w-8 bg-gold" />
        <div>
          <p className="font-[family-name:var(--font-body)] text-black text-sm font-semibold tracking-wide">
            {review.author}
          </p>
          <StarRating count={review.rating} />
        </div>
      </div>
    </div>
  );
}

export default function Proof({ reviews }) {
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
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section label */}
        <div ref={headerRef} className="reveal mb-8">
          <p className="font-[family-name:var(--font-body)] text-grey text-xs tracking-[0.3em] uppercase">
            {reviews.rating} stars from {reviews.totalReviews} reviews
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-grey-light mb-4" />

        {/* Reviews */}
        {reviews.items.slice(0, 3).map((review, i) => (
          <div key={i}>
            <ReviewQuote review={review} index={i} />
            {i < 2 && <div className="h-px bg-grey-light" />}
          </div>
        ))}
      </div>
    </section>
  );
}
