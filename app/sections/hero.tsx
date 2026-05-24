"use client"
7
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Compass, Clock, Heart, MapPin } from "lucide-react"
import { Button } from "../../components/ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Layers */}
      <motion.div style={{ scale }} className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-mosque-dark to-mosque-matte" />

        {/* Animated Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-gold-900/20" />

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Crescent Moon */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
            </defs>
            <path
              d="M70 10 A40 40 0 1 0 70 90 A30 30 0 1 1 70 10"
              fill="url(#moonGradient)"
              opacity="0.8"
            />
          </svg>
        </motion.div>

        {/* Islamic Geometric Patterns */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0L80 40L40 80L0 40Z" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="#d4af37" strokeWidth="0.3" />
                <path d="M40 15L65 40L40 65L15 40Z" fill="none" stroke="#d4af37" strokeWidth="0.3" />
                <circle cx="40" cy="40" r="5" fill="none" stroke="#d4af37" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-geo)" />
          </svg>
        </div>

        {/* Fog Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-mosque-dark via-mosque-dark/80 to-transparent" />
      </motion.div>

      {/* 3D Particles */}

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Arabic Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-arabic text-gold-400/80 leading-relaxed"
            style={{ textShadow: "0 0 40px rgba(212,175,55,0.3)" }}
          >
            بسم الله الرحمن الرحيم
          </h2>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
            style={{
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          >
            Jama Masjid
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-gold-400 tracking-[0.4em] mt-2 font-light"
          >
            PINDWARA
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A Place of Peace, Prayer & Community
        </motion.p>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center justify-center gap-2 mb-10 text-white/40"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Pindwara, Rajasthan, India</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="xl"
            variant="gold"
            className="group min-w-[180px]"
            onClick={() => scrollToSection("#about")}
          >
            <Compass className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
            Explore Mosque
          </Button>
          <Button
            size="xl"
            variant="glass"
            className="group min-w-[180px]"
            onClick={() => scrollToSection("#prayer-times")}
          >
            <Clock className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Prayer Timings
          </Button>
          <Button
            size="xl"
            variant="emerald"
            className="group min-w-[180px]"
            onClick={() => scrollToSection("#donate")}
          >
            <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Donate
          </Button>
        </motion.div>

        {/* Floating Islamic Patterns */}
        <motion.div
          className="absolute -left-20 top-1/2 w-40 h-40 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100">
            <path d="M50 0L100 50L50 100L0 50Z" fill="none" stroke="#d4af37" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#d4af37" strokeWidth="0.3" />
            <path d="M50 20L80 50L50 80L20 50Z" fill="none" stroke="#d4af37" strokeWidth="0.3" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute -right-20 top-1/3 w-32 h-32 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100">
            <path d="M50 0L100 50L50 100L0 50Z" fill="none" stroke="#d4af37" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="#d4af37" strokeWidth="0.3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-gold-400/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
