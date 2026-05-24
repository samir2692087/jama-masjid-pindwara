"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function BismillahSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosque-dark via-gold-950/10 to-mosque-dark" />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ornamental Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <svg viewBox="0 0 200 20" className="w-48 mx-auto text-gold-400/30">
            <path d="M0 10 Q50 0 100 10 Q150 20 200 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="10" r="3" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-arabic text-gold-400/80 leading-tight mb-6"
            style={{ textShadow: "0 0 40px rgba(212,175,55,0.3)" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h2>
        </motion.div>

        {/* Translation */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/40 font-light tracking-wide mb-4"
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </motion.p>

        {/* Decorative Bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8"
        >
          <svg viewBox="0 0 200 20" className="w-48 mx-auto text-gold-400/30">
            <path d="M0 10 Q50 20 100 10 Q150 0 200 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="10" r="3" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-400/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </section>
  )
}
