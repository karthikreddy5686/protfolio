import React, { useState, useEffect } from 'react'
import { Calendar, Award, CheckCircle, TrendingUp } from 'lucide-react'
import { soundFx } from '../utils/audio'

const stats = [
  {
    id: 1,
    target: 5,
    suffix: '+',
    label: 'Years in Elite Engineering',
    sublabel: 'Founded 2021 • Global footprint',
    icon: Calendar,
    accent: 'from-blue-600 to-indigo-600',
    iconBg: 'text-blue-600 bg-blue-50 border-blue-200/60',
  },
  {
    id: 2,
    target: 160,
    suffix: '+',
    label: 'Digital Products Launched',
    sublabel: 'Across 14+ specialized industries',
    icon: Award,
    accent: 'from-cyan-500 to-blue-600',
    iconBg: 'text-cyan-600 bg-cyan-50 border-cyan-200/60',
  },
  {
    id: 3,
    target: 99.8,
    suffix: '%',
    decimals: 1,
    label: 'Client Satisfaction Rate',
    sublabel: '5-Star average on Clutch & Google',
    icon: CheckCircle,
    accent: 'from-emerald-500 to-teal-600',
    iconBg: 'text-emerald-600 bg-emerald-50 border-emerald-200/60',
  },
  {
    id: 4,
    target: 12,
    suffix: 'x',
    label: 'Average Client ROI Multiple',
    sublabel: 'Driven by custom tech architecture',
    icon: TrendingUp,
    accent: 'from-purple-500 to-pink-600',
    iconBg: 'text-purple-600 bg-purple-50 border-purple-200/60',
  },
]

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000
    const frameRate = 1000 / 60
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = Math.min(frame / totalFrames, 1)
      const easeOutQuad = (t) => t * (2 - t)
      const easedProgress = easeOutQuad(progress)

      setCounts(
        stats.map((item) => {
          const val = item.target * easedProgress
          return item.decimals ? parseFloat(val.toFixed(1)) : Math.round(val)
        })
      )

      if (frame >= totalFrames) {
        clearInterval(timer)
      }
    }, frameRate)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-12 px-4 sm:px-6 md:px-12 bg-neutral-50/70 border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={stat.id}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative rounded-3xl p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-1 select-none interactive"
                data-cursor="METRIC"
              >
                {/* Dynamic Conic Border Trace on Hover */}
                <div
                  className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-border-trace"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #2563eb 330deg, #00f0ff 350deg, #09090b 360deg)',
                  }}
                />

                {/* Card Body */}
                <div className="relative z-10 h-full p-6 sm:p-7 rounded-[23px] bg-white border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-start gap-4">
                  {/* Subtle Background Glow */}
                  <div
                    className={`absolute -right-6 -bottom-6 w-28 h-28 bg-gradient-to-tr ${stat.accent} opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-all duration-500 pointer-events-none`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${stat.iconBg}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Number & Labels */}
                  <div className="flex flex-col text-left">
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
                        {counts[index]}
                      </span>
                      <span className="font-display text-2xl sm:text-3xl font-bold text-blue-600">
                        {stat.suffix}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-neutral-900 mt-1 leading-snug">
                      {stat.label}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 mt-0.5 leading-tight">
                      {stat.sublabel}
                    </span>
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
