import React, { useState } from 'react'
import { Calculator, Sparkles, Clock, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import { soundFx } from '../utils/audio'

const projectTypes = [
  { id: 'web-app', pillar: 'Web Development', name: '🌐 Custom Web Application (React/Next.js)', baseCost: 45000, baseWeeks: 4 },
  { id: 'web-ecom', pillar: 'Web Development', name: '🛍️ Headless E-Commerce Storefront', baseCost: 38000, baseWeeks: 3.5 },
  { id: 'mobile-app', pillar: 'App Development', name: '📱 iOS & Android Mobile App (React Native)', baseCost: 55000, baseWeeks: 5 },
  { id: 'saas-platform', pillar: 'App Development', name: '⚡ Cloud SaaS Platform & Backend API', baseCost: 65000, baseWeeks: 6 },
  { id: 'digital-seo', pillar: 'Digital Marketing', name: '📈 Technical SEO & Organic Growth Sprint', baseCost: 25000, baseWeeks: 2 },
  { id: 'digital-ads', pillar: 'Digital Marketing', name: '🎯 Performance Paid Ads (PPC) & CRO Engine', baseCost: 28000, baseWeeks: 2.5 },
]

const addOnsList = [
  { id: 'auth', name: 'User Authentication & RBAC Security', cost: 6500, days: 3 },
  { id: 'cms', name: 'Headless CMS & Content Model', cost: 7500, days: 4 },
  { id: 'payments', name: 'Razorpay / UPI / Multi-Payment Gateway', cost: 6000, days: 3 },
  { id: 'motion', name: 'Extreme 3D & WebGL Canvas Effects', cost: 9500, days: 5 },
  { id: 'seo', name: 'Technical SEO Audit & Schema Suite', cost: 5500, days: 2 },
  { id: 'analytics', name: 'Conversion API & Attribution Tracking', cost: 5000, days: 2 },
]

export default function ProjectCalculator({ onSelectEstimate }) {
  const [selectedType, setSelectedType] = useState('web-app')
  const [scopeScale, setScopeScale] = useState(8)
  const [selectedAddons, setSelectedAddons] = useState(['auth', 'cms', 'motion'])
  const [speedTier, setSpeedTier] = useState('standard') // 'standard', 'fast', 'sprint'

  const toggleAddon = (id) => {
    soundFx.playClick()
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id))
    } else {
      setSelectedAddons([...selectedAddons, id])
    }
  }

  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0]

  // Calculations in INR
  const basePrice = currentType.baseCost
  const pageMultiplier = Math.max(1, (scopeScale / 6) * 0.45 + 0.55)
  const addonCost = selectedAddons.reduce((sum, id) => {
    const addon = addOnsList.find((a) => a.id === id)
    return sum + (addon ? addon.cost : 0)
  }, 0)

  let speedMultiplier = 1
  let speedTimelineDivisor = 1
  if (speedTier === 'fast') {
    speedMultiplier = 1.2
    speedTimelineDivisor = 1.35
  } else if (speedTier === 'sprint') {
    speedMultiplier = 1.4
    speedTimelineDivisor = 1.7
  }

  const totalCostMin = Math.round((basePrice * pageMultiplier + addonCost) * speedMultiplier)
  const totalCostMax = Math.round(totalCostMin * 1.25)

  const calculatedWeeks = Math.max(
    1.5,
    parseFloat(((currentType.baseWeeks + (scopeScale / 8) + (selectedAddons.length * 0.4)) / speedTimelineDivisor).toFixed(1))
  )

  const handleApplyEstimate = () => {
    soundFx.playSuccess()
    const summary = {
      projectType: currentType.name,
      screens: scopeScale,
      addons: selectedAddons,
      speed: speedTier,
      costRange: `₹${totalCostMin.toLocaleString('en-IN')} - ₹${totalCostMax.toLocaleString('en-IN')}`,
      timeline: `${calculatedWeeks} Weeks`,
    }
    if (onSelectEstimate) onSelectEstimate(summary)
    
    // Smooth scroll to contact
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="estimator" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700">
              Interactive Scope & Cost Estimator
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-[1.1] mb-5">
            Transparent Pricing for Web, App & Marketing
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Configure your project scope below across Web Development, Mobile App Engineering, or Digital Marketing Growth sprints to receive an instant budget and timeline estimation in Indian Rupees (₹).
          </p>
        </div>

        {/* Main Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 bg-neutral-50/80 p-6 sm:p-10 rounded-3xl border border-neutral-200/90">
            
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-3">
                1. Select Service & Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => {
                      soundFx.playClick()
                      setSelectedType(type.id)
                    }}
                    className={`p-3.5 rounded-2xl text-left border transition-all duration-200 interactive flex flex-col justify-between ${
                      selectedType === type.id
                        ? 'bg-neutral-950 text-white border-neutral-950 shadow-md'
                        : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase text-blue-500 font-bold block mb-0.5">
                        {type.pillar}
                      </span>
                      <span className="text-xs font-bold font-display">{type.name}</span>
                    </div>
                    <span className={`text-[10px] font-mono mt-2 ${selectedType === type.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Starts at ₹{type.baseCost.toLocaleString('en-IN')} • ~{type.baseWeeks}w
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Page & Screen Count / Scope Scale Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                  2. Project Scope Units / Screens / Campaign Channels
                </label>
                <span className="text-sm font-mono font-bold text-neutral-950 px-3 py-1 rounded-full bg-white border border-neutral-200">
                  {scopeScale} Units
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={35}
                step={1}
                value={scopeScale}
                onChange={(e) => setScopeScale(parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
                <span>Starter (2-5)</span>
                <span>Growth (8-15)</span>
                <span>Enterprise (25+)</span>
              </div>
            </div>

            {/* 3. Specialized Features & Modules */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-3">
                3. Technical Modules & Campaign Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addOnsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id)
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all interactive select-none ${
                        isChecked
                          ? 'bg-blue-50/90 border-blue-500 text-neutral-950 font-semibold'
                          : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-neutral-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs">{addon.name}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-blue-600">
                        +₹{addon.cost.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 4. Delivery Speed */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-3">
                4. Desired Delivery Velocity
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Standard Pace', tag: 'Standard' },
                  { id: 'fast', label: 'Fast-Track', tag: '+20% Speed' },
                  { id: 'sprint', label: 'Rush Sprint', tag: '+40% Speed' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => {
                      soundFx.playClick()
                      setSpeedTier(tier.id)
                    }}
                    className={`py-2.5 px-3 rounded-xl text-center border text-xs transition-all interactive ${
                      speedTier === tier.id
                        ? 'bg-neutral-950 text-white border-neutral-950 font-bold shadow-sm'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div>{tier.label}</div>
                    <span className="text-[9px] font-mono opacity-70 block">{tier.tag}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Real-Time Calculation Sticky Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative p-8 rounded-3xl bg-neutral-950 text-white shadow-2xl overflow-hidden border border-neutral-800">
              {/* Background Ambient Glow */}
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold">
                      Calculated Scope Summary
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-neutral-300">
                    reactj SLA
                  </span>
                </div>

                {/* Estimate Numbers in INR */}
                <div className="space-y-6 mb-8">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block mb-1">
                      Estimated Investment Range (INR)
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                        ₹{totalCostMin.toLocaleString('en-IN')}
                      </span>
                      <span className="text-lg text-neutral-400 font-normal">
                        - ₹{totalCostMax.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-400 font-mono mt-1 block">
                      INR (₹) • Transparent Milestone-Driven Pricing
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-mono text-neutral-400 block">
                          Production Timeline
                        </span>
                        <span className="font-display font-bold text-base text-white">
                          ~{calculatedWeeks} Weeks to Launch
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-800/60">
                      Guaranteed
                    </span>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="space-y-2.5 text-xs text-neutral-300 font-mono mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Dedicated Senior Lead Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>100% IP & Asset Ownership Transfer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>30-Day Post-Launch Warranty & Support</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={handleApplyEstimate}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full py-4 rounded-2xl bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:bg-cyan-400 transition-all duration-300 interactive"
                  data-cursor="LOCK ESTIMATE"
                >
                  <span>Lock in This Estimate →</span>
                </button>

                <p className="text-[10px] text-neutral-500 font-mono text-center mt-3">
                  Locks in your team allocation slot for the next 14 days
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
