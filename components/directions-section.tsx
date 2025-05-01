import { MapPin, Car, Train, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DirectionsSection() {
  return (
    <section id="directions" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Reach</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Plan your journey to Grishneshwar Temple with these helpful directions and transportation options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex items-center mb-4">
                <Car className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold">By Road</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Grishneshwar Temple is located approximately 30 km from Aurangabad city and 2 km from the famous Ellora
                Caves.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>From Aurangabad: Take the Aurangabad-Ellora Road (NH 211) and follow signs to Ellora/Verul.</li>
                <li>From Mumbai: Approximately 335 km via NH 160 and NH 211 (7-8 hours drive).</li>
                <li>From Pune: Approximately 260 km via NH 60 (5-6 hours drive).</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex items-center mb-4">
                <Train className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold">By Train</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The nearest railway station is Aurangabad Railway Station, which is well-connected to major cities like
                Mumbai, Pune, and Hyderabad.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  From Aurangabad Railway Station: Hire a taxi or take a bus to reach the temple (approximately 30 km).
                </li>
                <li>Regular trains operate from Mumbai, Pune, and other major cities to Aurangabad.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Plane className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold">By Air</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The nearest airport is Aurangabad Airport (Chikalthana Airport), which has regular flights from Mumbai,
                Delhi, and Hyderabad.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>From Aurangabad Airport: Hire a taxi to reach the temple (approximately 35 km).</li>
                <li>Pre-paid taxi services are available at the airport.</li>
              </ul>
            </div>
          </div>

          <div className="h-full">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-4">Location Map</h3>
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2288340092397!2d75.17134491491133!3d19.90297998660721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a3d87e!2sGrishneshwar%20Jyotirlinga%20Temple!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  Grishneshwar Temple, Verul, Aurangabad District, Maharashtra, India - 431102
                </p>
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                <a href="https://goo.gl/maps/YourActualGoogleMapsLink" target="_blank" rel="noopener noreferrer">
                  Get Directions on Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
