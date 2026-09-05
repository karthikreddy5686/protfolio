import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { soundFx } from '../utils/audio'

export default function Hero() {
  const [activeBadge, setActiveBadge] = useState(null)
  const [rocketBooming, setRocketBooming] = useState(false)
  const [boomParticles, setBoomParticles] = useState([])

  const triggerRocketBoom = () => {
    if (rocketBooming) return
    soundFx.playSuccess()
    setRocketBooming(true)

    // Generate burst particles
    const particles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 80,
      size: Math.random() * 6 + 3,
      color: ['#ea580c', '#f97316', '#fbbf24', '#ef4444', '#000000'][Math.floor(Math.random() * 5)],
    }))
    setBoomParticles(particles)

    setTimeout(() => {
      setBoomParticles([])
    }, 900)

    setTimeout(() => {
      setRocketBooming(false)
    }, 1200)
  }

  const stats = [
    {
      id: 'projects',
      icon: (isActive) => (
        <svg
          className={`w-3.5 h-3.5 transition-all duration-300 ${
            isActive ? 'text-[#ea580c] scale-125 rotate-12' : 'text-neutral-800'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      value: '50+',
      label: 'Projects',
      onClick: () => {
        soundFx.playClick()
        setActiveBadge('projects')
        setTimeout(() => setActiveBadge(null), 800)
      },
    },
    {
      id: 'clients',
      icon: (isActive) => (
        <svg
          className={`w-3.5 h-3.5 transition-all duration-300 ${
            isActive ? 'text-amber-500 scale-125 -rotate-12' : 'text-neutral-800'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2.5 4 2.5 4-2.5 4-2.5" strokeWidth="2.5" />
          <circle cx="9" cy="9.5" r="1" fill="currentColor" />
          <circle cx="15" cy="9.5" r="1" fill="currentColor" />
        </svg>
      ),
      value: '30+',
      label: 'Clients',
      onClick: () => {
        soundFx.playClick()
        setActiveBadge('clients')
        setTimeout(() => setActiveBadge(null), 800)
      },
    },
    {
      id: 'experience',
      icon: (isActive) => (
        <svg
          className={`w-3.5 h-3.5 transition-all duration-500 ${
            isActive ? 'text-amber-400 scale-130 rotate-[360deg] drop-shadow-sm' : 'text-neutral-800'
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      value: '5+',
      label: 'Years Experience',
      onClick: () => {
        soundFx.playClick()
        setActiveBadge('experience')
        setTimeout(() => setActiveBadge(null), 800)
      },
    },
    {
      id: 'dedication',
      isRocket: true,
      icon: (isActive) => (
        <div className="relative flex items-center justify-center">
          {/* Rocket Icon */}
          <svg
            className={`w-3.5 h-3.5 transition-all duration-300 ${
              rocketBooming
                ? 'text-[#ea580c] -translate-y-8 translate-x-8 scale-150 rotate-45 opacity-0 duration-700 ease-out'
                : isActive
                ? 'text-[#ea580c] -translate-y-1 translate-x-1 rotate-12 scale-125'
                : 'text-neutral-800 group-hover:text-[#ea580c] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 group-hover:scale-125'
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
            <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
          </svg>

          {/* Micro Exhaust Flame on Hover */}
          <span
            className={`absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-red-500 via-orange-500 to-yellow-400 transition-all duration-300 ${
              rocketBooming
                ? 'opacity-0'
                : isActive
                ? 'opacity-100 scale-125 animate-pulse'
                : 'opacity-0 group-hover:opacity-100 group-hover:scale-110 animate-pulse'
            }`}
          />

          {/* Exhaust Flame when booming */}
          {rocketBooming && (
            <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-400 animate-ping" />
          )}
        </div>
      ),
      value: '100%',
      label: 'Dedication',
      onClick: triggerRocketBoom,
    },
  ]

  const services = [
    {
      id: 'web',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: 'Web Development',
      desc: 'Building fast, responsive and scalable websites that drive results.',
    },
    {
      id: 'app',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: 'App Development',
      desc: 'Creating powerful mobile apps for Android and iOS that users love.',
    },
    {
      id: 'uiux',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
      ),
      title: 'UI/UX Design',
      desc: 'Designing intuitive, engaging and user-centered experiences that connect.',
    },
    {
      id: 'marketing',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 11 18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      ),
      title: 'Digital Marketing',
      desc: 'Driving traffic, building brand presence and generating measurable growth.',
    },
  ]

  return (
    <section id="home" className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white text-neutral-900">
      
      {/* Subtle Ambient Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,87,33,0.02)_0%,_rgba(255,255,255,1)_70%)] pointer-events-none" />

      {/* Main Container matching exact layout in Reference Image 2 */}
      <div className="max-w-[1420px] mx-auto relative z-10">

        {/* HERO MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 xl:gap-8 items-start">
          
          {/* ================= LEFT COLUMN: HERO HEADLINE, CTA & 4 STATS ================= */}
          <div className="md:col-span-5 lg:col-span-4 xl:col-span-3.5 flex flex-col justify-center text-left pt-1 md:pt-2 lg:pt-4">
            
            {/* Big Bold Headline: We Design. We Develop. We Grow. */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] text-neutral-950 tracking-tight leading-[1.06] mb-3">
              We Design.<br />
              We Develop.<br />
              We Grow.
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 sm:mb-5 font-sans max-w-sm">
              We build digital experiences that are beautiful, functional, and impactful from idea to growth.
            </p>

            {/* Action Buttons (rounded-[4px]) */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <a
                href="#about"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[4px] bg-neutral-950 hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-xs hover:shadow-md flex items-center gap-1.5 interactive cursor-pointer"
              >
                <span>Verify Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Subtext */}
            <p className="text-[10px] sm:text-[11px] text-neutral-500 font-medium mb-2 tracking-wide">
              Trusted by ideas. Driven by results.
            </p>

            {/* 4 Interactive Stat Badges (In 1 neat row of 4 columns, rounded-[4px]) */}
            <div className="grid grid-cols-4 gap-1 sm:gap-2 pt-0.5 relative">
              {stats.map((stat, i) => {
                const isActive = activeBadge === stat.id
                return (
                  <button
                    key={stat.id || i}
                    type="button"
                    onClick={stat.onClick}
                    onMouseEnter={() => {
                      soundFx.playHover()
                      setActiveBadge(stat.id)
                    }}
                    onMouseLeave={() => {
                      setActiveBadge(null)
                    }}
                    className={`relative flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-[4px] transition-all duration-300 group select-none text-center cursor-pointer border ${
                      isActive || (stat.isRocket && rocketBooming)
                        ? 'bg-orange-50/80 border-[#ea580c] shadow-sm scale-105'
                        : 'bg-neutral-50/90 border-neutral-200/90 hover:border-[#ea580c] hover:bg-orange-50/80 hover:scale-105'
                    }`}
                  >
                    {/* Laurel / Bracket Brackets & Interactive Icon */}
                    <div className="flex items-center gap-0.5 mb-0.5 text-neutral-800 transition-transform duration-200">
                      <span className="text-neutral-400 font-serif text-[10px] sm:text-xs select-none">‹</span>
                      {stat.icon(isActive)}
                      <span className="text-neutral-400 font-serif text-[10px] sm:text-xs select-none">›</span>
                    </div>

                    <span className="font-display font-black text-[11px] sm:text-xs md:text-sm text-neutral-950 leading-tight">
                      {stat.value}
                    </span>

                    <span className="text-[7.5px] sm:text-[8.5px] text-neutral-500 font-medium leading-tight truncate w-full text-center group-hover:text-neutral-900 transition-colors">
                      {stat.label}
                    </span>

                    {/* Boom explosion overlay on rocket card */}
                    {stat.isRocket && rocketBooming && (
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
                        <span className="text-[10px] font-black text-[#ea580c] animate-bounce bg-white/95 px-1 py-0.5 rounded-[2px] shadow-xs border border-orange-200">
                          BOOM! 💥
                        </span>
                      </div>
                    )}
                  </button>
                )
              })}

              {/* Flying Boom Particles */}
              {boomParticles.map((p) => (
                <span
                  key={p.id}
                  className="absolute pointer-events-none rounded-full animate-ping z-30"
                  style={{
                    right: '15px',
                    top: '20px',
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    backgroundColor: p.color,
                    transform: `translate(${p.x}px, ${p.y}px)`,
                    transition: 'all 0.8s ease-out',
                  }}
                />
              ))}
            </div>

          </div>

          {/* ================= RIGHT COLUMN: HD CHARACTER BANNER + 4 SERVICE CARDS ================= */}
          <div className="md:col-span-7 lg:col-span-8 xl:col-span-8.5 w-full flex flex-col gap-2.5 sm:gap-3">
            
            {/* 1. Crystal-Clear HD Character Illustration Banner with Ultra-Bright Orange Ground Base */}
            <div className="relative w-full flex items-center justify-center overflow-hidden pb-1 rounded-[4px]">
              {/* Ultra-bright vivid orange background block from knees down */}
              <div className="absolute bottom-1 inset-x-0 h-[30%] bg-[#ff5500] rounded-[4px] pointer-events-none shadow-sm" />
              
              <img
                src="/images/hero-characters-hd.png"
                alt="Web Development, App Development, UI/UX Design, Digital Marketing"
                className="relative z-10 w-full h-auto max-h-[260px] sm:max-h-[320px] md:max-h-[350px] lg:max-h-[380px] object-contain select-none mix-blend-multiply"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>

            {/* 2. 4 Service Cards Directly Below the Illustration: Side by side (2 cols on mobile, 4 on desktop/laptop) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
              {services.map((item) => (
                <a
                  key={item.id}
                  href="#services"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex flex-col p-2.5 sm:p-3 sm:p-3.5 rounded-[4px] bg-white border border-neutral-200/90 hover:border-[#ea580c] hover:bg-orange-50/40 hover:shadow-md hover:shadow-orange-500/10 hover:-translate-y-0.5 transition-all duration-300 group text-left relative cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 text-neutral-900 group-hover:text-[#ea580c] transition-colors duration-200">
                    <span className="p-1 sm:p-1.5 rounded-[4px] bg-neutral-50 border border-neutral-200 text-neutral-800 group-hover:border-orange-300 group-hover:bg-[#ea580c] group-hover:text-white transition-all duration-300 shadow-2xs shrink-0">
                      {item.icon}
                    </span>
                    <h3 className="font-display font-bold text-[11px] sm:text-xs md:text-[13px] text-neutral-950 group-hover:text-[#ea580c] tracking-tight leading-snug transition-colors duration-200 line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-600 group-hover:text-neutral-700 leading-relaxed font-sans transition-colors line-clamp-2 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
