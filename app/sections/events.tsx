"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users, ChevronRight, Sparkles, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  attendees: number
  image: string
  status: "upcoming" | "ongoing" | "completed"
}

const events: Event[] = [
  {
    id: 1,
    title: "Jummah Khutbah",
    description: "Weekly Friday sermon and congregational prayer. Join us for spiritual guidance and community connection.",
    date: "Every Friday",
    time: "12:30 PM - 1:30 PM",
    location: "Main Prayer Hall",
    category: "Prayer",
    attendees: 200,
    image: "/images/jummah.jpg",
    status: "ongoing",
  },
  {
    id: 2,
    title: "Ramadan Iftar Program",
    description: "Daily community iftar during Ramadan. Breaking fast together strengthens our bonds of brotherhood.",
    date: "Ramadan 2026",
    time: "Sunset - 8:30 PM",
    location: "Community Hall & Courtyard",
    category: "Ramadan",
    attendees: 500,
    image: "/images/iftar.jpg",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Eid-ul-Fitr Prayer",
    description: "Special Eid prayer and celebration. Join the community in marking the end of Ramadan with joy and gratitude.",
    date: "Eid Day",
    time: "7:00 AM - 10:00 AM",
    location: "Main Prayer Hall & Grounds",
    category: "Eid",
    attendees: 1000,
    image: "/images/eid.jpg",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Quran Classes for Children",
    description: "Weekly Quran recitation and Islamic studies classes for children of all ages. Building strong foundations of faith.",
    date: "Every Saturday & Sunday",
    time: "10:00 AM - 12:00 PM",
    location: "Education Room",
    category: "Education",
    attendees: 80,
    image: "/images/quran-class.jpg",
    status: "ongoing",
  },
  {
    id: 5,
    title: "Islamic Lecture Series",
    description: "Monthly lectures on various Islamic topics by renowned scholars. Deepen your understanding of faith and practice.",
    date: "Last Sunday of Month",
    time: "6:00 PM - 8:00 PM",
    location: "Main Hall",
    category: "Lecture",
    attendees: 150,
    image: "/images/lecture.jpg",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Community Iftar Gathering",
    description: "Monthly community dinner to foster unity and friendship among mosque members and neighbors.",
    date: "First Saturday of Month",
    time: "7:00 PM - 9:00 PM",
    location: "Community Hall",
    category: "Community",
    attendees: 120,
    image: "/images/community-dinner.jpg",
    status: "upcoming",
  },
]

const categories = ["All", "Prayer", "Ramadan", "Eid", "Education", "Lecture", "Community"]

export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredEvents = selectedCategory === "All"
    ? events
    : events.filter((e) => e.category === selectedCategory)

  return (
    <section id="events" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosque-dark via-emerald-950/20 to-mosque-dark" />
      <div className="absolute inset-0 islamic-pattern opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 tracking-wider uppercase">Events</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Community <span className="text-gradient-emerald">Events</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Join us in prayer, learning, and community gatherings
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center gap-2",
                selectedCategory === category
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80 border border-white/5"
              )}
            >
              {category === "All" && <Filter className="w-3 h-3" />}
              {category}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-white/[0.02] border-white/5 hover:border-emerald-500/20 transition-all duration-500 overflow-hidden">
                {/* Image Placeholder */}
                <div className="relative h-48 overflow-hidden">
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    index % 3 === 0 ? "from-emerald-900/50 to-emerald-800/30" :
                    index % 3 === 1 ? "from-gold-900/50 to-gold-800/30" :
                    "from-mosque-matte to-emerald-950/40"
                  )}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="w-10 h-10 text-white/20" />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={event.status === "ongoing" ? "emerald" : event.status === "upcoming" ? "gold" : "secondary"}
                    >
                      {event.status === "ongoing" ? "Ongoing" : event.status === "upcoming" ? "Upcoming" : "Completed"}
                    </Badge>
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-black/30 border-white/10 text-white/70">
                      {event.category}
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Calendar className="w-4 h-4 text-emerald-400/60" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Clock className="w-4 h-4 text-gold-400/60" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <MapPin className="w-4 h-4 text-red-400/60" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Users className="w-4 h-4 text-blue-400/60" />
                      <span>{event.attendees}+ attendees</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full group/btn text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
