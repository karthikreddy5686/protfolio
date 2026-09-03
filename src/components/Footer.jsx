import React from 'react'
import { soundFx } from '../utils/audio'

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-900 py-10 md:py-12 px-4 sm:px-6 md:px-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Phone */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <img
            src="/logo.png"
            alt="REACT J CONNECT"
            className="h-9 sm:h-10 w-auto object-contain"
          />
          <span className="text-neutral-300 hidden sm:inline">|</span>
          <span className="text-xs font-mono font-bold text-neutral-800">
            +91 93905 14374
          </span>
        </div>

        {/* Clean Navigation */}
        <nav className="flex items-center gap-8 text-xs font-semibold text-neutral-600">
          <a href="#home" onClick={() => soundFx.playClick()} className="hover:text-[#ea580c] transition-colors">
            Home
          </a>
          <a href="#about" onClick={() => soundFx.playClick()} className="hover:text-[#ea580c] transition-colors">
            About Us
          </a>
          <a href="#contact" onClick={() => soundFx.playClick()} className="hover:text-[#ea580c] transition-colors">
            Contact
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-xs font-mono text-neutral-400 text-center md:text-right">
          © {new Date().getFullYear()} reactj. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
