"use client";
import React, { useState } from "react";
import { feedingGuide } from "@/data/feedingGuide";
import ProductIcon from "@/components/ProductIcon";

const floatingShapes = (
  <>
    <svg
      className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-float-slow"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="50" fill="#FDE68A" />
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

export default function FeedingGuidePage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 overflow-x-hidden">
      {floatingShapes}
      <div className="max-w-4xl w-full mx-auto z-10">
        <h1 className="text-5xl font-extrabold mb-10 text-orange-500 text-center drop-shadow-lg animate-fade-in-up flex items-center justify-center gap-3">
          <span>Feeding Guide Roadmap</span>
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="#FB923C"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2v20M2 12h20" />
          </svg>
        </h1>
        <p className="mb-12 text-xl text-center text-gray-600 font-light animate-fade-in-up">
          A magical, step-by-step journey to healthy eating for babies and
          toddlers. Tap a step to read full details, pro tips, and common
          questions!
        </p>
        <div className="relative flex flex-col items-center">
          {/* Roadmap connecting line */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-orange-200 via-pink-200 to-yellow-200 rounded-full opacity-40 z-0"
            style={{ minHeight: "100%", pointerEvents: "none" }}
          />
          <div className="w-full flex flex-col gap-16 z-10">
            {feedingGuide.map((step, idx) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 p-8 rounded-3xl shadow-2xl border-4 border-white/40 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-100 backdrop-blur-xl animate-fade-in-up ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } cursor-pointer`}
                onClick={() =>
                  setExpanded(expanded === step.id ? null : step.id)
                }
              >
                <div className="flex-shrink-0">
                  <ProductIcon type={step.iconType} className="w-28 h-28" />
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-bold text-orange-400 bg-white/70 px-4 py-1 rounded-full shadow animate-fade-in">
                      Step {idx + 1}
                    </span>
                    <span className="text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full animate-fade-in-up">
                      {step.ageRange}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-800 mb-2 text-center md:text-left animate-fade-in-up">
                    {step.title}
                  </h2>
                  <p className="text-lg text-gray-600 font-light text-center md:text-left animate-fade-in-up line-clamp-3">
                    {step.description.slice(0, 100)}
                    {step.description.length > 100 ? "..." : ""}
                  </p>
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      expanded === step.id
                        ? "max-h-96 mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 text-base text-center whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Magical sparkle icon */}
                <svg
                  className="absolute top-2 right-2 w-8 h-8 opacity-20 animate-float-fast"
                  fill="#FDE68A"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
