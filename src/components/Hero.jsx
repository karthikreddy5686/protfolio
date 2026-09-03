import React from 'react'
import { soundFx } from '../utils/audio'

export default function Hero() {
  return (
    <section id="home" className="relative w-full flex items-center justify-center pt-32 pb-8 sm:pb-10 px-4 sm:px-6 md:px-12 overflow-hidden bg-white">
      {/* Subtle Static Radial Gradient Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,87,33,0.03)_0%,_rgba(255,255,255,1)_75%)] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Sleek Single-Line Statement */}
        <h1 className="font-display font-medium text-lg sm:text-2xl md:text-3xl text-neutral-800 tracking-tight leading-snug mb-5 max-w-3xl">
          We engineer high-performance web apps, mobile products, and digital growth systems.
        </h1>

        {/* 3 Logo-Orange Service Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 select-none">
          <a
            href="#about"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="px-4 py-1.5 rounded-full bg-orange-50 text-[#ea580c] hover:bg-[#ea580c] hover:text-white border border-orange-200 text-xs font-semibold tracking-wide transition-all duration-200 shadow-2xs interactive"
          >
            Web Development
          </a>
          <a
            href="#about"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="px-4 py-1.5 rounded-full bg-orange-50 text-[#ea580c] hover:bg-[#ea580c] hover:text-white border border-orange-200 text-xs font-semibold tracking-wide transition-all duration-200 shadow-2xs interactive"
          >
            App Development
          </a>
          <a
            href="#about"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="px-4 py-1.5 rounded-full bg-orange-50 text-[#ea580c] hover:bg-[#ea580c] hover:text-white border border-orange-200 text-xs font-semibold tracking-wide transition-all duration-200 shadow-2xs interactive"
          >
            Digital Marketing
          </a>
        </div>

      </div>
    </section>
  )
}
