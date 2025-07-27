"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "AI/ML Technologies",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs"],
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Data Analytics",
    skills: ["SQL", "Power BI", "Tableau", "Excel"],
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Web Development",
    skills: ["Angular", "HTML/CSS", "Responsive Design"],
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Git/GitHub", "Docker"],
    color: "from-purple-500 to-purple-700",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Skills & Expertise</h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with to build innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card hover:scale-105 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-white/90 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Currently Exploring</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["RAG Systems", "Neo4j", "Streamlit", "TensorFlow", "OpenCV", "Roboflow", "TMDb API"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-purple-800/20 text-white rounded-full text-sm font-medium border border-purple-500/30 hover:scale-105 transition-transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
