import React from 'react'
import { Trophy, Award, TrendingUp } from 'lucide-react'
import { soundFx } from '../utils/audio'

const achievements = [
  {
    number: '50+',
    label: 'Products Shipped',
    desc: 'Scalable web and mobile applications delivered on time.',
  },
  {
    number: '< 1.2s',
    label: 'Core Web Vitals',
    desc: 'Sub-second first contentful paint across client storefronts.',
  },
  {
    number: '99.9%',
    label: 'Production SLA',
    desc: 'Reliable cloud edge deployments on Vercel & AWS.',
  },
  {
    number: '100%',
    label: 'IP Transfer',
    desc: 'Full repository, code ownership, and documentation handed over.',
  },
]

const awards = [
  {
    year: '2025',
    title: 'High-Performance Web Architecture',
    issuer: 'React & Next.js 15 Specialization',
    icon: <Trophy className="w-4 h-4 text-white" />,
  },
  {
    year: '2024',
    title: '5.0-Star Delivery Excellence',
    issuer: 'Verified Enterprise Client Satisfaction',
    icon: <Award className="w-4 h-4 text-white" />,
  },
  {
    year: '2024',
    title: 'Fast-Track MVP Engineering',
    issuer: 'Agile Startup Product Acceleration',
    icon: <TrendingUp className="w-4 h-4 text-white" />,
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-10 md:py-14 px-4 sm:px-6 md:px-12 bg-neutral-950 text-white relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Simple Minimal Header */}
        <div className="mb-6">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            PROVEN TRACK RECORD
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
            Achievements & Industry Recognitions<span className="text-[#ea580c]">.</span>
          </h2>
        </div>

        {/* 1. Key Metrics / Achievements Row (rounded-[4px]) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="p-4 rounded-[4px] bg-white/[0.03] border border-white/10 text-left transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06] interactive"
            >
              <div className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                {item.number}
              </div>
              <div className="font-display font-semibold text-xs text-neutral-200 mt-0.5">
                {item.label}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1 leading-snug font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Industry Recognitions & Honors (rounded-[4px]) */}
        <div>
          <h3 className="font-display font-bold text-xs text-neutral-300 mb-3 tracking-tight uppercase">
            Industry Recognitions & Honors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-[4px] bg-white/[0.03] border border-white/10 flex items-start gap-3 text-left hover:border-white/20 transition-colors"
              >
                <div className="w-7 h-7 rounded-[4px] bg-white/10 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  {award.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-white leading-tight">
                      {award.title}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-[4px] bg-white/10 text-neutral-300 font-semibold">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-400 mt-0.5">
                    {award.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
