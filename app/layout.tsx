import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/app/components/theme-provider"
import { SmoothScroll } from "@/app/components/smooth-scroll"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Jama Masjid Pindwara | A Place of Peace, Prayer & Community",
  description: "Jama Masjid Pindwara - A spiritual sanctuary in Pindwara, Rajasthan, India. Experience peace, prayer, and community in a place of divine beauty and Islamic heritage.",
  keywords: ["Jama Masjid", "Pindwara", "Rajasthan", "mosque", "Islam", "prayer", "community", "masjid"],
  authors: [{ name: "Jama Masjid Pindwara" }],
  openGraph: {
    title: "Jama Masjid Pindwara",
    description: "A Place of Peace, Prayer & Community in Pindwara, Rajasthan",
    type: "website",
    locale: "en_US",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jama Masjid Pindwara",
    description: "A Place of Peace, Prayer & Community",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jamamasjidpindwara.org",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-mosque-dark text-white overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
