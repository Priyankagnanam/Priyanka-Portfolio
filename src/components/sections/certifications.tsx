"use client"

import { motion } from "framer-motion"
import { Award, Star, Calendar, BookOpen, ExternalLink } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Reveal from "@/components/effects/reveal"
import { certifications } from "@/data/personal"

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              Certifications
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Credentials</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              NPTEL Elite distinctions, industry certifications, and continuous learning achievements.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.15} direction="up">
              <motion.div whileHover={{ y: -5 }}>
                <Card className={`h-full border-border/50 transition-all duration-300 overflow-hidden ${
                  cert.highlight
                    ? "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                    : "hover:border-border"
                }`}>
                  {cert.highlight && (
                    <div className={`h-1 bg-gradient-to-r ${cert.badgeColor}`} />
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${cert.badgeColor} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                        {cert.highlight ? (
                          <Star className="h-6 w-6 text-white fill-white" />
                        ) : (
                          <Award className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {cert.highlight && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-semibold">
                            ⭐ Elite
                          </span>
                        )}
                        <Badge variant="secondary" className="text-xs">
                          {cert.score}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1.5 text-xs">
                      <BookOpen className="h-3 w-3" />
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={cert.issuer === "NPTEL Elite" ? "secondary" : "outline"}
                        className="text-xs font-semibold"
                      >
                        {cert.issuer}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {cert.year}
                      </span>
                    </div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    >
                      View Credentials
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* NPTEL Info Banner */}
        <Reveal delay={0.5}>
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">NPTEL Elite Distinction — IIT Faculty Certified</h3>
                <p className="text-muted-foreground text-sm">
                  NPTEL Elite certifications are awarded by IIT faculty for top-decile performance in nationally conducted online courses.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
