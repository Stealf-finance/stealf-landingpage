import { BentoSection } from "@/components/sections/bento-section";
import { CompanyShowcase } from "@/components/sections/company-showcase";
import { FAQSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <CompanyShowcase />
      <BentoSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
