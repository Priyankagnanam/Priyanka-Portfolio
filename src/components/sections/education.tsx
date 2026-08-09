"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
              Academic <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Building a strong academic foundation in Information Technology and software engineering.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Reveal key={edu.institution} delay={index * 0.2} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <GraduationCap className="h-8 w-8 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                              {edu.degree}
                            </h3>
                            <p className="text-primary font-semibold mt-1">{edu.institution}</p>
                            <p className="text-muted-foreground text-sm">{edu.affiliation}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <Badge variant="secondary" className="text-sm px-3 py-1 font-bold">
                              {"cgpa" in edu ? `CGPA: ${edu.cgpa}` : `Grade: ${edu.percentage}`}
                            </Badge>
                            <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-xs justify-end">
                              <Calendar className="h-3 w-3" />
                              {edu.year}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                          <MapPin className="h-3.5 w-3.5" />
                          {edu.location}
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {edu.description}
                        </p>

                        {/* Coursework */}
                        {"coursework" in edu && edu.coursework && (
                          <div>
                            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                              <BookOpen className="h-3.5 w-3.5" />
                              Key Coursework
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course) => (
                                <span
                                  key={course}
                                  className="text-xs px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  )
}
