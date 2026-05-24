"use client"

import dynamic from "next/dynamic"

const HeroSection = dynamic(
  () => import("@/app/sections/hero").then((mod) => mod.HeroSection),
  { ssr: false }
)
import { AboutSection } from "@/app/sections/about"
const PrayerTimesSection = dynamic(
  () => import("@/app/sections/prayer-times").then((mod) => mod.PrayerTimesSection),
  { ssr: false }
)
import { GallerySection } from "@/app/sections/gallery"
import { EventsSection } from "@/app/sections/events"
import { DonateSection } from "@/app/sections/donate"
import { ContactSection } from "@/app/sections/contact"
import { QuranVerseSection } from "@/app/sections/quran-verse"
import { BismillahSection } from "@/app/sections/bismillah"
import { LoadingScreen } from "@/app/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <HeroSection />
      <BismillahSection />
      <AboutSection />
      <QuranVerseSection />
      <PrayerTimesSection />
      <GallerySection />
      <EventsSection />
      <DonateSection />
      <ContactSection />
    </>
  )
}
