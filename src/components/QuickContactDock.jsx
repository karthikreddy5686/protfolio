import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { soundFx } from '../utils/audio'

export default function QuickContactDock() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <aside aria-label="Quick contact and navigation" className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      
      {/* 1-Click Floating WhatsApp Button (rounded-[4px]) */}
      <a
        href="https://wa.me/919390514374?text=Hi%20reactj%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => soundFx.playClick()}
        className="w-11 h-11 rounded-[4px] bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center transition-all duration-300 interactive hover:scale-105 group relative"
        aria-label="Chat with reactj on WhatsApp"
        title="Chat on WhatsApp (+91 93905 14374)"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.277-.101-.478-.15-.678.15-.2.301-.778.98-.954 1.18-.176.201-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.236-.245-.588-.493-.508-.678-.518-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.123 3.242 5.143 4.546.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.277-.201-.578-.351zM12.04 21.685c-1.737 0-3.44-.467-4.934-1.353l-.354-.21-3.668.962.979-3.576-.23-.367c-.975-1.55-1.49-3.344-1.49-5.18 0-5.334 4.34-9.674 9.678-9.674 2.585 0 5.015 1.007 6.843 2.836 1.827 1.829 2.833 4.26 2.833 6.846 0 5.336-4.34 9.676-9.657 9.676zm0-21.685C5.399 0 0 5.398 0 12.039c0 2.12.553 4.188 1.604 6.012L0 24l6.115-1.604a11.96 11.96 0 0 0 5.925 1.564h.005c6.637 0 12.04-5.399 12.04-12.041 0-3.217-1.253-6.242-3.529-8.52A12.008 12.008 0 0 0 12.04 0z"/>
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-[2px] bg-emerald-300 border border-white animate-pulse" />
      </a>

      {/* Scroll to Top Button (rounded-[4px]) */}
      {showScrollTop && (
        <button
          onClick={() => {
            soundFx.playClick()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="w-10 h-10 rounded-[4px] bg-neutral-950 text-white shadow-lg hover:bg-[#ea580c] flex items-center justify-center transition-all interactive hover:scale-105 animate-fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </aside>
  )
}
