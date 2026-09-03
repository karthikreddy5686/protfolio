import React from 'react'
import { Code2, Smartphone, TrendingUp } from 'lucide-react'
import { soundFx } from '../utils/audio'

export const capabilities = [
  {
    id: 'web',
    title: 'Web Development',
    category: 'React & Next.js 15',
    description: 'Custom React & Next.js applications, high-converting e-commerce storefronts, and enterprise portals engineered for sub-second page speed and scale.',
    image: '/images/real-dev-hands.jpg',
    badgeColor: 'bg-orange-50 text-[#ea580c] border-orange-200',
    icon: <Code2 className="w-4 h-4 text-[#ea580c]" />,
  },
  {
    id: 'app',
    title: 'App Development',
    category: 'iOS & Android (React Native)',
    description: 'Native-grade cross-platform mobile apps for iOS and Android with 60 FPS smooth interactions, real-time push telemetry, and offline-first caching.',
    image: '/images/real-phone-app.jpg',
    badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
    icon: <Smartphone className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    category: 'SEO & Performance Ads',
    description: 'Data-driven technical SEO, Google Ads (PPC), Meta performance campaigns, and conversion rate optimization (CRO) engineered to 10x pipeline growth.',
    image: '/images/real-analytics-desk.jpg',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple & Bold Header */}
        <div className="max-w-3xl mb-14 text-left">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-[1.15] mb-5">
            We engineer high-performance web apps, mobile products, and growth systems.
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            reactj is a full-service digital tech agency. We partner with ambitious founders, enterprises, and emerging brands to build fast, scalable digital solutions that drive measurable business revenue.
          </p>
        </div>

        {/* 3 Realistic Photography Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => soundFx.playHover()}
              className="group p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-lg hover:shadow-2xl hover:border-[#ea580c] transition-all duration-300 flex flex-col justify-between text-left cursor-default select-none interactive"
            >
              <div>
                {/* Real Photography Image Container */}
                <div className="w-full h-52 rounded-2xl overflow-hidden mb-6 bg-neutral-100 border border-neutral-200/60 shadow-xs relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badge & Icon */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${item.badgeColor}`}>
                    {item.icon}
                    <span>{item.category}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-neutral-950 mb-2.5 group-hover:text-[#ea580c] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
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
