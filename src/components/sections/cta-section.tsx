import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WaitlistCta } from "@/components/waitlist-cta";
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
          <div className="absolute inset-0 flex flex-col items-center py-12 md:py-18 z-10">
            <div className="flex-1 flex flex-col items-center justify-start gap-4 pt-8">
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium tracking-tighter max-w-none px-6 text-center whitespace-nowrap leading-[1.1]">
                {ctaSection.title}
              </h1>
              {ctaSection.subtext ? (
                <p className="text-white/70 text-sm md:text-base px-6 text-center max-w-md">
                  {ctaSection.subtext}
                </p>
              ) : null}
            </div>
            {ctaSection.button.text ? (
              <WaitlistCta className="bg-white text-black h-10 flex items-center justify-center gap-2 text-sm font-medium tracking-wide rounded-full px-6 hover:bg-white/90 transition-all ease-out active:scale-95 group cursor-pointer">
                {ctaSection.button.text}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </WaitlistCta>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
