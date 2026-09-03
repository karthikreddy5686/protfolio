import React from 'react'
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react'
import { soundFx } from '../utils/audio'

const services = [
  {
    id: 'web',
    title: 'Web Development',
    category: 'Engineering & Scalability',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'We engineer bespoke web applications, enterprise portals, SaaS products, and high-converting e-commerce storefronts tailored to your exact business workflow.',
    features: [
      'Next.js 15 & React Single Page Applications',
      'E-Commerce & Razorpay / Stripe Payment Integration',
      'Enterprise ERP & Custom Admin Dashboards',
      'Sub-Second Page Load Speeds & Flawless Core Web Vitals',
    ],
  },
  {
    id: 'app',
    title: 'App Development',
    category: 'Mobile iOS & Android',
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'We build fluid, native-grade mobile applications with seamless user journeys, real-time push telemetry, offline syncing, and clean architectural design.',
    features: [
      'Cross-Platform iOS & Android Apps (React Native)',
      'Progressive Web Apps (PWA) with Offline Capability',
      'Real-Time WebSocket Feeds & Push Notifications',
      'Biometric Authentication & Native Hardware Access',
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    category: 'Growth & Performance',
    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'We execute high-impact performance marketing campaigns that capture qualified demand, rank your brand on Google, and scale client acquisition cost-effectively.',
    features: [
      'Technical SEO & Programmatic Keyword Dominance',
      'High-ROI Google PPC & Search Campaigns',
      'Performance Meta Ads (Instagram & Facebook)',
      'Conversion Rate Optimization (CRO) & Funnel A/B Testing',
    ],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-neutral-50/60 relative border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header without AI badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-[1.1]">
              Services Built for Growth
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md">
            Everything your company needs to design, build, and scale world-class digital products and customer acquisition pipelines.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              onMouseEnter={() => soundFx.playHover()}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-neutral-950 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${s.badgeColor}`}>
                    {s.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-neutral-950 mb-3 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                  {s.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-100 mb-8">
                  {s.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="w-full py-3 px-4 rounded-2xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white text-neutral-900 font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 interactive shadow-2xs"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
