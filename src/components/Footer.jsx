import React from 'react'
import { soundFx } from '../utils/audio'

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-900 py-6 px-4 sm:px-6 md:px-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Phone */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="REACT J CONNECT"
            className="h-8 sm:h-9 w-auto object-contain"
          />
          <span className="text-neutral-300 hidden sm:inline">|</span>
          <span className="text-xs font-mono font-bold text-neutral-700">
            +91 93905 14374
          </span>
        </div>

        {/* Clean Inline Navigation */}
        <nav className="flex items-center gap-6 text-xs font-semibold text-neutral-600">
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
        <div className="text-[11px] font-mono text-neutral-400 text-center md:text-right">
          © {new Date().getFullYear()} reactj. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
