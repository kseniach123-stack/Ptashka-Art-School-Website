// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { BrandBackground } from "@/src/components/BrandBackground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFF8F0]">
      <BrandBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services className="relative z-10 bg-[#FAFAF5]" />
          <CtaBanner />
          <Pricing />
          <Reviews />
          <Contact />
        </main>
        <div className="relative z-10 bg-[#1A1A2E]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
