"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Reveal from "@/components/effects/reveal"
import { certifications } from "@/data/personal"

const issuerColors: Record<string, "default" | "secondary" | "accent"> = {
  "NPTEL Elite": "secondary",
  "Infosys Springboard": "accent",
}

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
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.15} direction="up">
              <motion.div whileHover={{ y: -5 }}>
                <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge
                      variant={issuerColors[cert.issuer] || "default"}
                      className="text-xs"
                    >
                      {cert.issuer}
                    </Badge>
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
