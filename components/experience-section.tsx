"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface ExperienceSectionProps {
  data: {
    title: string
    company: string
    duration: string
    responsibilities: string[]
  }[]
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
  const sectionRef = useRef(null)
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    experienceRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    })
  }, [])

  return (
    <motion.section
      id="experience"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-muted text-foreground"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {data.map((exp, index) => (
            <Card key={exp.title + exp.company} ref={(el) => (experienceRefs.current[index] = el)}>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  {exp.title} at {exp.company}
                </CardTitle>
                <p className="text-muted-foreground text-sm md:text-base">{exp.duration}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
