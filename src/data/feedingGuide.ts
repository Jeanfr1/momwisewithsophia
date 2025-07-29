export interface FeedingStep {
  id: string;
  title: string;
  description: string;
  ageRange: string;
  iconType: string;
}

export const feedingGuide: FeedingStep[] = [
  {
    id: "1",
    title: "Breastfeeding & Bottle-Feeding Basics",
    description:
      "Breast milk or formula is the sole nutrition for babies until about 6 months. Feed on demand, watch for hunger cues, and ensure proper latch or bottle technique.\nPro Tip: The WHO recommends exclusive breastfeeding for the first 6 months.",
    ageRange: "0-6 months",
    iconType: "breastfeeding",
  },
  {
    id: "2",
    title: "Signs of Readiness for Solids",
    description:
      "Look for head control, sitting with support, and interest in food. Most babies are ready around 6 months.\nCommon Question: Is it okay to start solids early? Experts recommend waiting until baby shows all readiness signs. (AAP)",
    ageRange: "4-6 months",
    iconType: "solids-ready",
  },
  {
    id: "3",
    title: "Start with Single-Ingredient Purees",
    description:
      "Introduce simple purees like sweet potato, carrot, or apple. Wait 3-5 days before introducing a new food to watch for allergies.\nPro Tip: Offer iron-rich foods early, like pureed meats or lentils. (AAP)",
    ageRange: "6-7 months",
    iconType: "puree",
  },
  {
    id: "4",
    title: "Add Soft Finger Foods",
    description:
      "Once baby can sit up and grasp, offer soft pieces of banana, avocado, or steamed veggies. Encourage self-feeding.\nDid you know? Baby-led weaning is supported by many pediatricians for motor skill development.",
    ageRange: "7-9 months",
    iconType: "finger-foods",
  },
  {
    id: "5",
    title: "Introduce Protein & Grains",
    description:
      "Add finely shredded chicken, scrambled eggs, and soft cooked grains like oatmeal or rice. Offer a variety of textures.\nCommon Question: When can I introduce allergens? Early introduction (around 6 months) is now recommended for most babies. (NIAID)",
    ageRange: "9-12 months",
    iconType: "default",
  },
  {
    id: "6",
    title: "Offer a Variety of Flavors & Textures",
    description:
      "Expose your child to different tastes and textures to prevent picky eating. Include fruits, veggies, proteins, and grains.\nPro Tip: Repeated exposure (10-15 times) helps acceptance of new foods. (NHS)",
    ageRange: "10-12 months",
    iconType: "default",
  },
  {
    id: "7",
    title: "Transition to Family Meals",
    description:
      "By 12+ months, offer small portions of family meals, avoiding added salt and sugar. Encourage use of a spoon and cup.\nDid you know? Eating together as a family supports healthy habits. (Harvard School of Public Health)",
    ageRange: "12-18 months",
    iconType: "default",
  },
  {
    id: "8",
    title: "Hydration & Healthy Drinks",
    description:
      "Offer water with meals and snacks. Limit juice and avoid sugary drinks.\nPro Tip: Whole milk can be introduced after 12 months if not breastfeeding. (AAP)",
    ageRange: "12-24 months",
    iconType: "default",
  },
];
