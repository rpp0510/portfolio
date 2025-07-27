"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

const experience = [
  {
    title: "Web Developer (Intern)",
    company: "Jnana Prabodhini",
    duration: "Jan 2025 - June 2025",
    responsibilities: [
      "Contributed to developing both offline and online versions of the Virtual Kiosk using AngularJS, enabling content delivery through smart JSON routing with .exe deployment and YouTube fallback",
      "Engineered a responsive UI using core AngularJS principles, enhancing kiosk interactivity and user engagement across platforms",
    ],
  },
]

const education = [
  {
    degree: "P.G Diploma in (AI & ML)",
    institution: "MITWPU, Pune, India",
    duration: "July 2024 – May 2025",
    coursework:
      "Machine Learning, AI, Data Mining, Neural Networks, NLP, Computer Vision, Statistical Analysis, Deep Learning: applied concepts through hands-on projects",
  },
  {
    degree: "BSc Computer Science",
    institution: "Abasaheb Garware college, Pune, India",
    duration: "Aug 2020 – June 2023",
    coursework:
      "Computer Networks, Database Systems, Algorithms, Programming Languages, Computer Architecture, and AWS Cloud",
  },
]

const certifications = [
  "GenAI & LLM Workshop | LMStudio, AnythingLLM, RAG, HuggingFace, Prompting Strategies",
  "Complete Data Science Training | Math, Statistics, Python, Machine, Deep Learning and NLP",
  "AWS Academy cloud foundation | Skilled in EC2, S3, Lambda, API Gateway, RDS, VPC, IAM",
]

export function ResumeSection() {
  const downloadResume = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Replace with actual resume file path
    link.download = "Ritesh_Patil_Resume.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Resume</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            My professional journey, education, and achievements in AI/ML and web development.
          </p>
          <Button variant="primary" size="xl" onClick={downloadResume} className="group">
            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View My Resume PDF
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Briefcase className="w-6 h-6 text-neon-blue" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-neon-blue pl-4 pb-4"
                  >
                    <h3 className="font-semibold text-lg text-white">{exp.title}</h3>
                    <p className="text-neon-blue font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-300 text-sm leading-relaxed">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <GraduationCap className="w-6 h-6 text-neon-purple" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-l-2 border-neon-purple pl-4 pb-4 last:pb-0"
                    >
                      <h3 className="font-semibold text-lg text-white">{edu.degree}</h3>
                      <p className="text-neon-purple font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-400 mb-2">{edu.duration}</p>
                      {edu.coursework && (
                        <p className="text-gray-300 text-sm leading-relaxed">
                          <span className="font-medium">Relevant Coursework:</span> {edu.coursework}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Award className="w-6 h-6 text-neon-green" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
