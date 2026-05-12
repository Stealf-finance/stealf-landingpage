import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Stealf",
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
    "EUR card",
  ],
  authors: [
    {
      name: "Stealf",
      url: "https://stealf.xyz",
    },
  ],
  creator: "Stealf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@stealf_finance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
