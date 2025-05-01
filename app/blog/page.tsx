import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, Clock, User } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog - Grishneshwar Temple",
  description:
    "Read articles about the history, festivals, and spiritual significance of Grishneshwar Temple, one of the 12 Jyotirlingas of Lord Shiva.",
}

const blogPosts = [
  {
    id: 1,
    title: "The Spiritual Significance of Grishneshwar Jyotirlinga",
    excerpt:
      "Explore the deep spiritual meaning and religious importance of Grishneshwar, the 12th Jyotirlinga of Lord Shiva.",
    image: "/images/blog-1.jpg",
    date: "April 15, 2023",
    author: "Pandit Ramesh Sharma",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Celebrating Maha Shivaratri at Grishneshwar Temple",
    excerpt:
      "A detailed look at how the grand festival of Maha Shivaratri is celebrated at the sacred Grishneshwar Temple.",
    image: "/images/blog-2.jpg",
    date: "February 28, 2023",
    author: "Dr. Anjali Desai",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Architectural Marvel of Grishneshwar Temple",
    excerpt:
      "Discover the intricate architectural details and historical significance of the Grishneshwar Temple structure.",
    image: "/images/blog-3.jpg",
    date: "January 10, 2023",
    author: "Prof. Sunil Patil",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Legends and Myths Associated with Grishneshwar",
    excerpt: "Delve into the fascinating legends and mythological stories behind the origin of Grishneshwar Temple.",
    image: "/images/blog-4.jpg",
    date: "December 5, 2022",
    author: "Historian Vikram Joshi",
    readTime: "9 min read",
  },
  {
    id: 5,
    title: "A Pilgrim's Guide to Visiting All 12 Jyotirlingas",
    excerpt:
      "A comprehensive guide for devotees planning to undertake the sacred journey to all twelve Jyotirlingas across India.",
    image: "/images/blog-5.jpg",
    date: "November 12, 2022",
    author: "Swami Anand Giri",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "The Cultural Heritage Around Grishneshwar Temple",
    excerpt:
      "Explore the rich cultural heritage and traditions of the region surrounding the ancient Grishneshwar Temple.",
    image: "/images/blog-6.jpg",
    date: "October 8, 2022",
    author: "Dr. Meera Kulkarni",
    readTime: "5 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-orange-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Temple Blog</h1>
              <p className="text-gray-700">
                Discover articles about the history, festivals, and spiritual significance of Grishneshwar Temple.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-3 hover:text-orange-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center mr-4">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
