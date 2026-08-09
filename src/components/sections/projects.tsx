"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, CheckCircle, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Reveal from "@/components/effects/reveal"
import { projects } from "@/data/personal"
import Image from "next/image"

const categories = ["All", "AI & Computer Vision", "Web & Cloud Systems"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Academic and internship projects spanning computer vision and cloud-connected portals.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
          </div>
        </Reveal>

        {/* Category Filter */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card/50 border border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.12} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                className="group h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 text-xs font-medium text-primary">
                        <Tag className="h-3 w-3" />
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="flex-1 flex flex-col p-5">
                    {/* Title */}
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-primary font-medium mt-0.5">{project.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Key Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2 border-t border-border/40">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        View Code
                      </Button>
                      {project.live && (
                        <Button
                          size="sm"
                          className="flex-1 text-xs"
                          onClick={() => window.open(project.live, "_blank")}
                        >
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                          Live Demo
                        </Button>
                      )}
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
