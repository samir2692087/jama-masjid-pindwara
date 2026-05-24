"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Sunrise, Sun, Sunset, Moon, ChevronRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { cn } from "../../lib/utils"

interface PrayerTime {
  name: string
  time: string
  arabic: string
  icon: React.ElementType
  color: string
  description: string
}

const prayerTimes: PrayerTime[] = [
  {
    name: "Fajr",
    time: "5:30 AM",
    arabic: "الفجر",
    icon: Sunrise,
    color: "from-amber-500/20 to-orange-500/10",
    description: "Dawn Prayer",
  },
  {
    name: "Dhuhr",
    time: "12:30 PM",
    arabic: "الظهر",
    icon: Sun,
    color: "from-yellow-500/20 to-amber-500/10",
    description: "Noon Prayer",
  },
  {
    name: "Asr",
    time: "4:15 PM",
    arabic: "العصر",
    icon: Sun,
    color: "from-orange-500/20 to-red-500/10",
    description: "Afternoon Prayer",
  },
  {
    name: "Maghrib",
    time: "6:45 PM",
    arabic: "المغرب",
    icon: Sunset,
    color: "from-red-500/20 to-purple-500/10",
    description: "Sunset Prayer",
  },
  {
    name: "Isha",
    time: "8:00 PM",
    arabic: "العشاء",
    icon: Moon,
    color: "from-indigo-500/20 to-blue-500/10",
    description: "Night Prayer",
  },
]

function getCurrentPrayer(): string {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const currentTime = hours * 60 + minutes

  const times = [
    { name: "Fajr", minutes: 5 * 60 + 30 },
    { name: "Dhuhr", minutes: 12 * 60 + 30 },
    { name: "Asr", minutes: 16 * 60 + 15 },
    { name: "Maghrib", minutes: 18 * 60 + 45 },
    { name: "Isha", minutes: 20 * 60 + 0 },
  ]

  for (let i = times.length - 1; i >= 0; i--) {
    if (currentTime >= times[i].minutes) {
      return times[i].name
    }
  }
  return "Isha" // Default to Isha before Fajr
}

function getNextPrayer(): { name: string; time: string; countdown: string } {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const currentTime = hours * 60 + minutes

  const times = [
    { name: "Fajr", minutes: 5 * 60 + 30 },
    { name: "Dhuhr", minutes: 12 * 60 + 30 },
    { name: "Asr", minutes: 16 * 60 + 15 },
    { name: "Maghrib", minutes: 18 * 60 + 45 },
    { name: "Isha", minutes: 20 * 60 + 0 },
  ]

  for (const prayer of times) {
    if (currentTime < prayer.minutes) {
      const diff = prayer.minutes - currentTime
      const h = Math.floor(diff / 60)
      const m = diff % 60
      const s = 60 - seconds
      return {
        name: prayer.name,
        time: prayerTimes.find(p => p.name === prayer.name)?.time || "",
        countdown: `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`,
      }
    }
  }

  // Next day Fajr
  const fajrMinutes = 5 * 60 + 30
  const diff = (24 * 60 - currentTime) + fajrMinutes
  const h = Math.floor(diff / 60)
  const m = diff % 60
  return {
    name: "Fajr",
    time: "5:30 AM",
    countdown: `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${(60 - seconds).toString().padStart(2, "0")}`,
  }
}

export function PrayerTimesSection() {
  const [currentPrayer, setCurrentPrayer] = useState(getCurrentPrayer())
  const [nextPrayer, setNextPrayer] = useState(getNextPrayer())
  const [currentTime, setCurrentTime] = useState(new Date())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setCurrentPrayer(getCurrentPrayer())
      setNextPrayer(getNextPrayer())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="prayer-times" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosque-dark via-emerald-950/30 to-mosque-dark" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
            <Clock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 tracking-wider uppercase">Prayer Schedule</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Daily <span className="text-gradient-emerald">Prayer Times</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            "Indeed, prayer has been decreed upon the believers a decree of specified times."
            <br />
            <span className="text-gold-400/60 text-sm">— Quran 4:103</span>
          </p>
        </motion.div>

        {/* Live Clock & Next Prayer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass rounded-3xl p-8 md:p-12 text-center border border-emerald-500/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Current Time */}
              <div>
                <p className="text-white/40 text-sm mb-2 tracking-wider uppercase">Current Time</p>
                <p className="text-4xl md:text-5xl font-mono text-white font-light">
                  {currentTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })}
                </p>
                <p className="text-emerald-400/60 text-sm mt-1">
                  {currentTime.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto" />

              {/* Next Prayer Countdown */}
              <div>
                <p className="text-white/40 text-sm mb-2 tracking-wider uppercase">
                  Next Prayer: <span className="text-gold-400">{nextPrayer.name}</span>
                </p>
                <p className="text-4xl md:text-5xl font-mono text-gold-400 font-light">
                  {nextPrayer.countdown}
                </p>
                <p className="text-white/40 text-sm mt-1">
                  at {nextPrayer.time}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Prayer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {prayerTimes.map((prayer, index) => {
            const isActive = currentPrayer === prayer.name
            const Icon = prayer.icon

            return (
              <motion.div
                key={prayer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={cn(
                    "relative overflow-hidden transition-all duration-500 cursor-pointer group",
                    isActive
                      ? "bg-gradient-to-b from-gold-500/20 to-gold-600/5 border-gold-500/30 shadow-lg shadow-gold-500/10"
                      : "bg-white/[0.02] border-white/5 hover:border-white/10"
                  )}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activePrayer"
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600"
                    />
                  )}

                  <CardContent className="p-6 text-center">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-br from-gold-500/30 to-gold-600/20"
                          : "bg-gradient-to-br " + prayer.color
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5 transition-colors",
                          isActive ? "text-gold-400" : "text-white/40"
                        )}
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-1">
                      {prayer.name}
                    </h3>
                    <p className="text-2xl font-mono text-gold-400/80 mb-1">
                      {prayer.time}
                    </p>
                    <p className="text-xs text-white/30 font-arabic mb-2">
                      {prayer.arabic}
                    </p>
                    <p className="text-xs text-white/40">
                      {prayer.description}
                    </p>

                    {isActive && (
                      <Badge variant="gold" className="mt-3">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Current
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Jummah Special */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-emerald-900/30 to-gold-900/20 border-emerald-500/20">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Jummah Prayer</h3>
                  <p className="text-white/50 text-sm">Friday Congregational Prayer</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Khutbah</p>
                  <p className="text-lg font-mono text-emerald-400">12:30 PM</p>
                </div>
                <ChevronRight className="w-5 h-5 text-white/20" />
                <div className="text-center">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Prayer</p>
                  <p className="text-lg font-mono text-gold-400">1:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
