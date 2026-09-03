import React, { useState, useEffect } from 'react'
import { ArrowRight, Code2, Smartphone, Palette, TrendingUp, ChevronRight, X, Star, Pause, Play } from 'lucide-react'
import { soundFx } from '../utils/audio'

export const serviceShowcase = [
  {
    id: 'web',
    title: 'Web Development',
    category: 'React & Next.js 15',
    headline: 'You direct. We build it live.',
    description: 'Describe what you want to create, then watch our engineering team shape your high-converting website, SaaS portal, or custom enterprise tool with sub-second speed.',
    prompt: 'Build a modern e-commerce storefront with instant checkout.',
    cta: 'Build Web App with reactj',
    image: '/images/real-dev-hands.jpg',
    accentColor: '#ea580c',
    icon: <Code2 className="w-5 h-5 text-neutral-900" />,
  },
  {
    id: 'app',
    title: 'App Development',
    category: 'iOS & Android (React Native)',
    headline: 'Native speed. Engineered for mobile.',
    description: 'Turn your product vision into responsive, 60 FPS mobile experiences for iPhone and Android with offline-first data caching and real-time push telemetry.',
    prompt: 'Create a cross-platform mobile app with fluid gestures and push alerts.',
    cta: 'Build Mobile App with reactj',
    image: '/images/real-phone-app.jpg',
    accentColor: '#8b5cf6',
    icon: <Smartphone className="w-5 h-5 text-neutral-900" />,
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    category: 'Figma & Design Systems',
    headline: 'Intuitive layouts. Crafted for conversion.',
    description: 'Deliver human-centered digital experiences with bespoke component libraries, modern wireframes, interactive micro-animations, and pixel-perfect design systems.',
    prompt: 'Design a sleek Figma UI design system and interactive prototype.',
    cta: 'Design UI/UX with reactj',
    image: '/images/real-uiux-design.jpg',
    accentColor: '#3b82f6',
    icon: <Palette className="w-5 h-5 text-neutral-900" />,
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    category: 'SEO & Performance Growth',
    description: 'Execute data-driven technical SEO, Google Ads (PPC), and Meta performance funnels that turn search demand into predictable qualified revenue pipeline.',
    prompt: 'Scale organic Google search rankings and 10x conversion rate optimization.',
    cta: 'Scale Growth with reactj',
    image: '/images/real-analytics-desk.jpg',
    accentColor: '#10b981',
    icon: <TrendingUp className="w-5 h-5 text-neutral-900" />,
  },
]

export const clientReviews = [
  {
    name: 'Rahul Varma',
    role: 'Founder, LS & Collections',
    rating: 5,
    comment: 'reactj delivered our luxury silk storefront with sub-second page loads. Our online conversion rate increased by 42% within the first month of launch.',
    tag: 'E-Commerce Storefront',
  },
  {
    name: 'Vikramaditya Rao',
    role: 'VP of Engineering, Geonixa',
    rating: 5,
    comment: 'The team built both our Enterprise HRMS and AI Talent proctoring system with Next.js 15. The code quality, velocity, and architecture exceeded expectations.',
    tag: 'Enterprise PWA',
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Growth Lead, Kalinq SaaS',
    rating: 5,
    comment: 'Our creator sponsorship platform needed high-speed APIs and real-time notifications. reactj built our entire web app with seamless Stripe billing.',
    tag: 'SaaS Platform',
  },
  {
    name: 'Suresh Patel',
    role: 'Director, Spectrum Gold Alloys',
    rating: 5,
    comment: 'Exceptional attention to detail and SEO optimization. Our industrial wire catalog began ranking top 3 for technical keywords across India in 6 weeks.',
    tag: 'Industrial Catalog & SEO',
  },
]

