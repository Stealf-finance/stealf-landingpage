import { SectionHeader } from "@/components/section-header";
import { ShieldCheck, KeyRound } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Bank wallet — Turnkey TEE custody",
    body: "Your bank wallet's signing key lives inside Turnkey's Trusted Execution Environment. Stealf never holds it, and Turnkey can't extract it from the enclave. You authenticate; the enclave signs.",
  },
  {
    icon: KeyRound,
    title: "Stealth wallet — your device only",
    body: "Your stealth wallet is generated locally and stored in the iOS Secure Enclave / Android Keystore. The private key never leaves your phone. Stealf cannot read it, recover it, or move funds with it.",
  },
];

export function SecuritySection() {
  return (
    <section
      id="security"
      className="flex flex-col items-center justify-center w-full px-5 md:px-10 py-12 md:py-20"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
          Stealf cannot freeze, see, or move your funds.
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl">
          Custody is structural — split between a regulated TEE provider and
          your own device. We have no override.
        </p>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl mt-8">
        {cards.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <div className="flex size-10 items-center justify-center rounded-full border border-border bg-accent">
              <Icon className="size-5 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
