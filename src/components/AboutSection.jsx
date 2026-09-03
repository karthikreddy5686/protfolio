import React, { useState } from 'react'
import { soundFx } from '../utils/audio'

export const services = [
  {
    id: 'web',
    title: 'Web Development',
    image: '/images/real-dev-hands.jpg',
  },
  {
    id: 'app',
    title: 'App Development',
    image: '/images/real-phone-app.jpg',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    image: '/images/real-uiux-design.jpg',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    image: '/images/real-analytics-desk.jpg',
  },
]

export default function AboutSection() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section id="about" className="py-10 md:py-12 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-1">
            CORE CAPABILITIES
          </span>
          <h2 className="font-display font-bold text-xl sm:text-3xl text-neutral-950 tracking-tight leading-tight">
            We engineer high-performance web apps, mobile products, and growth systems.
          </h2>
        </div>

        {/* Compact Expanding Accordion Card Hover Interaction (rounded-[4px]) */}
        <div className="flex flex-col md:flex-row gap-2.5 sm:gap-3.5 h-[460px] md:h-[340px] w-full select-none">
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
                className={`relative rounded-[4px] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border border-neutral-200/80 shadow-xs ${
                  isExpanded
                    ? 'md:flex-[3] flex-[3] shadow-xl ring-1 ring-neutral-950/10'
                    : 'md:flex-1 flex-1 opacity-90 hover:opacity-100 hover:shadow-md'
                }`}
              >
                {/* Background Realistic Photography (rounded-[4px]) */}
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out rounded-[4px] ${
                    isExpanded ? 'scale-105' : 'scale-100 filter brightness-90'
                  }`}
                />

                {/* Dark Gradient Overlay for Clean Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent rounded-[4px]" />

                {/* Bottom Bar: ONLY the Clean Title */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 text-left text-white flex flex-col justify-end">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-tight drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
