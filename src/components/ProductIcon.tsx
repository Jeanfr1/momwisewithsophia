interface ProductIconProps {
  type: string;
  className?: string;
}

const icons = {
  // Amazon Finds
  "diaper-bag": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="diaper-bag-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path
        d="M19 7h-2V6a4 4 0 0 0-4-4H11a4 4 0 0 0-4 4v1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H9V6zm-7 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8z"
        fill="url(#diaper-bag-gradient)"
      />
      <circle cx="8" cy="14" r="1" fill="url(#diaper-bag-gradient)" />
      <circle cx="16" cy="14" r="1" fill="url(#diaper-bag-gradient)" />
    </svg>
  ),
  "sippy-cup": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="cup-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path
        d="M8 2h8a2 2 0 0 1 2 2v14a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2z"
        fill="url(#cup-gradient)"
        opacity="0.8"
      />
      <path
        d="M8 6h8v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V6z"
        fill="url(#cup-gradient)"
      />
      <circle cx="12" cy="4" r="1" fill="white" />
    </svg>
  ),
  "baby-carrier": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="carrier-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4 18v-6h2.5l-2.54-7.63A2.98 2.98 0 0 0 13.14 5H10.86c-1.26 0-2.4.77-2.82 1.37L5.5 14H8v6h8z"
        fill="url(#carrier-gradient)"
      />
      <circle
        cx="12"
        cy="4"
        r="2"
        fill="url(#carrier-gradient)"
        opacity="0.6"
      />
    </svg>
  ),

  // Ebooks & Coloring Books
  "coloring-book": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="book-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <path d="M4 2v20l8-4 8 4V2H4z" fill="url(#book-gradient)" opacity="0.8" />
      <path
        d="M8 6h8M8 9h6M8 12h8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8" r="2" fill="#fbbf24" />
    </svg>
  ),
  "bedtime-stories": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="moon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path
        d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 0 1-8.54-8.54c.44-.06.9-.1 1.36-.1z"
        fill="url(#moon-gradient)"
      />
      <circle cx="8" cy="8" r="1" fill="white" opacity="0.8" />
      <circle cx="6" cy="12" r="0.5" fill="white" opacity="0.6" />
      <circle cx="10" cy="14" r="0.5" fill="white" opacity="0.7" />
    </svg>
  ),
  "abc-animals": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="animal-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="10"
        r="8"
        fill="url(#animal-gradient)"
        opacity="0.8"
      />
      <circle cx="9" cy="8" r="1.5" fill="white" />
      <circle cx="15" cy="8" r="1.5" fill="white" />
      <path d="M8 14h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <text
        x="12"
        y="20"
        textAnchor="middle"
        fill="url(#animal-gradient)"
        fontSize="6"
        fontWeight="bold"
      >
        ABC
      </text>
    </svg>
  ),

  // Recipes
  pancakes: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="pancake-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <ellipse cx="12" cy="8" rx="7" ry="2" fill="url(#pancake-gradient)" />
      <ellipse
        cx="12"
        cy="12"
        rx="6"
        ry="1.5"
        fill="url(#pancake-gradient)"
        opacity="0.8"
      />
      <ellipse
        cx="12"
        cy="15"
        rx="5"
        ry="1.2"
        fill="url(#pancake-gradient)"
        opacity="0.6"
      />
      <circle cx="10" cy="6" r="0.5" fill="#dc2626" />
      <circle cx="14" cy="6" r="0.5" fill="#dc2626" />
    </svg>
  ),
  salad: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="salad-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <path
        d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8v4c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-4z"
        fill="url(#salad-gradient)"
        opacity="0.8"
      />
      <circle cx="8" cy="10" r="1" fill="#fbbf24" />
      <circle cx="16" cy="10" r="1" fill="#ef4444" />
      <circle cx="12" cy="8" r="1" fill="#a855f7" />
    </svg>
  ),
  "baby-food": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="food-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <path
        d="M8 4h8c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z"
        fill="url(#food-gradient)"
        opacity="0.8"
      />
      <circle cx="12" cy="12" r="4" fill="url(#food-gradient)" />
      <path d="M10 10h4v4h-4z" fill="white" opacity="0.3" />
    </svg>
  ),
  parfait: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="parfait-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>
      </defs>
      <path
        d="M8 20h8l-1-12H9l-1 12z"
        fill="url(#parfait-gradient)"
        opacity="0.8"
      />
      <rect x="9" y="12" width="6" height="2" fill="#fbbf24" />
      <rect x="9" y="16" width="6" height="2" fill="#ec4899" />
      <circle cx="10" cy="10" r="0.5" fill="#dc2626" />
      <circle cx="14" cy="10" r="0.5" fill="#dc2626" />
    </svg>
  ),

  // Additional Recipe Icons
  meatballs: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="meatball-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>
      <circle cx="8" cy="8" r="3" fill="url(#meatball-gradient)" />
      <circle
        cx="16"
        cy="10"
        r="3"
        fill="url(#meatball-gradient)"
        opacity="0.9"
      />
      <circle
        cx="12"
        cy="16"
        r="3"
        fill="url(#meatball-gradient)"
        opacity="0.8"
      />
      <circle cx="9" cy="7" r="0.5" fill="white" opacity="0.6" />
      <circle cx="15" cy="9" r="0.5" fill="white" opacity="0.6" />
      <circle cx="11" cy="15" r="0.5" fill="white" opacity="0.6" />
    </svg>
  ),
  "smoothie-bowl": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="smoothie-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <path
        d="M4 10c0-2 1.8-4 4-4h8c2.2 0 4 2 4 4v6c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4v-6z"
        fill="url(#smoothie-gradient)"
        opacity="0.8"
      />
      <circle cx="9" cy="12" r="1" fill="#ec4899" />
      <circle cx="15" cy="14" r="1" fill="#6366f1" />
      <circle cx="12" cy="10" r="1" fill="#10b981" />
      <path d="M8 8h8" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  soup: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="soup-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <path
        d="M5 12c0-3.9 3.1-7 7-7s7 3.1 7 7v6c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-6z"
        fill="url(#soup-gradient)"
        opacity="0.8"
      />
      <path
        d="M9 3c0-1.1.9-2 2-2s2 .9 2 2v2h-4V3z"
        fill="url(#soup-gradient)"
      />
      <ellipse cx="12" cy="15" rx="4" ry="1" fill="white" opacity="0.3" />
      <circle cx="10" cy="13" r="0.5" fill="white" opacity="0.6" />
      <circle cx="14" cy="14" r="0.5" fill="white" opacity="0.6" />
    </svg>
  ),
  "fish-cakes": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="fish-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <path
        d="M12 4c-4 0-8 3-8 6s4 6 8 6c1.5 0 3-.5 4-1l2 3v-4c1-1 2-2.5 2-4s-1-3-2-4v-4l-2 3c-1-.5-2.5-1-4-1z"
        fill="url(#fish-gradient)"
        opacity="0.8"
      />
      <circle cx="9" cy="9" r="1" fill="white" />
      <circle cx="9" cy="9" r="0.5" fill="#0284c7" />
      <path
        d="M6 12c1 0 2-0.5 3-1"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),
  "overnight-oats": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="oats-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>
      <path
        d="M7 6h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"
        fill="url(#oats-gradient)"
        opacity="0.8"
      />
      <rect x="8" y="8" width="8" height="1.5" fill="#fbbf24" />
      <rect x="8" y="12" width="8" height="1.5" fill="#f59e0b" />
      <rect x="8" y="16" width="8" height="1.5" fill="#d97706" />
      <circle cx="9" cy="4" r="0.5" fill="#6366f1" />
      <circle cx="15" cy="4" r="0.5" fill="#6366f1" />
    </svg>
  ),
  "rice-balls": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="rice-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
      <circle cx="8" cy="8" r="3.5" fill="url(#rice-gradient)" />
      <circle cx="16" cy="8" r="3.5" fill="url(#rice-gradient)" />
      <circle cx="12" cy="16" r="3.5" fill="url(#rice-gradient)" />
      <circle cx="8" cy="8" r="2" fill="#22c55e" opacity="0.3" />
      <circle cx="16" cy="8" r="2" fill="#22c55e" opacity="0.3" />
      <circle cx="12" cy="16" r="2" fill="#22c55e" opacity="0.3" />
    </svg>
  ),

  // Parenting Tips
  "bedtime-routine": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="routine-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path
        d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 0 1-8.54-8.54c.44-.06.9-.1 1.36-.1z"
        fill="url(#routine-gradient)"
      />
      <circle cx="8" cy="8" r="1" fill="white" opacity="0.8" />
      <circle cx="6" cy="12" r="0.5" fill="white" opacity="0.6" />
    </svg>
  ),
  "independent-play": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="play-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="8" fill="url(#play-gradient)" opacity="0.8" />
      <rect
        x="8"
        y="8"
        width="8"
        height="8"
        fill="white"
        opacity="0.9"
        rx="2"
      />
      <circle cx="10" cy="10" r="1" fill="url(#play-gradient)" />
      <circle cx="14" cy="14" r="1" fill="url(#play-gradient)" />
    </svg>
  ),
  "positive-discipline": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>
      </defs>
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="url(#heart-gradient)"
      />
    </svg>
  ),
  "screen-time": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="screen-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        fill="url(#screen-gradient)"
      />
      <rect
        x="5"
        y="6"
        width="14"
        height="8"
        fill="white"
        opacity="0.9"
        rx="1"
      />
      <circle cx="12" cy="20" r="1" fill="url(#screen-gradient)" />
    </svg>
  ),
  "emotional-intelligence": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="emotion-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="url(#emotion-gradient)"
        opacity="0.8"
      />
      <circle cx="9" cy="9" r="1.5" fill="white" />
      <circle cx="15" cy="9" r="1.5" fill="white" />
      <path
        d="M8 15c2 2 4 2 8 0"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),

  // Feeding Guide
  breastfeeding: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="feeding-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="url(#feeding-gradient)"
        opacity="0.8"
      />
      <circle cx="12" cy="10" r="3" fill="white" />
    </svg>
  ),
  "solids-ready": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="ready-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="url(#ready-gradient)"
        opacity="0.8"
      />
      <path
        d="M8 12l2 2 4-4"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  puree: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="puree-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <path
        d="M8 20h8l-1-12H9l-1 12z"
        fill="url(#puree-gradient)"
        opacity="0.8"
      />
      <ellipse cx="12" cy="12" rx="3" ry="2" fill="url(#puree-gradient)" />
    </svg>
  ),
  "finger-foods": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="finger-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="url(#finger-gradient)"
      />
    </svg>
  ),

  // Default icon for other types
  default: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient
          id="default-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="url(#default-gradient)"
        opacity="0.8"
      />
      <circle cx="12" cy="12" r="4" fill="white" opacity="0.9" />
    </svg>
  ),
};

export default function ProductIcon({
  type,
  className = "w-16 h-16",
}: ProductIconProps) {
  const icon = icons[type as keyof typeof icons] || icons.default;

  return (
    <div
      className={`${className} flex items-center justify-center bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
    >
      {icon}
    </div>
  );
}
