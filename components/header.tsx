"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/temple-logo.png"
            alt="Grishneshwar Temple Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="hidden font-semibold sm:inline-block">
            Grishneshwar Temple
          </span>
        </Link>

        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/#history"
            className="text-sm font-medium hover:text-primary"
          >
            History
          </Link>
          <Link
            href="/#gallery"
            className="text-sm font-medium hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            href="/#directions"
            className="text-sm font-medium hover:text-primary"
          >
            Directions
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
          {/* <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link> */}
        </nav>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/#history"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                History
              </Link>
              <Link
                href="/#gallery"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/#directions"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Directions
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {/* <Link
                href="/blog"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
