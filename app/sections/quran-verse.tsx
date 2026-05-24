"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { BookOpen, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const verses = [
  {
    arabic: "إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ وَلَمْ يَخْشَ إِلَّا اللَّهَ ۖ فَعَسَىٰ أُولَٰئِكَ أَن يَكُونُوا مِنَ الْمُهْتَدِينَ",
    translation: "The mosques of Allah are only to be maintained by those who believe in Allah and the Last Day and establish prayer and give zakah and do not fear except Allah, for it is expected that those will be of the [rightly] guided.",
    reference: "Quran 9:18",
  },
  {
    arabic: "وَأَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ إِلَىٰ غَسَقِ اللَّيْلِ وَقُرْآنَ الْفَجْرِ ۖ إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا",
    translation: "And establish prayer at the decline of the sun until the darkness of the night and [also] the Quran of dawn. Indeed, the recitation of dawn is ever witnessed.",
    reference: "Quran 17:78",
  },
  {
    arabic: "وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ",
    translation: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted.",
    reference: "Quran 49:13",
  },
  {
    arabic: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا ۖ وَبِالْوَالِدَيْنِ إِحْسَانًا",
    translation: "Worship Allah and associate nothing with Him, and to parents do good...",
    reference: "Quran 4:36",
  },
  {
    arabic: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    translation: "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.",
    reference: "Quran 13:28",
  },
]

export function QuranVerseSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % verses.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const navigate = (dir: "prev" | "next") => {
    setDirection(dir === "next" ? 1 : -1)
    setCurrentIndex((prev) => {
      if (dir === "next") return (prev + 1) % verses.length
      return (prev - 1 + verses.length) % verses.length
    })
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosque-dark via-emerald-950/40 to-mosque-dark" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      {/* Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="quran-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0L100 50L50 100L0 50Z" fill="none" stroke="#d4af37" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#d4af37" strokeWidth="0.2" />
              <path d="M50 15L85 50L50 85L15 50Z" fill="none" stroke="#d4af37" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quran-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-4">
            <BookOpen className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-gold-400 tracking-wider uppercase">Quran Verses</span>
          </div>
        </motion.div>

        {/* Verse Slider */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold-400/20 mx-auto mb-6" />

              {/* Arabic Text */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-arabic text-gold-400/90 leading-loose mb-8"
                style={{ textShadow: "0 0 30px rgba(212,175,55,0.2)" }}
              >
                {verses[currentIndex].arabic}
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/30" />
                <div className="w-2 h-2 rounded-full bg-gold-500/40" />
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/30" />
              </div>

              {/* Translation */}
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-6 italic">
                "{verses[currentIndex].translation}"
              </p>

              {/* Reference */}
              <p className="text-gold-400/60 text-sm tracking-wider">
                {verses[currentIndex].reference}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 hover:border-gold-500/30"
              onClick={() => navigate("prev")}
            >
              <ChevronLeft className="w-4 h-4 text-white/60" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {verses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 bg-gold-400"
                      : "bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 hover:border-gold-500/30"
              onClick={() => navigate("next")}
            >
              <ChevronRight className="w-4 h-4 text-white/60" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