export default function AboutSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showReviewsModal, setShowReviewsModal] = useState(false)

  // Auto-cycle one by one like Hostinger
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % serviceShowcase.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [isPlaying])

  const current = serviceShowcase[activeIdx]

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Service Tabs Switcher */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {serviceShowcase.map((item, idx) => {
            const isActive = activeIdx === idx
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundFx.playClick()
                  setActiveIdx(idx)
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 interactive ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900'
                }`}
              >
                <span>{item.title}</span>
              </button>
            )
          })}
        </div>

        {/* Hostinger-Style Split Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Stacked Card Deck with Floating Prompt Pill (lg:col-span-6) */}
          <div className="lg:col-span-6 relative flex justify-center py-4">
            
            <div className="relative w-full max-w-md">
              
              {/* Layer 3 (Deepest Back Stack Card) */}
              <div className="absolute inset-0 -top-6 -left-3 right-3 h-64 sm:h-72 bg-neutral-300/60 rounded-3xl transform -rotate-3 transition-transform duration-500 pointer-events-none" />

              {/* Layer 2 (Middle Stack Card) */}
              <div className="absolute inset-0 -top-3 -right-3 left-3 h-64 sm:h-72 bg-neutral-800/80 rounded-3xl transform rotate-2 transition-transform duration-500 pointer-events-none" />

              {/* Layer 1 (Active Front Showcase Card / Browser Window) */}
              <div className="relative bg-white rounded-3xl border border-neutral-200/90 shadow-2xl overflow-hidden transition-all duration-500">
                
                {/* Browser Window Header Bar */}
                <div className="px-4 py-3 bg-white border-b border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 font-semibold tracking-wider">
                    reactj • {current.category}
                  </span>
                  
                  {/* Pause / Play Auto-cycle Toggle */}
                  <button
                    onClick={() => {
                      soundFx.playClick()
                      setIsPlaying(!isPlaying)
                    }}
                    className="text-neutral-400 hover:text-neutral-700 transition-colors p-1"
                    title={isPlaying ? 'Pause Auto-cycle' : 'Resume Auto-cycle'}
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </button>
                </div>

                {/* Photo & Live Interface Preview */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
                  <img
                    key={current.id}
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover animate-fade-in"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

              {/* Floating Bottom Dynamic Prompt Pill */}
              <div className="relative -mt-6 mx-3 sm:mx-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-neutral-200/90 shadow-[0_12px_30px_rgba(0,0,0,0.12)] flex items-center justify-between gap-3 animate-fade-in">
                <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug text-left">
                  "{current.prompt}"
                </p>
                <a
                  href="#contact"
                  onClick={() => soundFx.playClick()}
                  className="w-8 h-8 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0 hover:bg-neutral-950 transition-colors shadow-xs"
                  aria-label="Submit project request"
                >
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Editorial Typography & Clickable Trust Badge (lg:col-span-6) */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center space-y-6">
            
            {/* Top Brand Logo / Category Icon */}
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
              {current.icon}
            </div>

            {/* Main Headline */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-950 tracking-tight leading-[1.15]">
              {current.headline}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-lg">
              {current.description}
            </p>

            {/* Action Link with Arrow */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-950 hover:text-[#ea580c] transition-colors group interactive"
              >
                <span>{current.cta}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Clickable Trust Badge: Opens Verified Client Reviews Modal */}
            <div className="pt-6 border-t border-neutral-100">
              <button
                onClick={() => {
                  soundFx.playClick()
                  setShowReviewsModal(true)
                }}
                className="group flex items-center gap-3.5 p-2 rounded-2xl hover:bg-neutral-50 transition-all text-left border border-transparent hover:border-neutral-200 shadow-2xs interactive"
              >
                {/* Overlapping Avatar Stack */}
                <div className="flex items-center -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                    RV
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                    VR
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                    AD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs font-mono">
                    50+
                  </div>
                </div>

                {/* Text with Clickable Indicator */}
                <div>
                  <p className="text-xs text-neutral-600 font-medium group-hover:text-neutral-950 transition-colors">
                    Ambitious brands choose <span className="font-bold text-neutral-900 underline decoration-orange-400 underline-offset-2">reactj</span>
                  </p>
                  <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
                    Click to view verified client reviews ★★★★★
                  </span>
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Verified Client Reviews Modal */}
      {showReviewsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-left relative">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-neutral-900 ml-1">5.0 / 5.0</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950">
                  Client Reviews & Verified Testimonials
                </h3>
              </div>

              <button
                onClick={() => {
                  soundFx.playClick()
                  setShowReviewsModal(false)
                }}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Reviews Grid */}
            <div className="space-y-4">
              {clientReviews.map((rev, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">{rev.name}</h4>
                      <p className="text-xs text-neutral-500">{rev.role}</p>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600 font-semibold">
                      {rev.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal italic">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>

            {/* Modal CTA */}
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                100% Verified Project Delivery by reactj
              </span>
              <a
                href="#contact"
                onClick={() => {
                  soundFx.playClick()
                  setShowReviewsModal(false)
                }}
                className="px-5 py-2.5 rounded-full bg-neutral-950 text-white font-bold text-xs hover:bg-[#ea580c] transition-colors"
              >
                Start Your Project →
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
