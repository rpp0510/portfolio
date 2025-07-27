"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

interface ExperienceSectionProps {
  data: {
    title: string
    company: string
    duration: string
    responsibilities: string[]
  }[]
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the roles that have shaped my career in web development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {data.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Briefcase className="w-6 h-6 text-primary" />
                    {exp.title} at {exp.company}
                  </CardTitle>
                  <p className="text-muted-foreground">{exp.duration}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i} className="text-muted-foreground">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
