"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ExternalLink, Navigation } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Jama Masjid, Indra Colony, Pindwara, Rajasthan 307022, India",
    color: "from-red-500/20 to-red-600/10",
    iconColor: "text-red-400",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 XXXXX XXXXX",
    color: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-400",
  },
{
    icon: Mail,
    title: "Email",
    content: "info@jamamasjidpindwara.org",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Open 24/7 for Prayer | Office: 9:00 AM - 8:00 PM",
    color: "from-gold-500/20 to-gold-600/10",
    iconColor: "text-gold-400",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosque-dark via-emerald-950/20 to-mosque-dark" />
      <div className="absolute inset-0 islamic-pattern opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 tracking-wider uppercase">Contact</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in <span className="text-gradient-emerald">Touch</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We welcome your questions, feedback, and collaboration. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/[0.02] border-white/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-white/50">Thank you for reaching out. We will get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/60 text-sm mb-1 block">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/40 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-white/60 text-sm mb-1 block">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/40 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/60 text-sm mb-1 block">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/40 transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="text-white/60 text-sm mb-1 block">Subject</label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/40 transition-colors"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1 block">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/40 transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      variant="emerald"
                      className="w-full h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-white/[0.02] border-white/5 hover:border-white/10 transition-all duration-300 h-full">
                    <CardContent className="p-5">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br", info.color)}>
                        <info.icon className={cn("w-5 h-5", info.iconColor)} />
                      </div>
                      <h4 className="text-white font-medium text-sm mb-1">{info.title}</h4>
                      <p className="text-white/50 text-sm whitespace-pre-line">{info.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="bg-white/[0.02] border-white/5 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-emerald-900/30 to-mosque-matte">
                  {/* Map Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="map-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M40 0L0 0L0 40" fill="none" stroke="#10b981" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#map-grid)" />
                    </svg>
                  </div>

                  {/* Location Pin */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30 mx-auto mb-3">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                      <p className="text-white font-semibold">Jama Masjid Pindwara</p>
                      <p className="text-white/50 text-sm">Pindwara, Rajasthan</p>
                    </div>
                  </div>

                  {/* Navigate Button */}
                  <div className="absolute bottom-4 right-4">
                    <Button
                      size="sm"
                      variant="glass"
                      className="text-xs"
                      onClick={() => window.open("https://maps.google.com/?q=Jama+Masjid+Pindwara+Rajasthan", "_blank")}
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-800/20 border-emerald-500/20">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold mb-1">Connect on WhatsApp</h4>
                  <p className="text-white/50 text-sm">Quick responses for urgent matters</p>
                </div>
                <Button
                  size="sm"
                  variant="emerald"
                  onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
