import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function CTASection() {
  const { ctaSection } = siteConfig;

  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="w-full">
        <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
          <Image
            src={ctaSection.backgroundImage}
            alt="CTA background"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            fill
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 md:pt-24">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium tracking-tighter max-w-none px-6 text-center whitespace-nowrap leading-[1.1]">
              {ctaSection.title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
