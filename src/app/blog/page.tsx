import { FooterSection } from "@/components/sections/footer-section";
import { formatDate, posts } from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog — Stealf",
  description:
    "Notes from the team on privacy, stablecoins, and building Stealf.",
};

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="w-full max-w-4xl mx-auto px-8 sm:px-12 pt-12 md:pt-16">
        <header className="space-y-2 mb-10">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
            Blog
          </h1>
          <p className="text-muted-foreground">
            Notes from the team on privacy, stablecoins, and building Stealf.
          </p>
        </header>
      </div>

      <div className="w-full max-w-4xl mx-auto px-8 sm:px-12">
        <div className="relative w-full aspect-[3/1] overflow-hidden rounded-2xl border border-border">
          <Image
            src="/banner.png"
            alt="Stealf"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-8 sm:px-12 py-12 md:py-16">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon.</p>
        ) : (
          <ul className="flex flex-col border-t border-border">
            {posts.map((post) => (
              <li key={post.href} className="border-b border-border">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-2 py-8 transition-opacity hover:opacity-80"
                >
                  <span className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                  <h2 className="text-xl md:text-2xl font-medium tracking-tight">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  )}
                  <span className="text-sm text-muted-foreground/70">
                    Written by {post.author}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-auto w-full pt-40 md:pt-56">
        <FooterSection />
      </div>
    </main>
  );
}
