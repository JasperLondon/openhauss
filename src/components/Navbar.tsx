"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1a3c5e]">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-[#1a3c5e]">
              open<span className="text-[#e8825a]">hauss</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#listings" className="text-sm font-medium text-gray-600 hover:text-[#1a3c5e] transition-colors">
              Listings
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-[#1a3c5e] transition-colors">
              How It Works
            </Link>
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-[#1a3c5e] transition-colors">
              Features
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#1a3c5e] transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-[#1a3c5e] hover:text-[#e8825a] transition-colors">
              Sign In
            </button>
            <button className="rounded-full bg-[#1a3c5e] px-5 py-2 text-sm font-medium text-white hover:bg-[#16324f] transition-colors">
              List Property
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#1a3c5e]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="#listings" className="text-sm font-medium text-gray-600 hover:text-[#1a3c5e]" onClick={() => setMenuOpen(false)}>Listings</Link>
              <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-[#1a3c5e]" onClick={() => setMenuOpen(false)}>How It Works</Link>
              <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-[#1a3c5e]" onClick={() => setMenuOpen(false)}>Features</Link>
              <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#1a3c5e]" onClick={() => setMenuOpen(false)}>Contact</Link>
              <div className="flex gap-3 pt-2">
                <button className="text-sm font-medium text-[#1a3c5e]">Sign In</button>
                <button className="rounded-full bg-[#1a3c5e] px-5 py-2 text-sm font-medium text-white">List Property</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
