"use client";

import { toast } from "sonner";

export function WaitlistCta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => toast("Open soon")}
      className={className}
    >
      {children}
    </button>
  );
}
