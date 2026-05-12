import { Navbar } from "@/components/sections/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const sansation = localFont({
  src: [
    { path: "../../public/font/Sansation/Sansation-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/font/Sansation/Sansation-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../public/font/Sansation/Sansation-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/font/Sansation/Sansation-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/font/Sansation/Sansation-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/font/Sansation/Sansation-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sansation.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}>
      {/* <head>
        <Script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      </head> */}

      <body
        className="antialiased font-sans bg-background"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="max-w-7xl mx-auto border-x relative">
            <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10"></div>
            <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10"></div>
            <Navbar />
            {children}
          </div>
          <Toaster position="bottom-center" theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
