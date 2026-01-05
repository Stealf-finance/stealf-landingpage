"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

export function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled
        ? "bg-black/80 backdrop-blur-md"
        : "bg-transparent"
    }`}>
      <div className="w-full pl-6 pr-6 py-4">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 md:ml-12">
            <Image
              src="/logo-transparent.png"
              alt="Stealf Logo"
              width={40}
              height={40}
              className="w-auto h-20"
            />
            <div className="text-white font-bold text-2xl tracking-tight font-sansation">
              STEALF
            </div>
          </Link>

          {/* Navigation Links - Right aligned (Desktop) */}
          <div className="hidden md:flex items-center space-x-6 ml-auto mr-12">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-gray-300 hover:text-white transition-colors duration-200 py-2 font-medium font-sansation cursor-pointer ${
                  index === navItems.length - 1 ? "pr-0" : "px-3"
                }`}
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
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-3 font-medium font-sansation cursor-pointer text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>,
        document.body
      )}
    </nav>
  )
}
