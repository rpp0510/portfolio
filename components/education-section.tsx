"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface EducationSectionProps {
  data: {
    degree: string
    institution: string
    duration: string
    coursework?: string
  }[]
}

export const EducationSection: React.FC<EducationSectionProps> = ({ data }) => {
  const sectionRef = useRef(null)
  const educationRefs = useRef<(HTMLDivElement | null)[]>([])

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

    educationRefs.current.forEach((el, i) => {
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
      id="education"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-background text-foreground"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {data.map((edu, index) => (
            <Card key={edu.degree + edu.institution} ref={(el) => (educationRefs.current[index] = el)}>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">{edu.degree}</CardTitle>
                <p className="text-muted-foreground text-sm md:text-base">
                  {edu.institution} ({edu.duration})
                </p>
              </CardHeader>
              {edu.coursework && (
                <CardContent>
                  <p className="text-base md:text-lg">
                    <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
