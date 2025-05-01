import type { Metadata } from "next"
import { Clock, MapPin, Calendar } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { HistorySection } from "@/components/history-section"
import { GallerySection } from "@/components/gallery-section"
import { DirectionsSection } from "@/components/directions-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Grishneshwar Temple - Ancient Jyotirlinga in Aurangabad, Maharashtra",
  description:
    "Explore the sacred Grishneshwar Temple, one of the 12 Jyotirlingas of Lord Shiva, located in Aurangabad, Maharashtra. Learn about its rich history, architecture, visiting hours, and directions.",
  keywords:
    "Grishneshwar Temple, Grishneshwar Jyotirlinga, Aurangabad temples, Lord Shiva temples, 12 Jyotirlingas, Maharashtra temples, sacred sites India",
  openGraph: {
    title: "Grishneshwar Temple - Ancient Jyotirlinga in Aurangabad",
    description:
      "Explore the sacred Grishneshwar Temple, one of the 12 Jyotirlingas of Lord Shiva, located in Aurangabad, Maharashtra.",
    images: ["/images/temple-main.jpg"],
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-lg p-6 flex flex-col items-center text-center">
              <Clock className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visiting Hours</h3>
              <p className="text-gray-700">5:00 AM - 9:30 PM</p>
              <p className="text-gray-700 mt-2">Special darshan: 5:00 AM - 6:00 AM</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 flex flex-col items-center text-center">
              <MapPin className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-700">Verul, Aurangabad District</p>
              <p className="text-gray-700 mt-2">Maharashtra, India - 431102</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 flex flex-col items-center text-center">
              <Calendar className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
              <p className="text-gray-700">October to March</p>
              <p className="text-gray-700 mt-2">Maha Shivaratri (February/March)</p>
            </div>
          </div>
        </section>
        <HistorySection />
        <GallerySection />
        <DirectionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
