"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, QrCode, CreditCard, Wallet, TrendingUp, Shield, Check } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { cn } from "../../lib/utils"

const donationOptions = [
  { amount: 100, label: "Daily Operations", description: "Support daily mosque maintenance" },
  { amount: 500, label: "Education Fund", description: "Quran classes & Islamic education" },
  { amount: 1000, label: "Community Iftar", description: "Ramadan iftar for community" },
  { amount: 2500, label: "Renovation", description: "Mosque improvement projects" },
  { amount: 5000, label: "Zakat Fund", description: "Help those in need in our community" },
  { amount: 10000, label: "Major Project", description: "Significant mosque development" },
]

const impactStats = [
  { value: 5000, suffix: "+", label: "Community Members" },
  { value: 200, suffix: "+", label: "Daily Prayers" },
  { value: 50, suffix: "+", label: "Students Enrolled" },
  { value: 12, suffix: "", label: "Years of Service" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const finalAmount = selectedAmount || Number(customAmount) || 0

  return (
    <section id="donate" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosque-dark via-gold-950/10 to-mosque-dark" />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
          >
            <Heart className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-gold-400 tracking-wider uppercase">Support Us</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Make a <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-4">
            "The believer's shade on the Day of Resurrection will be his charity."
          </p>
          <p className="text-gold-400/60 text-sm">— Prophet Muhammad (PBUH)</p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {impactStats.map((stat, index) => (
            <Card
              key={stat.label}
              className="bg-white/[0.02] border-white/5 hover:border-gold-500/20 transition-all duration-500"
            >
              <CardContent className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Select Amount</h3>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {donationOptions.map((option) => (
                <button
                  key={option.amount}
                  onClick={() => {
                    setSelectedAmount(option.amount)
                    setCustomAmount("")
                  }}
                  className={cn(
                    "relative p-4 rounded-xl border transition-all duration-300 text-left",
                    selectedAmount === option.amount
                      ? "bg-gradient-to-br from-gold-500/20 to-gold-600/10 border-gold-500/40 shadow-lg shadow-gold-500/10"
                      : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                  )}
                >
                  {selectedAmount === option.amount && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <p className="text-2xl font-bold text-gold-400 mb-1">
                    ₹{option.amount.toLocaleString()}
                  </p>
                  <p className="text-white font-medium text-sm mb-1">{option.label}</p>
                  <p className="text-white/40 text-xs">{option.description}</p>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <p className="text-white/50 text-sm mb-2">Or enter custom amount</p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400 font-bold">₹</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  placeholder="Enter amount"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/40 transition-colors"
                />
              </div>
            </div>

            {/* Selected Amount Display */}
            {finalAmount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-xl p-4 mb-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Donation Amount</span>
                  <span className="text-2xl font-bold text-gold-400">₹{finalAmount.toLocaleString()}</span>
                </div>
              </motion.div>
            )}

            {/* Payment Methods */}
            <div className="space-y-3">
              <Button
                size="lg"
                variant="gold"
                className="w-full h-14 text-lg"
                disabled={finalAmount <= 0}
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 h-12 border-white/10 hover:bg-white/5">
                  <QrCode className="w-4 h-4 mr-2" />
                  UPI / QR
                </Button>
                <Button variant="outline" className="flex-1 h-12 border-white/10 hover:bg-white/5">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Card
                </Button>
                <Button variant="outline" className="flex-1 h-12 border-white/10 hover:bg-white/5">
                  <Wallet className="w-4 h-4 mr-2" />
                  Net Banking
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Trust & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Trust Badges */}
            <Card className="bg-white/[0.02] border-white/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  Secure & Transparent
                </h3>
                <div className="space-y-4">
                  {[
                    "100% of donations go to mosque operations and community welfare",
                    "Registered charitable organization with tax benefits",
                    "Regular financial reports shared with the community",
                    "Secure payment processing with bank-level encryption",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <p className="text-white/60 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* QR Code Placeholder */}
            <Card className="bg-white/[0.02] border-white/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Scan to Donate</h3>
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-4">
                  <QrCode className="w-16 h-16 text-white/20" />
                </div>
                <p className="text-white/40 text-sm">
                  Scan this QR code with any UPI app to donate instantly
                </p>
              </CardContent>
            </Card>

            {/* Recent Donors */}
            <Card className="bg-white/[0.02] border-white/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Recent Supporters</h3>
                  <Badge variant="gold" className="text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Anonymous", amount: "₹5,000", time: "2 min ago" },
                    { name: "Mohammed A.", amount: "₹1,000", time: "15 min ago" },
                    { name: "Family S.", amount: "₹2,500", time: "1 hour ago" },
                    { name: "Anonymous", amount: "₹500", time: "3 hours ago" },
                  ].map((donor, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center">
                          <Heart className="w-3 h-3 text-gold-400" />
                        </div>
                        <span className="text-white/70 text-sm">{donor.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-gold-400 text-sm font-medium">{donor.amount}</p>
                        <p className="text-white/30 text-xs">{donor.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
