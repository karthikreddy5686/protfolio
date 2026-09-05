import React from 'react'
import { ArrowUpRight, Zap, Code2, TrendingUp, Layers, CheckCircle2 } from 'lucide-react'
import { soundFx } from '../utils/audio'

export default function AboutSection() {
  const highlights = [
    {
      icon: <Zap className="w-4 h-4 text-[#ff5500]" />,
      title: 'High-Velocity Sprints',
      desc: 'Rapid 1-2 week cycles with live weekly demo releases and zero bureaucratic friction.',
    },
    {
      icon: <Code2 className="w-4 h-4 text-[#ff5500]" />,
      title: 'Engineering Precision',
      desc: 'Next.js 15, React, and scalable micro-architectures with 95+ Core Web Vitals.',
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-[#ff5500]" />,
      title: 'Growth-Driven Code',
      desc: 'Embedded technical SEO, user telemetry, and conversion funnels from day one.',
    },
  ]

  const stats = [
    { value: '50+', label: 'Products Shipped' },
    { value: '99.8%', label: 'On-Time Delivery' },
    { value: '100%', label: 'Code Ownership' },
  ]

  return (
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80 overflow-hidden text-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Concise Narrative, Highlights & Key Stats (md:col-span-7) */}
          <div className="md:col-span-7 text-left flex flex-col justify-between space-y-6">
            
            {/* Top Category Kicker */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  ABOUT REACT J CONNECT
                </span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-neutral-950 tracking-tight leading-tight mb-3">
                We engineer digital products with speed, precision, and purpose.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans max-w-xl">
                A full-stack engineering and digital growth studio partnering with founders and scale-ups to design, build, and ship high-performance digital products that drive measurable business outcomes.
              </p>
            </div>

            {/* 3 Compact Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3.5 rounded-[4px] bg-neutral-50/80 border border-neutral-200/80 hover:border-neutral-950/40 hover:bg-white transition-all duration-300 shadow-2xs group"
                >
                  <div className="w-7 h-7 rounded-[4px] bg-white border border-neutral-200/90 flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-neutral-950 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-600 leading-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row: Key Metrics & Action Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-neutral-100">
              <div className="flex items-center gap-6 sm:gap-8">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-display font-black text-xl sm:text-2xl text-neutral-950 leading-tight mb-0.5">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-wider">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="px-4 py-2 rounded-[4px] bg-neutral-950 text-white hover:bg-[#ff5500] text-xs font-bold transition-all duration-300 shadow-xs flex items-center gap-1.5 interactive"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: High-Def Team Collaboration Line-Art with Electric Orange Base (md:col-span-5) */}
          <div className="md:col-span-5 relative flex items-center justify-center py-4 select-none">
            
            <div className="relative w-full max-w-lg flex flex-col items-center justify-center">
              
              {/* Illustration Image with Seamless Background Multiply */}
              <div className="relative w-full overflow-hidden flex items-center justify-center">
                <img
                  src="/images/about-team-lineart.png"
                  alt="reactj Team Engineering Collaboration"
                  className="w-full h-auto max-h-[380px] object-contain mix-blend-multiply transform hover:scale-[1.02] transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />

                {/* Bright Electric Orange Ground Base Underneath Knees/Floor */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-[#ff5500] rounded-full blur-[14px] opacity-35 pointer-events-none -z-10"
                />
              </div>

              {/* Floating Interactive Live Badges */}
              <div 
                onMouseEnter={() => soundFx.playHover()}
                className="absolute top-2 left-0 sm:-left-2 px-3 py-1.5 rounded-[4px] bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md flex items-center gap-2 animate-bounce-subtle cursor-pointer hover:border-[#ff5500] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono font-bold text-neutral-900">
                  Next.js 15 • Scalable SPA
                </span>
              </div>

              <div 
                onMouseEnter={() => soundFx.playHover()}
                className="absolute top-8 right-0 sm:-right-2 px-3 py-1.5 rounded-[4px] bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md flex items-center gap-2 cursor-pointer hover:border-[#ff5500] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                <span className="text-[11px] font-mono font-bold text-neutral-900">
                  Figma Design System
                </span>
              </div>

              <div 
                onMouseEnter={() => soundFx.playHover()}
                className="absolute -bottom-2 right-2 sm:right-4 px-3 py-1.5 rounded-[4px] bg-neutral-950 text-white shadow-lg flex items-center gap-2 cursor-pointer hover:bg-[#ff5500] transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500]" />
                <span className="text-[11px] font-mono font-bold">
                  +142% Inbound Growth
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
