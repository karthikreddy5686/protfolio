import React from 'react'
import { ArrowUpRight, Clock, Calendar } from 'lucide-react'
import { soundFx } from '../utils/audio'

const blogs = [
  {
    id: 1,
    title: 'How Next.js 15 & Server Actions Cut E-Commerce Load Times by 70%',
    excerpt: 'A deep dive into our caching architecture, edge rendering strategies, and how sub-second page loads directly increase checkout conversions.',
    category: 'Web Engineering',
    readTime: '4 min read',
    date: 'Sep 2026',
  },
  {
    id: 2,
    title: 'Building Cross-Platform Mobile Apps with React Native in 2026',
    excerpt: 'Bridging native iOS and Android capabilities without compromising 60 FPS performance or code maintainability.',
    category: 'App Development',
    readTime: '6 min read',
    date: 'Aug 2026',
  },
  {
    id: 3,
    title: 'The Modern Technical SEO Playbook: From Core Web Vitals to Schema Dominance',
    excerpt: 'Why traditional keyword stuffing is obsolete and how programmatic SEO paired with flawless Core Web Vitals drives 10x organic pipeline.',
    category: 'Digital Marketing',
    readTime: '5 min read',
    date: 'Aug 2026',
  },
]

export default function BlogSection() {
  return (
    <section id="blogs" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-white relative border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header without AI badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-200">
          <div className="max-w-2xl text-left">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-[1.1]">
              Latest Articles & Insights
            </h2>
          </div>

          <p className="text-sm text-neutral-600 max-w-md text-left lg:text-right font-normal">
            Practical breakdowns on modern web development, mobile architecture, and high-ROI digital marketing strategies.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              onMouseEnter={() => soundFx.playHover()}
              className="group p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 hover:border-neutral-950 hover:bg-white hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between cursor-pointer interactive"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800">
                    {blog.category}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-950 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {blog.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-bold text-neutral-950 group-hover:text-blue-600 transition-colors">
                <span className="font-mono text-[11px] text-neutral-400 font-normal">
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  Read Article <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
