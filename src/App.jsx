import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientMarquee from './components/ClientMarquee'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import ContactSection from './components/ContactSection'
import ClientsSection from './components/ClientsSection'
import Footer from './components/Footer'
import QuickContactDock from './components/QuickContactDock'

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-neutral-950 font-sans selection:bg-neutral-950 selection:text-white">
      {/* Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Modern Technologies Stack Marquee */}
        <ClientMarquee />

        {/* 3. About reactj (Interactive Showcase) */}
        <AboutSection />

        {/* 4. Achievements, Awards & Client Reviews Note */}
        <AchievementsSection />

        {/* 5. Client Intake Form (Matching & Syncing to Google Forms) */}
        <ContactSection />

        {/* 6. Our Clients Grid (Continuous Scroller) */}
        <ClientsSection />
      </main>

      {/* Clean Editorial Footer */}
      <Footer />

      {/* Quick Action Dock */}
      <QuickContactDock />
    </div>
  )
}
