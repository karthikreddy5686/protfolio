import React, { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { soundFx } from '../utils/audio'

export const services = [
  {
    id: 'web',
    number: '01',
    title: 'Web Development',
    category: 'Engineering & Scalability',
    tagline: 'Next.js 15 • React • Scalable APIs',
    description: 'We construct high-speed web apps, SaaS platforms, and eCommerce systems with zero tech debt.',
    deliverables: [
      'Next.js 15 & React SPAs',
      'Modular Micro-Services',
      'Core Web Vitals 95+',
    ],
    image: '/images/about-pillar-engineering.png',
  },
  {
    id: 'app',
    number: '02',
    title: 'App Development',
    category: 'iOS & Android Native Grade',
    tagline: 'React Native • Cloud Sync • High Speed',
    description: 'Fluid cross-platform mobile apps with real-time sync, offline caching, and native performance.',
    deliverables: [
      'Cross-Platform iOS & Android',
      'Real-Time WebSocket Sync',
      'App Store & Play Store Ready',
    ],
    image: '/images/about-pillar-app-dev.png',
  },
  {
    id: 'uiux',
    number: '03',
    title: 'UI/UX Design',
    category: 'Design Systems & UX Psychology',
    tagline: 'Figma • Wireframes • Design Tokens',
    description: 'Human-centric interfaces, conversion-focused user journeys, and scalable design systems.',
    deliverables: [
      'Interactive Prototypes',
      'Design Token Systems',
      'Conversion Rate Audits',
    ],
    image: '/images/about-pillar-design.png',
  },
  {
    id: 'marketing',
    number: '04',
    title: 'Digital Marketing',
    category: 'Growth & Inbound Performance',
    tagline: 'Technical SEO • Ads • High ROI',
    description: 'Programmatic SEO, high-ROI Google Ads campaigns, and data-driven user conversion funnels.',
    deliverables: [
      'Technical SEO Foundation',
      'Conversion Event Tracking',
      'Lead Generation Funnels',
    ],
    image: '/images/about-pillar-growth.png',
  },
]

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section id="services" className="py-14 sm:py-20 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80 overflow-hidden text-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                SERVICES & CAPABILITIES
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-neutral-950 tracking-tight leading-tight">
              Comprehensive capabilities engineered for ambitious brands.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed font-sans">
            Everything your company needs to design, develop, and scale world-class digital products with measurable business impact.
          </p>
        </div>

        {/* Responsive Service Cards */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-3.5 md:h-[440px] w-full select-none">
          {services.map((service, idx) => {
            const isExpanded = activeCard === idx

            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  soundFx.playHover()
                  setActiveCard(idx)
                }}
                onClick={() => {
                  soundFx.playClick()
                  setActiveCard(idx)
                }}
                className={`relative rounded-[4px] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border bg-white ${
                  isExpanded
                    ? 'md:flex-[3.8] lg:flex-[4.2] shadow-lg border-[#ff5500] ring-1 ring-[#ff5500]/20'
                    : 'md:flex-1 opacity-90 hover:opacity-100 border-neutral-200/90 hover:border-neutral-950/40 hover:shadow-xs'
                }`}
              >
                {/* 1. Desktop & Laptop Layout */}
                <div className="hidden md:block absolute inset-0">
                  {isExpanded ? (
                    <div className="h-full p-6 lg:p-8 grid grid-cols-12 gap-3 lg:gap-6 items-center animate-fade-in bg-white">
                      {/* Left: Concise Content & Action */}
                      <div className="col-span-5 flex flex-col justify-between h-full text-left z-10 py-1">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] bg-orange-100 text-[#ff5500]">
                              {service.number}
                            </span>
                            <span className="text-[11px] font-mono text-neutral-500 font-medium truncate">
                              {service.category}
                            </span>
                          </div>

                          <h3 className="font-display font-black text-2xl lg:text-3xl text-neutral-950 tracking-tight leading-tight mb-2">
                            {service.title}
                          </h3>

                          <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-3.5">
                            {service.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {service.deliverables.map((item, dIdx) => (
                              <span
                                key={dIdx}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-neutral-50 border border-neutral-200/90 text-[10.5px] text-neutral-800 font-medium"
                              >
                                <CheckCircle2 className="w-3 h-3 text-[#ff5500] shrink-0" />
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <a
                            href="#contact"
                            onClick={(e) => {
                              e.stopPropagation()
                              soundFx.playClick()
                            }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-neutral-950 text-white hover:bg-[#ff5500] text-xs font-bold transition-all duration-300 shadow-xs interactive"
                          >
                            <span>Get Started</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Right: Enlarged Hero Illustration */}
                      <div className="col-span-7 h-full flex items-center justify-center p-1 lg:p-2 relative">
                        <div className="w-full h-full max-h-[380px] lg:max-h-[400px] flex items-center justify-center overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-contain select-none mix-blend-multiply transition-transform duration-300 hover:scale-105"
                            style={{ imageRendering: '-webkit-optimize-contrast' }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Collapsed Desktop View */
                    <div className="h-full p-4 flex flex-col justify-between items-center text-center bg-white">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] bg-neutral-100 text-neutral-700">
                        {service.number}
                      </span>
                      <div className="w-full h-40 flex items-center justify-center overflow-hidden my-auto opacity-75">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-contain select-none mix-blend-multiply"
                          style={{ imageRendering: '-webkit-optimize-contrast' }}
                        />
                      </div>
                      <div className="pt-2 border-t border-neutral-100 w-full overflow-hidden">
                        <h3 className="font-display font-bold text-xs lg:text-sm text-neutral-950 leading-tight truncate">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Mobile Layout */}
                <div className="md:hidden">
                  {isExpanded ? (
                    <div className="p-4 sm:p-5 flex flex-col gap-3 text-left bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] bg-orange-100 text-[#ff5500]">
                            {service.number}
                          </span>
                          <span className="text-[11px] font-mono text-neutral-500 font-medium">
                            {service.category}
                          </span>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-xl text-neutral-950 tracking-tight mb-1">
                          {service.title}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-2.5">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {service.deliverables.map((item, dIdx) => (
                            <span
                              key={dIdx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-neutral-50 border border-neutral-200/90 text-[10.5px] text-neutral-800 font-medium"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#ff5500] shrink-0" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>

                        {/* Enlarged Mobile Illustration */}
                        <div className="w-full max-h-[220px] flex items-center justify-center my-2 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-auto max-h-[210px] object-contain mix-blend-multiply select-none"
                          />
                        </div>

                        <a
                          href="#contact"
                          onClick={(e) => {
                            e.stopPropagation()
                            soundFx.playClick()
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-neutral-950 text-white hover:bg-[#ff5500] text-xs font-bold transition-all duration-300 shadow-xs interactive w-full justify-center mt-1"
                        >
                          <span>Get Started</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Mobile Collapsed Row */
                    <div className="p-3.5 flex items-center justify-between text-left bg-neutral-50/70 hover:bg-neutral-100/80 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] bg-white border border-neutral-200 text-neutral-700">
                          {service.number}
                        </span>
                        <div>
                          <h3 className="font-display font-bold text-sm text-neutral-950">
                            {service.title}
                          </h3>
                          <span className="text-[10.5px] text-neutral-500 font-sans block">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-neutral-400 font-mono text-sm">+</span>
                    </div>
                  )}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
