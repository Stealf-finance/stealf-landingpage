"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import AnimatedGenerateButton from "@/components/ui/button"

export function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100)
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const centerItems: { name: string; href: string; external?: boolean }[] = [
    { name: "PRODUCT", href: "#fonctionalities" },
    { name: "ARCHITECTURE", href: "#architecture" },
    { name: "FAQ", href: "#faq" },
  ]

  const rightItems: { name: string; href: string; external?: boolean }[] = [
    { name: "DOCS", href: "https://stealf-1.gitbook.io/stealf-docs/", external: true },
    { name: "CONTACT", href: "#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1) // Remove the # from href
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }


  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled
        ? "bg-black/80 backdrop-blur-md"
        : "bg-transparent"
    } ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="max-w-7xl mx-auto w-full px-6 py-2">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-transparent.png"
              alt="Stealf Logo"
              width={40}
              height={40}
              className="w-auto h-12"
            />
            <div className="text-white font-bold text-2xl tracking-tight font-sansation">
              STEALF
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
            {centerItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-white hover:text-white/80 transition-colors duration-200 py-2 font-medium font-sansation cursor-pointer px-3 text-sm"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="relative z-10">{item.name}</span>
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 ${
                    hoveredItem === item.name ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Right side: Docs, Contact + CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            {rightItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={item.external ? undefined : (e) => handleNavClick(e, item.href)}
                className="relative text-white hover:text-white/80 transition-colors duration-200 py-2 font-medium font-sansation cursor-pointer text-sm"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="relative z-10">{item.name}</span>
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 ${
                    hoveredItem === item.name ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
            <AnimatedGenerateButton
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSee5W7Yfdqm3IadAcqXPeGy5MVyGAt1sLptFh2HzbIEcNYrBg/viewform?usp=dialog', '_blank')}
              labelIdle="Join Waitlist"
              labelActive="Opening..."
              highlightHueDeg={180}
            />
          </div>

          {/* Mobile menu button - Right aligned */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu - Using Portal */}
      {mounted && mobileMenuOpen && createPortal(
        <div className="md:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-md border-t border-white/10 p-6 space-y-4 z-[99]">
          {[...centerItems, ...rightItems].map((item) => (
            <a
              key={item.name}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={item.external ? () => setMobileMenuOpen(false) : (e) => handleNavClick(e, item.href)}
              className="block text-white hover:text-white/80 transition-colors duration-200 py-3 font-medium font-sansation cursor-pointer text-lg"
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4">
            <AnimatedGenerateButton
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSee5W7Yfdqm3IadAcqXPeGy5MVyGAt1sLptFh2HzbIEcNYrBg/viewform?usp=dialog', '_blank')}
              labelIdle="Join Waitlist"
              labelActive="Opening..."
              highlightHueDeg={180}
            />
          </div>
        </div>,
        document.body
      )}
    </nav>
  )
}
