import React from 'react'
import { Trophy, Star, Award, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react'
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
    label: 'Production Uptime',
    desc: 'Reliable cloud edge deployments on Vercel & AWS.',
  },
  {
    number: '100%',
    label: 'Code & IP Ownership',
    desc: 'Full repository transfer and post-launch documentation.',
  },
]

const awards = [
  {
    year: '2025',
    title: 'High-Performance Web Architecture',
    issuer: 'React & Next.js 15 Specialization',
    icon: <Trophy className="w-4 h-4 text-neutral-900" />,
  },
  {
    year: '2024',
    title: '5.0-Star Delivery Excellence',
    issuer: 'Verified Enterprise Client Satisfaction',
    icon: <Award className="w-4 h-4 text-neutral-900" />,
  },
  {
    year: '2024',
    title: 'Fast-Track MVP Engineering',
    issuer: 'Agile Startup Product Acceleration',
    icon: <TrendingUp className="w-4 h-4 text-neutral-900" />,
  },
]

const reviews = [
  {
    quote: 'reactj delivered our luxury silk storefront with sub-second page loads. Our online conversion rate increased by 42% in month one.',
    author: 'Rahul Varma',
    role: 'Founder, LS & Collections',
  },
  {
    quote: 'The team built our enterprise HRMS and AI Talent proctoring system with Next.js 15. The velocity and clean code exceeded expectations.',
    author: 'Vikramaditya Rao',
    role: 'VP of Engineering, Geonixa',
  },
  {
    quote: 'Exceptional attention to technical SEO and performance. Our industrial catalog started ranking top 3 for core keywords across India in 6 weeks.',
    author: 'Suresh Patel',
    role: 'Director, Spectrum Gold Alloys',
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-10 md:py-14 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto text-left">
        
        {/* Simple Minimal Header */}
        <div className="mb-8">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-1">
            PROVEN TRACK RECORD
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
            Achievements, Awards & Client Notes
          </h2>
        </div>

        {/* 1. Key Metrics / Achievements Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/90 text-left transition-all duration-200 hover:border-neutral-400 hover:bg-white interactive"
            >
              <div className="font-display font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                {item.number}
              </div>
              <div className="font-display font-semibold text-xs text-neutral-800 mt-0.5">
                {item.label}
              </div>
              <p className="text-[11px] text-neutral-500 mt-1 leading-snug font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Awards & Recognitions (Simple List) */}
        <div className="mb-8">
          <h3 className="font-display font-bold text-sm text-neutral-900 mb-3 tracking-tight">
            Recognitions & Honors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-neutral-50/60 border border-neutral-200/80 flex items-start gap-3 text-left"
              >
                <div className="w-7 h-7 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5">
                  {award.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-neutral-900 leading-tight">
                      {award.title}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-200/70 text-neutral-700 font-semibold">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-500 mt-0.5">
                    {award.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Client Notes & Reviews (Simple Quote Cards) */}
        <div>
          <h3 className="font-display font-bold text-sm text-neutral-900 mb-3 tracking-tight">
            Client Reviews & Notes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-neutral-200/90 text-left flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-neutral-100">
                  <div className="font-bold text-xs text-neutral-900">
                    {rev.author}
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">
                    {rev.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
