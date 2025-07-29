export interface Recipe {
  id: string;
  title: string;
  description: string;
  iconType: string;
  mealType: string;
  ageGroup: string;
  prepTime: string;
  servings: string;
  ingredients: {
    item: string;
    quantity: string;
  }[];
  instructions: string[];
  momTips: string[];
  nutritionBenefits: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Banana Oat Pancakes",
    description:
      "Soft, nutritious pancakes made with ripe bananas and oats. Perfect for breakfast or snack time.",
    iconType: "pancakes",
    mealType: "Breakfast",
    ageGroup: "9-24 months",
    prepTime: "15 minutes",
    servings: "4-6 mini pancakes",
    ingredients: [
      { item: "Ripe bananas", quantity: "2 medium" },
      { item: "Rolled oats", quantity: "1/2 cup" },
      { item: "Egg", quantity: "1 large" },
      { item: "Whole milk", quantity: "2-3 tbsp" },
      { item: "Cinnamon", quantity: "Pinch" },
      { item: "Coconut oil for cooking", quantity: "1 tsp" },
    ],
    instructions: [
      "Mash bananas until smooth in a bowl",
      "Blend oats in a food processor until they form a flour-like consistency",
      "Mix mashed bananas, oat flour, egg, milk, and cinnamon until well combined",
      "Let batter rest for 5 minutes to thicken",
      "Heat coconut oil in a non-stick pan over medium-low heat",
      "Pour small portions of batter to make mini pancakes",
      "Cook for 2-3 minutes until bubbles form, then flip carefully",
      "Cook another 2 minutes until golden brown",
      "Cool completely before serving to babies",
    ],
    momTips: [
      "Make a big batch and freeze extras for busy mornings!",
      "These are perfect finger foods - cut into strips for baby-led weaning",
      "Add a tiny bit of vanilla extract for extra flavor (after 12 months)",
      "Serve with mashed berries or a thin layer of almond butter for toddlers",
    ],
    nutritionBenefits:
      "Rich in potassium, fiber, and protein. Oats provide slow-release energy perfect for growing babies.",
  },
  {
    id: "2",
    title: "Avocado Chicken Salad",
    description:
      "Creamy avocado mixed with tender chicken and veggies. Great for lunch and easy for little hands to pick up.",
    iconType: "salad",
    mealType: "Lunch",
    ageGroup: "1-3 years",
    prepTime: "10 minutes",
    servings: "2-3 toddler portions",
    ingredients: [
      { item: "Cooked chicken breast", quantity: "1/2 cup, diced small" },
      { item: "Ripe avocado", quantity: "1 medium" },
      { item: "Cucumber", quantity: "2 tbsp, finely diced" },
      { item: "Cherry tomatoes", quantity: "3-4, quartered" },
      { item: "Mild cheddar cheese", quantity: "2 tbsp, cubed" },
      { item: "Fresh lemon juice", quantity: "1 tsp" },
      { item: "Olive oil", quantity: "1/2 tsp" },
    ],
    instructions: [
      "Cook chicken thoroughly and let cool, then dice into small, safe pieces",
      "Mash avocado with a fork, leaving some small chunks for texture",
      "Mix in lemon juice and olive oil with the avocado",
      "Gently fold in diced chicken, cucumber, tomatoes, and cheese",
      "Serve immediately or chill for 30 minutes",
      "Cut into appropriate sizes for your child's eating ability",
    ],
    momTips: [
      "Use rotisserie chicken for a quick shortcut - just remove skin and season well",
      "This travels well in lunch boxes with an ice pack",
      "Add fresh herbs like parsley or chives for extra nutrition (finely chopped)",
      "Serve with whole grain crackers or soft pita for older toddlers",
    ],
    nutritionBenefits:
      "Packed with healthy fats, protein, and vitamins. Avocado supports brain development.",
  },
  {
    id: "3",
    title: "Sweet Potato & Carrot Mash",
    description:
      "A smooth, naturally sweet mash that's gentle on tiny tummies and packed with vitamins.",
    iconType: "baby-food",
    mealType: "Dinner",
    ageGroup: "6-12 months",
    prepTime: "25 minutes",
    servings: "4-6 baby portions",
    ingredients: [
      { item: "Sweet potato", quantity: "1 medium, peeled and cubed" },
      { item: "Carrots", quantity: "2 medium, peeled and sliced" },
      { item: "Breast milk or formula", quantity: "2-4 tbsp as needed" },
      { item: "Unsalted butter", quantity: "1/2 tsp (optional, 8+ months)" },
    ],
    instructions: [
      "Steam sweet potato and carrots for 15-20 minutes until very tender",
      "Test with a fork - they should mash easily",
      "Transfer to a bowl and mash with a fork or potato masher",
      "Add breast milk or formula gradually until desired consistency",
      "For smoother texture, blend in food processor",
      "Add butter if baby is 8+ months old",
      "Let cool to room temperature before serving",
      "Check temperature by touching to inside of your wrist",
    ],
    momTips: [
      "Make big batches and freeze in ice cube trays for easy portions",
      "Start with thinner consistency and gradually make it thicker",
      "This can be mixed with baby cereal for extra nutrition",
      "Watch for signs of readiness - baby should sit well and show interest in food",
    ],
    nutritionBenefits:
      "Excellent source of beta-carotene, vitamin A, and fiber. Supports eye development and immune system.",
  },
  {
    id: "4",
    title: "Berry Yogurt Parfait",
    description:
      "Layers of Greek yogurt, fresh berries, and soft granola. A fun, healthy snack or dessert.",
    iconType: "parfait",
    mealType: "Snack",
    ageGroup: "2-5 years",
    prepTime: "5 minutes",
    servings: "1-2 portions",
    ingredients: [
      { item: "Greek yogurt (plain or vanilla)", quantity: "1/2 cup" },
      {
        item: "Mixed berries (strawberries, blueberries)",
        quantity: "1/4 cup",
      },
      { item: "Soft granola or crushed cereal", quantity: "2 tbsp" },
      { item: "Honey", quantity: "1/2 tsp (only for 12+ months)" },
      { item: "Chia seeds", quantity: "1/2 tsp (optional)" },
    ],
    instructions: [
      "Wash and prepare berries - hull strawberries and cut if large",
      "Lightly mash some berries to release natural sweetness",
      "Mix honey into yogurt if using (only for children 12+ months)",
      "Layer yogurt, berries, and granola in a clear cup or bowl",
      "Repeat layers if desired",
      "Top with whole berries and a sprinkle of granola",
      "Serve immediately for best texture",
    ],
    momTips: [
      "Let kids help layer their own parfait - it's great for fine motor skills!",
      "Use frozen berries thawed for a more sauce-like consistency",
      "Make these in mason jars for easy grab-and-go snacks",
      "Add a sprinkle of coconut flakes for extra flavor and texture",
    ],
    nutritionBenefits:
      "High in protein, probiotics, and antioxidants. Supports digestive health and immune function.",
  },
  {
    id: "5",
    title: "Mini Veggie Meatballs",
    description:
      "Tender, flavorful meatballs packed with hidden vegetables. Perfect for little hands and picky eaters.",
    iconType: "meatballs",
    mealType: "Dinner",
    ageGroup: "12-36 months",
    prepTime: "30 minutes",
    servings: "12-15 mini meatballs",
    ingredients: [
      { item: "Ground turkey or beef", quantity: "1/2 lb" },
      { item: "Zucchini, finely grated", quantity: "1/4 cup" },
      { item: "Carrot, finely grated", quantity: "2 tbsp" },
      { item: "Egg", quantity: "1 small" },
      { item: "Breadcrumbs", quantity: "1/4 cup" },
      { item: "Mild cheddar cheese, grated", quantity: "2 tbsp" },
      { item: "Garlic powder", quantity: "Pinch" },
      { item: "Olive oil", quantity: "1 tsp" },
    ],
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "Grate zucchini and carrot very finely, squeeze out excess moisture",
      "Mix ground meat, vegetables, egg, breadcrumbs, cheese, and garlic powder",
      "Roll mixture into walnut-sized balls",
      "Place on a baking sheet lined with parchment paper",
      "Brush lightly with olive oil",
      "Bake for 15-18 minutes until cooked through (internal temp 165°F)",
      "Let cool before serving - check temperature",
      "Cut in half for babies to prevent choking",
    ],
    momTips: [
      "Double the recipe and freeze half for easy meals later",
      "Serve with pasta, rice, or just as finger food",
      "Sneak in finely chopped spinach or bell peppers too!",
      "Make them ahead for meal prep - they reheat beautifully",
    ],
    nutritionBenefits:
      "Excellent source of protein and iron. Hidden veggies provide vitamins A and C.",
  },
  {
    id: "6",
    title: "Creamy Butternut Squash Soup",
    description:
      "Smooth, naturally sweet soup that's perfect for introducing new flavors. Warming and nutritious.",
    iconType: "soup",
    mealType: "Lunch",
    ageGroup: "8-24 months",
    prepTime: "35 minutes",
    servings: "4-6 baby portions",
    ingredients: [
      { item: "Butternut squash, cubed", quantity: "2 cups" },
      { item: "Sweet apple, peeled and diced", quantity: "1/2 medium" },
      { item: "Low-sodium vegetable broth", quantity: "1 cup" },
      { item: "Coconut milk (full-fat)", quantity: "2 tbsp" },
      { item: "Mild curry powder", quantity: "Tiny pinch (12+ months)" },
      { item: "Fresh ginger", quantity: "1/4 tsp grated (optional)" },
    ],
    instructions: [
      "Steam or roast butternut squash and apple until very tender (20-25 min)",
      "Transfer to a blender with 1/2 cup broth",
      "Blend until completely smooth, adding more broth as needed",
      "Stir in coconut milk for creaminess",
      "Add tiny pinch of curry powder if baby is 12+ months",
      "Check consistency - should be smooth but not too thin",
      "Cool to appropriate temperature before serving",
      "Store leftovers in fridge for up to 3 days",
    ],
    momTips: [
      "This soup is perfect for sick days - easy to digest and comforting",
      "Freeze in ice cube trays for perfect baby portions",
      "Serve with soft bread for toddlers to practice dipping",
      "Add a swirl of plain yogurt for extra protein and probiotics",
    ],
    nutritionBenefits:
      "Rich in vitamin A, fiber, and healthy fats. Supports immune system and eye health.",
  },
  {
    id: "7",
    title: "Salmon and Sweet Potato Cakes",
    description:
      "Omega-3 rich salmon patties mixed with sweet potato. Brain-boosting nutrition in kid-friendly form.",
    iconType: "fish-cakes",
    mealType: "Dinner",
    ageGroup: "12-36 months",
    prepTime: "25 minutes",
    servings: "6-8 small cakes",
    ingredients: [
      { item: "Cooked salmon, flaked", quantity: "1/2 cup" },
      { item: "Mashed sweet potato", quantity: "1/2 cup" },
      { item: "Egg", quantity: "1 small" },
      { item: "Panko breadcrumbs", quantity: "3 tbsp" },
      { item: "Fresh dill, chopped", quantity: "1 tsp" },
      { item: "Lemon zest", quantity: "1/4 tsp" },
      { item: "Olive oil for cooking", quantity: "1 tbsp" },
    ],
    instructions: [
      "Check salmon carefully for any bones, flake into small pieces",
      "Mix flaked salmon with mashed sweet potato",
      "Beat egg and add to mixture along with breadcrumbs",
      "Add dill and lemon zest, mix gently",
      "Form mixture into small patties (about 2 inches wide)",
      "Heat olive oil in non-stick pan over medium heat",
      "Cook patties 3-4 minutes per side until golden",
      "Ensure they're cooked through and cooled before serving",
      "Cut into appropriate sizes for your child's age",
    ],
    momTips: [
      "Use canned salmon (boneless) for convenience - just drain well",
      "These freeze beautifully - make extra for busy nights",
      "Serve with steamed broccoli or green beans",
      "Great for introducing fish to hesitant eaters - the sweet potato makes it mild",
    ],
    nutritionBenefits:
      "Excellent source of omega-3 fatty acids, protein, and vitamin A. Supports brain and eye development.",
  },
  {
    id: "8",
    title: "Apple Cinnamon Overnight Oats",
    description:
      "No-cook breakfast that's ready when you wake up. Soft, creamy, and naturally sweetened.",
    iconType: "overnight-oats",
    mealType: "Breakfast",
    ageGroup: "12-48 months",
    prepTime: "5 minutes (+ overnight)",
    servings: "2 toddler portions",
    ingredients: [
      { item: "Rolled oats", quantity: "1/2 cup" },
      { item: "Whole milk", quantity: "1/2 cup" },
      { item: "Apple, grated", quantity: "1/2 medium" },
      { item: "Natural applesauce", quantity: "2 tbsp" },
      { item: "Cinnamon", quantity: "1/4 tsp" },
      { item: "Vanilla extract", quantity: "1/4 tsp" },
      { item: "Chia seeds", quantity: "1 tsp (optional)" },
    ],
    instructions: [
      "Grate apple finely, removing any large pieces",
      "Mix oats, milk, grated apple, and applesauce in a jar",
      "Add cinnamon, vanilla, and chia seeds if using",
      "Stir well to combine all ingredients",
      "Cover and refrigerate overnight (at least 4 hours)",
      "In the morning, stir and check consistency",
      "Add more milk if too thick",
      "Serve cold or at room temperature",
      "Top with soft fruit pieces if desired",
    ],
    momTips: [
      "Make 3-4 jars at once for multiple breakfast solutions",
      "Add different fruits to change flavors - try mashed banana or berries",
      "These are perfect for traveling - no heating required!",
      "Let older kids help measure and mix - great learning activity",
    ],
    nutritionBenefits:
      "High in fiber, protein, and slow-release carbs. Provides sustained energy for active toddlers.",
  },
  {
    id: "9",
    title: "Cheesy Broccoli Rice Balls",
    description:
      "Fun, bite-sized rice balls with hidden broccoli and cheese. Perfect for self-feeding practice.",
    iconType: "rice-balls",
    mealType: "Lunch",
    ageGroup: "10-36 months",
    prepTime: "20 minutes",
    servings: "10-12 balls",
    ingredients: [
      { item: "Cooked brown rice", quantity: "1 cup" },
      { item: "Steamed broccoli, finely chopped", quantity: "1/3 cup" },
      { item: "Mild cheddar cheese, grated", quantity: "1/4 cup" },
      { item: "Egg", quantity: "1 small" },
      { item: "Garlic powder", quantity: "Tiny pinch" },
      { item: "Olive oil spray", quantity: "For baking" },
    ],
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "Steam broccoli until very soft, then chop finely",
      "Let cooked rice cool completely",
      "Mix rice, broccoli, cheese, egg, and garlic powder",
      "Let mixture sit 5 minutes to firm up",
      "Roll into walnut-sized balls with damp hands",
      "Place on lined baking sheet",
      "Spray lightly with olive oil",
      "Bake 15-18 minutes until golden and firm",
      "Cool completely before serving to prevent burns",
    ],
    momTips: [
      "These are amazing for picnics and lunchboxes!",
      "Sneak in finely chopped carrots or zucchini too",
      "Make mini versions for younger babies",
      "Serve with a simple tomato sauce for dipping (for older toddlers)",
    ],
    nutritionBenefits:
      "Combines whole grains with vegetables and protein. Rich in fiber, calcium, and vitamin K.",
  },
  {
    id: "10",
    title: "Tropical Smoothie Bowl",
    description:
      "Thick, creamy smoothie bowl with tropical flavors. Fun to eat and packed with vitamins.",
    iconType: "smoothie-bowl",
    mealType: "Snack",
    ageGroup: "18-48 months",
    prepTime: "10 minutes",
    servings: "1-2 portions",
    ingredients: [
      { item: "Frozen mango chunks", quantity: "1/2 cup" },
      { item: "Frozen pineapple", quantity: "1/4 cup" },
      { item: "Banana", quantity: "1/2 ripe" },
      { item: "Greek yogurt", quantity: "1/4 cup" },
      { item: "Coconut milk", quantity: "2-3 tbsp" },
      { item: "Soft granola", quantity: "1 tbsp" },
      { item: "Fresh berries for topping", quantity: "2 tbsp" },
    ],
    instructions: [
      "Let frozen fruit soften slightly for 5 minutes",
      "Blend mango, pineapple, banana, and yogurt",
      "Add coconut milk gradually until thick but smooth",
      "Consistency should be thicker than a regular smoothie",
      "Pour into a bowl",
      "Top with granola and fresh berries",
      "Cut fruit toppings to appropriate sizes",
      "Serve immediately with a spoon",
      "Let child practice self-feeding",
    ],
    momTips: [
      "This is perfect for hot summer days - naturally cooling!",
      "Add spinach for extra nutrition - they won't taste it with the sweet fruit",
      "Use this as a healthy dessert alternative",
      "Let kids choose their own toppings for more excitement about eating",
    ],
    nutritionBenefits:
      "High in vitamin C, fiber, and probiotics. Supports immune function and digestive health.",
  },
];
