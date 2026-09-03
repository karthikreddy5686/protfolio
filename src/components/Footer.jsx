import React from 'react'
import { soundFx } from '../utils/audio'

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-900 py-10 md:py-12 px-4 sm:px-6 md:px-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Phone with WhatsApp Integration */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <img
            src="/logo.png"
            alt="REACT J CONNECT"
            className="h-9 sm:h-10 w-auto object-contain"
          />
          <span className="text-neutral-300 hidden sm:inline">|</span>
          
          {/* Clickable WhatsApp Link */}
          <a
            href="https://wa.me/919390514374?text=Hi%20reactj%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-800 transition-all duration-200 group interactive"
            title="Chat on WhatsApp"
          >
            {/* Official WhatsApp SVG Icon */}
            <svg
              className="w-4 h-4 fill-emerald-600 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.277-.101-.478-.15-.678.15-.2.301-.778.98-.954 1.18-.176.201-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.236-.245-.588-.493-.508-.678-.518-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.123 3.242 5.143 4.546.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.277-.201-.578-.351zM12.04 21.685c-1.737 0-3.44-.467-4.934-1.353l-.354-.21-3.668.962.979-3.576-.23-.367c-.975-1.55-1.49-3.344-1.49-5.18 0-5.334 4.34-9.674 9.678-9.674 2.585 0 5.015 1.007 6.843 2.836 1.827 1.829 2.833 4.26 2.833 6.846 0 5.336-4.34 9.676-9.657 9.676zm0-21.685C5.399 0 0 5.398 0 12.039c0 2.12.553 4.188 1.604 6.012L0 24l6.115-1.604a11.96 11.96 0 0 0 5.925 1.564h.005c6.637 0 12.04-5.399 12.04-12.041 0-3.217-1.253-6.242-3.529-8.52A12.008 12.008 0 0 0 12.04 0z"/>
            </svg>
            <span className="text-xs font-mono font-bold text-emerald-950">
              +91 93905 14374
            </span>
          </a>
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
