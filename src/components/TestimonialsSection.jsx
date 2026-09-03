import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ShieldCheck } from 'lucide-react'
import { soundFx } from '../utils/audio'

const testimonials = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Apex Fintech UK (London)',
    avatar: 'MV',
    rating: 5,
    title: 'The best engineering partner we have collaborated with in a decade.',
    content:
      'reactj rebuilt our high-frequency trading platform from scratch. Their mastery of WebSockets, sub-second latency optimization, and clean architectural design enabled us to scale to over 250k daily active traders without a single hitch.',
    metric: '99.99% Uptime under high volatility',
  },
  {
    id: 2,
    name: 'Dr. Elena Rostova',
    role: 'VP of Digital Product',
    company: 'Pulse Health Systems (San Francisco)',
    avatar: 'ER',
    rating: 5,
    title: 'Flawless HIPAA-compliant telehealth rollout with 4.9★ rating.',
    content:
      'Finding an agency that truly understands modern WebRTC video encryption, mobile Bluetooth hardware bridges, and beautiful UI/UX is exceptionally rare. reactj delivered our cross-platform iOS and Android apps 3 weeks ahead of schedule.',
    metric: '80k+ Active Patients Connected',
  },
  {
    id: 3,
    name: 'Rohan Malhotra',
    role: 'Founder & CEO',
    company: 'Dadoos Organics D2C (India)',
    avatar: 'RM',
    rating: 5,
    title: 'Our revenue skyrocketed 4.2x within 4 months of launching.',
    content:
      'We switched from a clunky template to a bespoke headless commerce platform architected by reactj. The instant 1-tap checkout and WhatsApp integration slashed our cart abandonment rate to historic lows. Truly world-class human craftsmanship.',
    metric: '₹18 Cr Annual Recurring Revenue',
  },
  {
    id: 4,
    name: 'Claire Dupont',
    role: 'Managing Director',
    company: 'Kairo Luxury Atelier (Milan & Paris)',
    avatar: 'CD',
    rating: 5,
    title: 'Transformed our brand into an interactive digital luxury experience.',
    content:
      'The 3D WebGL interactions and smooth animations designed by reactj set us leagues apart from competitors in Europe. Their team is communicative, rigorous with details, and an absolute joy to build with.',
    metric: '+215% Mobile Checkout Rate',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => {
    soundFx.playClick()
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const next = () => {
    soundFx.playClick()
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const current = testimonials[currentIndex]

  return (
    <section id="reviews" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700">
              Verified Client Feedback
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-neutral-950 tracking-tight leading-[1.1] mb-5">
            Loved by Founders & Engineering Leaders
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Real feedback from visionary founders, CTOs, and product directors who chose reactj for mission-critical software and growth.
          </p>
        </div>

        {/* Big Testimonial Feature Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-neutral-50/90 border border-neutral-200/90 p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-lg">
          
          {/* Top Row: Rating & Nav Buttons */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-200">
            <div className="flex items-center gap-1.5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-mono font-bold text-neutral-900">
                5.0 / 5.0 (Verified Clutch Client)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white hover:bg-neutral-200 border border-neutral-300 flex items-center justify-center text-neutral-800 transition-all interactive"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white hover:bg-neutral-200 border border-neutral-300 flex items-center justify-center text-neutral-800 transition-all interactive"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="text-left mb-10">
            <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-neutral-950 mb-6 leading-snug">
              "{current.title}"
            </h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              "{current.content}"
            </p>
          </div>

          {/* Bottom Row: Author & Metric */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-neutral-200">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-neutral-950 text-white font-mono font-bold text-base flex items-center justify-center shadow-md shrink-0">
                {current.avatar}
              </div>
              <div className="text-left">
                <span className="font-display font-bold text-base text-neutral-950 block">
                  {current.name}
                </span>
                <span className="text-xs text-neutral-500 font-mono block">
                  {current.role} • <strong className="text-neutral-800">{current.company}</strong>
                </span>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold flex items-center gap-2 w-max">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{current.metric}</span>
            </div>
          </div>

        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                soundFx.playClick()
                setCurrentIndex(i)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-8 bg-neutral-950' : 'w-2 bg-neutral-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
