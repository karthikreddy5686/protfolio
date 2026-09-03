import React, { useState } from 'react'
import { ArrowRight, Code2, Smartphone, Palette, TrendingUp, Sparkles } from 'lucide-react'
import { soundFx } from '../utils/audio'

export const services = [
  {
    id: 'web',
    title: 'Web Development',
    category: 'React & Next.js 15',
    headline: 'You direct. We build it live.',
    description: 'Custom React & Next.js 15 applications, high-converting e-commerce storefronts, and enterprise portals engineered for sub-second speed.',
    cta: 'Build Web App with reactj',
    image: '/images/real-dev-hands.jpg',
    accent: '#ea580c',
    icon: <Code2 className="w-5 h-5 text-white" />,
  },
  {
    id: 'app',
    title: 'App Development',
    category: 'iOS & Android (React Native)',
    headline: 'Native speed. Engineered for mobile.',
    description: 'Native-grade cross-platform mobile apps for iPhone and Android with 60 FPS smooth gestures, push alerts, and offline-first caching.',
    cta: 'Build Mobile App with reactj',
    image: '/images/real-phone-app.jpg',
    accent: '#8b5cf6',
    icon: <Smartphone className="w-5 h-5 text-white" />,
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    category: 'Figma & Design Systems',
    headline: 'Intuitive layouts. Crafted for conversion.',
    description: 'Human-centered digital experiences with bespoke component libraries, modern wireframes, interactive micro-animations, and design systems.',
    cta: 'Design UI/UX with reactj',
    image: '/images/real-uiux-design.jpg',
    accent: '#3b82f6',
    icon: <Palette className="w-5 h-5 text-white" />,
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    category: 'SEO & Performance Growth',
    headline: 'Execute data-driven technical SEO & ads.',
    description: 'Data-driven technical SEO, Google Ads (PPC), Meta campaigns, and conversion rate optimization engineered for predictable revenue growth.',
    cta: 'Scale Growth with reactj',
    image: '/images/real-analytics-desk.jpg',
    accent: '#10b981',
    icon: <TrendingUp className="w-5 h-5 text-white" />,
  },
]

export default function AboutSection() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section id="about" className="py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-1">
            CORE CAPABILITIES
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-neutral-950 tracking-tight leading-tight">
            We engineer high-performance web apps, mobile products, and growth systems.
          </h2>
        </div>

        {/* Expanding Accordion Card Hover Interaction (4 Slides) */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-[560px] md:h-[460px] w-full select-none">
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
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border border-neutral-200/80 shadow-md ${
                  isExpanded
                    ? 'md:flex-[3.5] flex-[3] shadow-2xl ring-2 ring-neutral-950/10'
                    : 'md:flex-1 flex-1 opacity-90 hover:opacity-100 hover:shadow-lg'
                }`}
              >
                {/* Full Background Realistic Photography */}
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isExpanded ? 'scale-105 filter-none' : 'scale-100 filter brightness-90'
                  }`}
                />

                {/* Dark Gradient Overlay for Readability */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isExpanded
                      ? 'bg-gradient-to-t from-black/90 via-black/30 to-black/20'
                      : 'bg-gradient-to-t from-black/85 via-black/40 to-black/30'
                  }`}
                />

                {/* Top Category Badge & Icon */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xs">
                      {service.icon}
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white transition-opacity duration-300 ${
                        isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-0 lg:opacity-100'
                      }`}
                    >
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Bottom Content Card Details (Expands on Hover) */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 text-left text-white flex flex-col justify-end">
                  
                  {/* Category Subtitle */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 block mb-1">
                    {service.category}
                  </span>

                  {/* Service Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  {/* Expanded Content: Headline, Description & CTA */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isExpanded
                        ? 'max-h-48 opacity-100 mt-2.5'
                        : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed mb-4 max-w-lg">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.stopPropagation()
                        soundFx.playClick()
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-950 hover:bg-[#ea580c] hover:text-white font-bold text-xs tracking-wide transition-all shadow-md group interactive"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
