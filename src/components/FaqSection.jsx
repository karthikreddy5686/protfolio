import React, { useState } from 'react'
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react'
import { soundFx } from '../utils/audio'

const faqs = [
  {
    q: 'How does reactj ensure code quality and avoid AI boilerplate bugs?',
    a: 'We have a strict human-in-the-loop engineering standard. Every pull request is authored and reviewed by senior architects with 5+ years of production experience. We use strict TypeScript typing, end-to-end automated testing suites, automated security scans, and clean architectural principles with zero bloated dependencies.'
  },
  {
    q: 'Who owns the intellectual property and codebase?',
    a: 'You do — 100%. Upon milestone completion and settlement, full intellectual property, Git repository access, documentation, and all design assets (Figma, 3D models) are transferred directly into your company organization.'
  },
  {
    q: 'How fast can our project kick off and what is the typical turnaround?',
    a: 'Most standard projects kick off within 48 to 72 hours of contract execution. Discovery and prototyping takes 1 to 2 weeks, with full production delivery ranging between 3 to 6 weeks depending on custom feature scope. We also offer fast-track rush sprint options.'
  },
  {
    q: 'What is your communication and sprint cadence?',
    a: 'We work through dedicated shared Slack or Microsoft Teams channels, with bi-weekly sprint demos and weekly Loom asynchronous progress walkthroughs. You have direct daily access to your lead technical architect with a guaranteed 15-minute response SLA during business hours.'
  },
  {
    q: 'Do you offer post-launch support and maintenance warranties?',
    a: 'Yes. Every project includes a 30-day complimentary post-launch warranty covering any bug fixes, browser adjustments, or performance tweaks. We also offer dedicated monthly SLA maintenance retainers for continuous feature shipping and DevOps monitoring.'
  },
  {
    q: 'How do milestone payments work?',
    a: 'We operate on transparent, milestone-driven billing (typically 40% project kickoff, 30% after approved prototype & backend staging, 30% upon final production deployment and QA sign-off). We accept UPI, Net Banking, NEFT/RTGS, and Cards in Indian Rupees (₹).'
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    soundFx.playClick()
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-neutral-50/70 relative border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700">
              Clear Answers
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-[1.1] mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Everything you need to know about working with the reactj team.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-neutral-950 shadow-md'
                    : 'bg-white/80 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 interactive cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-neutral-950">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-neutral-950 text-white rotate-180' : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-left border-t border-neutral-100 pt-4 animate-fade-in">
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
