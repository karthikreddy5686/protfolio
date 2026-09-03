import React from 'react'
import { soundFx } from '../utils/audio'

export const clientBrands = [
  {
    name: 'LS & COLLECTIONS',
    sub: 'HANDLOOM & JEWELS',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: 'GEONIXA EMS',
    sub: 'ENTERPRISE HRMS',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
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
    name: 'GEONIXA TALENT',
    sub: 'ASSESSMENT LABS',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'EMPIRE PLATFORM',
    sub: 'INCUBATOR',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: 'KALINQ SAAS',
    sub: 'CREATOR SPONSORSHIP',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    name: 'KALINQ PARTNERS',
    sub: 'CAMPAIGN CRM',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: 'NEXTJOB PORTAL',
    sub: 'TALENT DISCOVERY',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
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
    name: 'EXCEL ARK',
    sub: 'GLOBAL DIGITAL',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v16H4zM4 12h16M12 4v16" />
      </svg>
    ),
  },
  {
    name: 'STERADIAN',
    sub: 'PRECISION LABS',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'UNIJOURNEY',
    sub: 'EDTECH GLOBAL',
    icon: (
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
]

export default function ClientsSection() {
  return (
    <section id="clients" className="py-10 md:py-12 px-4 sm:px-6 md:px-12 bg-neutral-950 text-white relative">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Header - Small & Sleek */}
        <div className="mb-6">
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-0.5">
            THEY TRUST US
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
            Our Clients<span className="text-[#ea580c]">.</span>
          </h2>
        </div>

        {/* Client Logos Grid - Compact & Small */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 items-center justify-center">
          {clientBrands.map((client, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="group flex flex-col items-center justify-center py-2.5 px-2 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200 cursor-default select-none"
            >
              <div className="mb-1 transform group-hover:scale-105 transition-transform duration-200">
                {client.icon}
              </div>

              <span className="font-display font-bold text-[10px] tracking-wide text-neutral-300 group-hover:text-white transition-colors text-center leading-tight">
                {client.name}
              </span>

              <span className="text-[7px] font-mono tracking-widest text-neutral-500 uppercase mt-0.5 text-center leading-tight">
                {client.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
