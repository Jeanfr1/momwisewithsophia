"use client";
import React, { useState } from "react";
import { parentingTips } from "@/data/parentingTips";

import ProductIcon from "@/components/ProductIcon";

const floatingShapes = (
  <>
    <svg
      className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-float-slow"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="50" fill="#FBCFE8" />
    </svg>
    <svg
      className="absolute bottom-20 right-20 w-40 h-40 opacity-10 animate-float-fast"
      viewBox="0 0 100 100"
    >
      <rect width="100" height="100" rx="30" fill="#A7F3D0" />
    </svg>
    <svg
      className="absolute top-1/2 left-1/3 w-24 h-24 opacity-10 animate-float-mid"
      viewBox="0 0 100 100"
    >
      <ellipse cx="50" cy="50" rx="50" ry="30" fill="#C7D2FE" />
    </svg>
  </>
);

export default function ParentingTipsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  // const pageTitle = "Parenting Tips | MomWise with Sophia";
  // const pageUrl =
  //   typeof window !== "undefined"
  //     ? window.location.href
  //     : "https://momwisewithsophia.com/parenting-tips";
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 overflow-x-hidden">
      {floatingShapes}
      <div className="max-w-5xl w-full mx-auto z-10">
        <h1 className="text-5xl font-extrabold mb-6 text-pink-500 text-center drop-shadow-lg animate-fade-in-up flex items-center justify-center gap-3">
          <span>Parenting Tips</span>
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="#F472B6"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2v20M2 12h20" />
          </svg>
        </h1>
        <p className="mb-10 text-xl text-center text-gray-600 font-light animate-fade-in-up">
          Expert-backed advice for modern parents, covering routines,
          discipline, play, nutrition, and more. Tap a card to read full
          details!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in-up">
          {parentingTips.map((tip) => (
            <div
              key={tip.id}
              className="relative bg-white/80 border border-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 group overflow-hidden animate-fade-in-up cursor-pointer"
              onClick={() => setExpanded(expanded === tip.id ? null : tip.id)}
            >
              <div className="mb-4">
                <ProductIcon
                  type={tip.iconType}
                  className="w-20 h-20 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-bold mb-2 text-center text-gray-800">
                {tip.title}
              </h2>
              <p className="text-pink-600 mb-1 text-sm text-center">
                {tip.summary}
              </p>
              <p className="text-gray-600 text-sm text-center line-clamp-3">
                {tip.content.slice(0, 100)}
                {tip.content.length > 100 ? "..." : ""}
              </p>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  expanded === tip.id
                    ? "max-h-96 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 text-base text-center whitespace-pre-line">
                  {tip.content}
                </p>
              </div>
              {/* Sparkle icon */}
              <svg
                className="absolute top-2 right-2 w-6 h-6 opacity-20 animate-float-fast"
                fill="#FDE68A"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
