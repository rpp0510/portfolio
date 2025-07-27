"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Eye } from "lucide-react"

const projects = [
  {
    title: "Heart Disease Prediction Using Retina Images",
    description:
      "Implemented YOLO for precise detection and classification of retina features linked to heart disease, improving detection accuracy by 20%. Utilized Roboflow for image annotation and model training, reducing preprocessing time by 50%.",
    technologies: ["YOLO", "TensorFlow", "OpenCV", "Roboflow"],
    category: "AI/ML",
    gradient: "from-purple-500/20 to-purple-600/20",
  },
  {
    title: "Employment Assistance Tool using LLMs, RAG, and Neo4j",
    description:
      "Led the development of an AI-powered Employment Assistance Tool, streamlining job search processes and increasing job matching accuracy by 30%. Implemented RAG to improve data retrieval speed by 40%.",
    technologies: ["LLMs", "RAG", "Neo4j", "Python"],
    category: "AI/ML",
    gradient: "from-purple-600/20 to-purple-700/20",
  },
  {
    title: "E-commerce Product Insights Dashboard",
    description:
      "Analyzed sales and inventory data for 5,000+ products using SQL to identify top-selling and underperforming SKUs. Developed a Power BI dashboard to visualize product trends, enabling strategic decisions on promotions and stock management. Reduced manual reporting time by 30% through optimized SQL queries and automated data refresh in Power BI.",
    technologies: ["SQL", "Power BI", "DAX", "Excel"],
    category: "Analytics",
    gradient: "from-purple-500/20 to-purple-800/20",
  },
  {
    title: "Movie Recommender System",
    description:
      "Built a content-based movie recommendation app using Streamlit and TMDb API, dynamically fetching over 1,000 movie posters. Achieved a 95% user satisfaction rate with top 5 movie recommendations.",
    technologies: ["Streamlit", "TMDb API", "Python", "Pickle"],
    category: "Web App",
    gradient: "from-purple-400/20 to-purple-600/20",
  },
  {
    title: "AWS Cloud Migration - Lift and Shift Approach",
    description:
      "Orchestrated the migration of an existing application workload to AWS cloud with minimal architecture changes, reducing operational costs by 15% and enhancing application performance by 20%.",
    technologies: ["AWS EC2", "S3", "Route53", "ELB"],
    category: "Cloud",
    gradient: "from-purple-700/20 to-purple-500/20",
  },
  {
    title: "Virtual Kiosk",
    description:
      "An interactive virtual kiosk system providing self-service capabilities with intuitive user interface and real-time data processing. Built both offline and online versions.",
    technologies: ["AngularJS", "WordPress", "JavaScript"],
    category: "Web App",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Here are some of my recent projects that showcase my expertise in AI/ML, web development, and data
            analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:scale-105 transition-all duration-300 group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-md text-xs font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg" className="group bg-transparent">
            <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
