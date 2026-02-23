"use client"

import { Navbar } from "@/components/ui/navbar"
import AnimatedGenerateButton from "@/components/ui/button"
import { Footer } from "@/components/ui/footer"
import { Features } from "@/components/ui/features"
import { CallToAction } from "@/components/ui/cta-3"
import { FAQ1 } from "@/components/ui/faq-monochrome"
import Image from "next/image"
import { motion } from "framer-motion"

export function StealfHero() {
  return (
    <main id="about" className="h-screen flex items-center justify-center px-6 relative snap-start shrink-0">
      {/* Content - Grid layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto w-full">

        {/* Left side - Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
        {/* Main heading with improved typography */}
        <motion.div
          className="mb-6 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-balance font-sansation leading-[1.05] tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Your money,
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Your rules.
            </span>
            <br />
          </h1>
        </motion.div>

        {/* Enhanced subtitle */}
        <motion.p
          className="text-lg md:text-xl text-foreground/60 mb-8 max-w-2xl text-pretty font-sansation font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Compliant banking infrastructure with private on-chain capital allocation.
        </motion.p>

        {/* Premium CTA Button */}
        <motion.div
          className="flex items-center justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="transform scale-125 lg:ml-4">
            <AnimatedGenerateButton
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSee5W7Yfdqm3IadAcqXPeGy5MVyGAt1sLptFh2HzbIEcNYrBg/viewform?usp=dialog', '_blank')}
              labelIdle="Join Waitlist"
              labelActive="Opening..."
              highlightHueDeg={180}
            />
          </div>
        </motion.div>
        </div>

        {/* Right side - Phone mockup image */}
        <motion.div
          className="relative flex flex-col items-center justify-center lg:justify-end gap-8 mt-12 lg:mt-0 lg:translate-x-16"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-none">
            <Image
              src="/screen.png"
              alt="Stealf App Mockup - Cash and Privacy Wallets"
              width={1200}
              height={1200}
              className="w-full h-auto"
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
                href="https://discord.gg/7w2TFCm6Ft"
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
        </motion.div>

      </div>
    </main>
  )
}

