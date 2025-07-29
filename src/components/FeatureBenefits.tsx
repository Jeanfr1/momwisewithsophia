import React from "react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  features: string[];
  icon: string;
  color: string;
  bgGradient: string;
  userCount: string;
}

const motherTypes: FeatureCardProps[] = [
  {
    title: "For New Mothers",
    subtitle: "First-time parenting support",
    features: [
      "Step-by-step feeding guides for every age",
      "Essential newborn care checklists",
      "Sleep training strategies that work",
      "Postpartum support and wellness tips",
      "Baby development milestone tracking",
    ],
    icon: "👶",
    color: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-50 to-rose-100",
    userCount: "445+ new moms",
  },
  {
    title: "For Working Moms",
    subtitle: "Time-saving solutions",
    features: [
      "Quick 15-minute healthy meal recipes",
      "Meal prep strategies for busy weeks",
      "Organization tips for work-life balance",
      "Portable snack ideas for on-the-go",
      "Weekend activity planners",
    ],
    icon: "💼",
    color: "from-blue-400 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-100",
    userCount: "692+ working moms",
  },
  {
    title: "For Growing Families",
    subtitle: "Scalable advice & resources",
    features: [
      "Multi-child meal planning strategies",
      "Age-appropriate activity suggestions",
      "Sibling relationship building tips",
      "Budget-friendly family recipes",
      "Educational resources for all ages",
    ],
    icon: "👨‍👩‍👧‍👦",
    color: "from-green-400 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-100",
    userCount: "567+ families",
  },
];

const FeatureBenefits: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-salmon-500 to-mint-500 bg-clip-text text-transparent mb-6">
          Tailored Solutions for Every Mother
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Whether you&apos;re a first-time mom, juggling work and family, or managing
          multiple children, we have expert resources designed specifically for
          your unique journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {motherTypes.map((type, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-salmon-200/30 to-mint-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div
              className={`relative bg-gradient-to-br ${type.bgGradient} backdrop-blur-xl border border-white/40 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-xl h-full`}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 animate-bounce">{type.icon}</div>
                <h3
                  className={`text-2xl font-bold bg-gradient-to-r ${type.color} bg-clip-text text-transparent mb-2`}
                >
                  {type.title}
                </h3>
                <p className="text-gray-600 font-medium">{type.subtitle}</p>
                <div className="mt-3 inline-block bg-white/70 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-gray-700">
                    Trusted by {type.userCount}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {type.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="https://www.instagram.com/momwisewithsophia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${type.color} text-white font-bold py-4 px-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2`}
                >
                  <span>📱</span>
                  <span>Follow Us</span>
                </a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-white/50 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="w-2 h-2 bg-white/30 rounded-full animate-float-slow"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Benefits Section */}
      <div className="bg-gradient-to-r from-salmon-50 via-white to-mint-50 rounded-3xl p-8 border border-white/40 backdrop-blur-xl shadow-xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Plus, Every Follower Gets Access To:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">456+</h4>
            <p className="text-gray-600 text-sm">Downloadable Resources</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">847+</h4>
            <p className="text-gray-600 text-sm">Tested Recipes</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Daily</h4>
            <p className="text-gray-600 text-sm">Instagram Posts</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Weekly</h4>
            <p className="text-gray-600 text-sm">Expert Updates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBenefits;
