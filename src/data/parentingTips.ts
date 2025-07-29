export interface ParentingTip {
  id: string;
  title: string;
  summary: string;
  content: string;
  iconType: string;
}

export const parentingTips: ParentingTip[] = [
  {
    id: "1",
    title: "Establishing a Bedtime Routine",
    summary:
      "Consistent bedtime routines help children feel secure and sleep better.",
    content:
      "Start with calming activities like a warm bath, story time, and gentle music. Keep the routine consistent each night to signal to your child that it's time to wind down.\nPro Tip: Pediatricians recommend a predictable routine for better sleep quality. (AAP)",
    iconType: "bedtime-routine",
  },
  {
    id: "2",
    title: "Encouraging Independent Play",
    summary:
      "Independent play fosters creativity and problem-solving skills in toddlers.",
    content:
      "Set up a safe play area with age-appropriate toys. Allow your child to explore and play on their own, checking in periodically to offer encouragement.\nDid you know? Independent play boosts executive function. (Harvard Center on the Developing Child)",
    iconType: "independent-play",
  },
  {
    id: "3",
    title: "Positive Discipline Strategies",
    summary:
      "Gentle, positive discipline helps children learn boundaries and self-control.",
    content:
      "Use clear, simple instructions and praise good behavior. Redirect unwanted behavior and avoid harsh punishments. Consistency is key!\nPro Tip: Positive discipline is recommended by child psychologists for emotional health.",
    iconType: "positive-discipline",
  },
  {
    id: "4",
    title: "Screen Time Guidelines",
    summary: "Balanced screen time supports healthy development.",
    content:
      "Limit screen time to age-appropriate levels (AAP: no screens under 18 months, 1 hour/day for 2-5 years). Prioritize interactive, educational content and co-view when possible.",
    iconType: "screen-time",
  },
  {
    id: "5",
    title: "Fostering Emotional Intelligence",
    summary: "Teaching children to name and manage emotions builds resilience.",
    content:
      "Model emotional vocabulary, validate your child's feelings, and teach calming strategies like deep breathing.\nPro Tip: Emotional coaching is linked to better social skills. (Gottman Institute)",
    iconType: "emotional-intelligence",
  },
  {
    id: "6",
    title: "Nutrition for Toddlers",
    summary: "Balanced nutrition fuels growth and brain development.",
    content:
      "Offer a variety of fruits, veggies, whole grains, and proteins. Avoid added sugars and excess salt.\nDid you know? Iron and healthy fats are crucial for brain growth. (WHO)",
    iconType: "baby-food",
  },
  {
    id: "7",
    title: "Language Development Activities",
    summary: "Talking, reading, and singing boost language skills.",
    content:
      "Read daily, narrate your activities, and sing songs together. Respond to your child's sounds and words to encourage communication.\nPro Tip: Early language exposure predicts later literacy. (NHS)",
    iconType: "bedtime-stories",
  },
  {
    id: "8",
    title: "Building Social Skills",
    summary: "Playdates and group activities teach sharing and empathy.",
    content:
      "Arrange playdates, model sharing, and praise kind behavior. Discuss feelings and encourage turn-taking.\nDid you know? Social play is linked to emotional intelligence. (Zero to Three)",
    iconType: "independent-play",
  },
  {
    id: "9",
    title: "Creating a Safe Home Environment",
    summary: "Childproofing prevents accidents and injuries.",
    content:
      "Install safety gates, cover outlets, and secure furniture. Keep hazardous items out of reach.\nPro Tip: Most home accidents are preventable with simple safety steps. (CDC)",
    iconType: "positive-discipline",
  },
  {
    id: "10",
    title: "Encouraging Healthy Sleep Habits",
    summary: "Good sleep is essential for growth and mood regulation.",
    content:
      "Maintain a regular sleep schedule, create a calming bedtime routine, and ensure a dark, quiet sleep environment.\nDid you know? Sleep affects learning and behavior. (Sleep Foundation)",
    iconType: "bedtime-routine",
  },
];
