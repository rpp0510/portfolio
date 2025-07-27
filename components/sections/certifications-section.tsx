"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle, Calendar, Building } from "lucide-react"

const certifications = [
  {
    title: "AWS Academy Graduate – Data Engineering",
    issuer: "AWS Academy",
    date: "Apr 2025",
    status: "completed",
    description: "Advanced data engineering concepts and AWS data services",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    date: "Feb 2025",
    status: "completed",
    description: "Fundamental cloud computing concepts and AWS core services",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "IT Education Centre",
    date: "Jul 2023",
    expires: "Dec 2033",
    status: "completed",
    description: "Designing distributed systems on AWS platform",
  },
  {
    title: "DevOps Beginners to Advanced with Projects",
    issuer: "Udemy",
    date: "Sep–Dec 2023",
    status: "completed",
    description: "Complete DevOps lifecycle with hands-on projects",
  },
  {
    title: "Power BI for Beginners",
    issuer: "Simplilearn",
    date: "2023",
    status: "completed",
    description: "Data visualization and business intelligence with Power BI",
  },
  {
    title: "Python Programming Language",
    issuer: "Udemy",
    date: "2023",
    status: "completed",
    description: "Comprehensive Python programming fundamentals",
  },
  {
    title: "The Complete Data Science Bootcamp 2024",
    issuer: "Udemy",
    date: "2024",
    status: "completed",
    description: "End-to-end data science with machine learning",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Certifications</h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Professional certifications and achievements that validate my expertise in cloud computing, data science,
            and AI/ML technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card hover:scale-105 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-purple-300" />
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-xs text-green-400 font-medium">Verified</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="w-4 h-4 text-purple-300" />
                      <span className="text-white/80">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-purple-300" />
                      <span className="text-white/80">
                        {cert.date}
                        {cert.expires && <span className="text-purple-300 ml-1">(expires {cert.expires})</span>}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Certification Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">7+</div>
                  <div className="text-white/70">Total Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">3</div>
                  <div className="text-white/70">AWS Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">4</div>
                  <div className="text-white/70">Data Science & ML</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
