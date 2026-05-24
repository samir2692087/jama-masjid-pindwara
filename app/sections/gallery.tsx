"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/images/mosque-exterior.jpg",
    title: "Mosque Exterior",
    category: "Architecture",
    description: "The grand facade of Jama Masjid Pindwara",
  },
  {
    src: "/images/minaret.jpg",
    title: "Minaret Detail",
    category: "Architecture",
    description: "Beautiful minaret architecture",
  },
  {
    src: "/images/interior.jpg",
    title: "Prayer Hall",
    category: "Interior",
    description: "Serene interior prayer space",
  },
  {
    src: "/images/courtyard.jpg",
    title: "Courtyard",
    category: "Exterior",
    description: "Spacious community courtyard",
  },
  {
    src: "/images/evening.jpg",
    title: "Evening View",
    category: "Atmosphere",
    description: "Mosque illuminated at dusk",
  },
  {
    src: "/images/ramadan.jpg",
    title: "Ramadan Nights",
    category: "Events",
    description: "Special Ramadan decorations",
  },
  {
    src: "/images/community.jpg",
    title: "Community Gathering",
    category: "Community",
    description: "Brothers in prayer together",
  },
  {
    src: "/images/dome.jpg",
    title: "Dome Architecture",
    category: "Architecture",
    description: "Intricate dome design",
  },
]

const categories = ["All", "Architecture", "Interior", "Exterior", "Events", "Community", "Atmosphere"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return
    const newIndex = direction === "prev"
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length
    setSelectedImage(newIndex)
  }

  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosque-dark via-mosque-matte to-mosque-dark" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
          >
            <Camera className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-gold-400 tracking-wider uppercase">Gallery</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Mosque <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Glimpses of our sacred space, community moments, and architectural beauty
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
                "px-4 py-2 rounded-full text-sm transition-all duration-300",
                selectedCategory === category
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/25"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80 border border-white/5"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <div
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Placeholder with gradient */}
                  <div className={cn(
                    "aspect-[4/3] bg-gradient-to-br",
                    index % 3 === 0 ? "from-emerald-900/40 to-emerald-800/20" :
                    index % 3 === 1 ? "from-gold-900/40 to-gold-800/20" :
                    "from-mosque-matte to-emerald-950/30"
                  )}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-white/20 mx-auto mb-2" />
                        <p className="text-white/30 text-sm">{image.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs text-gold-400 tracking-wider uppercase mb-1 block">
                      {image.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-white/60">
                      {image.description}
                    </p>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("prev") }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("next") }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] mx-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-emerald-900/30 to-gold-900/20 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-white/20 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-white/50">
                    {filteredImages[selectedImage].description}
                  </p>
                  <p className="text-gold-400/60 text-sm mt-4">
                    {selectedImage + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
