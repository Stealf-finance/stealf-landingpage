import { FooterSection } from "@/components/sections/footer-section";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Stealf",
  description: "The terms that govern your use of Stealf.",
};

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: May 11, 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              1. Introduction
            </h2>
            <p className="text-muted-foreground">
              Stealf is a privacy-first Solana mobile wallet operated by Stealf,
              Inc., a company incorporated in Delaware, USA (&quot;Stealf&quot;,
              &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms
              of Use (&quot;Terms&quot;) are a legally binding agreement between
              you and us.
            </p>
            <p className="text-muted-foreground">
              By accessing or using Stealf in any way, you agree to these Terms.
              If you don&apos;t agree, don&apos;t use the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              2. Eligibility
            </h2>
            <p className="text-muted-foreground">By using Stealf, you represent that:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                You are at least 18 years old and have legal capacity to enter
                into this agreement
              </li>
              <li>
                You are not located in, or a resident or citizen of, any
                jurisdiction subject to comprehensive sanctions (including Cuba,
                Iran, North Korea, Syria, and the Crimea, Donetsk, and Luhansk
                regions)
              </li>
              <li>
                You are not on any sanctions list maintained by the United
                States, the European Union, the United Kingdom, or the United
                Nations
              </li>
              <li>
                Your use of Stealf does not violate any law or regulation
                applicable to you
              </li>
            </ul>
            <p className="text-muted-foreground">
              We may decline, restrict, suspend, or terminate your access at our
              discretion, including for compliance, fraud prevention, security,
              or regulatory reasons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              3. What Stealf Provides
            </h2>
            <p className="text-muted-foreground">
              Stealf provides a mobile interface to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                A <span className="text-foreground">Bank Wallet</span> managed
                via Turnkey (Oauth authentication, smart wallet
                infrastructure)
              </li>
              <li>
                A <span className="text-foreground">Privacy Wallet</span>{" "}
                generated locally or imported on your device, fully self-custodied
              </li>
              <li>Token swaps routed through Jupiter</li>
              <li>
                <span className="text-foreground">Stealf Yield</span>, a yield
                product that stakes SOL into JitoSOL through the Jito liquid
                staking pool, with encrypted balance accounting via the Arcium
                MPC network
              </li>
            </ul>
            <p className="text-muted-foreground">
              Banking features (cards, IBANs, fiat onramp and offramp) are not
              part of the current product. When these features are added in the
              future, additional terms will apply and you will be notified.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              4. Self-Custody and Your Responsibility for Keys
            </h2>
            <p className="text-muted-foreground">
              Stealf is non-custodial. You control your wallets and your assets
              at all times.
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground">For the Privacy Wallet:</span>{" "}
              the private key is generated on your device and stored locally in
              the secure enclave (iOS Keychain / Android Keystore). We do not
              store, backup, or have any access to this key. If you lose your
              device and your recovery phrase (the 24-word BIP39 mnemonic),
              your funds are permanently lost. We cannot recover them.
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground">For the Bank Wallet:</span>{" "}
              authentication is handled via Oauth through Turnkey. If you
              lose access to your Oauth and recovery methods, you may lose
              access to this wallet.
            </p>
            <p className="text-muted-foreground">
              You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Keeping your device secure</li>
              <li>
                Keeping your recovery phrase, Oauth, and any other
                credentials safe and confidential
              </li>
              <li>Verifying transaction details before signing</li>
              <li>Understanding the risks of any operation you initiate</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              5. Stealf Yield
            </h2>
            <p className="text-muted-foreground">
              Stealf Yield lets you allocate SOL into JitoSOL liquid staking,
              with your balance recorded in encrypted form via the Arcium MPC
              network. Stealf does not custody or pool these funds with other
              users&apos; funds.
            </p>
            <p className="text-muted-foreground">
              By using Stealf Yield you understand and accept that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Yields are variable, depend on the Jito staking pool, and may
                change or fall to zero at any time
              </li>
              <li>
                The underlying staking protocol, the MPC network, or any other
                integrated protocol may experience smart contract failures,
                exploits, slashing events, or insolvency
              </li>
              <li>
                Solana validator behavior, network congestion, and on-chain
                conditions may affect the timing or outcome of any deposit or
                withdrawal
              </li>
              <li>Past performance does not predict future results</li>
              <li>
                Stealf does not guarantee the return of principal or any
                specific yield
              </li>
              <li>
                Stealf is not a lender, broker, asset manager, or financial
                advisor
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              6. Token Swaps
            </h2>
            <p className="text-muted-foreground">
              Token swap functionality is routed through Jupiter and other
              decentralized exchanges and aggregators. Stealf does not set
              prices, control routing, or guarantee execution. Prices may move
              between quote and execution due to network conditions, slippage,
              or liquidity changes. All swaps are final once confirmed on-chain.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              7. Privacy Transfers
            </h2>
            <p className="text-muted-foreground">
              Private peer-to-peer transfers (when made available) will rely on
              third-party privacy protocols. Availability and terms of these
              features depend on the readiness of the underlying protocol.
              Specific terms will apply when this feature is activated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              8. Acceptable Use
            </h2>
            <p className="text-muted-foreground">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Violate any applicable law, regulation, or sanction</li>
              <li>
                Use Stealf to facilitate money laundering, terrorist financing,
                fraud, sanctions evasion, or any illegal activity
              </li>
              <li>
                Reverse engineer, scrape, decompile, or attempt to extract data
                from our systems
              </li>
              <li>
                Interfere with or disrupt the service (including
                denial-of-service attempts, exploitation of rate limits, or
                abuse of webhooks)
              </li>
              <li>Create automated, fake, or unauthorized accounts</li>
              <li>
                Use the service in a way that could harm Stealf, other users,
                or third parties
              </li>
            </ul>
            <p className="text-muted-foreground">
              Violations may result in immediate suspension or termination and
              may be reported to relevant authorities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              9. Third-Party Services
            </h2>
            <p className="text-muted-foreground">
              Stealf integrates with third parties whose services are governed
              by their own terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="text-foreground">Turnkey</span> (Oauth
                authentication, Bank Wallet infrastructure)
              </li>
              <li>
                <span className="text-foreground">Helius</span> (Solana RPC and
                webhook infrastructure)
              </li>
              <li>
                <span className="text-foreground">Jupiter</span> (swap routing)
              </li>
              <li>
                <span className="text-foreground">Arcium</span> (MPC
                computation)
              </li>
              <li>
                <span className="text-foreground">Jito</span> (liquid staking)
              </li>
            </ul>
            <p className="text-muted-foreground">
              We may add, remove, or replace third-party providers at any time.
              We are not liable for the acts, omissions, outages, fees,
              policies, or data handling practices of any third-party provider
              or any DeFi protocol.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">10. Taxes</h2>
            <p className="text-muted-foreground">
              You are solely responsible for determining, reporting, and paying
              any taxes applicable to your use of Stealf, including taxes on
              yield, swaps, and any other transactions. Stealf does not provide
              tax advice and does not file tax forms on your behalf.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              11. Disclaimers
            </h2>
            <p className="text-muted-foreground">
              Stealf is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind, express or implied. We do not
              warrant:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Continuous, uninterrupted, or error-free access</li>
              <li>
                Profit, performance, or any specific outcome from any wallet,
                yield, or swap activity
              </li>
              <li>
                The continued availability of any feature, integration, or
                third-party partner
              </li>
              <li>
                The security, solvency, or performance of any third-party
                protocol or service
              </li>
              <li>
                That the app is free of bugs, vulnerabilities, or unexpected
                behavior
              </li>
            </ul>
            <p className="text-muted-foreground">
              Some jurisdictions do not allow the disclaimer of implied
              warranties; in those cases, some of the above may not apply to
              you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              12. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Stealf will not be liable
              for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Indirect, incidental, special, consequential, or punitive
                damages
              </li>
              <li>
                Loss of data, assets, profits, yield, or business opportunity
              </li>
              <li>
                Service outages, user errors, lost keys, or losses caused by
                third-party providers or DeFi protocols
              </li>
              <li>
                Any financial loss arising out of or related to your use of
                Stealf, including losses from market movements, slashing,
                depegs, exploits, protocol failures, or smart contract bugs
              </li>
            </ul>
            <p className="text-muted-foreground">
              Our aggregate liability to you for any claim arising out of or
              related to these Terms or the service is capped at fifty US
              dollars (US$50).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              13. Governing Law and Dispute Resolution
            </h2>
            <p className="text-muted-foreground">
              These Terms and any dispute arising from them or from your use of
              Stealf are governed by the laws of the State of Delaware, without
              regard to its conflict of laws rules, and by applicable US
              federal law.
            </p>
            <p className="text-muted-foreground">
              Any dispute, claim, or controversy shall be resolved by binding
              individual arbitration administered in Wilmington, Delaware,
              under the then-current rules of the American Arbitration
              Association. You waive:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Class action rights</li>
              <li>Jury trial rights</li>
            </ul>
            <p className="text-muted-foreground">
              You have 30 days from accepting these Terms to opt out of
              arbitration by writing to{" "}
              <a
                href="mailto:louis@stealf.xyz"
                className="text-foreground hover:underline"
              >
                louis@stealf.xyz
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              14. Termination
            </h2>
            <p className="text-muted-foreground">
              We may suspend, restrict, or terminate your access at our
              discretion, including for breach of these Terms or for
              compliance, fraud, security, or risk reasons. You may stop using
              the service at any time. The sections on self-custody,
              disclaimers, limitation of liability, taxes, and governing law
              survive termination.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">15. Changes</h2>
            <p className="text-muted-foreground">
              We may modify these Terms at any time. We will post the new
              version and update the &quot;Last Updated&quot; date. For
              material changes, we will notify you in-app or by email.
              Continued use of Stealf after changes take effect means you
              accept the updated Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">16. Contact</h2>
            <address className="not-italic text-muted-foreground space-y-1">
              <div className="text-foreground">Stealf, Inc.</div>
              <div className="italic opacity-70">
                Delaware registered office address
              </div>
              <div>
                Email:{" "}
                <a
                  href="mailto:contact@stealf.xyz"
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
