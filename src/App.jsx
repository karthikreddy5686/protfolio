import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientMarquee from './components/ClientMarquee'
import AboutSection from './components/AboutSection'
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

        {/* 3. About reactj */}
        <AboutSection />

        {/* 4. Client Intake Form (Matching & Syncing to Google Forms) */}
        <ContactSection />

        {/* 5. Our Clients Grid (Placed below Contact Card) */}
        <ClientsSection />
      </main>

      {/* Clean Editorial Footer */}
      <Footer />

      {/* Quick Action Dock */}
      <QuickContactDock />
    </div>
  )
}
