export interface EbookResource {
  id: string;
  title: string;
  marketingName: string;
  description: string;
  price: string;
  link: string;
  image: string;
  category: string;
  badges?: string[];
}

export const ebooks: EbookResource[] = [
  // MOM SELF-CARE ESSENTIALS - Reclaim your life
  {
    id: "guilt-free-postpartum",
    title:
      "GUILT-FREE POSTPARTUM: Reclaim your energy, care for your mind, and rediscover the mother within!",
    marketingName: "The Postpartum Recovery Revolution",
    description:
      "Break free from mom guilt and overwhelm! This transformative guide helps you reclaim your energy, prioritize your mental health, and rediscover the amazing mother you've always been. Your healing journey starts here.",
    price: "Available on Kindle",
    link: "https://www.amazon.com/dp/B0FJ6NX6XB",
    image: "/ebooksimages/Guilt-Free Postpartum.jpg",
    category: "self-care",
    badges: ["Life-Changing", "Mental Health Focus"],
  },
  {
    id: "mindful-mama",
    title: "Mindful Mama",
    marketingName: "The Present-Moment Parenting Guide",
    description:
      "Transform your parenting journey with mindfulness and intention. Learn to stay calm in chaos, connect deeply with your children, and find joy in everyday moments. Parenting with purpose has never felt so achievable.",
    price: "Available on Kindle",
    link: "https://www.amazon.com/dp/B0FDSD8KX4",
    image: "/ebooksimages/MindfulMama.jpg",
    category: "self-care",
    badges: ["Mindfulness", "Emotional Wellness"],
  },

  // FEEDING MASTERY GUIDES - Nourishment made simple
  {
    id: "nourish-flourish",
    title:
      "Nourish and Flourish: The Ultimate Feeding Guide for Your Little One (0–5 Years)",
    marketingName: "The Complete Feeding Confidence Builder",
    description:
      "End mealtime battles forever! This comprehensive 0-5 year feeding guide covers everything from first foods to picky eating solutions. Evidence-based strategies that actually work for real families.",
    price: "Available on Kindle",
    link: "https://www.amazon.com/dp/B0DXD8573N",
    image: "/ebooksimages/Cover Recipe Ebook   Document.jpg",
    category: "feeding",
    badges: ["0-5 Years", "Evidence-Based"],
  },
];

export const ebookCategories = [
  {
    id: "self-care",
    name: "✨ Mom Self-Care Essentials",
    subtitle: "Because you can't pour from an empty cup",
    description:
      "Transformative guides that help you prioritize your mental health, overcome mom guilt, and rediscover your identity beyond motherhood.",
  },
  {
    id: "feeding",
    name: "🍼 Feeding Mastery Guides",
    subtitle: "From first bites to family meals",
    description:
      "Science-backed feeding strategies that take the guesswork out of nutrition and turn mealtime into connection time.",
  },
  {
    id: "development",
    name: "🌱 Child Development Wisdom",
    subtitle: "Growing confident, capable kids",
    description:
      "Expert insights and practical tools to support your child's emotional, cognitive, and social development at every stage.",
  },
];
