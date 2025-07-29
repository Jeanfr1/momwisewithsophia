"use client";
import React from "react";

const NewsletterSignup: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-salmon-100 via-mint-50 to-salmon-50 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8 text-center">
        {/* Instagram Follow CTA */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-salmon-500 to-mint-500 bg-clip-text text-transparent mb-4">
            Stay Connected with Us!
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Follow us on Instagram for daily parenting tips, delicious recipes,
            and amazing product finds
          </p>

          <a
            href="https://www.instagram.com/momwisewithsophia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-salmon-500 to-mint-500 text-white font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span className="text-2xl">📱</span>
            <span>Follow @momwisewithsophia</span>
          </a>
        </div>

        {/* Additional social proof */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600 mb-3">
            Join our growing Instagram family
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-salmon-400 rounded-full animate-pulse"></span>
              <span>Daily inspiration</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-mint-400 rounded-full animate-pulse"></span>
              <span>Expert tips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-salmon-400 rounded-full animate-pulse"></span>
              <span>Recipe videos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
