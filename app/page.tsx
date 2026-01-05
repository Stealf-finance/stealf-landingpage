"use client"

import { Navbar } from "@/components/ui/navbar"
import AnimatedGenerateButton from "@/components/ui/button"
import { Footer } from "@/components/ui/footer"
import { EtherealBeamsBackground } from "@/components/ui/ethereal-beams-background"
import { Features } from "@/components/ui/features"
import { CallToAction } from "@/components/ui/cta-3"
import { FAQ1 } from "@/components/ui/faq-monochrome"
import Image from "next/image"

export function StealfHero() {
  return (
    <main id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Content - Grid layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">

        {/* Left side - Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
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
        <div className="flex items-center justify-center lg:justify-start">
          <div className="transform scale-125 lg:ml-4">
            <AnimatedGenerateButton
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSee5W7Yfdqm3IadAcqXPeGy5MVyGAt1sLptFh2HzbIEcNYrBg/viewform?usp=dialog', '_blank')}
              labelIdle="Join Waitlist"
              labelActive="Opening..."
              highlightHueDeg={180}
            />
          </div>
        </div>
        </div>

        {/* Right side - Phone mockup image */}
        <div className="relative flex flex-col items-center justify-center lg:justify-end gap-8">
          <div className="relative w-full max-w-3xl">
            <Image
              src="/screen.png"
              alt="Stealf App Mockup - Cash and Privacy Wallets"
              width={1200}
              height={1200}
              className="w-full h-auto drop-shadow-2xl"
              style={{ mixBlendMode: 'lighten' }}
              priority
            />
          </div>

          {/* Social Links - Below image on mobile, hidden on desktop */}
          <div className="lg:hidden relative group">
            <div className="flex items-center justify-center gap-3">
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
          </div>
        </div>

      </div>
    </main>
  )
}

export default function Home() {
  return (
    <div className="bg-background relative min-h-screen">
      {/* Global Beams Background */}
      <EtherealBeamsBackground />

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
              Two wallets, one account. Experience both <span className="text-white font-medium">complete privacy</span> and <span className="text-white font-medium">full compliance.</span>
            </p>
          </div>

          {/* App Screenshots */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 max-w-7xl mx-auto">
            {/* Grid Wallet - Public/Compliant */}
            <div className="relative flex flex-col items-center">
              <Image
                src="/screen3.png"
                alt="Stealf Grid Wallet - Compliant Banking"
                width={500}
                height={500}
                className="w-full h-auto drop-shadow-2xl rounded-2xl mb-6"
                style={{ mixBlendMode: 'lighten' }}
              />
              <div className="p-6 rounded-2xl w-full text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h4 className="text-xl font-bold font-sansation text-white">SPEND</h4>
                  <Image
                    src="/spend.png"
                    alt="Spend icon"
                    width={48}
                    height={48}
                    className="w-10 h-8"
                  />
                </div>
                <ul className="space-y-2 text-foreground/70 font-sansation text-base">
                  <li>Use it like a traditional neobank.</li>
                  <li>Pay in USDC with full compliance.</li>
                </ul>
              </div>
            </div>

            {/* Private Wallet - Anonymous */}
            <div className="relative flex flex-col items-center">
              <Image
                src="/screen4.png"
                alt="Stealf Private Wallet - Anonymous Banking"
                width={500}
                height={500}
                className="w-full h-auto drop-shadow-2xl rounded-2xl mb-6"
                style={{ mixBlendMode: 'lighten' }}
              />
              <div className="p-6 rounded-2xl w-full text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h4 className="text-xl font-bold font-sansation text-white">CHOOSE YOUR MODE</h4>
                  <Image
                    src="/mode.png"
                    alt="Mode icon"
                    width={48}
                    height={48}
                    className="w-10 h-8"
                  />
                </div>
                <ul className="space-y-2 text-foreground/70 font-sansation text-base">
                  <li>The transfers between these two wallets are end-to-end encrypted.</li>
                  <li>No one can link your wallets together.</li>
                </ul>
              </div>
            </div>

            {/* Third Screenshot */}
            <div className="relative flex flex-col items-center">
              <Image
                src="/screen5.png"
                alt="Stealf Screen 5"
                width={500}
                height={500}
                className="w-full h-auto drop-shadow-2xl rounded-2xl mb-6"
                style={{ mixBlendMode: 'lighten' }}
              />
              <div className="p-6 rounded-2xl w-full text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h4 className="text-xl font-bold font-sansation text-white">BE STEALTH</h4>
                  <Image
                    src="/frog.png"
                    alt="Frog icon"
                    width={48}
                    height={48}
                    className="w-10 h-8"
                  />
                </div>
                <ul className="space-y-2 text-foreground/70 font-sansation text-base">
                  <li>The private wallet is built for complete privacy. Powered by Arcium, all your activity is fully encrypted.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Call to Action Section */}
      <section className="py-16 md:py-32 px-6" style={{ pointerEvents: 'auto' }}>
        <CallToAction />
      </section>

      {/* FAQ Section */}
      <div style={{ pointerEvents: 'auto' }}>
        <FAQ1 />
      </div>

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

                <AnimatedGenerateButton
                  type="submit"
                  labelIdle="Send"
                  labelActive="Sending..."
                  className="w-full"
                />
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
