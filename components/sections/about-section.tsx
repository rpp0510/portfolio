"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Brain, Database, Zap, Briefcase, GraduationCap } from "lucide-react"

const stats = [
  { value: "10+", label: "Projects Completed", icon: CheckCircle },
  { value: "5+", label: "Years Learning", icon: Brain },
  { value: "10+", label: "Technologies Mastered", icon: Code },
]

const features = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Expertise in building intelligent systems with TensorFlow, OpenCV, and modern ML frameworks",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Proficient in frontend and backend technologies including Angular, Python, and cloud platforms",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Advanced skills in SQL, Power BI, and data visualization for business insights",
  },
  {
    icon: Zap,
    title: "Generative AI",
    description: "Cutting-edge experience with LLMs, RAG, and Neo4j for next-generation applications",
  },
]

const experience = [
  {
    title: "Web Developer (Intern)",
    company: "Jnana Prabodhini",
    duration: "Jan 2025 - June 2025",
    description:
      "Developing interactive virtual kiosk systems using AngularJS with smart JSON routing and responsive UI design.",
  },
]

const education = [
  {
    degree: "P.G Diploma in AI & ML",
    institution: "MITWPU, Pune, India",
    duration: "July 2024 – May 2025",
    description:
      "Specialized in Machine Learning, Deep Learning, NLP, Computer Vision, and Statistical Analysis with hands-on projects.",
  },
  {
    degree: "BSc Computer Science",
    institution: "Abasaheb Garware College, Pune, India",
    duration: "Aug 2020 – June 2023",
    description: "Comprehensive study of Computer Networks, Database Systems, Algorithms, and AWS Cloud technologies.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">About Me</h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            I'm a Web Developer Intern with a strong interest in Artificial Intelligence, Machine Learning, and Deep
            Learning. I enjoy building intelligent web applications by combining frontend technologies like HTML, CSS,
            JavaScript, Angular, and Streamlit with AI tools such as Python, TensorFlow, and OpenCV.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <stat.icon className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-purple-300 mb-2">{stat.value}</h3>
                  <p className="text-white/80">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-purple-300">Professional Experience</h3>
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                    {exp.title} at {exp.company}
                  </CardTitle>
                  <p className="text-purple-300">{exp.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-purple-300">Education</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                    {edu.degree}
                  </CardTitle>
                  <p className="text-purple-300">
                    {edu.institution} • {edu.duration}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto glass-card">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">My Current Focus</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                My current focus is on real-world applications of Generative AI, Large Language Models (LLMs), RAG, and
                Neo4j. I love crafting user-centric, data-driven systems and constantly learning to push AI boundaries.
                Every project is an opportunity to explore new possibilities and create solutions that make a real
                impact.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
