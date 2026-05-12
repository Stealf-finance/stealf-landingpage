import Link from "next/link";
import { WAITLIST_URL } from "@/lib/config";

export function WaitlistCta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={WAITLIST_URL}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </Link>
  );
}
