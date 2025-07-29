import React from "react";

const ProblemSolutionSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Problem Section */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            The Modern Motherhood Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Today&apos;s mothers face unprecedented challenges that previous
            generations never experienced.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Problem Cards */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-200/30 to-orange-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">😰</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Information Overwhelm
                  </h3>
                </div>
                <p className="text-gray-600">
                  Conflicting advice from experts, social media pressure, and
                  endless &quot;perfect parenting&quot; content leaving mothers confused
                  and anxious.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-200/30 to-orange-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Time Scarcity
                  </h3>
                </div>
                <p className="text-gray-600">
                  Juggling work, family, and personal needs with no time to
                  research reliable parenting solutions or connect with
                  supportive communities.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-200/30 to-orange-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">💔</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Lack of Support
                  </h3>
                </div>
                <p className="text-gray-600">
                  Feeling isolated without a trusted community of mothers
                  sharing similar experiences and proven solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Problem Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 rounded-3xl p-8 text-center">
              <div className="text-8xl mb-4 animate-pulse">😓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                &quot;I feel lost and overwhelmed...&quot;
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>❌ Conflicting parenting advice everywhere</p>
                <p>❌ No time to find reliable resources</p>
                <p>❌ Feeling alone in the parenting journey</p>
                <p>❌ Constant worry about doing it &quot;right&quot;</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-float-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-float-fast"></div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-salmon-500 to-mint-500 bg-clip-text text-transparent mb-6">
            Our Revolutionary Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MomWise with Sophia transforms the parenting journey with expert
            guidance, proven resources, and an empowering community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Solution Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-salmon-100 via-mint-100 to-blue-100 rounded-3xl p-8 text-center">
              <div className="text-8xl mb-4 animate-bounce">🌟</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                &quot;Confident, empowered parenting!&quot;
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>✅ Expert-curated, trustworthy resources</p>
                <p>✅ Time-saving solutions that actually work</p>
                <p>✅ Supportive community of 67,000+ mothers</p>
                <p>✅ Confidence in every parenting decision</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-salmon-200 rounded-full opacity-20 animate-float-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-mint-200 rounded-full opacity-20 animate-float-fast"></div>
          </div>

          {/* Solution Cards */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-salmon-200/30 to-mint-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Expert-Curated Content
                  </h3>
                </div>
                <p className="text-gray-600">
                  Every resource is carefully selected and vetted by parenting
                  experts, pediatricians, and experienced mothers.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-salmon-200/30 to-mint-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Empowering Community
                  </h3>
                </div>
                <p className="text-gray-600">
                  Connect with 67,000+ mothers sharing experiences, celebrating
                  wins, and supporting each other through challenges.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-salmon-200/30 to-mint-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Proven Results
                  </h3>
                </div>
                <p className="text-gray-600">
                  Join 47,892+ families who have transformed their parenting
                  journey with our trusted resources and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
