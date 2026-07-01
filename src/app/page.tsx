import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Education from "@/components/sections/education"
import Internship from "@/components/sections/internship"
import Projects from "@/components/sections/projects"
import Certifications from "@/components/sections/certifications"
import Achievements from "@/components/sections/achievements"
import ResumeSection from "@/components/sections/resume-section"
import Contact from "@/components/sections/contact"
import ParticleBackground from "@/components/effects/particle-background"

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Internship />
      <Projects />
      <Certifications />
      <Achievements />
      <ResumeSection />
      <Contact />
    </>
  )
}
