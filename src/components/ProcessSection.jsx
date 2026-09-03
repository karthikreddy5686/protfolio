import React, { useState } from 'react'
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Terminal, Compass, Layers, Zap, Rocket } from 'lucide-react'
import { soundFx } from '../utils/audio'

const steps = [
  {
    number: '01',
    phase: 'Phase 1: Architecture & Scope Discovery',
    title: 'Precision Blueprinting & Threat Modeling',
    description:
      'We deconstruct your business objectives, target audience personas, competitor landscape, and technical constraints into a comprehensive System Architecture Document (SAD).',
    duration: '3 - 5 Days',
    icon: Compass,
    deliverables: [
      'Comprehensive System Architecture & Schema',
      'API contract specification (REST / GraphQL)',
      'Security threat model & compliance roadmap',
      'Fixed milestone sprint timeline & SLA',
    ],
  },
  {
    number: '02',
    phase: 'Phase 2: Product Design & Interactive Prototyping',
    title: 'High-Fidelity UI/UX & Motion Systems',
    description:
      'We craft bespoke, human-centered user interfaces in Figma with interactive micro-animations, clickable prototypes, and exhaustive design token libraries.',
    duration: '1 - 2 Weeks',
    icon: Layers,
    deliverables: [
      'Interactive Figma prototypes (Desktop + Mobile)',
      'Bespoke visual branding & icon asset library',
      'Micro-interaction & kinetic animation specs',
      'Usability testing & feedback alignment',
    ],
  },
  {
    number: '03',
    phase: 'Phase 3: Production Engineering',
    title: 'Sub-Second React & Edge Full-Stack Build',
    description:
      'Senior engineers write clean, strictly typed, modular code. We integrate serverless APIs, optimize client bundles, and build robust database models with zero technical debt.',
    duration: '2 - 4 Weeks',
    icon: Terminal,
    deliverables: [
      'Production-ready React 19 / Next.js codebase',
      'Scalable database migrations & edge API endpoints',
      'Headless CMS & third-party SaaS integrations',
      'Weekly staging environment sprint demos',
    ],
  },
  {
    number: '04',
    phase: 'Phase 4: Rigorous Quality Assurance',
    title: '100% Core Web Vitals & Security Audit',
    description:
      'Every screen undergoes multi-device regression testing, cross-browser compatibility verification, automated unit/E2E testing, and lighthouse speed benchmarks.',
    duration: '3 - 5 Days',
    icon: Zap,
    deliverables: [
      '100/100 Google PageSpeed & Core Web Vitals audit',
      'WCAG 2.1 AA accessibility compliance check',
      'Automated Playwright/Cypress end-to-end tests',
      'Security penetration & SSL/DDoS verification',
    ],
  },
  {
    number: '05',
    phase: 'Phase 5: Deployment & Scale',
    title: 'Zero-Downtime Launch & Growth Handover',
    description:
      'We orchestrate smooth production DNS cutovers on global edge CDNs, hand over complete source code ownership, train your team, and provide 30 days of complimentary hyper-care.',
    duration: 'Ongoing Support',
    icon: Rocket,
    deliverables: [
      'Zero-downtime production deployment',
      'Full Git repository & IP transfer',
      'Admin team walkthrough & recorded training',
      '30-day post-launch warranty & SLA guarantee',
    ],
  },
]

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-neutral-50/70 relative border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700">
              How We Deliver
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-neutral-950 tracking-tight leading-[1.1] mb-5">
            The 5-Stage Velocity Blueprint
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            From initial wireframe to hyper-growth scale, our structured agile methodology eliminates risk, guarantees transparency, and ships exceptional results on time.
          </p>
        </div>

        {/* Process Timeline Stepper Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {steps.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => {
                soundFx.playClick()
                setActiveStep(idx)
              }}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 interactive select-none ${
                activeStep === idx
                  ? 'bg-neutral-950 text-white border-neutral-950 shadow-lg scale-[1.02]'
                  : 'bg-white text-neutral-800 border-neutral-200/80 hover:border-neutral-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${activeStep === idx ? 'text-blue-400' : 'text-neutral-400'}`}>
                  {step.number}
                </span>
                <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded ${activeStep === idx ? 'bg-white/10 text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                  {step.duration}
                </span>
              </div>
              <span className="font-display font-bold text-xs sm:text-sm block line-clamp-1">
                {step.title.split('&')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Deep Dive Card */}
        <div className="w-full rounded-3xl bg-white border border-neutral-300 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-blue-600">
                  {steps[activeStep].number}
                </span>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                    {steps[activeStep].phase}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-8">
                {steps[activeStep].description}
              </p>

              {/* Action */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    soundFx.playClick()
                    setActiveStep((prev) => (prev + 1) % steps.length)
                  }}
                  className="px-6 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 interactive"
                >
                  <span>Next Stage: {steps[(activeStep + 1) % steps.length].number}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Deliverables Box */}
            <div className="lg:col-span-5 w-full p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                  Key Phase Deliverables
                </h4>
                <span className="text-[10px] font-mono text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  {steps[activeStep].duration}
                </span>
              </div>

              <ul className="space-y-3.5">
                {steps[activeStep].deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
