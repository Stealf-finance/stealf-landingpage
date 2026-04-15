import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Stealf",
  description: "Stealf Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-400 mb-12">Last updated: April 14, 2026</p>

        <div className="space-y-10 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">1. Introduction</h2>
            <p>
              Stealf (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the Stealf mobile application and
              related services (the &quot;Service&quot;). This Privacy Policy describes how we
              collect, use, and protect information when you use our Service.
            </p>
            <p className="mt-4">
              Our mission is to provide a privacy-first neobank on Solana. While we are
              committed to preserving your on-chain privacy, we must comply with applicable
              laws and regulations, including KYC/AML requirements for certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-white mt-6 mb-2">Account Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address (for account creation and authentication)</li>
              <li>Username / pseudonym</li>
              <li>Passkey credentials (managed by Turnkey)</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-6 mb-2">Wallet Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Public wallet addresses (cash wallet and privacy wallet)</li>
              <li>Transaction history visible on the Solana blockchain</li>
              <li>
                Private keys for the stealth wallet are stored locally on your device
                in secure storage (Keychain/Keystore). We never have access to them.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-6 mb-2">KYC Information (for card features)</h3>
            <p>
              If you choose to use card-related features, our partner Rain Cards will
              collect identity information (name, address, date of birth, government ID)
              for regulatory compliance. Stealf does not retain this KYC data directly.
            </p>

            <h3 className="text-lg font-medium text-white mt-6 mb-2">Usage Data</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device type and operating system</li>
              <li>App version</li>
              <li>Crash reports and performance metrics (via Sentry)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain the Service</li>
              <li>To authenticate you and secure your account</li>
              <li>To facilitate blockchain transactions you initiate</li>
              <li>To send you essential service communications (beta access, security updates)</li>
              <li>To improve app performance and fix bugs</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">4. On-Chain Privacy</h2>
            <p>
              Stealf integrates privacy-enhancing protocols (Umbra, Arcium MPC) to
              reduce the on-chain traceability of your transactions. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>All Solana transactions are public by default</li>
              <li>
                Shielded balances and private transfers are protected by cryptographic
                protocols, but the underlying protocols may have inherent limitations
              </li>
              <li>
                Public wallet transactions (cash wallet) are fully visible on the
                Solana blockchain
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">5. Data Sharing</h2>
            <p>We share data only with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Turnkey</strong> — for passkey-based wallet infrastructure
              </li>
              <li>
                <strong>Rain Cards</strong> — for card issuance and KYC (only if you opt in)
              </li>
              <li>
                <strong>Helius</strong> — for Solana RPC access
              </li>
              <li>
                <strong>Sentry</strong> — for anonymized crash reporting
              </li>
              <li>
                <strong>Resend</strong> — for transactional email delivery
              </li>
              <li>Law enforcement, if legally required</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">6. Data Storage & Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>User data is stored in encrypted form in MongoDB</li>
              <li>Private keys are stored only on your device (SecureStore)</li>
              <li>All communications use HTTPS/TLS</li>
              <li>Encrypted vault balances are protected via Arcium MPC</li>
            </ul>
            <p className="mt-4">
              No method of electronic transmission or storage is 100% secure. While we
              strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access the data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and associated data</li>
              <li>Export your wallet and account data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@stealf.xyz"
                className="text-white underline hover:text-neutral-400"
              >
                privacy@stealf.xyz
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">8. Children&apos;s Privacy</h2>
            <p>
              Stealf is not intended for users under 18. We do not knowingly collect
              information from children. If you believe a child has provided us data,
              please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">9. Data Retention</h2>
            <p>
              We retain your account data as long as your account is active. Upon
              account deletion, personal data is removed within 30 days, except where
              retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by email or through the app. Continued use of the
              Service constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">11. Contact</h2>
            <p>
              For privacy-related questions or requests, contact us at:
            </p>
            <p className="mt-4">
              <a
                href="mailto:privacy@stealf.xyz"
                className="text-white underline hover:text-neutral-400"
              >
                privacy@stealf.xyz
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            ← Back to Stealf
          </Link>
        </div>
      </div>
    </main>
  );
}
