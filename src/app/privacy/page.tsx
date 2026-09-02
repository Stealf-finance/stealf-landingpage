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
              Last Updated: September 2, 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              Introduction
            </h2>
            <p className="text-muted-foreground">
              Stealf is a privacy-first neobank on Solana operated by Stealf
              Corporation, a company incorporated in the State of Delaware, USA.
              This Privacy Policy explains what data we collect, how we use it,
              who we share it with, and the rights you have over it.
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
              Depending on which features you use, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="text-foreground">Account info:</span> email
                address and username.
              </li>
              <li>
                <span className="text-foreground">Wallet addresses:</span> the
                public address of your wallet (created via Turnkey) and, if you
                use private features, your on-device stealth address.
              </li>
              <li>
                <span className="text-foreground">On-chain transactions:</span>{" "}
                amounts, timestamps, counterparty addresses, and signatures.
                This data is already public on the Solana blockchain — we read
                it via Helius to display your history.
              </li>
              <li>
                <span className="text-foreground">
                  Identity verification (KYC) data:
                </span>{" "}
                if you use features that convert crypto to fiat (cash-out /
                off-ramp), you and our regulated partner collect the identity
                information required to verify you — see &quot;Identity
                Verification&quot; below.
              </li>
              <li>
                <span className="text-foreground">Financial data:</span> for
                cash-out, the bank account details (e.g. IBAN or account
                number) you provide to receive fiat, and the associated payout
                records.
              </li>
              <li>
                <span className="text-foreground">Gift-card orders:</span> the
                product, denomination, and amount when you purchase a gift card.
                We do not store the delivered gift-card codes.
              </li>
              <li>
                <span className="text-foreground">Technical data:</span> IP
                address, device type, OS version, and app version.
              </li>
              <li>
                <span className="text-foreground">
                  Diagnostics and product analytics:
                </span>{" "}
                crash and error reports (via Sentry) and anonymized usage events
                (via PostHog), used to fix bugs and improve the product. Session
                replay is disabled.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              Identity Verification (KYC / AML)
            </h2>
            <p className="text-muted-foreground">
              Converting crypto to fiat is a regulated activity. When you use
              our cash-out feature, identity verification is required by law
              (anti-money-laundering and know-your-customer regulations). This
              verification is handled through our licensed payments partner,
              Dakota, using identity-verification providers (Sumsub and/or
              Persona).
            </p>
            <p className="text-muted-foreground">
              As part of this process you may be asked to provide your legal
              name, date of birth, residential address, a government-issued ID,
              and a selfie / liveness check. This information is collected and
              processed by our KYC providers and our payments partner to verify
              your identity and screen against sanctions lists.
            </p>
            <p className="text-muted-foreground">
              Stealf does not store your government ID images or biometric
              (selfie / liveness) data — that data is processed by the
              specialized providers above. We retain only the verification
              status and the records we are legally required to keep.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              Privacy by Design — What We Don&apos;t See
            </h2>
            <p className="text-muted-foreground">This is the part that matters:</p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                We never see or store the private key of your stealth wallet.
                It&apos;s generated on your device and stored in the secure
                enclave (iOS Keychain / Android Keystore). It never leaves the
                device.
              </li>
              <li>
                We never see your private (encrypted) balance in plaintext. Your
                private balance is encrypted through Umbra&apos;s confidential
                protocol (which runs on the Arcium MPC network). Even our
                backend cannot decrypt it.
              </li>
              <li>
                We never receive the private key of your Turnkey-secured wallet.
                It is held inside Turnkey&apos;s secure key-management
                infrastructure; only you can authorize it through your login.
              </li>
              <li>
                We do not sell your personal data, and we do not share it for
                advertising.
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
                authenticate sign-ins, display balances and transaction history,
                process swaps, yield, gift-card purchases, and cash-outs.
              </li>
              <li>
                <span className="text-foreground">Verify identity:</span> meet
                our know-your-customer and anti-money-laundering obligations for
                regulated features.
              </li>
              <li>
                <span className="text-foreground">Communicate:</span> send
                one-time passcodes for email authentication, account and
                transaction notifications, and (only if you opt in) product
                updates.
              </li>
              <li>
                <span className="text-foreground">Security:</span> detect abuse,
                rate-limit suspicious activity, and debug errors.
              </li>
              <li>
                <span className="text-foreground">Legal compliance:</span>{" "}
                comply with applicable law and respond to lawful requests when
                required.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              Authentication &amp; Biometrics
            </h2>
            <p className="text-muted-foreground">
              Stealf authenticates access to your wallet via Turnkey using OAuth
              (Google, Apple) or one-time passcodes sent to your email. Any
              device biometric authentication (Face ID, Touch ID, fingerprint)
              is handled locally by iOS or Android — we never receive, store, or
              transmit your facial images, fingerprints, or any device biometric
              templates. We only receive the result of the local authentication
              (success or failure).
            </p>
            <p className="text-muted-foreground">
              The selfie / liveness check used for identity verification (KYC)
              is separate and is processed by our KYC providers, not stored by
              Stealf (see &quot;Identity Verification&quot; above). One-time
              passcodes sent to your email expire after a short period and are
              invalidated after use.
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
                      "Wallet key management, OAuth authentication",
                      "Email, wallet address",
                    ],
                    [
                      "Dakota",
                      "Crypto-to-fiat cash-out, identity verification (KYC/AML)",
                      "Name, date of birth, address, government ID, bank details, transactions",
                    ],
                    [
                      "Sumsub / Persona",
                      "Identity verification on behalf of Dakota",
                      "Government ID, selfie / liveness, personal details",
                    ],
                    [
                      "Bitrefill",
                      "Gift-card fulfillment",
                      "Order and amount details",
                    ],
                    [
                      "Reflect",
                      "USDC+ yield (STLF)",
                      "Wallet address, on-chain transactions",
                    ],
                    [
                      "Umbra",
                      "Confidential balance and private transfers",
                      "Encrypted data only",
                    ],
                    [
                      "Jupiter",
                      "Token swap routing",
                      "Wallet address, transaction parameters",
                    ],
                    [
                      "xStocks (Backed)",
                      "Tokenized stocks",
                      "Wallet address, on-chain transactions",
                    ],
                    [
                      "Helius",
                      "Solana RPC and transaction data",
                      "Wallet addresses (already public on-chain)",
                    ],
                    ["Resend", "Sending authentication emails", "Email address"],
                    [
                      "Sentry",
                      "Error monitoring",
                      "Crash logs, anonymized context",
                    ],
                    [
                      "PostHog",
                      "Product analytics",
                      "Anonymized usage events (no keys or balances)",
                    ],
                    [
                      "MongoDB Atlas / Railway",
                      "Database and application hosting",
                      "Account data (email encrypted at rest)",
                    ],
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
              Some rights are limited where we are legally required to keep
              certain records (for example, identity-verification and
              transaction records under anti-money-laundering law). To exercise
              any of these rights, email us at{" "}
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
              days, except where we are legally required to retain it.
            </p>
            <p className="text-muted-foreground">
              In particular, identity-verification (KYC) data and
              cash-out/transaction records tied to regulated features are
              retained for the period required by applicable
              anti-money-laundering and financial regulations (typically up to
              five years after the end of our relationship), even after account
              deletion.
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
              are responsible for keeping your device, login, and recovery
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
            <address className="not-italic text-muted-foreground space-y-1">
              <div className="text-foreground">Stealf Corporation</div>
              <div>1111b South Governors Avenue, STE 40928</div>
              <div>Dover, DE 19904, United States</div>
              <div>
                Email:{" "}
                <a
                  href="mailto:louis@stealf.xyz"
                  className="text-foreground hover:underline"
                >
                  louis@stealf.xyz
                </a>
              </div>
            </address>
          </section>
        </article>
      </div>

      <FooterSection />
    </main>
  );
}
