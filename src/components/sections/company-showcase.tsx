import { LinkGrid } from "@/components/link-grid";
import { siteConfig } from "@/lib/config";

export function CompanyShowcase() {
  const { companyShowcase } = siteConfig;
  return (
    <section
      id="company"
      className="flex flex-col items-center justify-center gap-10 pt-20 md:pt-28 w-full relative px-6"
    >
      <p className="text-muted-foreground font-medium">
        Built on best-in-class infrastructure
      </p>
      <LinkGrid
        className="grid-cols-2 md:grid-cols-4"
        items={companyShowcase.companyLogos.map((logo) => ({
          id: logo.id,
          href: logo.href,
          content: logo.logo,
          label: logo.role,
        }))}
      />
    </section>
  );
}