export default function Home() {
  return (
    <div id="scroll-container" className="bg-black relative h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <StealfHero />

      {/* How It Works Section */}
      <section id="fonctionalities" className="h-screen flex items-center px-6 relative snap-start shrink-0">
        <div className="max-w-7xl mx-auto relative w-full">
          {/* Section Header */}
          <motion.div
            className="text-left mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sansation leading-tight">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Capital without exposure
              </span>
            </h2>
          </motion.div>

          {/* App Screenshots */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mb-16 max-w-7xl mx-auto">
            {/* Grid Wallet - Public/Compliant */}
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/spend.png"
                alt="Stealf Grid Wallet - Compliant Banking"
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl mb-6"
                style={{ mixBlendMode: 'lighten' }}
              />
              <div className="p-6 rounded-2xl w-full text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h4 className="text-xl font-bold font-sansation text-white">SPEND</h4>
                </div>
                <ul className="space-y-2 text-foreground/70 font-sansation text-base">
                  <li>Compliant. Seamless. Global.</li>
                  <li>Pay with your Stealf card.</li>
                  <li>Transfer instantly.</li>
                  <li>Fully regulated infrastructure.</li>
                </ul>
              </div>
            </motion.div>

            {/* Private Wallet - Anonymous */}
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <Image
                src="/moove.png"
                alt="Stealf Private Wallet - Anonymous Banking"
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl mb-6"
                style={{ mixBlendMode: 'lighten' }}
              />
              <div className="p-6 rounded-2xl w-full text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h4 className="text-xl font-bold font-sansation text-white">MOOVE</h4>
                </div>
                <ul className="space-y-2 text-foreground/70 font-sansation text-base">
                  <li>Encrypted capital flows. </li>
                      <li>Internal transfers between your daily wallet
                      and your private wallet are encrypted.</li>
                  <li>No public trace.</li>
                  <li>No visible linkage.</li>
                </ul>
              </div>
            </motion.div>

            {/* Third Screenshot */}
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <Image
                src="/own.png"
                alt="Stealf Screen 5"
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl mb-6"
                style={{ mixBlendMode: 'lighten' }}
              />
              <div className="p-6 rounded-2xl w-full text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h4 className="text-xl font-bold font-sansation text-white">OWN</h4>
                </div>
                <ul className="space-y-2 text-foreground/70 font-sansation text-base">
                  <li>Your capital. Your activity. Encrypted.</li>
                  <li>Invest. Allocate. Rebalance.</li>
                  <li>Without exposing your on-chain footprint.</li>
                  <li>24/7.</li>
                  <li>Ownership by design.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section id="architecture" className="h-screen flex items-center px-6 snap-start shrink-0">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">

          {/* Header */}
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sansation leading-tight">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                A Dual-Layer Financial
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Architecture
              </span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto font-sansation font-light leading-relaxed">
              Compliance and Privacy, Architected Separately.
            </p>
          </motion.div>

          {/* Diagram */}
          <motion.div
            className="w-full flex flex-col items-center relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >

            {/* Top Card - Compliant Banking */}
            <div className="w-full relative z-10 bg-neutral-900/30 border border-neutral-800 rounded-xl p-8 md:p-12 flex flex-col items-center text-center hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-300 group">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400 mb-6 group-hover:text-white transition-colors duration-300">
                <path d="M3 21h18M3 7v14M21 7v14M6 21V10M10 21V10M14 21V10M18 21V10M12 3L2 7h20L12 3z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-medium tracking-tight text-white mb-3 font-sansation">Compliant Banking Wallet</h3>
              <p className="text-lg text-neutral-400 max-w-lg font-sansation">
                Regulated fiat on/off ramps and traditional asset custody.
              </p>
            </div>

            {/* Connector */}
            <div className="w-full h-20 md:h-24 flex items-center justify-center relative group">
              <div className="absolute top-0 bottom-0 w-[1px] bg-neutral-800 left-1/2 -translate-x-1/2 group-hover:bg-neutral-600 transition-colors duration-300"></div>
              <div className="relative z-10 border border-neutral-800 bg-black px-6 py-2.5 rounded-sm group-hover:border-neutral-600 transition-colors duration-300">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium group-hover:text-neutral-300 transition-colors duration-300 font-sansation">Encrypted Transfer Layer</span>
              </div>
            </div>

            {/* Bottom Card - Private Capital */}
            <div className="w-full relative z-10 bg-neutral-900/30 border border-neutral-800 rounded-xl p-8 md:p-12 flex flex-col items-center text-center hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-300 group">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400 mb-6 group-hover:text-white transition-colors duration-300">
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14v2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-medium tracking-tight text-white mb-3 font-sansation">Private Capital Wallet</h3>
              <p className="text-lg text-neutral-400 max-w-lg font-sansation">
                Self-sovereign on-chain execution and decentralized asset management.
              </p>
            </div>

          </motion.div>

          {/* Three Principles */}
          <motion.div
            className="mt-16 md:mt-24 w-full text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-lg font-medium text-white mb-6 md:mb-8 font-sansation">Three principles:</h3>
            <ul className="flex flex-col md:flex-row justify-between gap-6 w-full border-t border-neutral-800/50 pt-8">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 block"></span>
                <span className="text-lg text-neutral-400 font-sansation">Regulatory integrity</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 block"></span>
                <span className="text-lg text-neutral-400 font-sansation">Encrypted capital mobility</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 block"></span>
                <span className="text-lg text-neutral-400 font-sansation">Ownership by design</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* Features Section */}
      <div className="h-screen flex items-center snap-start shrink-0 w-full">
        <Features />
      </div>

      {/* Call to Action Section */}
      <section className="h-screen flex items-center px-6 snap-start shrink-0">
        <CallToAction />
      </section>

      {/* FAQ Section */}
      <div id="faq" className="h-screen flex items-center snap-start shrink-0">
        <FAQ1 />
      </div>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex flex-col justify-center px-6 relative snap-start shrink-0">
        <div className="max-w-2xl mx-auto w-full flex-1 flex items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
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
                const telegramUrl = `https://t.me/CECOR2B?text=${encodeURIComponent(message)}`;
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
          </motion.div>
        </div>
        <div className="w-full shrink-0">
          <Footer />
        </div>
      </section>
    </div>
  )
}
