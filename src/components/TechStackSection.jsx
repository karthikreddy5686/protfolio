import React, { useState } from 'react'
import { Sparkles, Terminal, Cpu, Database, Smartphone, Cloud, Layers } from 'lucide-react'
import { soundFx } from '../utils/audio'

const categories = [
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    icon: Terminal,
    skills: [
      { name: 'React 19', tag: 'Core Library', level: 'Expert' },
      { name: 'Next.js 15', tag: 'SSR / App Router', level: 'Expert' },
      { name: 'TypeScript', tag: 'Type-Safe', level: 'Expert' },
      { name: 'Tailwind CSS', tag: 'Design Systems', level: 'Master' },
      { name: 'Vite', tag: 'Fast Bundling', level: 'Master' },
      { name: 'WebGL / Three.js', tag: '3D Canvas', level: 'Advanced' },
      { name: 'TanStack Query', tag: 'State & Caching', level: 'Expert' },
      { name: 'Framer Motion', tag: 'Micro-Animations', level: 'Master' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend, APIs & Databases',
    icon: Database,
    skills: [
      { name: 'Node.js / Express', tag: 'Microservices', level: 'Expert' },
      { name: 'Python / FastAPI', tag: 'AI & Data APIs', level: 'Advanced' },
      { name: 'PostgreSQL', tag: 'Relational DB', level: 'Expert' },
      { name: 'Redis', tag: 'In-Memory Cache', level: 'Expert' },
      { name: 'GraphQL', tag: 'Schema APIs', level: 'Advanced' },
      { name: 'Supabase', tag: 'Auth & Realtime', level: 'Master' },
      { name: 'Prisma / Drizzle', tag: 'Type-Safe ORM', level: 'Expert' },
      { name: 'Stripe API', tag: 'Global Billing', level: 'Master' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile App Architecture',
    icon: Smartphone,
    skills: [
      { name: 'React Native', tag: 'iOS & Android', level: 'Expert' },
      { name: 'Expo SDK', tag: 'Rapid Native', level: 'Master' },
      { name: 'Flutter', tag: 'Cross-Platform', level: 'Advanced' },
      { name: 'Swift', tag: 'Native iOS', level: 'Advanced' },
      { name: 'WebRTC', tag: 'Realtime Audio/Video', level: 'Advanced' },
      { name: 'Firebase', tag: 'Push & Storage', level: 'Expert' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud, Edge & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS Cloud', tag: 'S3, Lambda, ECS', level: 'Advanced' },
      { name: 'Vercel Edge', tag: 'Global CDN', level: 'Master' },
      { name: 'Cloudflare', tag: 'Workers & DNS', level: 'Master' },
      { name: 'Docker', tag: 'Containerization', level: 'Expert' },
      { name: 'CI/CD Pipelines', tag: 'GitHub Actions', level: 'Expert' },
      { name: 'Datadog / PostHog', tag: 'Telemetry & Analytics', level: 'Advanced' },
    ],
  },
]

export default function TechStackSection() {
  const [selectedCat, setSelectedCat] = useState('frontend')

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700">
              Modern Tech Arsenal
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-[1.1] mb-5">
            Battle-Tested Technologies
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            We pick best-in-class, modern open-source foundations that guarantee security, ultra-fast performance, and zero vendor lock-in.
          </p>
        </div>

        {/* Category Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isSelected = selectedCat === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick()
                  setSelectedCat(cat.id)
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-300 interactive ${
                  isSelected
                    ? 'bg-neutral-950 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-950'
                }`}
                data-cursor={cat.title.split(' ')[0]}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories
            .find((c) => c.id === selectedCat)
            ?.skills.map((skill) => (
              <div
                key={skill.name}
                onMouseEnter={() => soundFx.playHover()}
                className="group p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-neutral-950 hover:bg-white hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between interactive select-none"
                data-cursor="TECH"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-base text-neutral-950 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    {skill.level}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-200/60 text-[11px] font-mono text-neutral-500">
                  <span>{skill.tag}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  )
}
