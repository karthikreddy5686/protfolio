import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { soundFx } from '../utils/audio'

export const teamProjects = [
  { name: 'LS Collections', category: 'E-Commerce Storefront', url: 'https://www.lscollections.in/' },
  { name: 'Geonixa EMS', category: 'Enterprise HRMS PWA', url: 'https://ems.geonixa.com' },
  { name: 'Spectrum Alloy Wires', category: 'Industrial Catalog', url: 'https://spectrum-gold.vercel.app/' },
  { name: 'Geonixa Talent', category: 'AI Assessment Terminal', url: 'https://talent.geonixa.com/' },
  { name: 'EMPIRE Platform', category: 'Student Startup Incubator', url: 'https://student-startup-platform.vercel.app' },
  { name: 'Kalinq SaaS', category: 'Creator Sponsorship SaaS', url: 'https://kalinq.vercel.app' },
  { name: 'Kalinq Partners', category: 'Enterprise Campaign CRM', url: 'https://kalinq-partners.vercel.app' },
  { name: 'Geonixa NextJob', category: 'Career Discovery Portal', url: 'https://job.geonixa.com/' },
]

export default function PortfolioSection() {
  return (
    <section id="work" className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
          <div className="text-left">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-neutral-950 tracking-tight">
              Selected Works
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 font-semibold text-left sm:text-right">
            8 Live Client Deployments
          </div>
        </div>

        {/* Minimalist Text-Based Project Directory */}
        <div className="divide-y divide-neutral-200/80">
          {teamProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="group py-4 sm:py-5 flex items-center justify-between transition-all duration-200 hover:px-2 interactive"
            >
              <div className="flex items-center gap-4 text-left">
                <span className="font-mono text-xs text-neutral-400 font-normal w-6">
                  0{idx + 1}
                </span>
                <span className="font-display font-bold text-base sm:text-lg text-neutral-900 group-hover:text-[#ea580c] transition-colors">
                  {project.name}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider hidden sm:inline-block">
                  {project.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[#ea580c] text-neutral-600 group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
