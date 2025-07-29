<div align="center">
  <img src="https://via.placeholder.com/600x200/FF69B4/FFFFFF?text=MomWise+with+Sophia" alt="MomWise with Sophia Logo" />
</div>

# MomWise with Sophia - Your Trusted Parenting Companion

![Netlify Status](https://api.netlify.com/api/v1/badges/placeholder/deploy-status)
![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green.svg)

<div align="center">
  <img src="https://via.placeholder.com/800x400/FF69B4/FFFFFF?text=Modern+Parenting+Resource+Hub" alt="MomWise Hero Section" />
</div>

## 🚀 Overview

MomWise with Sophia is a comprehensive parenting resource website that empowers mothers with trusted advice, curated product recommendations, and practical solutions for modern parenting challenges. Our platform combines expert-curated content with affiliate product recommendations to help parents make informed decisions while building a sustainable business model.

Our platform addresses the key challenges in modern parenting:

- **Expert Guidance**: Curated parenting tips and feeding guides from trusted sources
- **Product Discovery**: 50+ carefully selected Amazon affiliate products with honest reviews
- **Recipe Collection**: Kid-friendly, nutritious recipes for busy families
- **Digital Resources**: Educational ebooks and coloring books for children
- **Community Building**: Social proof and testimonials from real parents
- **Time-Saving Solutions**: Quick access to reliable parenting resources

## 💻 Tech Stack

| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="40" height="40"/> Next.js 15 | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40"/> React 19 | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40"/> TypeScript | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="40" height="40"/> Tailwind CSS | <img src="https://www.netlify.com/v3/img/components/logomark.png" width="40" height="40"/> Netlify                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40"/> Node.js    | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" height="40"/> Git          | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="40" height="40"/> ESLint             | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="40" height="40"/> Design System         | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" width="40" height="40"/> Amazon APIs |

### Why This Tech Stack?

- **Next.js 15**: Server-side rendering for SEO optimization and fast page loads
- **TypeScript**: Type safety and improved developer experience
- **Tailwind CSS**: Rapid UI development with utility-first approach
- **Netlify**: Seamless deployment with CI/CD integration
- **Amazon Affiliate APIs**: Integrated product recommendations and commission tracking

## ✨ Features

- **🛍️ Amazon Affiliate Integration**: 50+ curated products with real-time affiliate links
- **📱 Responsive Design**: Optimized for all device sizes and touch interactions
- **🎨 Modern UI/UX**: Glassmorphism design with pastel gradients and smooth animations
- **⚡ Performance Optimized**: Fast loading times with Next.js 15 and image optimization
- **🔍 SEO Friendly**: Server-side rendering for better search engine visibility
- **📧 Newsletter Integration**: Email capture for building engaged audience
- **👥 Social Proof**: Real testimonials and social media integration
- **📊 Analytics Ready**: Built-in tracking for conversion optimization

## 📋 Website Sections

- **🏠 Home**: Welcome experience with featured content and value proposition
- **🛒 Amazon Finds**: Categorized product recommendations with affiliate links
- **🍽️ Recipes**: Kid-friendly, nutritious recipes with filtering options
- **🍼 Feeding Guide**: Age-based feeding recommendations and meal planning
- **👨‍👩‍👧‍👦 Parenting Tips**: Expert advice and practical parenting solutions
- **📚 Ebooks & Coloring Books**: Digital downloads and educational resources
- **ℹ️ About**: Sophia's story and mission behind MomWise
- **📞 Contact**: Easy ways to connect and build community

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/Jeanfr1/momwisewithsophia.git
cd momwisewithsophia

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
momwisewithsophia/
├── public/                    # Static assets
│   ├── images/               # General images
│   ├── Productimages/        # Amazon product images
│   └── ebooksimages/         # Ebook covers
├── src/                      # Source code
│   ├── app/                  # Next.js app directory
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── amazon-finds/     # Amazon products page
│   │   ├── recipes/          # Recipes page
│   │   ├── feeding-guide/    # Feeding guide page
│   │   ├── parenting-tips/   # Parenting tips page
│   │   ├── ebooks-coloring-books/ # Digital products
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── NewsletterSignup.tsx # Email capture
│   │   ├── SocialProofCards.tsx # Testimonials
│   │   └── InstagramFeed.tsx # Social integration
│   └── data/                 # Static data files
│       ├── amazonFinds.ts    # Product database
│       ├── recipes.ts        # Recipe database
│       ├── parentingTips.ts  # Tips database
│       └── ebooks.ts         # Digital products
├── netlify.toml              # Netlify configuration
├── tailwind.config.ts        # Tailwind configuration
└── next.config.ts            # Next.js configuration
```

## 🎯 Content Strategy

### Amazon Affiliate Products

- **Best Sellers**: Top-rated baby monitors, feeding essentials
- **Heart Picks**: Sophia's personal favorite recommendations
- **Feeding Essentials**: Bottles, food makers, utensils, and feeding accessories
- **Bath Time**: Safe and fun bathing products and toys
- **Adventure Ready**: Travel gear and mobility products

### Content Categories

- **Age-Appropriate Recipes**: 6M+, 12M+, 18M+, 2Y+ filtering
- **Meal Types**: Breakfast, lunch, dinner, snacks
- **Dietary Considerations**: Allergen-free, organic, quick prep
- **Parenting Stages**: Newborn, infant, toddler, preschooler

## 🚀 Deployment

This site is deployed on Netlify with continuous deployment from the main branch.

**Live Site**: [Coming Soon]

### Deployment Configuration

- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Node Version**: `18.x`
- **Environment Variables**: Amazon Affiliate tracking IDs

## 📊 Analytics & Monetization

- **Amazon Affiliate Program**: Commission-based product recommendations
- **Email Marketing**: Newsletter list building for engagement
- **Social Media Integration**: Instagram feed and social proof
- **Content Marketing**: SEO-optimized blog content and guides
- **Digital Products**: Ebook sales and downloadable resources

## 🤝 Contributing

We welcome contributions to improve MomWise! Please follow our contribution guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Sophia**: The heart and expertise behind MomWise
- **Amazon Associates Program**: For enabling product recommendations
- **Next.js Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Netlify**: For seamless deployment and hosting

---

<div align="center">
  <p>Built with ❤️ for modern parents by <a href="https://github.com/Jeanfr1">Jean</a></p>
  <p>Empowering parents, one recommendation at a time 🌟</p>
</div>
