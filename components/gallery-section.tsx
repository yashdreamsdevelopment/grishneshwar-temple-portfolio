"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Grishneshwar Temple Front View",
    caption: "Majestic front view of the temple",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Grishneshwar Temple Interior",
    caption: "Sacred interior sanctum",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Temple Carvings",
    caption: "Intricate stone carvings on temple walls",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Temple Festival",
    caption: "Celebration during Maha Shivaratri",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Temple at Sunset",
    caption: "Golden hour view of the temple",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Temple Architecture",
    caption: "Architectural details of the shikhara",
  },
]

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Temple Gallery</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Explore the divine beauty and architectural grandeur of Grishneshwar Temple through our curated collection
            of images.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="relative h-[80vh] w-[80vw] md:w-[70vw] lg:w-[60vw]">
            <Image
              src={galleryImages[currentImage].src || "/placeholder.svg"}
              alt={galleryImages[currentImage].alt}
              fill
              className="object-contain"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
              {galleryImages[currentImage].caption}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </section>
  )
}
