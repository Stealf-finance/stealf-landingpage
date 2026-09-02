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
              Last Updated: September 2, 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              1. Introduction
            </h2>
            <p className="text-muted-foreground">
              Stealf is a privacy-first neobank on Solana operated by Stealf
              Corporation, a company incorporated in the State of Delaware, USA
              (&quot;Stealf&quot;, &quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;). These Terms of Use (&quot;Terms&quot;) are a
              legally binding agreement between you and us.
            </p>
            <p className="text-muted-foreground">
              By accessing or using Stealf in any way, you agree to these Terms.
              If you don&apos;t agree, don&apos;t use the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              2. Regulatory Status — Stealf Is Not a Bank
            </h2>
            <p className="text-muted-foreground">
              Stealf is a technology company that provides software. Stealf is
              not a bank, a licensed money transmitter, or a regulated financial
              institution, and does not itself hold or move customer fiat funds.
            </p>
            <p className="text-muted-foreground">
              Regulated activities — such as crypto-to-fiat conversion and
              payouts to your bank — are performed by licensed third-party
              partners (for example, Dakota) on their own infrastructure and
              under their own terms. Your crypto assets remain self-custodied
              until you choose to send them to a partner to execute a
              transaction you initiate. Balances in Stealf are not bank deposits
              and are not covered by any deposit-insurance scheme.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              3. Eligibility
            </h2>
            <p className="text-muted-foreground">By using Stealf, you represent that:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                You are at least 18 years old and have legal capacity to enter
                into this agreement.
              </li>
              <li>
                You are not located in, or a resident or citizen of, any
                jurisdiction subject to comprehensive sanctions (including Cuba,
                Iran, North Korea, Syria, and the Crimea, Donetsk, and Luhansk
                regions).
              </li>
              <li>
                You are not on any sanctions list maintained by the United
                States, the European Union, the United Kingdom, or the United
                Nations.
              </li>
              <li>
                Your use of Stealf does not violate any law or regulation
                applicable to you.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Some features (such as cash-out) require successful identity
              verification. We may decline, restrict, suspend, or terminate your
              access at our discretion, including for compliance, fraud
              prevention, security, or regulatory reasons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              4. What Stealf Provides
            </h2>
            <p className="text-muted-foreground">
              Stealf provides a mobile interface to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                A <span className="text-foreground">self-custodied Solana wallet</span>{" "}
                with a public balance and a private, encrypted balance, secured
                through Turnkey key-management infrastructure and, for private
                features, an on-device key.
              </li>
              <li>Token swaps routed through Jupiter.</li>
              <li>
                <span className="text-foreground">Yield</span>, via the Reflect
                protocol (a yield-bearing USDC-based asset, STLF).
              </li>
              <li>
                <span className="text-foreground">Tokenized stocks</span>{" "}
                (xStocks) issued by a third-party issuer.
              </li>
              <li>
                <span className="text-foreground">Gift cards</span> purchased
                with stablecoins and fulfilled by Bitrefill.
              </li>
              <li>
                <span className="text-foreground">Crypto-to-fiat cash-out</span>{" "}
                (off-ramp) executed by a licensed payments partner (Dakota),
                which requires identity verification.
              </li>
              <li>
                <span className="text-foreground">Private transfers</span> that
                rely on Umbra&apos;s confidential protocol.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Features may be added, changed, or removed over time. Some
              features are rolled out progressively and may not be available in
              all regions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              5. Self-Custody and Your Responsibility for Keys
            </h2>
            <p className="text-muted-foreground">
              Stealf is non-custodial. You control your wallet and your assets
              at all times.
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground">For your on-device key:</span>{" "}
              the private key used for private features is generated on your
              device and stored locally in the secure enclave (iOS Keychain /
              Android Keystore). We do not store, back up, or have any access to
              this key. If you lose your device and your recovery phrase (the
              BIP39 mnemonic), your funds are permanently lost. We cannot
              recover them.
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground">
                For your Turnkey-secured wallet:
              </span>{" "}
              access is authenticated via OAuth or email through Turnkey. Stealf
              never sees the private key. If you lose access to your login and
              recovery methods, you may lose access to this wallet.
            </p>
            <p className="text-muted-foreground">You are solely responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Keeping your device secure.</li>
              <li>
                Keeping your recovery phrase, login, and any other credentials
                safe and confidential.
              </li>
              <li>Verifying transaction details before signing.</li>
              <li>Understanding the risks of any operation you initiate.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              6. Identity Verification (KYC / AML)
            </h2>
            <p className="text-muted-foreground">
              Features that convert crypto to fiat require you to verify your
              identity, as required by anti-money-laundering law. Verification
              is performed by our payments partner and its identity-verification
              providers. You agree to provide accurate, current, and complete
              information, and you authorize us and our partners to verify it and
              screen it against sanctions and watchlists. We may refuse or revoke
              access to regulated features if verification fails or if we detect
              fraud, sanctions, or compliance risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              7. Cash-Out (Off-Ramp)
            </h2>
            <p className="text-muted-foreground">
              The cash-out feature lets you convert on-chain stablecoins to fiat
              paid to your bank account. This conversion and payout are executed
              by a licensed third-party partner (Dakota), not by Stealf. You are
              responsible for providing correct bank details; Stealf and its
              partner are not liable for funds sent to an incorrect account you
              provided. Fees, limits, supported currencies, payout times, and
              availability depend on the partner and your jurisdiction, and
              amounts received may differ from a displayed estimate due to
              network fees and exchange rates. Once you send crypto to the
              deposit address for a cash-out, the transaction may be
              irreversible.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">8. Gift Cards</h2>
            <p className="text-muted-foreground">
              Gift cards are digital vouchers fulfilled by Bitrefill and issued
              by the respective merchants. Availability, value, and terms depend
              on the merchant and your country. Gift-card purchases are final and
              non-refundable once delivered. Stealf does not control, and is not
              responsible for, the acceptance, expiry, or terms of any gift card,
              which are governed by the issuing merchant&apos;s and
              Bitrefill&apos;s terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">9. Yield</h2>
            <p className="text-muted-foreground">
              Stealf Yield lets you hold a yield-bearing USDC-based asset (STLF)
              through the Reflect protocol. Stealf does not custody or pool these
              funds with other users&apos; funds. By using it you understand and
              accept that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Yields are variable, depend on the underlying protocol, and may
                change or fall to zero at any time.
              </li>
              <li>
                The underlying protocol, or any integrated protocol, may
                experience smart-contract failures, exploits, depegs, or
                insolvency.
              </li>
              <li>
                Solana network conditions may affect the timing or outcome of
                any deposit or withdrawal.
              </li>
              <li>Past performance does not predict future results.</li>
              <li>
                Stealf does not guarantee the return of principal or any specific
                yield.
              </li>
              <li>
                Stealf is not a lender, broker, asset manager, or financial
                advisor.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              10. Token Swaps and Tokenized Stocks
            </h2>
            <p className="text-muted-foreground">
              Token swaps are routed through Jupiter and other decentralized
              exchanges and aggregators. Stealf does not set prices, control
              routing, or guarantee execution. Prices may move between quote and
              execution due to network conditions, slippage, or liquidity. All
              swaps are final once confirmed on-chain.
            </p>
            <p className="text-muted-foreground">
              Tokenized stocks (xStocks) are digital assets issued by a
              third-party issuer that track the price of underlying securities.
              They are not shares, confer no shareholder rights, and are not
              offered, endorsed, or guaranteed by the underlying companies.
              Availability may be restricted in your jurisdiction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              11. Private Transfers
            </h2>
            <p className="text-muted-foreground">
              Private, confidential transfers rely on Umbra&apos;s protocol.
              Availability and behavior of these features depend on the
              readiness of the underlying protocol, and additional or specific
              terms may apply when a feature is activated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              12. Acceptable Use
            </h2>
            <p className="text-muted-foreground">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Violate any applicable law, regulation, or sanction.</li>
              <li>
                Use Stealf to facilitate money laundering, terrorist financing,
                fraud, sanctions evasion, or any illegal activity.
              </li>
              <li>
                Reverse engineer, scrape, decompile, or attempt to extract data
                from our systems.
              </li>
              <li>
                Interfere with or disrupt the service (including
                denial-of-service attempts, exploitation of rate limits, or
                abuse of webhooks).
              </li>
              <li>Create automated, fake, or unauthorized accounts.</li>
              <li>
                Use the service in a way that could harm Stealf, other users, or
                third parties.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Violations may result in immediate suspension or termination and
              may be reported to relevant authorities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              13. Third-Party Services
            </h2>
            <p className="text-muted-foreground">
              Stealf integrates with third parties whose services are governed
              by their own terms, including Turnkey (wallet infrastructure and
              authentication), Dakota (cash-out and identity verification),
              Bitrefill (gift cards), Reflect (yield), Umbra (private transfers),
              Jupiter (swap routing), xStocks / Backed (tokenized stocks), and
              Helius (Solana infrastructure). We may add, remove, or replace
              third-party providers at any time. We are not liable for the acts,
              omissions, outages, fees, policies, or data-handling practices of
              any third-party provider or any on-chain protocol.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">14. Taxes</h2>
            <p className="text-muted-foreground">
              You are solely responsible for determining, reporting, and paying
              any taxes applicable to your use of Stealf, including taxes on
              yield, swaps, cash-outs, and any other transactions. Stealf does
              not provide tax advice and does not file tax forms on your behalf.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              15. Disclaimers
            </h2>
            <p className="text-muted-foreground">
              Stealf is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind, express or implied. We do not
              warrant:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Continuous, uninterrupted, or error-free access.</li>
              <li>
                Profit, performance, or any specific outcome from any wallet,
                yield, swap, or other activity.
              </li>
              <li>
                The continued availability of any feature, integration, or
                third-party partner.
              </li>
              <li>
                The security, solvency, or performance of any third-party
                protocol or service.
              </li>
              <li>
                That the app is free of bugs, vulnerabilities, or unexpected
                behavior.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Some jurisdictions do not allow the disclaimer of implied
              warranties; in those cases, some of the above may not apply to you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              16. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Stealf will not be liable
              for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Indirect, incidental, special, consequential, or punitive
                damages.
              </li>
              <li>
                Loss of data, assets, profits, yield, or business opportunity.
              </li>
              <li>
                Service outages, user errors, lost keys, or losses caused by
                third-party providers or on-chain protocols.
              </li>
              <li>
                Any financial loss arising out of or related to your use of
                Stealf, including losses from market movements, depegs, exploits,
                protocol failures, or smart-contract bugs.
              </li>
            </ul>
            <p className="text-muted-foreground">
              To the extent permitted by law, our aggregate liability to you for
              any claim arising out of or related to these Terms or the service
              is capped at fifty US dollars (US$50).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              17. Consumer Rights
            </h2>
            <p className="text-muted-foreground">
              Nothing in these Terms excludes, restricts, or limits any right or
              remedy you have under mandatory laws that apply to you as a
              consumer and that cannot be waived by agreement — including
              mandatory consumer-protection rights in the European Union and
              your country of residence. Where such laws apply, the disclaimers,
              liability cap, arbitration, and governing-law provisions below
              apply only to the extent permitted by those laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">
              18. Governing Law and Dispute Resolution
            </h2>
            <p className="text-muted-foreground">
              These Terms and any dispute arising from them or from your use of
              Stealf are governed by the laws of the State of Delaware, without
              regard to its conflict-of-laws rules, and by applicable US federal
              law, except where mandatory local law applicable to you as a
              consumer provides otherwise.
            </p>
            <p className="text-muted-foreground">
              Where permitted by the law that applies to you, any dispute, claim,
              or controversy shall be resolved by binding individual arbitration
              administered in Wilmington, Delaware, under the then-current rules
              of the American Arbitration Association, and you waive class-action
              and jury-trial rights. This does not apply where such waiver is
              prohibited by mandatory law applicable to you.
            </p>
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
              19. Termination
            </h2>
            <p className="text-muted-foreground">
              We may suspend, restrict, or terminate your access at our
              discretion, including for breach of these Terms or for compliance,
              fraud, security, or risk reasons. You may stop using the service at
              any time. The sections on self-custody, disclaimers, limitation of
              liability, taxes, consumer rights, and governing law survive
              termination.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">20. Changes</h2>
            <p className="text-muted-foreground">
              We may modify these Terms at any time. We will post the new version
              and update the &quot;Last Updated&quot; date. For material changes,
              we will notify you in-app or by email. Continued use of Stealf
              after changes take effect means you accept the updated Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight">21. Contact</h2>
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
