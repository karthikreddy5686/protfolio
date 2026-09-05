import React from 'react'
import { soundFx } from '../utils/audio'

const techRow1 = [
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js 15', category: 'Fullstack Framework', icon: '▲' },
  { name: 'TypeScript', category: 'Language', icon: '📘' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
  { name: 'Node.js', category: 'Backend Engine', icon: '🟢' },
  { name: 'Python', category: 'AI & Data', icon: '🐍' },
  { name: 'FastAPI', category: 'High-Speed APIs', icon: '⚡' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
]

const techRow2 = [
  { name: 'React Native', category: 'iOS & Android', icon: '📱' },
  { name: 'GraphQL', category: 'API Query Layer', icon: '◈' },
  { name: 'Docker', category: 'Containers', icon: '🐳' },
  { name: 'Supabase', category: 'Backend & Auth', icon: '⚡' },
  { name: 'Vercel Edge', category: 'Global CDN & Edge', icon: '▲' },
  { name: 'Google Cloud', category: 'Cloud Infrastructure', icon: '☁️' },
  { name: 'Stripe & Razorpay', category: 'Payment Gateways', icon: '💳' },
  { name: 'Technical SEO', category: 'Growth & Analytics', icon: '📊' },
]

export default function ClientMarquee() {
  return (
    <section className="pt-2 pb-6 md:pb-8 bg-white relative overflow-hidden border-b border-neutral-200/80">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-4 text-center flex flex-col items-center">
        <h2 className="font-display font-bold text-lg sm:text-xl text-neutral-950 tracking-tight">
          Modern High-Performance Engineering Stack
        </h2>
        <p className="text-xs text-neutral-500 max-w-xl mt-0.5 font-normal">
          Battle-tested frameworks, cloud infrastructure, and modern toolchains powering our client products.
        </p>
      </div>

      {/* Row 1 - Left to Right (rounded-[4px]) */}
      <div className="flex overflow-hidden relative w-full select-none py-1 mask-linear">
        <div className="flex shrink-0 items-center gap-2.5 animate-marquee hover:[animation-play-state:paused]">
          {[...techRow1, ...techRow1, ...techRow1].map((tech, idx) => (
            <div
              key={`r1-${idx}`}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-4 py-2 rounded-[4px] bg-neutral-50 border border-neutral-200/90 text-neutral-800 hover:border-[#ea580c] hover:bg-white hover:shadow-xs transition-all duration-200 interactive cursor-default"
            >
              <span className="text-sm">{tech.icon}</span>
              <span className="font-display font-bold text-xs tracking-tight text-neutral-900">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left (rounded-[4px]) */}
      <div className="flex overflow-hidden relative w-full select-none py-1 mask-linear">
        <div className="flex shrink-0 items-center gap-2.5 animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...techRow2, ...techRow2, ...techRow2].map((tech, idx) => (
            <div
              key={`r2-${idx}`}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-4 py-2 rounded-[4px] bg-neutral-50 border border-neutral-200/90 text-neutral-800 hover:border-[#ea580c] hover:bg-white hover:shadow-xs transition-all duration-200 interactive cursor-default"
            >
              <span className="text-sm">{tech.icon}</span>
              <span className="font-display font-bold text-xs tracking-tight text-neutral-900">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
