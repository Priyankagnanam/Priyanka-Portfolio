"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, Shield, CheckCircle } from "lucide-react"
import Reveal from "@/components/effects/reveal"
import { internship } from "@/data/personal"

export default function Internship() {
  return (
    <section id="internship" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              Internship
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <Reveal delay={0.2}>
            <motion.div
              className="p-6 md:p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <Briefcase className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {internship.role}
                    </h3>
                    <p className="text-primary font-medium">
                      {internship.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-xl">
                  <Calendar className="h-4 w-4" />
                  {internship.duration}
                </div>
              </div>

              <div className="space-y-3">
                {internship.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
