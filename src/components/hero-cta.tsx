import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function HeroCta() {
  const { downloads } = siteConfig.hero;

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
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
            className={cn(
              "h-10 flex items-center justify-center w-auto px-6 rounded-full border text-sm font-medium tracking-wide transition-all ease-out active:scale-95",
              download.primary
                ? "bg-secondary text-primary-foreground dark:text-secondary-foreground border-white/[0.12] shadow-[var(--shadow-raised)] hover:bg-secondary/80"
                : "bg-transparent text-foreground border-border hover:bg-accent",
            )}
          >
            {download.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
