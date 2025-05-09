import type { Metadata } from "next";
import { Clock, MapPin, Calendar } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { HistorySection } from "@/components/history-section";
import { GallerySection } from "@/components/gallery-section";
import { DirectionsSection } from "@/components/directions-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Banner from "@/components/banner";

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
};

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
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="p-3 border border-gray-200 text-sm font-semibold">
                        Occasion
                      </th>
                      <th className="p-3 border border-gray-200 text-sm font-semibold">
                        Visiting Hours
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="p-3 border border-gray-200">Every Day</td>
                      <td className="p-3 border border-gray-200">
                        5:00 AM - 9:00 AM
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">
                        All Mondays of Shrawan Month
                      </td>
                      <td className="p-3 border border-gray-200">
                        Sunday 12:00 AM - Tuesday 1:00 AM
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">
                        Vaikunth Chaturdashi
                      </td>
                      <td className="p-3 border border-gray-200">
                        5:00 AM - 3:00 AM (next day)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">
                        Mahashivratri
                      </td>
                      <td className="p-3 border border-gray-200">
                        From previous day 12:00 AM - All Day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <p className="text-gray-700 mt-2">Every Day: 5:00 AM - 9:00 AM</p>
              <p className="text-gray-700 mt-2">
                All Monday of Shrawan Month: Sunday 12:00 AM - Tuesday 1:00 AM
              </p>
              <p className="text-gray-700 mt-2">
                Vaikunth Chaturdashi: 5:00 AM - 3:00 AM
              </p>
              <p className="text-gray-700 mt-2">
                Mahashivratra: Before 1 Day 12:00 AM - All Day
              </p> */}
            </div>
            <div className="bg-orange-50 rounded-lg p-6 flex flex-col items-center text-center">
              <MapPin className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-700">
                Grishneshwar Temple 12th, Verul, Aurangabad District
              </p>
              <p className="text-gray-700 mt-2">Maharashtra, India - 431102</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 flex flex-col items-center text-center">
              <Calendar className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Kinds of Puja in Grishneshwar Temple
              </h3>
              <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-orange-100">
                    <th
                      colSpan={2}
                      className="p-3 border border-gray-200 text-sm font-semibold"
                    >
                      Particulars of Puja
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="p-3 border border-gray-200">
                      Panchamrut Pujan
                    </td>
                    <td className="p-3 border border-gray-200">
                      Puja Abhishek
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      Rudra Abhishek
                    </td>
                    <td className="p-3 border border-gray-200">Mahapuja</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      Laghu Rudra (with 11 Brahman Bhojan)
                    </td>
                    <td className="p-3 border border-gray-200">
                      Maharudra (with 11 Brahman Bhojan)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      Mahamrutyunjay Jap (1,25,000 Times Mantra Jap)
                    </td>
                    <td className="p-3 border border-gray-200">
                      Savvalaksh Bilva Patra Arpan (1,25,000 Times Mantra Jap)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Annadan</td>
                    <td className="p-3 border border-gray-200"></td>
                  </tr>
                </tbody>
              </table>
              {/* <p className="text-gray-700">October to March</p>
              <p className="text-gray-700 mt-2">
                Maha Shivaratri (February/March)
              </p> */}
            </div>
          </div>
        </section>
        <Banner />
        <HistorySection />
        <GallerySection />
        <DirectionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
