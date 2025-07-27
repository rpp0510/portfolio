"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

interface EducationSectionProps {
  data: {
    degree: string
    institution: string
    duration: string
    coursework?: string
  }[]
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My educational background and the foundation that supports my technical expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {data.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    {edu.degree}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {edu.institution} • {edu.duration}
                  </p>
                </CardHeader>
                {edu.coursework && (
                  <CardContent>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                    </p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
