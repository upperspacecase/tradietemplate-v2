import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import siteConfig from "@/config/siteConfig";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proof reviews={siteConfig.reviews} />
      <Services services={siteConfig.services} />
      <Contact />
      <footer className="bg-black py-8 text-center">
        <p className="text-grey text-xs tracking-widest uppercase font-[family-name:var(--font-body)]">
          {new Date().getFullYear()} {siteConfig.businessName}
        </p>
      </footer>
    </main>
  );
}
