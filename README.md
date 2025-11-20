# Conterso Website

> Modern, responsive website for Conterso - Innovative Technology Solutions

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## 🚀 Overview

The Conterso website showcases a comprehensive portfolio of enterprise technology solutions including operating systems, office productivity suites, creative tools, cybersecurity platforms, and project management software. Built with modern web technologies and featuring smooth animations, neumorphic design, and glassmorphism effects.

## ✨ Features

- **Smooth Scrolling**: Implemented with Lenis for buttery-smooth scroll animations
- **Neumorphic Design**: Soft UI with subtle shadows and highlights
- **Glassmorphism**: Frosted glass effects for modern aesthetics
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Component-Based**: Reusable Astro components for consistency
- **Fast Performance**: Static site generation with Astro
- **SEO Optimized**: Meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static Site Generator
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth Scrolling Library
- **TypeScript** - Type Safety
- **CSS3** - Styling with CSS Variables
- **HTML5** - Semantic Markup

## 📦 Project Structure

```
/
├── public/              # Static assets
│   ├── images/         # Product images and illustrations
│   │   └── products/   # Product-specific images
│   └── favicon.svg     # Site favicon
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── FeatureCard.astro      # Feature display card
│   │   ├── SectionHeader.astro    # Section heading component
│   │   ├── CTASection.astro       # Call-to-action section
│   │   ├── PricingCard.astro      # Pricing tier card
│   │   ├── ProductCard.astro      # Product showcase card
│   │   ├── Header.astro           # Site header/navigation
│   │   ├── Footer.astro           # Site footer
│   │   └── Hero.astro             # Hero section
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro       # Base HTML layout
│   ├── pages/          # Route pages
│   │   ├── index.astro            # Homepage
│   │   ├── about.astro            # About page
│   │   ├── contact.astro          # Contact page
│   │   └── products/              # Product pages
│   │       ├── index.astro        # Products overview
│   │       ├── doors.astro        # Doors OS
│   │       ├── work.astro         # Work Office Suite
│   │       ├── sounder.astro      # Sounder Music Production
│   │       ├── mider.astro        # Mider Video/Photo Editor
│   │       ├── shield.astro       # Shield Cybersecurity
│   │       └── flow.astro         # Flow Project Management
│   ├── scripts/        # JavaScript modules
│   │   └── lenis.js               # Lenis smooth scrolling setup
│   └── styles/         # Global styles
│       ├── base.css               # Base styles and resets
│       ├── variables.css          # CSS custom properties
│       ├── main.css               # Main stylesheet
│       ├── components/            # Component styles
│       └── pages/                 # Page-specific styles
├── astro.config.mjs    # Astro configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Design System

### Colors

```css
--color-primary: #0066cc;      /* Main brand blue */
--color-accent: #f59e0b;       /* Orange accent */
--color-secondary: #6366f1;    /* Purple secondary */
--neu-bg: #e0e5ec;            /* Neumorphic background */
```

### Neumorphism

Soft, extruded UI elements with dual shadows:
- Light shadow: Creates raised effect
- Dark shadow: Creates depth
- Used for cards, buttons, and interactive elements

### Glassmorphism

Frosted glass effect with:
- Semi-transparent background
- Backdrop blur filter
- Subtle border
- Used for overlays and accent cards

## 🚦 Getting Started

### Prerequisites

- Node.js 18.14.1 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Conterso/conterso.github.io.git

# Navigate to project directory
cd conterso.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Server runs at http://localhost:4321
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🧩 Component Documentation

### FeatureCard

Reusable card component for displaying product features with neumorphic design.

```astro
<FeatureCard 
  title="Advanced Security"
  description="Multi-layered security architecture"
  icon="<path d='...'/>"
  glass={false}
/>
```

**Props:**
- `title` (string, required): Feature title
- `description` (string, required): Feature description  
- `icon` (string, optional): SVG icon content
- `glass` (boolean, optional): Use glassmorphism style

### SectionHeader

Section heading component with optional subtitle and decoration.

```astro
<SectionHeader 
  title="Advanced Features"
  subtitle="Everything you need to succeed"
  centered={true}
  tag="h2"
/>
```

**Props:**
- `title` (string, required): Main heading text
- `subtitle` (string, optional): Subtitle text
- `centered` (boolean, optional): Center alignment
- `tag` (string, optional): Heading tag (h1-h4)

### CTASection

Call-to-action section with neumorphic design.

```astro
<CTASection 
  title="Get Started Today"
  description="Join thousands of satisfied customers"
  primaryButton={{ text: "Sign Up", href: "/signup" }}
  secondaryButton={{ text: "Learn More", href: "/about" }}
  glass={false}
/>
```

**Props:**
- `title` (string, required): CTA heading
- `description` (string, required): CTA description
- `primaryButton` (object, required): Primary button config
- `secondaryButton` (object, optional): Secondary button config
- `glass` (boolean, optional): Use glassmorphism style

### PricingCard

Pricing tier card with features list.

```astro
<PricingCard 
  tier="Professional"
  price="25"
  currency="£"
  period="/user/month"
  features={["Feature 1", "Feature 2"]}
  featured={true}
/>
```

## 🎭 Animations

The site uses Lenis for smooth scrolling and scroll-triggered animations.

### Scroll-Triggered Animations

Add the `animate-on-scroll` class to any element:

```html
<div class="animate-on-scroll">
  Content fades in and slides up
</div>
```

### Animation Classes

- `.animate-on-scroll` - Fade in and slide up
- `.fade-in` - Simple fade in
- `.slide-in-left` - Slide from left
- `.slide-in-right` - Slide from right
- `.scale-in` - Scale and fade in

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px)

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px)

/* Desktop */
@media (min-width: 1025px)
```

## 🔧 Configuration

### Astro Config

```js
// astro.config.mjs
export default {
  site: 'https://conterso.github.io',
  // Add custom configuration here
}
```

### TypeScript

```json
// tsconfig.json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Copyright © 2025 Conterso. All rights reserved.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) - Amazing static site generator
- [Lenis](https://lenis.studiofreight.com/) - Smooth scrolling library
- [Google Fonts](https://fonts.google.com/) - Typography

## 📧 Contact

For questions or support, please visit our [Contact Page](https://conterso.github.io/contact)

---

Built with ❤️ by the Conterso Team