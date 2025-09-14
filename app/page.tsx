"use client"

import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/ui/footer"

export function KeroHero() {
  return (
    <main id="about" className="h-[80vh] flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Logo with glow effect */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center relative shadow-2xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl scale-110"></div>
            <div className="relative z-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance font-sansation">
          Bank Freely. Pay <br className="hidden md:block" />
          Instantly. <span className="text-foreground/80 italic">With Kero.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl text-pretty font-sansation">
          The bank for those who want to have keys
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold relative group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 font-sansation"
        >
          <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
            Join Us
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {/* Enhanced glow effects */}
          <div className="absolute inset-0 bg-primary/50 rounded-lg blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          {/* Pulse effect on hover */}
          <div className="absolute inset-0 bg-primary/30 rounded-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <Navbar />
      <KeroHero />

      {/* Social Media Icons - Bottom of first page */}
      <div className="py-16 px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6">
            {/* X (Twitter) */}
            <a href="#" className="group text-foreground/60 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <div className="p-3 rounded-full bg-card/30 border border-border/30 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:rotate-3">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </a>

            {/* Telegram */}
            <a href="#" className="group text-foreground/60 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <div className="p-3 rounded-full bg-card/30 border border-border/30 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:rotate-3">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="#" className="group text-foreground/60 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <div className="p-3 rounded-full bg-card/30 border border-border/30 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:rotate-3">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>

            {/* Discord */}
            <a href="#" className="group text-foreground/60 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <div className="p-3 rounded-full bg-card/30 border border-border/30 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:rotate-3">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
            </a>

            {/* GitHub */}
            <a href="#" className="group text-foreground/60 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <div className="p-3 rounded-full bg-card/30 border border-border/30 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:rotate-3">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </a>

            {/* Medium */}
            <a href="#" className="group text-foreground/60 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <div className="p-3 rounded-full bg-card/30 border border-border/30 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:rotate-3">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Scroll Down Arrow */}
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

      {/* How It Works Section */}
      <section id="fonctionalities" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sansation">
              How it <span className="text-primary">works</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-sansation">
              A revolutionary neo-bank that makes you invisible on the blockchain
              while keeping full control of your finances
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Privacy First */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 relative group hover:bg-card/70 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.97 17.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C17.97 3 21 7.03 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-sansation">Total Privacy</h3>
              <p className="text-foreground/70 font-sansation">
                Thanks to Arcium protocol, your transactions, balances and data remain completely confidential.
                No one can trace your financial activities.
              </p>
            </div>

            {/* Banking Infrastructure */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 relative group hover:bg-card/70 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-sansation">Grid Infrastructure</h3>
              <p className="text-foreground/70 font-sansation">
                Powered by Squads Grid API, offering global stablecoin accounts,
                virtual cards, and real-time payments without traditional banking dependencies.
              </p>
            </div>

            {/* User Control */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 relative group hover:bg-card/70 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7A5 5 0 0 1 17 7V11" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-sansation">Your Keys, Your Bank</h3>
              <p className="text-foreground/70 font-sansation">
                You keep total control. No traditional bank can freeze your funds.
                It's your bank, with your rules.
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-r from-card/30 to-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-sansation">
                Revolutionary <span className="text-primary">Technology</span>
              </h3>
              <p className="text-foreground/70 max-w-2xl mx-auto font-sansation">
                Cutting-edge technology stack that redefines digital banking
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 font-sansation">Arcium Protocol</h4>
                    <p className="text-foreground/70 font-sansation">
                      Secure Multi-Party Computation (MPC) enabling processing of fully encrypted data.
                      Your information stays private even during transactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="currentColor" strokeWidth="2"/>
                      <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" strokeWidth="2"/>
                      <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 font-sansation">Grid API by Squads</h4>
                    <p className="text-foreground/70 font-sansation">
                      Modular banking infrastructure on stablecoin rails. Global USD accounts,
                      virtual cards, and borderless payments without traditional banks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold font-sansation mb-2">Zero-Knowledge Banking</h4>
                    <p className="text-sm text-foreground/70 font-sansation">
                      The future of private finance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kero vs Others Comparison */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-sansation">
                Kero vs <span className="text-foreground/60">Traditional Solutions</span>
              </h3>
              <p className="text-foreground/70 max-w-2xl mx-auto font-sansation">
                Discover why Kero revolutionizes the banking experience
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Traditional Banks */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-red-500">
                    <path d="M3 21L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 21V7L13 2L21 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-4 font-sansation">Traditional Banks</h4>
                <ul className="text-sm text-foreground/70 space-y-2 font-sansation">
                  <li>• Control your funds</li>
                  <li>• Traceable transactions</li>
                  <li>• High fees</li>
                  <li>• Complex account opening</li>
                  <li>• Data sharing</li>
                </ul>
              </div>

              {/* Kast/Other Crypto */}
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-yellow-500">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-4 font-sansation">Crypto Wallets</h4>
                <ul className="text-sm text-foreground/70 space-y-2 font-sansation">
                  <li>• Your keys, your funds</li>
                  <li>• Public transactions</li>
                  <li>• Variable blockchain fees</li>
                  <li>• Complex interface</li>
                  <li>• Total transparency</li>
                </ul>
              </div>

              {/* Kero */}
              <div className="text-center border-2 border-primary/30 rounded-2xl p-6 bg-primary/5">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-4 font-sansation text-primary">Kero</h4>
                <ul className="text-sm text-foreground/90 space-y-2 font-sansation">
                  <li>• Your keys, your funds ✓</li>
                  <li>• Private transactions ✓</li>
                  <li>• Optimized fees ✓</li>
                  <li>• Simple interface ✓</li>
                  <li>• Total confidentiality ✓</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.97 17.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C17.97 3 21 7.03 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="font-semibold text-primary font-sansation">
                  Finally invisible on the blockchain
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Background gradient effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sansation">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-sansation">
                Ready to experience the future of private banking? Join our community and be part of the revolution.
              </p>
            </div>

            {/* Main CTA Section */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-3xl p-12 mb-16 text-center relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>

              <div className="relative z-10">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-110 animate-pulse"></div>
                  <div className="relative z-10">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M20 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-sansation">Join the Revolution</h3>
                <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto font-sansation">
                  Be among the first to experience truly private banking. Join our waitlist and get exclusive early access to Kero.
                </p>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl font-bold relative group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 font-sansation mb-6"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Join Waitlist
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-primary/50 rounded-lg blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </Button>

                <p className="text-sm text-foreground/50 font-sansation">
                  No spam, just updates on our launch progress and exclusive insights
                </p>
              </div>
            </div>

            {/* Social Media and Community */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Community Section */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M23 21V19C23 18.1636 22.5259 17.3679 21.7259 16.8482" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55332C18.7122 5.25592 18.9974 6.11872 18.9974 7.005C18.9974 7.89128 18.7122 8.75408 18.1676 9.45668C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-sansation">Join Our Community</h3>
                  <p className="text-foreground/70 font-sansation">Connect with us and stay updated on our journey to revolutionize private banking</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Primary Social Links */}
                  <a href="#" className="group bg-background/50 border border-border/50 rounded-xl p-4 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold font-sansation">Twitter</div>
                        <div className="text-sm text-foreground/60 font-sansation">Follow updates</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="group bg-background/50 border border-border/50 rounded-xl p-4 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold font-sansation">Telegram</div>
                        <div className="text-sm text-foreground/60 font-sansation">Join discussion</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="group bg-background/50 border border-border/50 rounded-xl p-4 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold font-sansation">Discord</div>
                        <div className="text-sm text-foreground/60 font-sansation">Chat with us</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="group bg-background/50 border border-border/50 rounded-xl p-4 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold font-sansation">LinkedIn</div>
                        <div className="text-sm text-foreground/60 font-sansation">Professional updates</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-sansation">Contactez-nous</h3>
                  <p className="text-foreground/70 font-sansation">Envoyez-nous votre demande et nous vous recontacterons rapidement</p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2 font-sansation">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-foreground placeholder-foreground/50 font-sansation"
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  <div>
                    <label htmlFor="telegram" className="block text-sm font-medium text-foreground/80 mb-2 font-sansation">
                      Pseudo Telegram *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="telegram"
                        name="telegram"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-foreground placeholder-foreground/50 font-sansation"
                        placeholder="@votre_pseudo"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="request" className="block text-sm font-medium text-foreground/80 mb-2 font-sansation">
                      Votre requête *
                    </label>
                    <textarea
                      id="request"
                      name="request"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-foreground placeholder-foreground/50 resize-none font-sansation"
                      placeholder="Décrivez votre demande ou votre question..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold relative group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25 font-sansation"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Envoyer le message
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-primary/50 rounded-lg blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
