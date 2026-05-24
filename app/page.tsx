"use client"

import dynamic from "next/dynamic"

const HeroSection = dynamic(
  () => import("./sections/hero").then((mod) => mod.HeroSection),
  { ssr: false }
)
import { AboutSection } from "./sections/about"
const PrayerTimesSection = dynamic(
  () => import("./sections/prayer-times").then((mod) => mod.PrayerTimesSection),
  { ssr: false }
)
import { GallerySection } from "./sections/gallery"
import { EventsSection } from "./sections/events"
import { DonateSection } from "./sections/donate"
import { ContactSection } from "./sections/contact"
import { QuranVerseSection } from "./sections/quran-verse"
import { BismillahSection } from "./sections/bismillah"
import { LoadingScreen } from "./components/loading-screen"

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
