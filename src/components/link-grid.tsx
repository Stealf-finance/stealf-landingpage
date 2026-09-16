import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type LinkGridItem = {
  id: number;
  href: string;
  /** Main slot — a logo, a title, anything. Lifts on hover. */
  content: React.ReactNode;
  /** Small caption under the main slot. */
  label: string;
};

/**
 * Row of bordered, hairline-separated external links.
 * Shared by the home CompanyShowcase and the tokenomics page.
 * Column count is passed in via `className` (e.g. "grid-cols-2 md:grid-cols-4").
 */
export function LinkGrid({
  items,
  className,
}: {
  items: LinkGridItem[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full max-w-7xl overflow-hidden border-y border-border items-center justify-center z-20",
        className,
      )}
    >
      {items.map((item) => (
        <Link
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group w-full h-24 md:h-36 flex flex-col items-center justify-center relative p-3 md:p-4 gap-1.5 md:gap-2 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
          key={item.id}
        >
          <div className="transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] translate-y-2 group-hover:-translate-y-3 grid place-items-center">
            {item.content}
          </div>
          <span className="text-xs text-muted-foreground tracking-tight text-center transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] opacity-70 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
            {item.label}
          </span>
          <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </Link>
      ))}
    </div>
  );
}
