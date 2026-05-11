import { BankWalletIllustration } from "@/components/illustrations/bank-wallet-illustration";
import { StealthWalletIllustration } from "@/components/illustrations/stealth-wallet-illustration";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

// TODO(thomas): replace with the real Tally form URL before merge.
// Single source of truth — referenced by hero, navbar, mobile drawer, and CTA section.
export const WAITLIST_URL = "https://tally.so/r/STEALF_PLACEHOLDER";
export const DOCS_URL = "https://stealf-1.gitbook.io/stealf-docs";

export const siteConfig = {
  name: "Stealf",
  description:
    "A privacy-first neobank on Solana — Bank wallet (Turnkey custody, EUR cards & transfers) and Stealth wallet (self-custodial, Umbra-encrypted balance), in one app.",
  cta: "Join Waitlist",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://stealf.xyz",
  keywords: [
    "Solana",
    "neobank",
    "privacy",
    "Umbra",
    "stealth wallet",
    "encrypted balance",
    "Turnkey",
    "Arcium",
    "self-custody",
    "stablecoin",
  ],
  links: {
    email: "louis@stealf.xyz",
    twitter: "https://x.com/stealf_finance",
    discord: "https://discord.com/invite/7w2TFCm6Ft",
    github: "https://github.com/Stealf-finance",
    telegram: "https://t.me/+1KiIlJTX5WIzMmM0",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "How it Works", href: "#bento" },
      { id: 3, name: "Features", href: "#features" },
      { id: 4, name: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    badgeIcon: (
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
      </span>
    ),
    badge: "Private beta now live",
    title: "Your privacy-first neobank on Solana.",
    description:
      "Stealf is a stablecoin-based neobank focused on privacy, we combine confidentiality with a complete banking experience while staying fully compliant.",
    cta: {
      primary: {
        text: "Join Waitlist",
        href: WAITLIST_URL,
        note: "+2,000 people already on the waitlist",
      },
      secondary: {
        text: "Read the docs",
        href: DOCS_URL,
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Arcium",
        href: "https://www.arcium.com",
        logo: (
          <Image
            src="/icons-protocols/arcium.svg"
            alt="Arcium"
            width={140}
            height={32}
            className="h-7 w-auto object-contain brightness-0 invert opacity-85"
          />
        ),
      },
      {
        id: 2,
        name: "Umbra",
        href: "https://www.umbraprivacy.com",
        logo: (
          <span className="font-bold text-2xl tracking-tight text-foreground leading-none">
            Umbra Privacy
          </span>
        ),
      },
      {
        id: 3,
        name: "Solana",
        href: "https://solana.com/",
        logo: (
          <span className="font-bold text-2xl tracking-tight text-foreground leading-none">
            Solana
          </span>
        ),
      },
      {
        id: 4,
        name: "Helius",
        href: "https://www.helius.dev",
        logo: (
          <Image
            src="/icons-protocols/logo.svg"
            alt="Helius"
            width={140}
            height={32}
            className="h-7 w-auto object-contain brightness-0 invert opacity-85"
          />
        ),
      },
      {
        id: 5,
        name: "Rain",
        href: "https://www.rain.xyz",
        logo: (
          <Image
            src="/icons-protocols/rain.svg"
            alt="Rain"
            width={140}
            height={32}
            className="h-7 w-auto object-contain brightness-0 invert opacity-85"
          />
        ),
      },
      {
        id: 6,
        name: "Turnkey",
        href: "https://www.turnkey.com",
        logo: (
          <span className="font-bold text-2xl tracking-tight text-foreground leading-none">
            Turnkey
          </span>
        ),
      },
    ],
  },
  featureSection: {
    title: "Features",
    description:
      "A single interface where you actually own your money, keep it private by default, and still spend it in the real world.",
    items: [
      {
        id: 1,
        title: "Import or create your stealth wallet",
        content:
          "Today you juggle two apps — banking and wallet — never really own your keys, and privacy means a third app on top. Stealf collapses all three into one: your keys, your privacy, by default.",
        image: "/screens/stealth-public.png",
      },
      {
        id: 2,
        title: "Shield any asset",
        content:
          "Move any token from your public balance into your encrypted balance inside Umbra Privacy in one tap. The deposit is public. From there, your balance stays private.",
        image: "/screens/stealth-private.png",
      },
      {
        id: 3,
        title: "Move funds between your wallets",
        content:
          "Move funds between your two wallets in two taps, privately. There's no direct on-chain link between them.",
        image: "/screens/move.png",
      },
      {
        id: 4,
        title: "Spend like a bank",
        content:
          "Compliant. Seamless. Global. Pay with your Stealf card. Transfer instantly. Fully regulated infrastructure",
        image: "/screens/bank.png",
      },
    ],
  },
  bentoSection: {
    title: "Two wallets. One app.",
    description:
      "The dual-wallet architecture that gives users back what cash always offered by default: financial privacy.",
    items: [
      {
        id: 1,
        content: <BankWalletIllustration />,
        title: "Bank wallet",
        description:
          "Managed via Turnkey (TEE), your bridge to the real world. Connected to banking infrastructure (virtual bank account, card payments, transfers), KYC-compliant by design.",
      },
      {
        id: 2,
        content: <StealthWalletIllustration />,
        title: "Stealth wallet",
        description:
          "Self-custodial Stealth wallet, created locally or imported, powered by the Umbra Privacy SDK. You hold the keys, control what you share, and invest privately.",
      },
    ],
  },
  benefits: [
    {
      id: 1,
      text: "Save hours each week with AI-optimized scheduling.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Reduce scheduling conflicts and double-bookings.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Improve work-life balance with smart time allocation.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Increase productivity with AI-driven time management insights.",
      image: "/Device-1.png",
    },
  ],
  quoteSection: {
    quote:
      "Crypto cards are exploding. AI reads it all: balances, flows, habits — profiled at scale. Without native privacy, onchain isn't freedom anymore. It's a glass house.",
    author: {
      name: "Thomas",
      role: "Technical Co-founder, Stealf",
      image: "/ppp.jpg",
    },
  },
  pricing: {
    title: "Pricing that scales with you",
    description:
      "Whichever plan you pick, it's free until you love your docs. That's our promise.",
    pricingItems: [
      {
        name: "Free",
        href: "#",
        price: "$0",
        period: "month",
        yearlyPrice: "$0",
        features: [
          "Custom domain",
          "SEO-optimizations",
          "Auto-generated API docs",
          "Built-in components library",
        ],
        description: "Perfect for individual users",
        buttonText: "Start Free",
        buttonColor: "bg-accent text-foreground",
        isPopular: false,
      },
      {
        name: "Startup",
        href: "#",
        price: "$12",
        period: "month",
        yearlyPrice: "$120",
        features: [
          "Custom domain",
          "SEO-optimizations",
          "Auto-generated API docs",
          "Built-in components library",
          "E-commerce integration",
          "User authentication system",
          "Multi-language support",
          "Real-time collaboration tools",
        ],
        description: "Ideal for professionals and small teams",
        buttonText: "Upgrade to Pro",
        buttonColor: "bg-secondary text-white",
        isPopular: true,
      },
      {
        name: "Enterprise",
        href: "#",
        price: "$24",
        period: "month",
        yearlyPrice: "$240",
        features: [
          "Custom domain",
          "SEO-optimizations",
          "Auto-generated API docs",
          "Built-in components librarys",
          "Real-time collaboration tools",
        ],
        description: "Best for large teams and enterprise-level organizations",
        buttonText: "Contact Sales",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Answers to the most common questions about Stealf. If something isn't covered here, reach out directly.",
    faQitems: [
      {
        id: 1,
        question: "Who is Stealf for?",
        answer:
          "Stealf is built for crypto-native users — traders, freelancers, founders — whose financial life lives onchain. People who need a mobile-first interface to manage their money, stay in full control, and remain private by default, without losing the real-world rails (cards, bank accounts, payments) they still rely on every day.",
      },
      {
        id: 2,
        question: "Does Stealf require identity verification?",
        answer:
          "Only for banking features (cards, virtual bank account, EUR transfers). The stealth wallet itself stays permissionless and can be used without KYC. Staying compliant where it matters is a core principle of Stealf.",
      },
      {
        id: 3,
        question: "What is your current stage?",
        answer:
          "Stealf is in private beta with private transfers and the dual-wallet architecture already live. We're currently raising our first round.",
      },
      {
        id: 4,
        question: "How can I contact the founders?",
        answer: "Reach us on Telegram: @CECOR2B",
      },
      {
        id: 5,
        question: "Is Stealf only available on Solana?",
        answer:
          "Yes. Arcium on Solana delivers protocol-level confidentiality without leaving a fast, scalable, DeFi-rich ecosystem. You no longer have to choose between privacy and utility — Zcash and Monero solved privacy but lack the protocol depth Solana offers.",
      },
      {
        id: 6,
        question: "Can I export my private keys?",
        answer:
          "Yes — Stealf is self-custodial. For your bank wallet, your private key is managed by Turnkey inside a Trusted Execution Environment (TEE), so it's never exposed. For your stealth wallet, your private key is stored only on your device.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Hold crypto, Spend cash, Stay private.",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Join the waitlist",
      href: WAITLIST_URL,
    },
    subtext: "Be first when we open up new seats.",
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "#" },
        { id: 2, title: "Contact", url: "#" },
        { id: 3, title: "Blog", url: "#" },
        { id: 4, title: "Story", url: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { id: 5, title: "Company", url: "#" },
        { id: 6, title: "Product", url: "#" },
        { id: 7, title: "Press", url: "#" },
        { id: 8, title: "More", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 9, title: "Press", url: "#" },
        { id: 10, title: "Careers", url: "#" },
        { id: 11, title: "Newsletters", url: "#" },
        { id: 12, title: "More", url: "#" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
