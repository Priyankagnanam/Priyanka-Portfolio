"use client"

import { motion } from "framer-motion"
import { Download, FileText, GraduationCap, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/effects/reveal"
import { personalInfo } from "@/data/personal"

const highlights = [
  { label: "CGPA", value: "8.39 / 10.0", icon: "⭐" },
  { label: "NPTEL HCI", value: "93% Elite", icon: "🏆" },
  { label: "Internships", value: "2 Industry", icon: "💼" },
  { label: "Target", value: "US MS CS Fall 2027", icon: "🎯" },
]

export default function ResumeSection() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = personalInfo.resumeUrl
    link.download = "Priyanka_G_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
                Resume
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Download My <span className="text-gradient">Resume</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A comprehensive academic CV tailored for <span className="text-primary font-medium">US MS Computer Science</span> applications — featuring AI projects, NPTEL certifications, and industry internship experience.
              </p>
            </div>

            <motion.div
              className="p-8 md:p-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm"
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl shadow-primary/20">
                    <FileText className="h-12 w-12 text-white" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">Priyanka_G_Resume.pdf</span>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Priyanka G — Academic CV</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    B.Tech IT · GCE Erode (Anna University) · US MS CS Applicant 2027
                  </p>

                  {/* Highlights grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {highlights.map((h) => (
                      <div key={h.label} className="bg-background/50 border border-border/50 rounded-xl p-3 text-center">
                        <div className="text-xl mb-1">{h.icon}</div>
                        <div className="text-xs font-bold text-foreground">{h.value}</div>
                        <div className="text-xs text-muted-foreground">{h.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <Button size="lg" onClick={handleDownload} className="group">
                      <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                      Download PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Online
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
