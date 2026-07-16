"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    label: "X",
    href: "https://x.com/stealf_finance",
    src: "/social-icons/x.png",
    invert: false,
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/7w2TFCm6Ft",
    src: "/social-icons/discord.png",
    invert: false,
  },
  {
    label: "Telegram",
    href: "https://t.me/+1KiIlJTX5WIzMmM0",
    src: "/social-icons/tg.png",
    invert: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/stealf-finance/people/?viewAsMember=true",
    src: "/social-icons/linkedin.png",
    invert: false,
  },
  {
    label: "Medium",
    href: "https://medium.com/p/bd5a6f88da14?postPublishedType=initial",
    src: "/social-icons/medium.png",
    invert: false,
  },
];

export function FooterSection() {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col gap-8 px-10 pt-12 pb-8">
        {/* Brand + socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col items-start gap-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image
                src="/logo-t.svg"
                alt="stealf"
                width={40}
                height={40}
                className="size-9 object-contain"
              />
              <p className="text-xl font-bold text-foreground tracking-tight">
                stealf
              </p>
            </Link>
            <p className="tracking-tight text-muted-foreground font-medium">
              {siteConfig.hero.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, src, invert }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="size-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Image
                  src={src}
                  alt=""
                  width={20}
                  height={20}
                  className={`size-[18px] object-contain ${invert ? "invert" : ""}`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Legal + contact + status */}
        <div className="flex flex-col gap-3 pt-6 border-t border-border text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <span>Stealf is a technology company, not a bank.</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Use
              </Link>
              <a
                href="mailto:louis@stealf.xyz?subject=Security%20disclosure"
                className="hover:text-foreground transition-colors"
              >
                Security disclosure
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
            <span className="text-muted-foreground/70">
              © {new Date().getFullYear()} Stealf. All rights reserved.
            </span>
            <span className="text-muted-foreground/70">
              Contact:{" "}
              <a
                href="mailto:louis@stealf.xyz"
                className="hover:text-foreground transition-colors"
              >
                louis@stealf.xyz
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-48 md:h-64 relative mt-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text="stealf"
            fontSize={tablet ? 90 : 140}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="var(--muted-foreground)"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}
