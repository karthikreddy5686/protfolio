import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { soundFx } from '../utils/audio'

export default function QuickContactDock() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showScrollTop) return null

  return (
    <aside aria-label="Quick navigation" className="fixed bottom-6 right-6 z-40">
      {/* Scroll to Top */}
      <button
        onClick={() => {
          soundFx.playClick()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="w-11 h-11 rounded-full bg-neutral-950 text-white shadow-lg hover:bg-[#ea580c] flex items-center justify-center transition-all interactive hover:scale-105"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </aside>
  )
}
