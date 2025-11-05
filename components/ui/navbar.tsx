"use client"

import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "#about" },
    { name: "FUNCTIONALITIES", href: "#fonctionalities" },
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

  const isActive = () => {
    // For anchor links, we'll handle active state differently
    // You could implement intersection observer here for better UX
    return false
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-white font-bold text-xl tracking-tight font-sansation">
              STEALF
            </div>
          </Link>

          {/* Navigation Links - Centered (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 font-medium font-sansation cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className={`relative z-10 ${isActive() ? "text-white" : ""}`}>{item.name}</span>
                {/* Hover underline */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 ${
                    hoveredItem === item.name ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
                {/* Active state underline */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 ${
                    isActive() ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDa0_45HbCjaTfllmbQmBN2jSC_zuHTwDpVxqunSv8MglLXQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-transparent border border-gray-600 text-white px-6 py-2.5 rounded-full hover:border-gray-400 transition-all duration-300 overflow-hidden font-medium font-sansation cursor-pointer"
              onMouseEnter={() => setHoveredItem("cta")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="relative z-10">JOIN WAITLIST</span>
              {/* Animated background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-700/30 transition-all duration-300 ${
                  hoveredItem === "cta" ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
              {/* Subtle border glow */}
              <div
                className={`absolute inset-0 rounded-full border border-gray-400/50 transition-all duration-300 ${
                  hoveredItem === "cta" ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 font-medium font-sansation cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDa0_45HbCjaTfllmbQmBN2jSC_zuHTwDpVxqunSv8MglLXQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-transparent border border-gray-600 text-white px-6 py-2.5 rounded-full hover:border-gray-400 transition-all duration-300 font-medium font-sansation mt-4"
            >
              JOIN WAITLIST
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
