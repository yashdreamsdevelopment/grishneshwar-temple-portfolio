import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/temple-logo.png"
                alt="Grishneshwar Temple Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold text-lg">Grishneshwar Temple</span>
            </div>
            <p className="text-gray-400 mb-6">
              One of the sacred 12 Jyotirlingas of Lord Shiva, nestled in the
              historic region of Aurangabad, Maharashtra.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#history"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  History & Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Temple Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/#directions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How to Reach
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Information
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Temple Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Events & Festivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Visitor Information</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/visiting-hours"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Visiting Hours
                </Link>
              </li>
              <li>
                <Link
                  href="/dress-code"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dress Code
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/nearby-attractions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nearby Attractions
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  Verul, Ellora, Aurangabad District, Maharashtra, India -
                  431102
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-gray-400">+91 9422714413</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-gray-400">
                  akshayvaidya5004@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Grishneshwar Temple Trust. All rights
            reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
