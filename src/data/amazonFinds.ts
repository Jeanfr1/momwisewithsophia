export interface AmazonProduct {
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

export const amazonFinds: AmazonProduct[] = [
  // BEST SELLERS - Top performing products
  {
    id: "nanit-pro-monitor",
    title: "Nanit Pro Smart Baby Monitor & Wall Mount",
    marketingName: "The Ultimate Sleep Guardian",
    description:
      "AI-powered monitoring that tracks breathing & sleep patterns. WiFi secure, 1080p HD video. Peace of mind redefined.",
    price: "$399.99",
    link: "https://amzn.to/3TuFKrC",
    image: "/Productimages/nanit-pro-baby-monitor.png",
    category: "best-sellers",
    badges: ["#1 Best Seller", "Premium Choice"],
  },
  {
    id: "vtech-baby-monitor",
    title: "VTech VM819 Baby Monitor with Camera",
    marketingName: "Budget-Friendly Peace of Mind",
    description:
      'Crystal clear 2.8" screen, night vision, 2-way audio. No WiFi needed - secure & reliable connection every time.',
    price: "$89.99",
    link: "https://amzn.to/3Gup9B8",
    image: "/Productimages/VTech-VM819-Baby-Monitor.png",
    category: "best-sellers",
    badges: ["Best Value", "Editor's Pick"],
  },
  {
    id: "grownsy-bottle-warmer",
    title: "GROWNSY 8-in-1 Fast Baby Milk Warmer",
    marketingName: "The Midnight Feeding Savior",
    description:
      "8 smart functions in one! Precise temperature control, sterilizing, defrosting. Makes 3AM feeds effortless.",
    price: "$45.99",
    link: "https://amzn.to/40xYr1k",
    image: "/Productimages/grownsy-bottle-warmer.png",
    category: "best-sellers",
    badges: ["Fast Heating", "Multi-Function"],
  },
  {
    id: "skip-hop-activity-center",
    title: "Skip Hop Montessori 3-Stage Activity Center",
    marketingName: "Development Powerhouse",
    description:
      "Grows with baby from 4 months+. Montessori-inspired learning that builds motor skills & cognitive development.",
    price: "$149.99",
    link: "https://amzn.to/45lrl7D",
    image: "/Productimages/skip-hop-activity-center.png",
    category: "best-sellers",
    badges: ["Montessori", "3-Stage Growth"],
  },

  // MOM'S HEART PICKS - Personal favorites
  {
    id: "frida-3in1-picker",
    title: "Frida Baby 3-in-1 Nose, Nail + Ear Picker",
    marketingName: "The Gentle Care Essential",
    description:
      "From the makers of NoseFrida! Safely clean boogers, trim nails, remove ear wax. Every new mom needs this.",
    price: "$12.99",
    link: "https://amzn.to/3TUKE17",
    image: "/Productimages/frida-baby-3in1-picker.png",
    category: "heart-picks",
    badges: ["Must-Have", "Pediatrician Recommended"],
  },
  {
    id: "haakaa-fruit-feeder",
    title: "Haakaa Clover Baby Fruit Feeder Teether",
    marketingName: "Nature's Teething Relief",
    description:
      "BPA-free silicone wonder! Teething relief + self-feeding in one. Includes mini freezer tray for breastmilk popsicles.",
    price: "$16.99",
    link: "https://amzn.to/3UuPjaf",
    image: "/Productimages/haakaa-fruit-feeder.png",
    category: "heart-picks",
    badges: ["Natural Relief", "Self-Feeding"],
  },
  {
    id: "upseat-floor-seat",
    title: "Upseat Baby Floor Seat Booster Chair",
    marketingName: "The Hip-Healthy Helper",
    description:
      "Developed with physical therapists for safe hip development. Perfect posture from day one with removable tray.",
    price: "$69.99",
    link: "https://amzn.to/4m9mvzT",
    image:
      "/Productimages/Upseat Baby Floor Seat Booster Chair for Sitting Up with Removable Tray for Meals and Playtime, Developed with Physical Therapists for Safe and Healthy Hip Development and Posture.png",
    category: "heart-picks",
    badges: ["PT Approved", "Hip Healthy"],
  },
  {
    id: "no-touch-thermometer",
    title: "No-Touch Digital Thermometer",
    marketingName: "The Peace-of-Mind Thermometer",
    description:
      "Instant accurate readings without waking baby. Fever alarm + silent mode. FSA/HSA eligible for savings.",
    price: "$29.99",
    link: "https://amzn.to/4l77oHa",
    image: "/Productimages/no-touch-thermometer.png",
    category: "heart-picks",
    badges: ["No-Wake", "FSA Eligible"],
  },

  // FEEDING ESSENTIALS - Mealtime heroes
  {
    id: "grownsy-food-maker",
    title: "GROWNSY Baby Food Maker with Steam Basket",
    marketingName: "The Homemade Hero",
    description:
      "One-step steaming, pureeing, blending, grinding. Fresh homemade baby food in minutes. Your baby deserves the best.",
    price: "$59.99",
    link: "https://amzn.to/46oE7TN",
    image:
      "/Productimages/GROWNSY Baby Food Maker with Steam Basket, One Step Baby Food Processor Steamer Puree Blender Grinder Mills Machine.png",
    category: "feeding",
    badges: ["Homemade Fresh", "All-in-One"],
  },
  {
    id: "numnum-spoons",
    title: "NumNum Baby Spoons Set",
    marketingName: "First Independence Spoons",
    description:
      "Pre-spoon GOOtensils for 6+ months. Perfect for baby-led weaning (BLW). Self-feeding success starts here!",
    price: "$14.99",
    link: "https://amzn.to/3TZXUBw",
    image:
      "/Productimages/NumNum Baby Spoons Set, Baby Essentials Pre-Spoon GOOtensils for 6+ Months, First Stage Self-Feeding Spoons for Baby Led Weaning (BLW).png",
    category: "feeding",
    badges: ["BLW Perfect", "Self-Feeding"],
  },
  {
    id: "ryan-rose-cutensils",
    title: "Ryan & Rose Cutie Tensils Baby Spoon and Fork",
    marketingName: "The Stylish Starter Set",
    description:
      "Charcoal chic meets functionality. Perfectly sized for little hands. Instagram-worthy and baby-approved.",
    price: "$18.99",
    link: "https://amzn.to/3ILFJNS",
    image: "/Productimages/ryan-rose-baby-spoons.png",
    category: "feeding",
    badges: ["Stylish", "Perfect Size"],
  },
  {
    id: "pandaear-bibs",
    title: "PandaEar Silicone Baby Bibs Set of 3",
    marketingName: "The Mess-Free Mealtime",
    description:
      "100% waterproof silicone. Easy wipe-clean design. Set of 3 means you're always prepared for messy adventures.",
    price: "$19.99",
    link: "https://amzn.to/3GuQGSY",
    image: "/Productimages/PandaEar Set of 3 Silicone Baby Bibs Waterproof.png",
    category: "feeding",
    badges: ["Waterproof", "Easy Clean"],
  },
  {
    id: "bright-starts-booster",
    title: "Bright Starts Pop 'N Sit Portable Booster",
    marketingName: "The Anywhere Feeding Solution",
    description:
      "Indoor/outdoor use with feeding tray. Perfect for travel, visits, or small spaces. Floor seat that grows with baby 6 months to 3 years.",
    price: "$39.99",
    link: "https://amzn.to/4ffsDVl",
    image: "/Productimages/bright-starts-portable-booster.png",
    category: "feeding",
    badges: ["Portable", "6M-3Y"],
  },
  {
    id: "momcozy-warmer-travel",
    title: "Momcozy Portable Milk Warmer for Travel",
    marketingName: "The On-The-Go Feeding Hero",
    description:
      "Dual heating modes for breast milk & water. Fast heating with long battery life. 17 ounces large capacity for all-day needs.",
    price: "$49.99",
    link: "https://amzn.to/4mlC2wW",
    image: "/Productimages/momcozy-portable-milk-warmer.png",
    category: "feeding",
    badges: ["Travel Ready", "Dual Modes"],
  },

  {
    id: "munchkin-bottle-brush",
    title: "Munchkin® Sponge™ Bottle Brush, Grey, 2 Count",
    marketingName: "The Deep Clean Essential",
    description:
      "Set of 2 bottle brushes designed to reach every corner. Grey color hides stains. Essential for keeping bottles spotless.",
    price: "$8.99",
    link: "https://amzn.to/44RPXEZ",
    image: "/Productimages/Munchkin® Sponge™ Bottle Brush, Grey, 2 Count.png",
    category: "feeding",
    badges: ["2-Pack", "Deep Clean"],
  },
  {
    id: "baby-brezza-formula-pro",
    title: "Baby Brezza Formula Pro Advanced Formula Dispenser",
    marketingName: "The Formula Revolution",
    description:
      "Automatically mix warm formula bottles instantly. Improved version with automatic powder blending. Game-changer for formula feeding!",
    price: "$199.99",
    link: "https://amzn.to/3UxQi9J",
    image:
      "/Productimages/Baby Brezza New and Improved Formula Pro Advanced Formula Dispenser Machine - Automatically Mix a Warm Formula Bottle Instantly .png",
    category: "feeding",
    badges: ["Automatic", "Instant Formula"],
  },
  {
    id: "weesprout-suction-plates",
    title: "WeeSprout Suction Plates with Lids for Babies & Toddlers",
    marketingName: "The Stay-Put Plate Set",
    description:
      "100% silicone plates that actually stay put! Divided design for picky eaters. Microwave & dishwasher friendly. 3-pack value.",
    price: "$29.99",
    link: "https://amzn.to/3UGtEfj",
    image: "/Productimages/WeeSprout-Suction-Plates.png",
    category: "feeding",
    badges: ["Suction Secure", "3-Pack"],
  },
  {
    id: "momcozy-warmer-dual",
    title: "Momcozy Portable Milk Warmer - Large Capacity",
    marketingName: "The Extended Day Warmer",
    description:
      "Dual heating modes with extra-large 17oz capacity. Perfect for longer outings and busy days. Fast heating technology meets convenience.",
    price: "$54.99",
    link: "https://amzn.to/4ofWXTS",
    image: "/Productimages/momcozy-portable-milk-warmer.png",
    category: "feeding",
    badges: ["Large Capacity", "Extended Battery"],
  },

  // BATH TIME BLISS - Making splashes fun
  {
    id: "collapsible-bathtub",
    title: "Collapsible Baby Bathtub with Cushion",
    marketingName: "The Space-Saving Spa",
    description:
      "Newborn to 36 months. Soft cushion + thermometer included. Folds flat for storage. Travel-friendly design.",
    price: "$45.99",
    link: "https://amzn.to/4ewNqTI",
    image: "/Productimages/collapsible-baby-bathtub.png",
    category: "bath-time",
    badges: ["Space-Saving", "0-36 Months"],
  },
  {
    id: "ingenuity-folding-tub",
    title: "Ingenuity Tuckaway Toddler Folding Tub",
    marketingName: "The Toddler Tub Upgrade",
    description:
      "Converts and grows with your child. Folds away when not needed. Perfect for independent big kid baths.",
    price: "$39.99",
    link: "https://amzn.to/4f8GRHa",
    image: "/Productimages/Ingenuity Tuckaway Toddler Folding Tub.png",
    category: "bath-time",
    badges: ["Convertible", "Space-Smart"],
  },
  {
    id: "boon-inflatable-bather",
    title: "Boon Puff+ Inflatable Baby Bather",
    marketingName: "The Portable Comfort Zone",
    description:
      "Portable infant bathtub with microfleece cover & swaddle wings. Includes storage bag. Comfort anywhere.",
    price: "$34.99",
    link: "https://amzn.to/3TUITRI",
    image:
      "/Productimages/Boon Puff+ Inflatable Baby Bather - Portable Infant Bathtub Baby Bath Seat Includes Microfleece Cover, Swaddle Wings, and Storage Bag.png",
    category: "bath-time",
    badges: ["Portable", "Ultra Soft"],
  },
  {
    id: "sassy-waterfall-toy",
    title: "Sassy Whirling Waterfall Suction Toy",
    marketingName: "The Bath Time Entertainment",
    description:
      "Suction cup fun that keeps baby engaged. Whirling waterfall action makes bath time the highlight of the day.",
    price: "$12.99",
    link: "https://amzn.to/4opy9Jd",
    image:
      "/Productimages/Sassy Whirling Waterfall Suction Toy for Bathtime.png",
    category: "bath-time",
    badges: ["Fun Factor", "Suction Secure"],
  },
  {
    id: "frida-sprayer",
    title: "Frida Baby Control The Flow Bathtub Sprayer",
    marketingName: "The Gentle Rinse Master",
    description:
      "Attaches to any tub. Perfect water pressure control for gentle rinsing. Makes hair washing tear-free.",
    price: "$24.99",
    link: "https://amzn.to/4f8H3Go",
    image:
      "/Productimages/Frida Baby Control The Flow Bathtub Sprayer Attac.png",
    category: "bath-time",
    badges: ["Tear-Free", "Easy Attach"],
  },
  {
    id: "swimming-turtle-toys",
    title: "Bath Toys for Toddlers Swimming Turtle",
    marketingName: "The Bath Time Adventure",
    description:
      "Wind-up floating turtle toys for 1-3 year olds. Perfect for bath time, pool, or water play. Makes bath time exciting and fun!",
    price: "$16.99",
    link: "https://amzn.to/41dKLsF",
    image:
      "/Productimages/Bath Toys for Toddlers 1-3 Year Old Boys Gifts,Swimming Turtle Bath Toys, Floating Wind-up Bathtub Toys for Baby, Toddler Pool Water Toys for 1 2 3 4 Year Old Boys Girls Gifts.png",
    category: "bath-time",
    badges: ["Wind-Up Fun", "1-3 Years"],
  },
  {
    id: "frida-rinse-cup",
    title: "Frida Baby Control The Flow Bath Rinse Cup",
    marketingName: "The Tear-Free Hair Washer",
    description:
      "Tear-free rinser with easy grip handle and removable rain shower. Made in USA. Makes hair washing a breeze for babies and toddlers.",
    price: "$19.99",
    link: "https://amzn.to/3IOQsXM",
    image:
      "/Productimages/Frida Baby Control The Flow Bath Rinse Cup, Tear Free Rinser to Wash Hair and Body with Easy Grip Handle and Removable Rain Shower, Made in USA.png",
    category: "bath-time",
    badges: ["Tear-Free", "Made in USA"],
  },
  {
    id: "angelcare-bath-support",
    title: "Angelcare Baby Bath Support (Gray)",
    marketingName: "The Newborn Bath Helper",
    description:
      "Ideal support for babies less than 6 months old. Provides secure, comfortable bathing experience for tiny ones. Peace of mind for new parents.",
    price: "$34.99",
    link: "https://amzn.to/4miFCI1",
    image:
      "/Productimages/Angelcare Baby Bath Support (Gray) | Ideal for Babies Less Than 6 Months Old.png",
    category: "bath-time",
    badges: ["0-6 Months", "Secure Support"],
  },
  {
    id: "bamboo-hooded-towel",
    title: "HIPHOP PANDA Hooded Towel - Rayon Made from Bamboo",
    marketingName: "The Ultra-Soft Snuggle Towel",
    description:
      "Bear ears hooded towel made from bamboo rayon. Ultra-absorbent 30x30 inch size. Perfect for newborns, babies, and toddlers. Naturally soft and gentle.",
    price: "$28.99",
    link: "https://amzn.to/41h41FA",
    image:
      "/Productimages/HIPHOP PANDA Hooded Towel - Rayon Made from Bamboo, Bath Towel with Bear Ears for Newborn, Babie, Toddler, Infant - Absorbent Large Baby Towel - Bear, 30 x 30 Inch.png",
    category: "bath-time",
    badges: ["Bamboo Soft", "Bear Ears"],
  },

  // ON-THE-GO ESSENTIALS - Adventure ready
  {
    id: "diaper-bag-backpack",
    title: "Baby Diaper Bag Backpack with Changing Station",
    marketingName: "The Ultimate Parent Pack",
    description:
      "Waterproof with built-in changing station! USB charging port, massive capacity. Everything you need, everywhere you go.",
    price: "$79.99",
    link: "https://amzn.to/3GCL1KL",
    image:
      "/Productimages/Baby Diaper Bags with Changing Station, Waterproof Diaper Bag Backpack for Moms Dads with USB Charging Port, Baby Shower Gifts, Large Capacity diaper backpack.png",
    category: "on-the-go",
    badges: ["Changing Station", "USB Charging"],
  },
  {
    id: "skip-hop-walker",
    title: "Skip Hop 4-in-1 Sit to Stand Walker",
    marketingName: "The Growth Adventure",
    description:
      "40+ activities, light-up music toys. Converts as baby grows. 6 months to confident walking - one amazing toy.",
    price: "$129.99",
    link: "https://amzn.to/3IGAU8B",
    image: "/Productimages/skip-hop-baby-walker.png",
    category: "on-the-go",
    badges: ["4-in-1", "40+ Activities"],
  },
  {
    id: "vtech-learning-walker",
    title: "VTech Sit-to-Stand Learning Walker",
    marketingName: "The Interactive Learning Machine",
    description:
      "Converts from play table to walker. Interactive learning activities promote motor skills and cognitive development. Music, lights, and fun!",
    price: "$44.99",
    link: "https://amzn.to/45etl0o",
    image: "/Productimages/VTech Sit-to-Stand Learning Walker.png",
    category: "on-the-go",
    badges: ["Learning Focus", "Convertible"],
  },
  {
    id: "retrospec-balance-bike",
    title: "Retrospec Cricket Baby Walker 4-Wheel Balance Bike",
    marketingName: "The First Birthday Adventure",
    description:
      "Perfect for 12-24 months toddlers. 4-wheel balance bike for safe early riding. Great first birthday gift that grows confidence and balance skills.",
    price: "$79.99",
    link: "https://amzn.to/456qdUa",
    image: "/Productimages/Retrospec-Cricket-Balance-Bike.png",
    category: "on-the-go",
    badges: ["Balance Training", "12-24 Months"],
  },
  {
    id: "baby-walking-harness",
    title: "Baby Walking Harness - Handheld Kids Walker Helper",
    marketingName: "The Confident Steps Helper",
    description:
      "Toddler walking assistant for 7-24 months. Helps babies learn to walk safely with parent support. Reduces back strain for parents too!",
    price: "$19.99",
    link: "https://amzn.to/45fGiXN",
    image:
      "/Productimages/Baby Walking Harness - Handheld Kids Walker Helper - Toddler Infant Walker Harness Assistant Belt - Child Baby Walk Learning Help Support Assist Trainer Tool - for 7-24 Month Old.png",
    category: "on-the-go",
    badges: ["Walk Training", "Parent Helper"],
  },
];

export const categories = [
  {
    id: "best-sellers",
    name: "👑 Best Sellers",
    subtitle: "Our top-rated mama favorites",
    description:
      "These are the products flying off our virtual shelves! Tried, tested, and absolutely loved by thousands of moms.",
  },
  {
    id: "heart-picks",
    name: "💕 Sophia's Heart Picks",
    subtitle: "Products that stole my heart (and my kids')",
    description:
      "The finds that made me go 'WHERE HAVE YOU BEEN ALL MY LIFE?!' These are game-changers in our daily routine.",
  },
  {
    id: "feeding",
    name: "🍼 Feeding Essentials",
    subtitle: "Mealtime magic makers",
    description:
      "From first feeds to independent eating - these tools make mealtime less messy and more successful.",
  },
  {
    id: "bath-time",
    name: "🛁 Bath Time Bliss",
    subtitle: "Splashing into fun & clean",
    description:
      "Transform bath time from chore to joy with these clever finds that make getting clean an adventure.",
  },
  {
    id: "on-the-go",
    name: "✈️ Adventure Ready",
    subtitle: "For families who never sit still",
    description:
      "Whether it's a quick grocery run or a cross-country adventure, these picks keep you prepared for anything.",
  },
];
