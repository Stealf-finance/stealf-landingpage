import { Globe } from "@/components/ui/globe";

export function BankWalletIllustration() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
      <Globe className="top-28" />
    </div>
  );
}
