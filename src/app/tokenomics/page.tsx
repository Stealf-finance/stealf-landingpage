import { ContractAddress } from "@/components/contract-address";
import { LinkGrid } from "@/components/link-grid";
import { SectionHeader } from "@/components/section-header";
import { FooterSection } from "@/components/sections/footer-section";
import { formatDate, posts } from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tokenomics — Stealf",
  description: "Supply and allocation breakdown for the Stealf token.",
};

const TOKEN_MINT = "G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw";
const SOL_MINT = "So11111111111111111111111111111111111111112";

const tokenLinks = [
  {
    id: 1,
    title: "Team",
    action: "Vested on JupLock",
    href: `https://lock.jup.ag/token/${TOKEN_MINT}`,
  },
];

export default function TokenomicsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="w-full max-w-4xl mx-auto px-8 sm:px-12 pt-12 md:pt-16">
        <header className="space-y-2 mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
            Tokenomics
          </h1>
          <p className="text-muted-foreground text-balance">
            Supply and allocation breakdown for the Stealf token.
          </p>
        </header>
      </div>

      <div className="w-full max-w-4xl mx-auto px-8 sm:px-12">
        <div className="relative w-full aspect-[16/9] overflow-hidden border border-border">
          <Image
            src="/tokenomics.png"
            alt="Stealf token allocation"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </div>

      <section className="flex flex-col items-center justify-center gap-10 pt-20 mt-16 w-full relative px-6 border-t border-border">
        <ContractAddress
          address={TOKEN_MINT}
          tradeUrl={`https://jup.ag/swap?buy=${TOKEN_MINT}&sell=${SOL_MINT}`}
        />
        <LinkGrid
          className="grid-cols-1"
          items={tokenLinks.map((link) => ({
            id: link.id,
            href: link.href,
            content: (
              <span className="font-medium tracking-tight text-foreground">
                {link.title}
              </span>
            ),
            label: link.action,
          }))}
        />
      </section>

      {/* Padding carries the hatched gutters, so the box lands 40px / 80px in
          and the hatch starts flush with the frame guides at 24px. */}
      <section className="w-full relative px-10 md:px-20">
        <div className="relative border-x border-border">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-foreground/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-foreground/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          {/* Closing rule — runs the width of the box plus both hatched gutters. */}
          <div className="absolute bottom-0 -left-4 md:-left-14 -right-4 md:-right-14 h-px bg-border"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Overview
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Longer reads on the token and the product.
            </p>
          </SectionHeader>

          <ul className="flex flex-col">
            {posts.map((post) => (
              <li key={post.href} className="border-b border-border last:border-b-0">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-2 px-6 md:px-14 py-8 transition-opacity hover:opacity-80"
                >
                  <span className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-muted-foreground max-w-2xl">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="text-sm text-muted-foreground/70">
                    Written by {post.author}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-auto w-full pt-20 md:pt-28">
        <FooterSection />
      </div>
    </main>
  );
}
