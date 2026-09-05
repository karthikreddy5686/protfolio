import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { soundFx } from '../utils/audio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'services', 'contact', 'clients']
      const scrollPos = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 px-4 sm:px-6 md:px-12 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-neutral-200/80'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-2 group select-none py-0.5"
          >
            <img
              src="/logo.png"
              alt="REACT J CONNECT"
              className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Center Navigation Links matching reference mockup: Home, About, Services, Works, Contact - rounded-[4px] */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-neutral-100/80 p-1 lg:p-1.5 rounded-[4px] border border-neutral-200/80 relative">
            
            {/* 1. Home */}
            <a
              href="#home"
              onClick={() => soundFx.playClick()}
              className={`px-3 lg:px-4 py-1.5 rounded-[4px] text-xs font-semibold transition-all duration-200 ${
                activeSection === 'home'
                  ? 'bg-white text-neutral-950 shadow-xs font-bold'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/60'
              }`}
            >
              Home
            </a>

            {/* 2. About */}
            <a
              href="#about"
              onClick={() => soundFx.playClick()}
              className={`px-3 lg:px-4 py-1.5 rounded-[4px] text-xs font-semibold transition-all duration-200 ${
                activeSection === 'about'
                  ? 'bg-white text-neutral-950 shadow-xs font-bold'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/60'
              }`}
            >
              About
            </a>

            {/* 3. Services */}
            <a
              href="#services"
              onClick={() => soundFx.playClick()}
              className={`px-3 lg:px-4 py-1.5 rounded-[4px] text-xs font-semibold transition-all duration-200 ${
                activeSection === 'services'
                  ? 'bg-white text-neutral-950 shadow-xs font-bold'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/60'
              }`}
            >
              Services
            </a>

            {/* 4. Contact */}
            <a
              href="#contact"
              onClick={() => soundFx.playClick()}
              className={`px-3 lg:px-4 py-1.5 rounded-[4px] text-xs font-semibold transition-all duration-200 ${
                activeSection === 'contact'
                  ? 'bg-white text-neutral-950 shadow-xs font-bold'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/60'
              }`}
            >
              Contact
            </a>

            {/* 5. Works (Last) */}
            <a
              href="#clients"
              onClick={() => soundFx.playClick()}
              className={`px-3 lg:px-4 py-1.5 rounded-[4px] text-xs font-semibold transition-all duration-200 ${
                activeSection === 'clients'
                  ? 'bg-white text-neutral-950 shadow-xs font-bold'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/60'
              }`}
            >
              Works
            </a>
          </nav>

          {/* Right Action Button - Let's Talk -> (rounded-[4px]) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={() => soundFx.playClick()}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-[4px] bg-neutral-950 hover:bg-[#ea580c] text-white font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-1.5 interactive"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                soundFx.playClick()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              className="md:hidden w-8 sm:w-9 h-8 sm:h-9 rounded-[4px] bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden animate-fade-in text-left">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold tracking-widest">
              Navigation
            </span>
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-bold text-neutral-900 py-1"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-bold text-neutral-900 py-1"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-bold text-neutral-900 py-1"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-bold text-neutral-900 py-1"
            >
              Contact
            </a>
            <a
              href="#clients"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-bold text-neutral-900 py-1"
            >
              Works
            </a>
          </div>

          <div className="pt-8 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => {
                soundFx.playClick()
                setMobileMenuOpen(false)
              }}
              className="w-full py-3.5 rounded-[4px] bg-neutral-950 text-white text-center font-bold text-sm hover:bg-[#ea580c] transition-colors shadow-lg"
            >
              Get Quote →
            </a>
            <p className="text-center text-xs text-neutral-500 font-mono">
              +91 93905 14374 • REACT J CONNECT
            </p>
          </div>
        </div>
      )}
    </>
  )
}
