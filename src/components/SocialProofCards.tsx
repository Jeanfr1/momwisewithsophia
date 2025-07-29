import React from "react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
  engagement: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Sarah Johnson",
    role: "Mother of 2, Working Mom",
    content:
      "MomWise completely transformed how I approach parenting. The recipes saved me hours of meal planning, and the Instagram content is incredible!",
    avatar: "👩‍💼",
    rating: 5,
    engagement: "23 likes • 6 comments",
  },
  {
    name: "Emma Rodriguez",
    role: "First-time Mom",
    content:
      "As a new mom, I was overwhelmed until I found MomWise. The feeding guides and parenting tips gave me the confidence I needed. Best decision ever!",
    avatar: "👶",
    rating: 5,
    engagement: "19 likes • 3 comments",
  },
  {
    name: "Lisa Chen",
    role: "Mother of 3, Pediatric Nurse",
    content:
      "Even as a healthcare professional, I learned so much from MomWise. The expert-curated content is spot-on and the ebooks are fantastic for my kids!",
    avatar: "👩‍⚕️",
    rating: 5,
    engagement: "31 likes • 8 comments",
  },
  {
    name: "Maria Garcia",
    role: "Homeschooling Mom",
    content:
      "The Amazon finds section is a goldmine! I've discovered so many helpful products. My kids love the coloring books, and I love the time-saving recipes.",
    avatar: "👩‍🏫",
    rating: 5,
    engagement: "17 likes • 4 comments",
  },
  {
    name: "Jennifer Wilson",
    role: "Single Mom of 1",
    content:
      "Being a single mom is tough, but MomWise makes it manageable. The parenting tips are practical and the Instagram posts are so inspiring. So grateful!",
    avatar: "💪",
    rating: 5,
    engagement: "28 likes • 12 comments",
  },
  {
    name: "Dr. Amanda Foster",
    role: "Pediatrician & Mom",
    content:
      "I recommend MomWise to all my patients' parents. The content is evidence-based, practical, and presented in such an accessible way. Outstanding resource!",
    avatar: "👩‍⚕️",
    rating: 5,
    engagement: "42 likes • 15 comments",
  },
];

const SocialProofCards: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-salmon-500 to-mint-500 bg-clip-text text-transparent mb-6">
          Loved by Thousands of Mothers
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          See what mothers are saying about MomWise with Sophia
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-6 py-3 shadow-lg">
            <span className="text-2xl">⭐</span>
            <span className="font-bold text-gray-800">4.9/5 Rating</span>
            <span className="text-gray-600">(287 reviews)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-6 py-3 shadow-lg">
            <span className="text-2xl">🏆</span>
            <span className="font-bold text-gray-800">Featured in</span>
            <span className="text-gray-600">Parents Magazine</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-6 py-3 shadow-lg">
            <span className="text-2xl">✅</span>
            <span className="font-bold text-gray-800">Pediatrician</span>
            <span className="text-gray-600">Approved</span>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-salmon-200/30 to-mint-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl h-full">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-salmon-400 to-mint-400 rounded-full flex items-center justify-center mr-4 text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Engagement */}
              <div className="flex items-center text-sm text-gray-500 border-t border-gray-200 pt-4">
                <svg
                  className="w-4 h-4 mr-2 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                {testimonial.engagement}
              </div>

              {/* Verified Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-blue-500 text-white rounded-full p-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Follow Us CTA */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-salmon-100 to-mint-100 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Follow Us on Instagram for Daily Inspiration!
          </h3>
          <p className="text-gray-600 mb-6">
            Join our growing Instagram family for daily tips, recipes, and
            parenting wisdom
          </p>
          <a
            href="https://www.instagram.com/momwisewithsophia/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-salmon-500 to-mint-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
          >
            <span>📱</span>
            <span>Follow @momwisewithsophia</span>
          </a>
        </div>

        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>New posts daily • Growing community</span>
        </p>
      </div>
    </div>
  );
};

export default SocialProofCards;
