import { siteConfig } from "@/lib/config";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 -z-10 w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 35%, transparent 95%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 35%, transparent 95%)",
            }}
          ></div>
        </div>
        <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero.badgeIcon}
            {hero.badge}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-foreground">
              {hero.title}
            </h1>
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {hero.description}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Link
              href={hero.cta.primary.href}
              className="bg-secondary h-10 flex items-center justify-center gap-2 text-sm font-medium tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-48 px-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95 group"
            >
              {hero.cta.primary.text}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <p className="text-xs text-muted-foreground tracking-tight">
              {hero.cta.primary.note}
            </p>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto mt-10 px-6">
          <Image
            src="/screens/stealth.png"
            alt="Stealf app preview"
            width={2664}
            height={2008}
            priority
            className="w-full h-auto"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 35%, transparent 95%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 35%, transparent 95%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
