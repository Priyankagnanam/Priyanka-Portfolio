"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/effects/reveal"
import { personalInfo } from "@/data/personal"

export default function ResumeSection() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              Resume
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Download My <span className="text-gradient">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8" />

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive overview of my skills, experience, projects, and
              qualifications. My resume highlights my journey as a developer and
              my passion for building impactful solutions.
            </p>

            <motion.div
              className="inline-block p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {personalInfo.name} - Resume.pdf
              </p>
              <Button
                size="lg"
                onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
                className="group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
