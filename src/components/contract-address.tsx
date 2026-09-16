"use client";

import { Check, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ContractAddress({
  address,
  tradeUrl,
}: {
  address: string;
  tradeUrl: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch {
      // Clipboard is unavailable over http or when the user denied it.
      // The address stays selectable on screen, so there is nothing to recover.
    }
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-2">
      <span className="text-sm text-muted-foreground">Official CA</span>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 min-w-0 flex items-center gap-3 rounded-xl border border-border bg-accent px-3 py-2.5">
          <Image
            src="/logo-t.svg"
            alt=""
            width={28}
            height={28}
            className="size-7 shrink-0 object-contain"
          />
          <code className="min-w-0 flex-1 font-mono text-xs sm:text-sm text-foreground break-all">
            {address}
          </code>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Address copied" : "Copy contract address"}
            className="shrink-0 flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="size-3.5" aria-hidden />
            ) : (
              <Copy className="size-3.5" aria-hidden />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <Link
          href={tradeUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-secondary h-11 shrink-0 flex items-center justify-center text-sm font-medium tracking-wide rounded-xl text-primary-foreground dark:text-secondary-foreground px-6 shadow-[var(--shadow-raised)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
        >
          Trade now
        </Link>
      </div>
    </div>
  );
}
