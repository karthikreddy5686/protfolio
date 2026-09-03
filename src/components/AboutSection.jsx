import React from 'react'
import { Code2, Smartphone, TrendingUp } from 'lucide-react'
import { soundFx } from '../utils/audio'

export const capabilities = [
  {
    id: 'web',
    title: 'Web Development',
    category: 'React & Next.js 15',
    description: 'Custom React & Next.js applications, high-converting e-commerce storefronts, and enterprise portals engineered for speed and scale.',
    image: '/images/real-dev-hands.jpg',
    badgeColor: 'bg-orange-50 text-[#ea580c] border-orange-200',
    icon: <Code2 className="w-3.5 h-3.5 text-[#ea580c]" />,
  },
  {
    id: 'app',
    title: 'App Development',
    category: 'iOS & Android (React Native)',
    description: 'Native-grade cross-platform mobile apps with 60 FPS smooth interactions, push telemetry, and offline-first caching.',
    image: '/images/real-phone-app.jpg',
    badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
    icon: <Smartphone className="w-3.5 h-3.5 text-purple-600" />,
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    category: 'SEO & Performance Ads',
    description: 'Data-driven technical SEO, Google Ads (PPC), Meta campaigns, and conversion rate optimization engineered for pipeline growth.',
    image: '/images/real-analytics-desk.jpg',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    icon: <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />,
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-20 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple & Bold Header - Paragraph Removed */}
        <div className="max-w-3xl mb-10 text-left">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-neutral-950 tracking-tight leading-tight">
            We engineer high-performance web apps, mobile products, and growth systems.
          </h2>
        </div>

        {/* 3 Simple & Small Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => soundFx.playHover()}
              className="group p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-lg hover:border-[#ea580c] transition-all duration-300 flex flex-col justify-between text-left cursor-default select-none interactive"
            >
              <div>
                {/* Compact Realistic Photo Container */}
                <div className="w-full h-36 rounded-xl overflow-hidden mb-4 bg-neutral-100 border border-neutral-200/60 shadow-2xs relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badge & Icon */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${item.badgeColor}`}>
                    {item.icon}
                    <span>{item.category}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-neutral-950 mb-1.5 group-hover:text-[#ea580c] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
