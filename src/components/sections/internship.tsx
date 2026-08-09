"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, MapPin, Code2, ChevronDown, ChevronUp, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Reveal from "@/components/effects/reveal"
import { internship } from "@/data/personal"
import Image from "next/image"

export default function Internship() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="internship" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Industry <span className="text-gradient">Internships</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Hands-on experience in AI & Data Science and Cybersecurity — translating academic knowledge into industry-grade solutions.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {internship.map((intern, index) => (
            <Reveal key={intern.company} delay={index * 0.2} direction="up">
              <motion.div whileHover={{ y: -2 }} className="group">
                <Card className="border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
                  <CardContent className="p-0">
                    {/* Header — clickable to expand */}
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full text-left"
                    >
                      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
                        {/* Company image */}
                        <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-border/50 relative">
                          <Image
                            src={intern.image}
                            alt={intern.company}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                                {intern.role}
                              </h3>
                              <p className="text-primary font-semibold">{intern.company}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <Badge variant="secondary" className="text-xs">
                                {intern.duration}
                              </Badge>
                              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                {intern.location}
                              </span>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                            {intern.highlights[0]}
                          </p>
                        </div>

                        <div className="flex-shrink-0 text-muted-foreground">
                          {expandedIndex === index ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-border/40 pt-5">
                            {/* Image preview */}
                            <div className="rounded-xl overflow-hidden mb-5 h-40 relative">
                              <Image
                                src={intern.image}
                                alt={`${intern.company} work`}
                                fill
                                className="object-cover opacity-80"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                                <Briefcase className="h-4 w-4 text-primary" />
                                <span className="text-sm font-semibold text-foreground">{intern.company} — {intern.role}</span>
                              </div>
                            </div>

                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                              <CheckCircle className="h-3.5 w-3.5 text-primary" />
                              Key Contributions
                            </h4>
                            <ul className="space-y-2.5 mb-5">
                              {intern.highlights.map((point, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                  <span className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-[10px] font-bold">
                                    {i + 1}
                                  </span>
                                  {point}
                                </li>
                              ))}
                            </ul>

                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                                <Code2 className="h-3.5 w-3.5 text-primary" />
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {intern.tech.map((t) => (
                                  <Badge key={t} variant="outline" className="text-xs">
                                    {t}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
