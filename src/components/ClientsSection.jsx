import React from 'react'
import { soundFx } from '../utils/audio'

export const clientBrands = [
  {
    name: 'IMOJEE',
    sub: 'DIGITAL MEDIA & APP',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
  {
    name: 'GOBANJARA',
    sub: 'TRAVEL & HOSPITALITY',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: 'ANURAG LMS',
    sub: 'EDTECH CAMPUS PORTAL',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    name: 'GEONIXA LMS',
    sub: 'ENTERPRISE TRAINING',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
  },
  {
    name: 'LS & COLLECTIONS',
    sub: 'LUXURY HANDLOOM',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: 'SPECTRUM GOLD',
    sub: 'ALLOY ENGINEERING',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    name: 'EMPIRE PLATFORM',
    sub: 'INCUBATOR LABS',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'KALINQ SAAS',
    sub: 'CREATOR SPONSORSHIPS',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    name: 'ALPHA ICs',
    sub: 'ADVANCED COMPUTE',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 18h12M12 6v12M8 10l8 4M8 14l8-4" />
      </svg>
    ),
  },
  {
    name: 'STERADIAN LABS',
    sub: 'PRECISION HARDWARE',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'NEXUS CLOUD',
    sub: 'INFRASTRUCTURE OPS',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    name: 'VORTEX MEDIA',
    sub: 'GLOBAL BROADCAST',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
]

export default function ClientsSection() {
  return (
    <section id="clients" className="py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-neutral-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
            THEY TRUST US
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
            Our Clients<span className="text-[#ea580c]">.</span>
          </h2>
        </div>

        {/* 1. Desktop & Tablet: Horizontal Scroller moving towards the Left */}
        <div className="hidden md:block relative w-full overflow-hidden mask-fade-horizontal">
          <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-2">
            {[...clientBrands, ...clientBrands].map((client, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className="group flex flex-col items-center justify-center py-3 px-5 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-200 cursor-default select-none shrink-0 min-w-[150px]"
              >
                <div className="mb-1.5 transform group-hover:scale-110 transition-transform duration-200">
                  {client.icon}
                </div>

                <span className="font-display font-bold text-xs tracking-wide text-neutral-200 group-hover:text-white transition-colors text-center leading-tight">
                  {client.name}
                </span>

                <span className="text-[8px] font-mono tracking-wider text-neutral-500 uppercase mt-0.5 text-center leading-tight">
                  {client.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Mobile (Phone): Vertical Scroller showing exactly 4 items height, scrolling upwards */}
        <div className="md:hidden relative w-full max-w-xs mx-auto h-[230px] overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-2">
          {/* Gradient Masks for Smooth Vertical Fade */}
          <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />

          {/* Vertical Upward Scrolling Track */}
          <div className="flex flex-col gap-2.5 animate-marquee-vertical">
            {[...clientBrands, ...clientBrands].map((client, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between py-2 px-3.5 rounded-lg border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-default select-none shrink-0 h-[48px]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="shrink-0">{client.icon}</div>
                  <div className="text-left">
                    <span className="font-display font-bold text-[11px] tracking-wide text-neutral-200 block leading-tight">
                      {client.name}
                    </span>
                    <span className="text-[7px] font-mono tracking-wider text-neutral-500 uppercase block leading-tight">
                      {client.sub}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
