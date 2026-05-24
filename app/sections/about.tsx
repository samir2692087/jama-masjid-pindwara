"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Users, Heart, Landmark, Sparkles, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Landmark,
    title: "Rich Heritage",
    description: "A historic mosque serving the Muslim community of Pindwara for generations, preserving Islamic traditions and architectural beauty.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "A gathering place for prayers, education, and social activities that strengthens the bonds of brotherhood and unity.",
  },
  {
    icon: BookOpen,
    title: "Islamic Learning",
    description: "Regular Quran classes, Islamic lectures, and educational programs for all ages to deepen understanding of faith.",
  },
  {
    icon: Heart,
    title: "Spiritual Peace",
    description: "A sanctuary of tranquility where believers find solace, connection with Allah, and inner peace through prayer and reflection.",
  },
  {
    icon: Sparkles,
    title: "Cultural Events",
    description: "Celebrating Ramadan, Eid, and other Islamic occasions with the community in a spirit of joy and devotion.",
  },
  {
    icon: Shield,
    title: "Charity & Welfare",
    description: "Active in charitable work, supporting the needy, and serving as a center for zakat and sadaqah distribution.",
  },
]

const timeline = [
  { year: "Established", event: "Jama Masjid Pindwara founded to serve the growing Muslim community" },
  { year: "Community", event: "Became the central mosque for congregational prayers and Friday sermons" },
  { year: "Education", event: "Started Quran classes and Islamic education programs for children" },
  { year: "Expansion", event: "Expanded facilities to accommodate growing community needs" },
  { year: "Today", event: "Continues to be a beacon of faith, peace, and community service" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosque-dark via-emerald-950/20 to-mosque-dark" />
      <div className="absolute inset-0 islamic-pattern opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-gold-400 tracking-wider uppercase">About Us</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Sacred Space</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Jama Masjid Pindwara stands as a testament to faith, community, and the enduring 
            spirit of Islam in Rajasthan. A place where hearts find peace and souls find connection.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-white/[0.02] border-white/5 hover:border-gold-500/20 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            Our <span className="text-gradient">Journey</span>
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass rounded-2xl p-6 hover:border-gold-500/20 transition-colors">
                      <span className="text-gold-400 font-mono text-sm mb-2 block">
                        {item.year}
                      </span>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-gold-500 shadow-lg shadow-gold-500/50" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl md:text-6xl font-arabic text-gold-400/20 mb-4 leading-tight">
              وَأَقِمِ الصَّلَاةَ
            </div>
            <blockquote className="text-xl md:text-2xl text-white/60 italic leading-relaxed mb-4">
              "And establish prayer and give zakah and bow with those who bow [in worship and obedience]."
            </blockquote>
            <cite className="text-gold-400/60 text-sm tracking-wider">
              — Quran 2:43
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
