import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use - Stealf",
  description: "Stealf Terms of Use",
};

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
          Terms of Use
        </h1>
        <p className="text-sm text-neutral-400 mb-12">Last updated: April 29, 2026</p>

        <div className="space-y-10 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Stealf mobile application or any related services
              (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Use.
              If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use Stealf. By creating an account you
              represent that you meet this age requirement and that you are not a resident
              of a jurisdiction that prohibits the use of cryptocurrency or related
              financial services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. Account &amp; Wallets</h2>
            <p>
              Stealf is a non-custodial application. The private keys to your stealth
              wallet are stored only on your device. You are solely responsible for
              safeguarding access to your account, your passkey, your wallet seed phrase,
              and your hardware wallet (e.g. Solana Seeker Seed Vault) where applicable.
            </p>
            <p className="mt-4">
              We cannot recover lost credentials, lost private keys, lost seed phrases, or
              lost hardware wallets. Loss of any of these may result in permanent loss of
              access to your funds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">4. Use of the Service</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use the Service in violation of any applicable law or regulation</li>
              <li>Use the Service for money laundering, terrorism financing, or sanctions evasion</li>
              <li>Attempt to gain unauthorised access to any part of the Service</li>
              <li>Reverse engineer, decompile, or tamper with the Service</li>
              <li>Use the Service to facilitate illegal transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">5. Risks &amp; Disclaimers</h2>
            <p>
              The Service interacts with the Solana blockchain and third-party protocols.
              You acknowledge and accept the inherent risks of using blockchain
              technologies, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Volatility and total loss of value of digital assets</li>
              <li>Smart-contract bugs or exploits</li>
              <li>Network congestion, downtime, or forks</li>
              <li>Loss of funds due to incorrect addresses, lost keys, or user error</li>
              <li>
                Privacy-enhancing protocols (mixers, MPC vaults, stealth wallets) carry
                cryptographic and regulatory risks; their privacy guarantees are not
                absolute
              </li>
            </ul>
            <p className="mt-4">
              The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
              warranties of any kind. We do not guarantee uptime, accuracy of data, or
              successful execution of transactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">6. KYC &amp; Card Features</h2>
            <p>
              Some features (notably card issuance via our partner Rain Cards) require
              identity verification (KYC). By opting into these features you authorise
              the collection and processing of your identity information by our partners
              for regulatory compliance, as described in our{" "}
              <a
                href="/privacy"
                className="text-white underline hover:text-neutral-400"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">7. Fees</h2>
            <p>
              Stealf does not charge fees for core wallet operations. You remain liable
              for Solana network fees, third-party protocol fees (e.g. liquid staking,
              swap aggregators), and card-issuer fees where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">8. Intellectual Property</h2>
            <p>
              The Stealf name, logo, designs, and source code are owned by Stealf or its
              licensors. Nothing in these Terms grants you any right to use these except
              as strictly necessary to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Stealf and its team shall not be
              liable for any indirect, incidental, special, consequential, or punitive
              damages, or for any loss of profits, revenues, data, or assets, arising
              out of or in connection with your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">10. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at any time, with or
              without cause and without notice, including if we believe you have breached
              these Terms or applicable law. You may stop using the Service at any time
              and request account deletion from within the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">11. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be
              notified through the app or by email. Your continued use of the Service
              after the effective date of an update constitutes acceptance of the new
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of France. Any dispute arising from
              these Terms or the Service shall be subject to the exclusive jurisdiction
              of the competent courts of France, without prejudice to mandatory consumer
              protection provisions of your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">13. Contact</h2>
            <p>
              For questions about these Terms, contact us at:
            </p>
            <p className="mt-4">
              <a
                href="mailto:legal@stealf.xyz"
                className="text-white underline hover:text-neutral-400"
              >
                legal@stealf.xyz
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <Link
            className="text-sm text-neutral-500 hover:text-white transition-colors"
            href="/"
          >
            ← Back to Stealf
          </Link>
        </div>
      </div>
    </main>
  );
}
