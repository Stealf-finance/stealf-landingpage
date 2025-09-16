"use client"

import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/ui/footer"
import { DotScreenShader } from "@/components/ui/background"
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
              Bank Freely.
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Pay Instantly.
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
          The revolutionary neo-bank that puts <span className="text-white font-medium">privacy first</span> while keeping you in complete control of your digital assets
        </p>

        {/* Premium CTA Button */}
        <div className="relative group">
          <a
            href="https://x.com/stealf_finance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black px-8 py-4 text-lg font-bold relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 font-sansation rounded-xl border border-white/20"
          >
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300">
              Join the Revolution
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </span>
            {/* Layered glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/60 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </a>

          {/* Floating action indicator */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 text-xs font-sansation animate-bounce">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
              Follow us on X
              <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
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
      <DotScreenShader />

      {/* Global overlay for better readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none z-10"></div>

      <div className="relative z-20" style={{ pointerEvents: 'auto' }}>
        <Navbar />
        <StealfHero />

        {/* Scroll section - Minimized */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
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

      {/* How It Works Section */}
      <section id="fonctionalities" className="min-h-screen flex items-center py-20 px-6 relative">
        <div className="max-w-7xl mx-auto relative w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-medium font-sansation text-sm uppercase tracking-wider">How it Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sansation leading-tight">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Banking
              </span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto font-sansation font-light leading-relaxed">
              Experience the future of <span className="text-white font-medium">private finance</span> with cutting-edge technology that keeps you invisible on the blockchain
            </p>
          </div>

          {/* Enhanced Key Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Privacy First */}
            <div className="card-modern group hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 p-10 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.97 17.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C17.97 3 21 7.03 21 12Z" stroke="currentColor" strokeWidth="2.5"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 font-sansation group-hover:text-primary transition-colors duration-300">Total Privacy</h3>
                <p className="text-foreground/60 font-sansation text-lg leading-relaxed">
                  Powered by <span className="text-primary font-medium">Arcium protocol</span>, your transactions and balances remain completely confidential. Experience true financial privacy.
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Banking Infrastructure */}
            <div className="card-modern group hover:scale-105 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 p-10 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <rect x="3" y="4" width="18" height="18" rx="3" ry="3" stroke="currentColor" strokeWidth="2.5"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2.5"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2.5"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2.5"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 font-sansation group-hover:text-accent transition-colors duration-300">Modern Infrastructure</h3>
                <p className="text-foreground/60 font-sansation text-lg leading-relaxed">
                  Built on <span className="text-accent font-medium">Squads Grid API</span>, offering global stablecoin accounts and virtual cards without traditional banking limitations.
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* User Control */}
            <div className="card-modern group hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 p-10 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <rect x="3" y="11" width="18" height="11" rx="3" ry="3" stroke="currentColor" strokeWidth="2.5"/>
                    <path d="M7 11V7A5 5 0 0 1 17 7V11" stroke="currentColor" strokeWidth="2.5"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 font-sansation group-hover:text-white transition-colors duration-300">Complete Control</h3>
                <p className="text-foreground/60 font-sansation text-lg leading-relaxed">
                  <span className="text-white font-medium">Your keys, your rules.</span> No traditional bank can freeze or control your funds. True financial sovereignty.
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -left-2 w-5 h-5 bg-white/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Technology Stack - Enhanced Design */}
          <div className="relative overflow-hidden mb-16">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl"></div>

            <div className="glass p-8 rounded-3xl relative">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full px-6 py-2 mb-6">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                  <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-bold font-sansation text-sm uppercase tracking-wider">Powered By</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4 font-sansation">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Next-Gen
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Technology
                  </span>
                </h3>
                <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-sansation font-light leading-relaxed">
                  Built on revolutionary protocols that redefine what's possible in digital banking
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                {/* Technology Features */}
                <div className="space-y-10">
                  <div className="group p-8 glass rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center flex-shrink-0 p-3 group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src="/arcium.png"
                          alt="Arcium Logo"
                          width={100}
                          height={100}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold mb-4 font-sansation group-hover:text-primary transition-colors duration-300">Arcium Protocol</h4>
                        <p className="text-foreground/60 font-sansation text-lg leading-relaxed">
                          Advanced <span className="text-primary font-medium">Multi-Party Computation</span> ensures your data remains encrypted even during processing. Revolutionary privacy technology.
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-primary/70">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm font-sansation">Zero-Knowledge Proofs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group p-8 glass rounded-2xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center flex-shrink-0 p-3 group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src="/squads.png"
                          alt="Squads Logo"
                          width={100}
                          height={100}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold mb-4 font-sansation group-hover:text-accent transition-colors duration-300">Grid API by Squads</h4>
                        <p className="text-foreground/60 font-sansation text-lg leading-relaxed">
                          Enterprise-grade <span className="text-accent font-medium">banking infrastructure</span> on stablecoin rails. Global accounts, virtual cards, instant settlements.
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-accent/70">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm font-sansation">Real-time Settlements</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Showcase */}
                <div className="relative">
                  {/* Enhanced card container */}
                  <div className="relative group">
                    <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse"></div>

                      <div className="relative z-10">
                        {/* Card with enhanced effects */}
                        <div className="mb-8 relative group-hover:scale-105 transition-all duration-700">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-2xl scale-110 opacity-60"></div>
                          <Image
                            src="/stealf-card.png"
                            alt="Stealf Card"
                            width={400}
                            height={240}
                            className="relative z-10 w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                          />
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-2xl md:text-3xl font-bold font-sansation bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Zero-Knowledge Banking
                          </h4>
                          <p className="text-foreground/60 font-sansation text-lg">
                            The future of <span className="text-primary font-medium">private finance</span>
                          </p>

                          {/* Feature indicators */}
                          <div className="flex justify-center gap-4 mt-8">
                            <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <span className="text-primary text-sm font-sansation font-medium">Private</span>
                            </div>
                            <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
                              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                              <span className="text-accent text-sm font-sansation font-medium">Instant</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-float"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full blur-sm animate-float" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Comparison Section */}
          <div className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 rounded-3xl"></div>

            <div className="glass p-8 rounded-3xl relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-primary/10 border border-primary/20 rounded-full px-8 py-3 mb-8">
                  <span className="text-foreground/80 font-bold font-sansation text-sm uppercase tracking-wider">The Comparison</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 font-sansation leading-tight">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Why Choose
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Stealf?
                  </span>
                </h3>
                <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-sansation font-light leading-relaxed">
                  See how Stealf revolutionizes banking compared to traditional solutions
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Traditional Banks */}
                <div className="card-modern p-10 text-center group hover:scale-105 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M3 21L21 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M5 21V7L13 2L21 7V21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 9V13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M15 9V13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-6 font-sansation text-red-400">Traditional Banks</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-foreground/60">
                        <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                        <span className="font-sansation">Control your funds</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                        <span className="font-sansation">Traceable transactions</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                        <span className="font-sansation">High fees</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                        <span className="font-sansation">Complex processes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Crypto Wallets */}
                <div className="card-modern p-10 text-center group hover:scale-105 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-6 font-sansation text-yellow-400">Crypto Wallets</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-foreground/60">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                        <span className="font-sansation">Your keys, your funds</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                        <span className="font-sansation">Public transactions</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                        <span className="font-sansation">Variable fees</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                        <span className="font-sansation">Complex interface</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stealf - Enhanced Winner Card */}
                <div className="relative group">
                  {/* Winner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl scale-110 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="card-modern p-10 text-center border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-accent/5 relative overflow-hidden hover:scale-105 transition-all duration-500">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12 animate-pulse"></div>

                    <div className="relative z-10">
                      <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-8 p-4 group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src="/logo-transparent.png"
                          alt="Stealf Logo"
                          width={200}
                          height={100}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Winner badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent rounded-full px-4 py-2 mb-6">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-black">
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-black font-bold font-sansation text-sm">WINNER</span>
                      </div>

                      <h4 className="text-2xl font-bold mb-6 font-sansation bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stealf</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-foreground/90">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></div>
                          <span className="font-sansation font-medium">Your keys, your funds ✓</span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground/90">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></div>
                          <span className="font-sansation font-medium">Private transactions ✓</span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground/90">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></div>
                          <span className="font-sansation font-medium">Optimized fees ✓</span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground/90">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></div>
                          <span className="font-sansation font-medium">Simple interface ✓</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/40 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/40 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA */}
              <div className="text-center">
                <div className="inline-flex items-center gap-4 glass border border-primary/30 rounded-full px-10 py-6 group hover:scale-105 transition-all duration-500">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-sansation">
                    Finally invisible on the blockchain
                  </span>
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-6 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative">
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
                  Be among the first to experience truly private banking. Follow us on Twitter for exclusive updates and early access to Stealf.
                </p>

                <a
                  href="https://x.com/stealf_finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl font-bold relative group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 font-sansation mb-6 rounded-lg"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Follow us on
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="transition-transform duration-300 group-hover:scale-110"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-primary/50 rounded-lg blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </a>

                <p className="text-sm text-foreground/50 font-sansation">
                  No spam, just updates on our launch progress and exclusive insights
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex justify-center">
              {/* Contact Form */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-md">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-sansation">Contact Us</h3>
                  <p className="text-foreground/70 font-sansation">Send us your request and we'll get back to you quickly</p>
                </div>

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
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-foreground placeholder-foreground/50 font-sansation"
                      placeholder="Your full name"
                    />
                  </div>


                  <div>
                    <label htmlFor="request" className="block text-sm font-medium text-foreground/80 mb-2 font-sansation">
                      Your Request *
                    </label>
                    <textarea
                      id="request"
                      name="request"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-foreground placeholder-foreground/50 resize-none font-sansation"
                      placeholder="Describe your request or question..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold relative group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25 font-sansation"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send via Telegram
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-transform duration-300 group-hover:scale-110"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
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
    </div>
  )
}
