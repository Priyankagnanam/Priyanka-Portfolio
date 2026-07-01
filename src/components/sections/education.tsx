"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"
import Reveal from "@/components/effects/reveal"
import { education } from "@/data/personal"

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              Education
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Academic Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <Reveal key={edu.institution} delay={index * 0.2}>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

                <motion.div
                  className="relative pl-20 pb-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-4 top-1 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>

                  <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {edu.institution}
                        </h3>
                        {edu.location && (
                          <div className="flex items-center gap-1 text-muted-foreground mt-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                        {edu.year}
                      </span>
                    </div>

                    <p className="text-primary font-medium mb-4">{edu.degree}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-muted-foreground">
                        {edu.cgpa ? "CGPA:" : "Percentage:"}
                      </span>
                      <span className="text-2xl font-bold text-gradient">
                        {edu.cgpa ?? edu.percentage}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
