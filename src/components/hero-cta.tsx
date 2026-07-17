import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function HeroCta() {
  const { downloads } = siteConfig.hero;

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Prototype is now live!
      </span>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
        {downloads.map((download) => (
          <Link
            key={download.id}
            href={download.href}
            target="_blank"
            rel="noreferrer"
            className="bg-secondary h-10 flex items-center justify-center text-sm font-medium tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-auto px-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
          >
            {download.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
