import React from "react";

import NewsletterSignup from "@/components/NewsletterSignup";
import LiveStatsCounter from "@/components/LiveStatsCounter";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import SocialProofCards from "@/components/SocialProofCards";
import FeatureBenefits from "@/components/FeatureBenefits";

const heroGradient =
  "bg-gradient-to-br from-salmon-100 via-mint-50 to-salmon-50 min-h-screen w-full absolute inset-0 -z-10 animate-gradient-shift";

const floatingShapes = (
  <>
    {/* Large salmon circle */}
    <svg
      className="absolute top-20 left-10 w-40 h-40 opacity-20 animate-float-slow"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="50" fill="#fca5a5" />
    </svg>

    {/* Mint green rounded square */}
    <svg
      className="absolute bottom-32 right-16 w-48 h-48 opacity-15 animate-float-fast"
      viewBox="0 0 100 100"
    >
      <rect width="100" height="100" rx="30" fill="#86efac" />
    </svg>

    {/* Medium salmon oval */}
    <svg
      className="absolute top-1/2 left-1/4 w-32 h-32 opacity-25 animate-float-mid"
      viewBox="0 0 100 100"
    >
      <ellipse cx="50" cy="50" rx="50" ry="30" fill="#f87171" />
    </svg>

    {/* Small mint triangle */}
    <svg
      className="absolute top-32 right-1/3 w-24 h-24 opacity-15 animate-float-slow"
      viewBox="0 0 100 100"
    >
      <polygon points="50,15 80,80 20,80" fill="#4ade80" />
    </svg>

    {/* Tiny salmon diamond */}
    <svg
      className="absolute bottom-40 left-1/3 w-20 h-20 opacity-20 animate-float-mid"
      viewBox="0 0 100 100"
    >
      <rect
        x="25"
        y="25"
        width="50"
        height="50"
        rx="10"
        fill="#ef4444"
        transform="rotate(45 50 50)"
      />
    </svg>

    {/* Additional decorative elements */}
    <div className="absolute top-16 right-20 w-16 h-16 bg-gradient-to-r from-mint-300 to-salmon-300 rounded-full opacity-10 animate-float-fast"></div>
    <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-full opacity-15 animate-float-slow"></div>
  </>
);

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden min-h-screen flex flex-col">
      <div className={heroGradient} />
      {floatingShapes}

      {/* Hero Section - Modern Flowing Design */}
      <section className="w-full flex flex-col items-center justify-center min-h-screen py-32 px-4 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 px-8 py-3 rounded-full text-sm font-semibold mb-12 animate-fade-in shadow-lg hover:scale-105 transition-all duration-300">
            <span>🚀</span>
            <span>Revolutionizing Modern Motherhood</span>
            <span>🚀</span>
          </div>

          {/* Main Headline */}
          <div className="mb-8 animate-fade-in-scale">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none mb-4">
              <span className="bg-gradient-to-r from-salmon-500 via-salmon-400 to-mint-500 bg-clip-text text-transparent drop-shadow-sm">
                MomWise
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-700 opacity-90">
              with Sophia
            </h2>
          </div>

          {/* Subtitle */}
          <div className="max-w-5xl mx-auto mb-12 animate-fade-in-up">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed">
              Empowering mothers worldwide with{" "}
              <span className="font-semibold bg-gradient-to-r from-salmon-500 to-salmon-400 bg-clip-text text-transparent">
                expert guidance
              </span>
              ,{" "}
              <span className="font-semibold bg-gradient-to-r from-mint-500 to-mint-400 bg-clip-text text-transparent">
                proven resources
              </span>
              , and{" "}
              <span className="font-semibold bg-gradient-to-r from-salmon-500 to-mint-500 bg-clip-text text-transparent">
                daily inspiration
              </span>{" "}
              for 2,400+ mothers
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-salmon-400 to-salmon-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                👨‍👩‍👧‍👦
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-700 text-lg">
                  1,247+ Families
                </div>
                <div className="text-gray-600">Supported & Thriving</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-mint-400 to-mint-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                ⚡
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-700 text-lg">
                  Time-Saving
                </div>
                <div className="text-gray-600">Solutions That Work</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                🎯
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-700 text-lg">
                  Expert-Curated
                </div>
                <div className="text-gray-600">Trusted Content</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up">
            <a
              href="https://www.instagram.com/momwisewithsophia/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-salmon-500 to-mint-500 text-white font-bold text-xl px-12 py-5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-salmon-400 to-mint-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-2xl">📱</span>
              <span className="relative">Follow Us on Instagram</span>
            </a>

            <a
              href="#resources"
              className="group bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 font-bold text-xl px-12 py-5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:bg-white/30"
            >
              Explore Resources
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 animate-fade-in-up">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-6 py-3 shadow-lg">
              <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold text-gray-700">4.9/5</span>
              <span className="text-gray-600">(287 reviews)</span>
            </div>

            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-6 py-3 shadow-lg">
              <span className="text-green-500 text-xl">✅</span>
              <span className="font-semibold text-gray-700">
                Pediatrician Approved
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-6 py-3 shadow-lg">
              <span className="text-blue-500 text-xl">🏆</span>
              <span className="font-semibold text-gray-700">
                Featured in Parents Magazine
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="relative z-10">
        <LiveStatsCounter />
      </section>

      {/* Problem/Solution Section */}
      <section className="relative z-10 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm">
        <ProblemSolutionSection />
      </section>

      {/* Feature Benefits Section */}
      <section className="relative z-10">
        <FeatureBenefits />
      </section>

      {/* Quick Preview of Resources */}
      <section
        id="resources"
        className="w-full max-w-6xl mx-auto px-4 py-16 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-salmon-500 to-mint-500 bg-clip-text text-transparent mb-6">
            Discover Our Signature Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant access to our most popular guides, recipes, and tools
            trusted by thousands of mothers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Amazon Finds Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-salmon-200/30 to-mint-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛍️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Amazon Finds
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Curated products that make parenting easier
              </p>
              <div className="text-2xl font-bold text-salmon-500">47+</div>
              <div className="text-xs text-gray-500">Verified Products</div>
            </div>
          </div>

          {/* Recipes Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-salmon-200/30 to-mint-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-mint-400 to-salmon-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Family Recipes
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Healthy, kid-approved meals
              </p>
              <div className="text-2xl font-bold text-mint-500">234+</div>
              <div className="text-xs text-gray-500">Tested Recipes</div>
            </div>
          </div>

          {/* E-books Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-salmon-200/30 to-mint-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                E-books & Guides
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Expert parenting resources
              </p>
              <div className="text-2xl font-bold text-salmon-500">56+</div>
              <div className="text-xs text-gray-500">Digital Resources</div>
            </div>
          </div>

          {/* Parenting Tips Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-salmon-200/30 to-mint-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-mint-400 to-salmon-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Parenting Tips
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Daily wisdom & support
              </p>
              <div className="text-2xl font-bold text-mint-500">Daily</div>
              <div className="text-xs text-gray-500">Expert Tips</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative z-10 bg-gradient-to-r from-white/60 to-white/80 backdrop-blur-sm">
        <SocialProofCards />
      </section>

      {/* Final CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-20 relative z-10">
        <div className="glass-effect-strong rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-salmon-500 to-mint-500 bg-clip-text text-transparent mb-6">
            Ready to Transform Your Parenting Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 2,445+ mothers who follow us on Instagram for daily
            inspiration, expert tips, and proven solutions.
          </p>

          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Daily parenting tips</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Recipe videos & tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Product recommendations</span>
              </div>
            </div>

            <a
              href="https://www.instagram.com/momwisewithsophia/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-salmon-500 to-mint-500 text-white font-bold text-2xl px-16 py-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl animate-pulse-glow inline-flex items-center gap-3"
            >
              <span>📱</span>
              <span>Follow @momwisewithsophia</span>
            </a>

            <p className="text-sm text-gray-500 mt-4">
              🔥 Follow now and get access to our latest content and expert
              advice
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <div className="w-full max-w-2xl mx-auto px-4 mt-16 mb-20 animate-fade-in-up relative z-10">
        <NewsletterSignup />
      </div>
    </div>
  );
}
