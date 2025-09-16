import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-border/20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-card rounded-xl flex items-center justify-center p-1">
                <Image
                  src="/logo-transparent.png"
                  alt="Stealf Logo"
                  width={200}
                  height={100}
                  className="w-auto h-full"
                />
              </div>
              <span className="text-2xl font-bold font-sansation">Stealf</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md font-sansation">
              The neo-bank that makes you invisible on the blockchain while keeping full control of your finances.
            </p>
            <div className="flex gap-4">
              {/* Social Links */}
              <a href="https://x.com/stealf_finance" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-white transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}