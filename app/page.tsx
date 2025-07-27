"use client"

import { ParallaxBackground } from "@/components/parallax-background"
import { FloatingNavigation } from "@/components/floating-navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParallaxBackground />
      <FloatingNavigation />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-white/60 border-t border-purple-500/20">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Ritesh Patil. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
