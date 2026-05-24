"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-mosque-dark border-t border-white/5 overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5 islamic-pattern" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-xl font-bold text-white font-arabic">ج</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Jama Masjid</h3>
                <p className="text-xs text-gold-400 tracking-wider">PINDWARA</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              A spiritual sanctuary in the heart of Pindwara, serving the community 
              with devotion, peace, and Islamic heritage since generations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Prayer Times", "Events", "Gallery", "Donate", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/50 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  Jama Masjid, Indra Colony,<br />
                  Pindwara, Rajasthan 307022, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-white/50 text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-white/50 text-sm">info@jamamasjidpindwara.org</span>
              </li>
            </ul>
          </motion.div>

          {/* Prayer Times Mini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
              Daily Prayers
            </h4>
            <div className="space-y-2">
              {[
                { name: "Fajr", time: "5:30 AM" },
                { name: "Dhuhr", time: "12:30 PM" },
                { name: "Asr", time: "4:15 PM" },
                { name: "Maghrib", time: "6:45 PM" },
                { name: "Isha", time: "8:00 PM" },
              ].map((prayer) => (
                <div key={prayer.name} className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-white/60 text-sm">{prayer.name}</span>
                  <span className="text-gold-400 text-sm font-mono">{prayer.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for the community
          </p>
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Jama Masjid Pindwara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
