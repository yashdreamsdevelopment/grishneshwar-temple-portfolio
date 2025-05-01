import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/temple-hero.jpg"
          alt="Grishneshwar Temple"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Grishneshwar Temple
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl drop-shadow-md">
          One of the sacred 12 Jyotirlingas of Lord Shiva, nestled in
          Aurangabad, Maharashtra
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700"
          >
            <Link href="tel: +91-8329650000">Call us now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white hover:bg-white/20"
          >
            <Link href="/#history">Explore History</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
