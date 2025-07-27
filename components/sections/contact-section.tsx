"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Get In Touch</h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Ready to collaborate on AI/ML projects? Let's discuss how we can work together to bring innovative ideas to
            life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400 text-center">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <a
                      href="mailto:riteshpatil702811@gmail.com"
                      className="text-white/80 hover:text-purple-400 transition-colors"
                    >
                      riteshpatil702811@gmail.com
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <a href="tel:+917028111146" className="text-white/80 hover:text-purple-400 transition-colors">
                      +91 7028111146
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Location</h3>
                    <p className="text-white/80">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="font-semibold mb-6 text-purple-400 text-center text-xl">Connect on Social</h3>
                <div className="flex justify-center gap-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-16 h-16 bg-transparent hover:bg-purple-500/10 justify-center p-0 rounded-full"
                    asChild
                  >
                    <a href="https://github.com/riteshpp05" target="_blank" rel="noopener noreferrer">
                      <Github className="w-8 h-8" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-16 h-16 bg-transparent hover:bg-purple-500/10 justify-center p-0 rounded-full"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/ritesh-patil-32946b26b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-8 h-8" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
