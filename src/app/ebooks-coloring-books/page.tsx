"use client";
import React from "react";
import Image from "next/image";
import { ebooks, ebookCategories } from "@/data/ebooks";

export default function EbooksColoringBooksPage() {
  const getEbooksByCategory = (categoryId: string) => {
    return ebooks.filter((ebook) => ebook.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200 rounded-full opacity-15 animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-25 animate-float-mid"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold mb-8">
            <span>📚</span>
            <span>Wisdom & Knowledge</span>
            <span>✨</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ebooks & Guides
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 font-light">
            Transform your parenting journey with evidence-based wisdom and
            practical strategies.
            <span className="font-semibold text-purple-500">
              {" "}
              Written by experts
            </span>{" "}
            and
            <span className="font-semibold text-pink-500">
              {" "}
              trusted by thousands of parents.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-6 py-3">
              <span className="text-gray-700 font-medium">
                📖 Expert-written
              </span>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-6 py-3">
              <span className="text-gray-700 font-medium">
                🧠 Evidence-based
              </span>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-6 py-3">
              <span className="text-gray-700 font-medium">
                💝 Life-changing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
                      {ebookCategories.map((category) => {
          const categoryEbooks = getEbooksByCategory(category.id);
          if (categoryEbooks.length === 0) return null;

          return (
            <section key={category.id} className="mb-24">
              {/* Category Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {category.name}
                  </span>
                </h2>
                <p className="text-xl text-gray-600 font-medium mb-3">
                  {category.subtitle}
                </p>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Ebooks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryEbooks.map((ebook, index) => (
                  <div
                    key={ebook.id}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                    {/* Ebook Card */}
                    <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 h-full flex flex-col">
                      {/* Badges */}
                      {ebook.badges && ebook.badges.length > 0 && (
                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                          {ebook.badges.map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex}
                              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Ebook Image */}
                      <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                        <Image
                          src={ebook.image}
                          alt={ebook.marketingName}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      {/* Ebook Info */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                          {ebook.marketingName}
                        </h3>

                        <p className="text-gray-600 mb-4 flex-1 text-sm leading-relaxed line-clamp-4">
                          {ebook.description}
                        </p>

                        <div className="flex items-center justify-center mb-4">
                          <div className="flex items-center gap-1 text-yellow-400">
                            <span className="text-sm">⭐⭐⭐⭐⭐</span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-center mb-4">
                          <span className="text-lg font-semibold text-gray-700">
                            {ebook.price}
                          </span>
                        </div>

                        {/* CTA Button */}
                        <a
                          href={ebook.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg text-center inline-flex items-center justify-center gap-2 group/btn"
                        >
                          <span>📚</span>
                          <span>Get on Amazon</span>
                          <svg
                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </a>
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-bl-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              More Life-Changing Guides Coming Soon!
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community to be the first to discover new ebooks that will
            transform your parenting journey and personal growth.
          </p>
          <a
            href="https://www.instagram.com/momwisewithsophia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span className="text-2xl">📱</span>
            <span>Follow for Updates</span>
          </a>
        </div>
      </section>
    </div>
  );
}
