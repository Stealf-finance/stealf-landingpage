import { FooterSection } from "@/components/sections/footer-section";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Stealf",
  description: "How Stealf collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <article className="space-y-10 leading-relaxed">
          <header className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: May 11, 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              Introduction
            </h2>
            <p className="text-muted-foreground">
              Stealf is a privacy-first Solana mobile wallet operated by Stealf,
              Inc., a company incorporated in Delaware, USA. This Privacy Policy
              explains what data we collect, how we use it, and the rights you
              have over it.
            </p>
            <p className="text-muted-foreground">
              By using Stealf, you agree to the practices described below. If
              you don&apos;t agree, please don&apos;t use the app.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              What We Collect
            </h2>
            <p className="text-muted-foreground">
              When you create an account and use Stealf, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="text-foreground">Account info:</span> email
                address, username
              </li>
              <li>
                <span className="text-foreground">Wallet addresses:</span> the
                public address of your Bank wallet (created via Turnkey) and
                your Stealth wallet (created locally on your device)
              </li>
              <li>
                <span className="text-foreground">On-chain transactions:</span>{" "}
                amounts, timestamps, counterparty addresses, signatures. This
                data is already public on the Solana blockchain — we read it via
                Helius to display your history.
              </li>
              <li>
                <span className="text-foreground">Technical data:</span> IP
                address, device type, OS version, app version
              </li>
              <li>
                <span className="text-foreground">
                  Crash and error reports:
                </span>{" "}
                collected via Sentry to fix bugs (disabled in development)
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              What We Don&apos;t Collect
            </h2>
            <p className="text-muted-foreground">
              This is the part that matters. By design:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                We never see or store the private key of your Stealth wallet.
                It&apos;s generated on your device and stored in the secure
                enclave (iOS Keychain / Android Keystore). It never leaves the
                device.
              </li>
              <li>
                We never see your yield balances in plaintext. Yield balances
                are encrypted via Arcium MPC. Even our backend can&apos;t
                decrypt them without the multi-party computation.
              </li>
              <li>
                We don&apos;t link your Bank wallet and your Stealth wallet.
                There is no shared identifier between them in our system. The
                separation is structural, not a policy choice.
              </li>
              <li>
                We don&apos;t collect KYC data, government IDs, biometric data,
                or financial information. Banking features (cards, transfers)
                are not part of the current product. If we add them later, this
                policy will be updated and you&apos;ll be notified before any
                new data is collected.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="text-foreground">Provide the service:</span>{" "}
                authenticate sign-ins, display balances and transaction
                history, process swaps and yield operations
              </li>
              <li>
                <span className="text-foreground">Communicate:</span> send
                one-time passcodes for email authentication, account-related
                notifications, and (only if you opt in) product updates
              </li>
              <li>
                <span className="text-foreground">Security:</span> detect abuse,
                rate-limit suspicious activity, debug errors
              </li>
              <li>
                <span className="text-foreground">Legal compliance:</span>{" "}
                respond to lawful requests when required
              </li>
            </ul>
            <p className="text-muted-foreground">
              We do not sell your personal data. We do not share it for
              advertising.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              Authentication &amp; Biometrics
            </h2>
            <p className="text-muted-foreground">
              Stealf authenticates access to your Bank wallet via Turnkey using
              OAuth (Google, Apple) or one-time passcodes sent to your email.
              Biometric authentication (Face ID, Touch ID, fingerprint) is
              handled locally by iOS or Android. We never receive, store, or
              transmit your facial images, biometric templates, fingerprints,
              or any biometric data. We only receive the result of the local
              authentication (success or failure).
            </p>
            <p className="text-muted-foreground">
              One-time passcodes sent to your email expire after a short period
              and are invalidated after use.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              Third-Party Services
            </h2>
            <p className="text-muted-foreground">
              We rely on the following service providers. Each has its own
              privacy policy:
            </p>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left px-4 py-3 font-medium text-foreground">
                      Provider
                    </th>
                    <th className="text-left px-4 py-3 font-medium text-foreground">
                      Purpose
                    </th>
                    <th className="text-left px-4 py-3 font-medium text-foreground">
                      Data shared
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    [
                      "Turnkey",
                      "Bank wallet management, OAuth authentication",
                      "Email, wallet address",
                    ],
                    [
                      "Helius",
                      "Solana RPC and transaction webhooks",
                      "Wallet addresses (already public on-chain)",
                    ],
                    [
                      "Jupiter",
                      "Token swap routing",
                      "Wallet address, transaction parameters",
                    ],
                    [
                      "Arcium",
                      "Encrypted yield computation (MPC)",
                      "Encrypted ciphertexts only",
                    ],
                    [
                      "Jito",
                      "SOL liquid staking",
                      "On-chain transactions (already public)",
                    ],
                    [
                      "Resend",
                      "Sending authentication emails",
                      "Email address",
                    ],
                    [
                      "Sentry",
                      "Error monitoring",
                      "Crash logs, anonymized context",
                    ],
                    ["MongoDB Atlas", "Database hosting", "Account data"],
                    ["CoinGecko", "SOL/USD price feed", "No personal data"],
                  ].map(([provider, purpose, data]) => (
                    <tr
                      key={provider}
                      className="border-b border-border last:border-b-0"
                    >
                      <td className="px-4 py-3 text-foreground">{provider}</td>
                      <td className="px-4 py-3">{purpose}</td>
                      <td className="px-4 py-3">{data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground">
              Some of these providers are located outside the EU (mainly in the
              United States). When you use Stealf from the European Union, your
              data may be transferred to the US. We rely on Standard Contractual
              Clauses where applicable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">Your Rights</h2>
            <p className="text-muted-foreground">
              If you&apos;re in the European Economic Area, UK, or Switzerland
              (GDPR), you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>access the personal data we hold about you</li>
              <li>correct inaccurate data</li>
              <li>request deletion of your data</li>
              <li>restrict or object to processing</li>
              <li>request portability of your data</li>
              <li>withdraw consent at any time</li>
              <li>
                lodge a complaint with your local supervisory authority (in
                France: the CNIL)
              </li>
            </ul>
            <p className="text-muted-foreground">
              If you&apos;re a California resident (CCPA/CPRA), you have the
              right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                know what personal information we collect and how we use it
              </li>
              <li>request deletion of your personal information</li>
              <li>
                opt out of the sale of personal information (we do not sell
                personal information)
              </li>
              <li>non-discrimination for exercising your rights</li>
            </ul>
            <p className="text-muted-foreground">
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:louis@stealf.xyz"
                className="text-foreground hover:underline"
              >
                louis@stealf.xyz
              </a>{" "}
              from the email address linked to your account. We&apos;ll respond
              within 30 days.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              Data Retention
            </h2>
            <p className="text-muted-foreground">
              We keep your account data for as long as your account is active.
              If you delete your account, we delete your personal data within 90
              days, except where we are legally required to retain it (for
              example, fraud prevention or legal claims).
            </p>
            <p className="text-muted-foreground">
              On-chain transactions cannot be deleted — they are permanent
              records on the Solana blockchain, which we don&apos;t control.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">Children</h2>
            <p className="text-muted-foreground">
              Stealf is not intended for anyone under 18. We do not knowingly
              collect data from minors. If you believe a minor has provided us
              data, contact us and we&apos;ll delete it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">Security</h2>
            <p className="text-muted-foreground">
              We use industry-standard measures to protect your data: encryption
              in transit (HTTPS/WSS), encryption at rest, restricted access,
              rate limiting, and monitoring. No system is 100% secure, and you
              are responsible for keeping your device, OAuth, and recovery
              phrase safe.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground">
              If we update this policy, we&apos;ll post the new version here and
              update the &quot;Last Updated&quot; date. For material changes,
              we&apos;ll notify you by email.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">Contact</h2>
            <p className="text-muted-foreground">
              Questions? Email{" "}
              <a
                href="mailto:louis@stealf.xyz"
                className="text-foreground hover:underline"
              >
                louis@stealf.xyz
              </a>
              .
            </p>
          </section>
        </article>
      </div>

      <FooterSection />
    </main>
  );
}
