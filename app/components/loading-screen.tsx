"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-mosque-dark flex flex-col items-center justify-center"
        >
          {/* Islamic Geometric Background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="loading-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 0L40 20L20 40L0 20Z" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                  <circle cx="20" cy="20" r="8" fill="none" stroke="#d4af37" strokeWidth="0.3" />
                  <path d="M20 8L32 20L20 32L8 20Z" fill="none" stroke="#d4af37" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#loading-pattern)" />
            </svg>
          </div>

          {/* Center Content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Rotating Tasbih Beads */}
            <div className="relative w-32 h-32">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-gold-400 to-gold-600"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.375,
                  }}
                  initial={{
                    x: Math.cos((i * Math.PI) / 4) * 50 - 6,
                    y: Math.sin((i * Math.PI) / 4) * 50 - 6,
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-arabic text-gold-400">بسم الله</span>
              </div>
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h2 className="text-xl font-light text-white/80 tracking-widest">
                JAMA MASJID
              </h2>
              <p className="text-xs text-gold-400/60 tracking-[0.3em] mt-1">
                PINDWARA
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-400 to-gold-600"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
