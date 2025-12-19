"use client"

import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/ui/footer"
import { ShaderBackground } from "@/components/ui/background"
import Image from "next/image"

export function StealfHero() {
  return (
    <main id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      {/* Content */}
      <div className="relative flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Logo with enhanced glass morphism */}
        <div className="mb-8 relative group">
          <div className="w-24 h-24 glass rounded-2xl flex items-center justify-center relative hover:scale-105 transition-all duration-500 animate-glow">
            {/* Multiple layered glow effects */}
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl scale-125 opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/25 to-transparent rounded-2xl"></div>
            <div className="relative z-10 p-3">
              <Image
                src="/logo-transparent.png"
                alt="Stealf Logo"
                width={200}
                height={100}
                className="w-auto h-16 filter drop-shadow-2xl"
              />
            </div>
          </div>
          {/* Floating particles effect */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gray-400/60 rounded-full animate-ping"></div>
        </div>

        {/* Main heading with improved typography */}
        <div className="mb-6 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance font-sansation leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              True privacy.
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Real banking.
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent italic text-3xl md:text-4xl lg:text-5xl">
              With Stealf.
            </span>
          </h1>
          {/* Subtle text glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-2xl -z-10"></div>
        </div>

        {/* Enhanced subtitle */}
        <p className="text-lg md:text-xl text-foreground/60 mb-8 max-w-2xl text-pretty font-sansation font-light leading-relaxed">
          The first neo bank on Solana that offers the possibility to make <span className="text-white font-medium">100% anonymous</span> transactions
        </p>

        {/* Premium CTA Button */}
        <div className="flex items-center justify-center">
          <div className="relative group">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSee5W7Yfdqm3IadAcqXPeGy5MVyGAt1sLptFh2HzbIEcNYrBg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black px-8 py-4 text-lg font-bold relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 font-sansation rounded-xl border border-white/20"
            >
              <span className="relative z-10 transition-all duration-300">
                Join waitlist
              </span>
              {/* Layered glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/60 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </a>
          </div>
        </div>

        <div className="relative group mt-8">


          {/* Social Links - Discrete */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <a
              href="https://x.com/stealf_finance"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Follow us on X"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/60 group-hover:text-white transition-colors duration-300"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a
              href="https://t.me/+1KiIlJTX5WIzMmM0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Join our Telegram"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/60 group-hover:text-white transition-colors duration-300"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>

            <a
              href="https://medium.com/@stealf.fi/stealf-stable-coin-based-neo-bank-with-arcium-52fc14b814cb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Read our Medium"
            >
              <Image
                src="/medium-logo.png"
                alt="Medium"
                width={20}
                height={20}
                className="invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            <a
              href="https://stealf-1.gitbook.io/stealf-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Read our Documentation"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/60 group-hover:text-white transition-colors duration-300"
              >
                <path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"/>
              </svg>
            </a>

            <a
              href="https://discord.gg/aTYpk5sA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Join our Discord"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/60 group-hover:text-white transition-colors duration-300"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>

          {/* Scroll arrow */}
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2">
            <div className="animate-bounce">
              <button
                onClick={() => {
                  const functionalitiesSection = document.querySelector('#fonctionalities');
                  if (functionalitiesSection) {
                    functionalitiesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group text-foreground/60 hover:text-foreground/90 transition-all duration-300 hover:scale-110"
                aria-label="Scroll to how it works section"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-y-1">
                  <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <div className="bg-background relative min-h-screen">
      {/* Global Three.js Background */}
      <ShaderBackground />

      {/* Global overlay for better readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none z-10"></div>

      <div className="relative z-20" style={{ pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <Navbar />
        </div>
        <div style={{ pointerEvents: 'auto' }}>
          <StealfHero />
        </div>


      {/* How It Works Section */}
      <section id="fonctionalities" className="min-h-screen flex items-center py-20 px-6 relative" style={{ pointerEvents: 'auto' }}>
        <div className="max-w-7xl mx-auto relative w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-medium font-sansation text-sm uppercase tracking-wider">How it Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sansation leading-tight">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Privacy meets
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Compliance
              </span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto font-sansation font-light leading-relaxed">
              Two wallets, one account. Experience both <span className="text-white font-medium">complete privacy</span> and <span className="text-white font-medium">full compliance</span>
            </p>
          </div>

          {/* Dual Wallet System */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Grid Wallet - Compliant */}
            <div className="card-modern group hover:scale-105 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 p-10 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <a
                    href="https://squads.xyz/grid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 p-3 cursor-pointer"
                  >
                    <Image
                      src="/squads.png"
                      alt="Squads Logo"
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <div>
                    <h3 className="text-2xl font-bold font-sansation group-hover:text-accent transition-colors duration-300">Grid Wallet</h3>
                    <p className="text-accent/70 font-sansation text-sm">KYC/AML Compliant</p>
                  </div>
                </div>

                <p className="text-foreground/60 font-sansation text-lg leading-relaxed mb-6">
                  Public blockchain transactions ensuring full regulatory compliance. Powered by <span className="text-accent font-medium">Squads Grid API</span> for enterprise-grade banking infrastructure.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent flex-shrink-0 mt-0.5">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-foreground/70 font-sansation">Complete account management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent flex-shrink-0 mt-0.5">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-foreground/70 font-sansation">Crypto/fiat conversion</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent flex-shrink-0 mt-0.5">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-foreground/70 font-sansation">SEPA transfers & virtual cards</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent flex-shrink-0 mt-0.5">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-foreground/70 font-sansation">Ultra-low stablecoin fees</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Private Wallet - Anonymous */}
            <div className="card-modern group hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 p-10 relative overflow-hidden border-2 border-primary/20">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <a
                    href="https://www.arcium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 p-3 cursor-pointer"
                  >
                    <Image
                      src="/arcium.png"
                      alt="Arcium Logo"
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <div>
                    <h3 className="text-2xl font-bold font-sansation group-hover:text-primary transition-colors duration-300">Private Wallet</h3>
                    <p className="text-primary/70 font-sansation text-sm">100% Anonymous</p>
                  </div>
                </div>

                <p className="text-foreground/60 font-sansation text-lg leading-relaxed mb-6">
                  Completely separate wallet with 100% anonymous transactions. Powered by <span className="text-primary font-medium">Arcium&apos;s decentralized supercomputer</span> for confidential computing.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary flex-shrink-0 mt-0.5">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-foreground/70 font-sansation">Advanced multi-party computation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary flex-shrink-0 mt-0.5">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-foreground/70 font-sansation">Addresses & amounts obfuscated</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary flex-shrink-0 mt-0.5">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-foreground/70 font-sansation">Untraceable on-chain activity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary flex-shrink-0 mt-0.5">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-foreground/70 font-sansation">Fast, scalable, secure network</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Seamless Flow Between Wallets */}
          <div className="card-modern p-10 mb-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 opacity-50"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M7 16V4M7 4L3 8M7 4L11 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8V20M17 20L21 16M17 20L13 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-sansation">Seamless & Anonymous Transfer</h3>
              <p className="text-foreground/60 font-sansation text-lg leading-relaxed max-w-3xl mx-auto">
                Move funds between your wallets effortlessly. The flow is designed to be <span className="text-white font-medium">completely anonymous</span>, ensuring no third party can link your Grid and Private wallets together.
              </p>
            </div>
          </div>

          {/* Learn More Section */}
          <div className="relative overflow-hidden mb-16">
            <div className="glass p-12 rounded-3xl relative text-center">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sansation">Want to dive deeper?</h3>
                <p className="text-foreground/60 font-sansation text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                  Discover the technology behind Stealf, our vision for private banking, and how we&apos;re revolutionizing financial privacy on the blockchain.
                </p>

                <a
                  href="https://medium.com/@stealf.fi/stealf-stable-coin-based-neo-bank-with-arcium-52fc14b814cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 text-white px-8 py-4 text-lg font-bold relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 font-sansation rounded-xl group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Read our articles
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Why Choose Stealf Section */}
          <div className="relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-5xl font-bold mb-8 font-sansation leading-tight">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Why choose Stealf ?
                  </span>
                </h3>
                <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-sansation font-light leading-relaxed">
                  Built on <span className="text-white font-medium">Solana</span> with <span className="text-white font-medium">stablecoins</span>. Up to 50,000 TPS, $0.00025 fees. All crypto benefits, zero volatility.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Privacy */}
                <div className="glass p-10 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
                  <h4 className="text-2xl font-bold mb-4 font-sansation text-white">Anonymous</h4>
                  <p className="text-foreground/60 font-sansation text-lg leading-relaxed">
                    Arcium&apos;s multi-party computation makes your transactions untraceable.
                  </p>
                </div>

                {/* Compliant */}
                <div className="glass p-10 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
                  <h4 className="text-2xl font-bold mb-4 font-sansation text-white">Compliant</h4>
                  <p className="text-foreground/60 font-sansation text-lg leading-relaxed">
                    Grid API for KYC/AML, SEPA transfers, and virtual cards.
                  </p>
                </div>

                {/* Simple */}
                <div className="glass p-10 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
                  <h4 className="text-2xl font-bold mb-4 font-sansation text-white">Simple</h4>
                  <p className="text-foreground/60 font-sansation text-lg leading-relaxed">
                    One account, two wallets. Switch between privacy and compliance instantly.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold mb-8 font-sansation text-white">
                  Ready for true financial privacy ?
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSee5W7Yfdqm3IadAcqXPeGy5MVyGAt1sLptFh2HzbIEcNYrBg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black px-10 py-5 text-xl font-bold relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 font-sansation rounded-xl group"
                >
                  <span className="relative z-10">
                    Join Waitlist
                  </span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-6 relative" style={{ pointerEvents: 'auto' }}>
        <div className="max-w-2xl mx-auto w-full">
          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sansation">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-xl mx-auto font-sansation leading-relaxed">
                We&apos;re open to <span className="text-white font-medium">partnerships, collaborations, suggestions,</span> and any questions you might have.
              </p>
            </div>

            {/* Contact Form */}
            <div className="glass backdrop-blur-sm rounded-2xl p-8 mb-8">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name') as string;
                const request = formData.get('request') as string;

                const message = `Hi! I'm ${name}.\n\nMessage: ${request}`;
                const telegramUrl = `https://t.me/CECOR84?text=${encodeURIComponent(message)}`;
                window.open(telegramUrl, '_blank');
              }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2 font-sansation">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-300 text-foreground placeholder-foreground/50 font-sansation"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="request" className="block text-sm font-medium text-foreground/80 mb-2 font-sansation">
                    Message *
                  </label>
                  <textarea
                    id="request"
                    name="request"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-300 text-foreground placeholder-foreground/50 resize-none font-sansation"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black py-4 text-lg font-bold relative group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/20 font-sansation"
                >
                  <span className="relative z-10">
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://x.com/stealf_finance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                aria-label="Follow us on X"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/60 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="https://t.me/+1KiIlJTX5WIzMmM0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                aria-label="Join our Telegram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/60 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>

              <a
                href="https://medium.com/@stealf.fi/stealf-stable-coin-based-neo-bank-with-arcium-52fc14b814cb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                aria-label="Read our Medium"
              >
                <Image
                  src="/medium-logo.png"
                  alt="Medium"
                  width={24}
                  height={24}
                  className="invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>

              <a
                href="https://stealf-1.gitbook.io/stealf-docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                aria-label="Read our Documentation"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/60 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"/>
                </svg>
              </a>

              <a
                href="https://discord.gg/aTYpk5sA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                aria-label="Join our Discord"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/60 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

        <div style={{ pointerEvents: 'auto' }}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
