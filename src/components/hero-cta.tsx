import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function HeroCta() {
  const { cta } = siteConfig.hero;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
      <Link
        href={cta.primary.href}
        target="_blank"
        rel="noreferrer"
        className="bg-secondary h-10 flex items-center justify-center text-sm font-medium tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-auto px-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
      >
        {cta.primary.text}
      </Link>
      <Link
        href={cta.secondary.href}
        target="_blank"
        rel="noreferrer"
        className="h-10 flex items-center justify-center w-auto px-6 text-sm font-medium tracking-wide text-foreground rounded-full bg-background border border-border hover:bg-accent transition-all ease-out active:scale-95"
      >
        {cta.secondary.text}
      </Link>
    </div>
  );
}
