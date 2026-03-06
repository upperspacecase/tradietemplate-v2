import siteConfig from "@/config/siteConfig";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Subtle gold accent line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl pointer-events-none">
        <div className="h-px bg-gold/10 w-full" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Headline */}
        <h1
          className="animate-fade-up font-[family-name:var(--font-heading)] text-white font-bold leading-[0.85] tracking-[-0.04em]"
          style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
        >
          WE KEEP
          <br />
          <span className="text-gold">THE LIGHTS</span>
          <br />
          ON
        </h1>

        {/* Animated gold line */}
        <div className="flex justify-center mt-10">
          <div className="animate-draw-line h-px bg-gold" />
        </div>

        {/* Subtitle */}
        <p className="animate-fade-up-delay-2 text-grey font-[family-name:var(--font-body)] text-sm sm:text-base tracking-[0.2em] uppercase mt-8">
          {siteConfig.tagline}
        </p>

        {/* CTA */}
        <div className="animate-fade-up-delay-3 mt-12">
          <a
            href={siteConfig.phoneHref}
            className="inline-block bg-gold hover:bg-gold-dim text-black font-[family-name:var(--font-body)] font-semibold text-sm sm:text-base tracking-[0.15em] uppercase px-10 py-4 transition-colors duration-200 cursor-pointer"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
        <div className="w-px h-12 bg-grey/30 mx-auto" />
      </div>
    </section>
  );
}
