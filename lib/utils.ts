import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date)
}

export function getHijriDate(): string {
  const today = new Date()
  // Approximate Hijri conversion - in production use a proper library
  const hijriYear = Math.floor((today.getTime() - new Date(622, 6, 16).getTime()) / (354.36707 * 24 * 60 * 60 * 1000)) + 1
  const months = [
    "Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani",
    "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban",
    "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
  ]
  const hijriMonth = Math.floor((today.getMonth() + 1) * 0.97) % 12
  const hijriDay = Math.floor(today.getDate() * 0.97)
  return `${hijriDay} ${months[hijriMonth]} ${hijriYear + 1445} AH`
}

export function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function generateIslamicPatternSVG(size: number = 100): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="islamic-geo" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M10 0L20 10L10 20L0 10Z" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
        <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="0.3" opacity="0.2"/>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#islamic-geo)"/>
  </svg>`
}
