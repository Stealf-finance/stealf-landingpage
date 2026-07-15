import { siteConfig } from "@/lib/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CompanyShowcase() {
  const { companyShowcase } = siteConfig;
  return (
    <section
      id="company"
      className="flex flex-col items-center justify-center gap-10 py-10 pt-20 w-full relative px-6"
    >
      <p className="text-muted-foreground font-medium">
        Built on best-in-class infrastructure
      </p>
      <div className="grid w-full max-w-7xl grid-cols-2 md:grid-cols-4 overflow-hidden border-y border-border items-center justify-center z-20">
        {companyShowcase.companyLogos.map((logo) => (
          <Link
            href={logo.href}
            target="_blank"
            rel="noreferrer"
            className="group w-full h-24 md:h-32 flex flex-col items-center justify-center relative p-3 md:p-4 gap-1.5 md:gap-2 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
            key={logo.id}
          >
            <div className="transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] translate-y-2 group-hover:-translate-y-3 grid place-items-center">
              {logo.logo}
            </div>
            <span className="text-xs text-muted-foreground tracking-tight text-center transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] opacity-70 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
              {logo.role}
            </span>
            <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
