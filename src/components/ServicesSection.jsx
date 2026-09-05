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
    description: 'We construct bulletproof web applications, SaaS platforms, and fast eCommerce architectures with sub-second load times and zero technical debt.',
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
    description: 'We build fluid, reliable cross-platform mobile applications with real-time push telemetry, offline data caching, and native hardware performance.',
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
    description: 'Every interface is engineered around human psychology, ensuring intuitive customer journeys, seamless conversion funnels, and scalable design tokens.',
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
    description: 'We embed programmatic SEO, high-ROI Google Ads campaigns, and user telemetry directly into your funnels to generate qualified leads from day one.',
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

        {/* Dynamic Expanding Service Cards: Side-by-Side on Mobile, MacBook & Desktop */}
        <div className="flex flex-row gap-2 sm:gap-3.5 h-[440px] sm:h-[430px] md:h-[420px] w-full select-none overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-none">
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
                className={`relative rounded-[4px] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border bg-white shrink-0 md:shrink ${
                  isExpanded
                    ? 'w-[280px] sm:w-[380px] md:w-auto md:flex-[3] lg:flex-[3.5] shadow-lg border-[#ff5500] ring-1 ring-[#ff5500]/20'
                    : 'w-[70px] sm:w-[84px] md:w-auto md:flex-1 opacity-90 hover:opacity-100 border-neutral-200/90 hover:border-neutral-950/40 hover:shadow-xs'
                }`}
              >
                {/* Expanded Card Layout: Split Left Content + Right Line-Art Illustration */}
                {isExpanded ? (
                  <div className="absolute inset-0 p-4 sm:p-6 z-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center animate-fade-in bg-white overflow-y-auto md:overflow-hidden">
                    {/* Left: Text, Bullets, and CTA */}
                    <div className="md:col-span-7 flex flex-col justify-between h-full text-left z-10 py-1">
                      <div>
                        {/* Title */}
                        <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-neutral-950 tracking-tight leading-tight mb-2">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] sm:text-xs md:text-sm text-neutral-600 leading-relaxed font-sans mb-3 sm:mb-4 max-w-md">
                          {service.description}
                        </p>

                        {/* Deliverables Badges */}
                        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-5">
                          {service.deliverables.map((item, dIdx) => (
                            <span
                              key={dIdx}
                              className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-[4px] bg-neutral-50 border border-neutral-200/90 text-[10px] sm:text-[10.5px] text-neutral-800 font-medium"
                            >
                              <CheckCircle2 className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#ff5500] shrink-0" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action CTA */}
                      <div className="pt-1">
                        <a
                          href="#contact"
                          onClick={(e) => {
                            e.stopPropagation()
                            soundFx.playClick()
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-[4px] bg-neutral-950 text-white hover:bg-[#ff5500] text-[11px] sm:text-xs font-bold transition-all duration-300 shadow-xs interactive"
                        >
                          <span>Get Started</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Right: Crisp Line-Art Illustration with mix-blend-multiply */}
                    <div className="hidden sm:flex md:col-span-5 h-full items-center justify-center p-2 relative">
                      <div className="w-full h-full max-h-[220px] md:max-h-[340px] flex items-center justify-center overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-contain select-none mix-blend-multiply"
                          style={{ imageRendering: '-webkit-optimize-contrast' }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Collapsed Card View */
                  <div className="absolute inset-0 p-2 sm:p-4 flex flex-col justify-between items-center text-center z-10 bg-white">
                    {/* Top Number */}
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-[4px] bg-neutral-100 text-neutral-700">
                      {service.number}
                    </span>

                    {/* Middle Illustration Preview */}
                    <div className="w-full h-28 sm:h-36 flex items-center justify-center overflow-hidden my-auto opacity-75">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain select-none mix-blend-multiply"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                      />
                    </div>

                    {/* Bottom Title */}
                    <div className="pt-1.5 sm:pt-2 border-t border-neutral-100 w-full overflow-hidden">
                      <h3 className="font-display font-bold text-[10px] sm:text-xs md:text-sm text-neutral-950 leading-tight truncate">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
