"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/amazon-finds", label: "Amazon Finds" },
  { href: "/ebooks-coloring-books", label: "Ebooks & Coloring Books" },
  { href: "/recipes", label: "Recipes" },
  { href: "/parenting-tips", label: "Parenting Tips" },
  { href: "/feeding-guide", label: "Feeding Guide" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-100/80 via-purple-50/80 to-blue-50/80 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                M
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                MomWise
              </span>
              <span className="text-sm text-gray-500 hidden sm:block">
                with Sophia
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-gray-700 hover:text-white font-medium transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/50 to-purple-200/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/momwisewithsophia/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
            >
              📸 Follow Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 transition-all duration-300 shadow-md"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-gradient-to-r from-pink-600 to-purple-600 transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gradient-to-r from-pink-600 to-purple-600 transform transition-all duration-300 mt-1 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gradient-to-r from-pink-600 to-purple-600 transform transition-all duration-300 mt-1 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="pb-6 pt-2 space-y-2 bg-gradient-to-b from-white/50 to-pink-50/50 backdrop-blur-sm rounded-2xl mt-4 border border-white/30 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-gray-700 hover:text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 mx-2 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <a
                href="https://www.instagram.com/momwisewithsophia/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                📸 Follow Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
