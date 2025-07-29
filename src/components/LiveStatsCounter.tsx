"use client";
import React, { useState, useEffect } from "react";

interface StatItemProps {
  targetNumber: number;
  label: string;
  emoji: string;
  suffix?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({
  targetNumber,
  label,
  emoji,
  suffix = "",
  duration = 2000,
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const increment = targetNumber / (duration / 50);
    const timer = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev + increment >= targetNumber) {
          clearInterval(timer);
          return targetNumber;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return (
    <div className="group text-center p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl hover:scale-105 transition-all duration-300">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <span className="bg-gradient-to-r from-salmon-500 to-mint-500 bg-clip-text text-transparent">
          {Math.floor(currentNumber).toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const LiveStatsCounter: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-salmon-50 to-mint-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold mb-8">
            <span>📈</span>
            <span>Growing Community</span>
            <span>✨</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-salmon-500 to-mint-500 bg-clip-text text-transparent">
              Join Thousands of Happy Families
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real numbers from our amazing community of mothers who are
            transforming their parenting journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            targetNumber={2445}
            label="Instagram Followers"
            emoji="👥"
            suffix="+"
            duration={2500}
          />
          <StatItem
            targetNumber={1247}
            label="Families Helped"
            emoji="🏠"
            suffix="+"
            duration={2200}
          />
          <StatItem
            targetNumber={47}
            label="Curated Products"
            emoji="🛍️"
            suffix="+"
            duration={1800}
          />
          <StatItem
            targetNumber={98}
            label="Success Rate"
            emoji="⭐"
            suffix="%"
            duration={2000}
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-gray-600 mb-6">
              Get daily parenting tips, expert advice, and connect with other
              amazing mothers
            </p>
            <a
              href="https://www.instagram.com/momwisewithsophia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-salmon-500 to-mint-500 text-white font-bold py-3 px-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>📱</span>
              <span>Follow Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatsCounter;
