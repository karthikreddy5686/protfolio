import React, { useState } from 'react'
import { Send, CheckCircle2, Mail, User, Phone, Zap, ShieldCheck, Clock } from 'lucide-react'
import { soundFx } from '../utils/audio'

export const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfrfqlB572H6cRESYRcTFyaIaz2dc9yPMSgj_6M5557-ytNbA/formResponse'

export default function ContactSection() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [requiredService, setRequiredService] = useState('WEB DEVELOPMENT')
  const [commMethods, setCommMethods] = useState(['Email'])
  const [consultationDate, setConsultationDate] = useState('')
  const [projectOverview, setProjectOverview] = useState('')

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleCommToggle = (method) => {
    soundFx.playClick()
    if (commMethods.includes(method)) {
      if (commMethods.length > 1) {
        setCommMethods(commMethods.filter((m) => m !== method))
      }
    } else {
      setCommMethods([...commMethods, method])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!fullName || !mobileNumber || !requiredService) return

    setLoading(true)
    soundFx.playClick()

    // Build URLSearchParams matching Google Form entry IDs
    const formData = new URLSearchParams()
    formData.append('entry.1119105716', fullName)
    if (email) formData.append('entry.1713956397', email)
    formData.append('entry.1389048219', mobileNumber)
    formData.append('entry.420118808', requiredService)
    
    commMethods.forEach((method) => {
      formData.append('entry.2031857934', method)
    })

    if (consultationDate) {
      formData.append('entry.1499330880', consultationDate)
    }

    if (projectOverview) {
      formData.append('entry.1695980541', projectOverview)
    }

    // Submit to Google Form formResponse endpoint
    fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })
      .then(() => {
        setLoading(false)
        setSubmitted(true)
        soundFx.playSuccess()
      })
      .catch(() => {
        setLoading(false)
        setSubmitted(true)
        soundFx.playSuccess()
      })
  }

  return (
    <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-neutral-50/70 text-neutral-950 relative border-b border-neutral-200/80">
      
      {/* Hidden iframe fallback target */}
      <iframe name="hidden_google_form_iframe" id="hidden_google_form_iframe" className="hidden" title="Google Form Sink" />

      <div className="max-w-7xl mx-auto">
        
        {/* Split 2-Column Layout: Form on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Compact Client Intake Form (rounded-[4px]) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-[4px] bg-white border border-neutral-200 shadow-sm text-left">
              
              <div className="mb-5">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight mb-0.5">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-neutral-500 font-normal">
                  Fill in your details to sync with our client intake database.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center animate-fade-in">
                  <div className="w-12 h-12 rounded-[4px] bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4 shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-neutral-950 mb-1.5">
                    Intake Form Submitted!
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-sm mb-5">
                    Thank you, <span className="font-semibold text-neutral-900">{fullName}</span>. Your details are recorded and our engineering team will reach out promptly.
                  </p>
                  <button
                    onClick={() => {
                      soundFx.playClick()
                      setSubmitted(false)
                      setFullName('')
                      setEmail('')
                      setMobileNumber('')
                      setProjectOverview('')
                      setConsultationDate('')
                    }}
                    className="px-4 py-2 rounded-[4px] bg-neutral-950 text-white font-bold text-[11px] uppercase tracking-wider hover:bg-[#ea580c] transition-colors shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Full Name <span className="text-[#ea580c]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-8 pr-3 py-2 rounded-[4px] bg-neutral-50/70 border border-neutral-300 text-neutral-950 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-neutral-950 transition-all text-xs font-medium shadow-2xs"
                        />
                        <User className="w-3 h-3 text-neutral-400 absolute left-2.5 top-2.5" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. rahul@company.com"
                          className="w-full pl-8 pr-3 py-2 rounded-[4px] bg-neutral-50/70 border border-neutral-300 text-neutral-950 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-neutral-950 transition-all text-xs font-medium shadow-2xs"
                        />
                        <Mail className="w-3 h-3 text-neutral-400 absolute left-2.5 top-2.5" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Mobile / WhatsApp Number (Mandatory) */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Mobile / WhatsApp Number <span className="text-[#ea580c]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="e.g. +91 93905 14374"
                        className="w-full pl-8 pr-3 py-2 rounded-[4px] bg-neutral-50/70 border border-neutral-300 text-neutral-950 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-neutral-950 transition-all text-xs font-medium shadow-2xs"
                      />
                      <Phone className="w-3 h-3 text-neutral-400 absolute left-2.5 top-2.5" />
                    </div>
                  </div>

                  {/* Row 3: Required Service (rounded-[4px]) */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Required Service <span className="text-[#ea580c]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'WEB DEVELOPMENT', label: 'Web Dev' },
                        { id: 'APP DEVELOPMENT', label: 'App Dev' },
                        { id: 'UI/UX DESIGN', label: 'UI/UX Design' },
                        { id: 'DIGITAL MARKETING SERVICES', label: 'Marketing' },
                      ].map((service) => {
                        const isSelected = requiredService === service.id
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => {
                              soundFx.playClick()
                              setRequiredService(service.id)
                            }}
                            className={`p-2 rounded-[4px] border text-left text-[11px] font-bold transition-all flex items-center justify-between interactive ${
                              isSelected
                                ? 'bg-[#ea580c]/10 border-[#ea580c] text-[#ea580c] shadow-xs'
                                : 'bg-neutral-50/70 border-neutral-200 text-neutral-800 hover:bg-neutral-100/80'
                            }`}
                          >
                            <span>{service.label}</span>
                            <div
                              className={`w-3 h-3 rounded-[2px] border flex items-center justify-center ${
                                isSelected ? 'border-[#ea580c] bg-[#ea580c]' : 'border-neutral-300'
                              }`}
                            >
                              {isSelected && <div className="w-1 h-1 rounded-full bg-white" />}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Row 4: Preferred Communication Methods & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Communication Preference
                      </label>
                      <div className="flex items-center gap-2">
                        {['Email', 'Phone Call'].map((method) => {
                          const isChecked = commMethods.includes(method)
                          return (
                            <button
                              key={method}
                              type="button"
                              onClick={() => handleCommToggle(method)}
                              className={`px-2.5 py-1.5 rounded-[4px] border text-[10px] font-semibold flex items-center gap-1.5 transition-all interactive ${
                                isChecked
                                  ? 'bg-neutral-900 text-white border-neutral-900'
                                  : 'bg-neutral-50/70 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                              }`}
                            >
                              <div
                                className={`w-2.5 h-2.5 rounded-[2px] border flex items-center justify-center ${
                                  isChecked ? 'border-white bg-white text-neutral-950' : 'border-neutral-400'
                                }`}
                              >
                                {isChecked && <CheckCircle2 className="w-2 h-2 text-neutral-950" />}
                              </div>
                              <span>{method}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Consultation Date
                      </label>
                      <input
                        type="date"
                        value={consultationDate}
                        onChange={(e) => setConsultationDate(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-[4px] bg-neutral-50/70 border border-neutral-300 text-neutral-950 focus:bg-white focus:outline-none focus:border-neutral-950 transition-all text-xs font-medium shadow-2xs cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Row 5: Project Overview */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Project Overview
                    </label>
                    <textarea
                      rows={2}
                      value={projectOverview}
                      onChange={(e) => setProjectOverview(e.target.value)}
                      placeholder="Describe your goals, requirements, feature wishlist, or existing links..."
                      className="w-full px-3 py-2 rounded-[4px] bg-neutral-50/70 border border-neutral-300 text-neutral-950 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-neutral-950 transition-all text-xs font-medium resize-none shadow-2xs"
                    />
                  </div>

                  {/* Submit CTA (rounded-[4px]) */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-[4px] bg-neutral-950 hover:bg-[#ea580c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all interactive"
                    >
                      {loading ? (
                        <span>Submitting to Database...</span>
                      ) : (
                        <>
                          <span>Submit Client Intake Form</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

          {/* Right Column: High-Impact Agency Details & Value Proposition (lg:col-span-5) */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between space-y-6 pt-1">
            
            <div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight leading-snug mb-3">
                Let's engineer something extraordinary together.
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Whether you're launching a high-converting web storefront, cross-platform mobile application, UI/UX design system, or technical growth campaign, reactj provides the engineering caliber to take you from concept to market leader.
              </p>
            </div>

            {/* Value Guarantees with Monochrome Black Icons (rounded-[4px]) */}
            <div className="space-y-3.5 pt-2 border-t border-neutral-200">
              
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-[4px] bg-neutral-950 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-neutral-900">
                    24-Hour Proposal Turnaround
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">
                    Our team reviews your submission and provides a structured scope blueprint within one business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-[4px] bg-neutral-950 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-neutral-900">
                    React, Next.js 15 & UI/UX Systems
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">
                    Production-grade modern toolchains built for 60 FPS performance and sub-second loading speeds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-[4px] bg-neutral-950 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-neutral-900">
                    100% Code & IP Ownership
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">
                    Full deployment transfer, repository access, and post-launch maintenance support.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
