import React, { useEffect } from 'react'
import { X, ExternalLink, ArrowRight, Zap, Globe, ShieldCheck } from 'lucide-react'
import { soundFx } from '../utils/audio'

export default function ProjectModal({ project, onClose, onInquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-neutral-200 text-neutral-900 p-6 sm:p-10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick()
            onClose()
          }}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 flex items-center justify-center text-neutral-700 transition-all interactive"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-neutral-500">
            {project.client}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight mb-4">
          {project.title}
        </h2>

        {/* Overview */}
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
          {project.overview}
        </p>

        {/* Highlighted Metric Banner */}
        <div className="p-6 rounded-2xl bg-neutral-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider block mb-1">
              Primary Business Metric
            </span>
            <span className="font-display font-bold text-xl sm:text-2xl text-white">
              {project.impact}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/10 text-emerald-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Production Ready
            </span>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-neutral-200">
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-neutral-950 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              The Architectural Challenge
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-neutral-950 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              The reactj Solution
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item.name}
                className="text-xs font-mono font-semibold px-3 py-1.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 flex items-center gap-1.5"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="px-6 py-3 rounded-xl bg-neutral-950 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md interactive"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => {
                soundFx.playClick()
                onClose()
                if (onInquire) onInquire(project.title)
              }}
              className="px-5 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs uppercase tracking-wider transition-colors interactive"
            >
              Request Similar Build
            </button>
          </div>

          <span className="text-xs text-neutral-500 font-mono">
            reactj Verified Project
          </span>
        </div>

      </div>
    </div>
  )
}
