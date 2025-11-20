# Component Documentation

This document provides detailed information about all reusable components in the Conterso website.

## Table of Contents

- [FeatureCard](#featurecard)
- [SectionHeader](#sectionheader)
- [CTASection](#ctasection)
- [PricingCard](#pricingcard)
- [ProductCard](#productcard)
- [Header](#header)
- [Footer](#footer)
- [Hero](#hero)

---

## FeatureCard

A reusable card component for displaying product features with neumorphic or glassmorphism design.

### Location
`src/components/FeatureCard.astro`

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | Yes | - | The feature title |
| `description` | string | Yes | - | The feature description |
| `icon` | string | No | - | SVG path content for the icon |
| `glass` | boolean | No | `false` | Use glassmorphism style instead of neumorphism |

### Usage

```astro
---
import FeatureCard from '../components/FeatureCard.astro';
---

<!-- Neumorphic style (default) -->
<FeatureCard 
  title="Advanced Security"
  description="Multi-layered security architecture with encryption"
  icon="<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/>"
/>

<!-- Glassmorphism style -->
<FeatureCard 
  title="Real-Time Analytics"
  description="Live data visualization and insights"
  icon="<polyline points='22,12 18,12 15,21 9,3 6,12 2,12'/>"
  glass={true}
/>
```

### Features

- Scroll-triggered fade-in animation
- Hover effects with scale and shadow transitions
- Icon color animation on hover
- Responsive padding
- Two visual styles: neumorphic and glassmorphism

### Styling

The component uses CSS variables from `variables.css`:
- `--neu-shadow-light` for neumorphic elevation
- `--glass-bg` and `--glass-backdrop-filter` for glassmorphism
- `--color-accent` for icon color
- `--transition-normal` for smooth animations

---

## SectionHeader

A reusable section header component with optional subtitle and decorative accent.

### Location
`src/components/SectionHeader.astro`

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | Yes | - | The main heading text |
| `subtitle` | string | No | - | Optional subtitle text |
| `centered` | boolean | No | `true` | Center align the header |
| `tag` | 'h1' \| 'h2' \| 'h3' \| 'h4' | No | `'h2'` | HTML heading tag to use |

### Usage

```astro
---
import SectionHeader from '../components/SectionHeader.astro';
---

<!-- Centered header with subtitle -->
<SectionHeader 
  title="Advanced Features"
  subtitle="Everything you need to succeed in the modern enterprise"
  centered={true}
  tag="h2"
/>

<!-- Left-aligned header without subtitle -->
<SectionHeader 
  title="Technical Specifications"
  centered={false}
  tag="h3"
/>
```

### Features

- Gradient decorative bar
- Scroll-triggered slide-up animation
- Responsive font sizes
- Flexible heading level
- Optional subtitle support

### Styling

- Title uses `--text-4xl` on desktop, `--text-3xl` on mobile
- Subtitle uses `--text-xl` on desktop, `--text-lg` on mobile
- Decorative bar features gradient from `--color-accent` to `--color-primary`
- Animation uses `--transition-slow` for smooth appearance

---

## CTASection

A reusable call-to-action section component with neumorphic or glassmorphism background.

### Location
`src/components/CTASection.astro`

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | Yes | - | The CTA heading |
| `description` | string | Yes | - | The CTA description |
| `primaryButton` | object | Yes | - | Primary button config `{text, href}` |
| `secondaryButton` | object | No | - | Secondary button config `{text, href}` |
| `glass` | boolean | No | `false` | Use glassmorphism style |

### Usage

```astro
---
import CTASection from '../components/CTASection.astro';
---

<!-- Neumorphic CTA -->
<CTASection 
  title="Get Started Today"
  description="Join thousands of satisfied customers using Conterso products"
  primaryButton={{ text: "Start Free Trial", href: "/contact" }}
  secondaryButton={{ text: "View Pricing", href: "/pricing" }}
/>

<!-- Glassmorphism CTA -->
<CTASection 
  title="Transform Your Workflow"
  description="Experience the power of modern enterprise solutions"
  primaryButton={{ text: "Request Demo", href: "/contact" }}
  glass={true}
/>
```

### Features

- Full-width section with background
- Scale-in animation on scroll
- Flexible button configuration
- Responsive layout (column on mobile)
- Two visual styles

### Styling

- Neumorphic: Gradient background with `--neu-bg-light` to `--neu-bg`
- Glassmorphism: Transparent background with backdrop blur
- Buttons use global `.btn` classes
- Mobile breakpoint at 768px

---

## PricingCard

A card component for displaying pricing tiers with features list.

### Location
`src/components/PricingCard.astro`

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tier` | string | Yes | - | Pricing tier name |
| `price` | string | Yes | - | Price amount |
| `currency` | string | No | `'£'` | Currency symbol |
| `period` | string | No | `'/month'` | Billing period |
| `features` | string[] | Yes | - | List of features |
| `featured` | boolean | No | `false` | Highlight as featured tier |
| `buttonText` | string | No | `'Get Started'` | CTA button text |
| `buttonHref` | string | No | `'/contact'` | CTA button link |

### Usage

```astro
---
import PricingCard from '../components/PricingCard.astro';
---

<PricingCard 
  tier="Professional"
  price="25"
  currency="£"
  period="/user/month"
  features={[
    "Advanced AI threat detection",
    "Zero trust architecture",
    "24/7 support",
    "Priority updates"
  ]}
  featured={true}
  buttonText="Choose Professional"
  buttonHref="/contact"
/>
```

### Features

- Neumorphic card design
- Featured tier highlighting with badge
- Hover scale effect
- Checkmark icons for features
- Responsive sizing

---

## ProductCard

A card component for displaying products in the overview grid.

### Location
`src/components/ProductCard.astro`

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | Yes | - | Product name |
| `description` | string | Yes | - | Product description |
| `href` | string | Yes | - | Link to product page |
| `imageSrc` | string | No | - | Product image URL |
| `icon` | string | No | - | SVG icon as alternative to image |

### Usage

```astro
---
import ProductCard from '../components/ProductCard.astro';
---

<ProductCard 
  title="Shield"
  description="Advanced cybersecurity platform"
  href="/products/shield"
  imageSrc="/images/products/shield-security.svg"
/>
```

---

## Header

The site-wide navigation header component.

### Location
`src/components/Header.astro`

### Features

- Responsive navigation menu
- Logo and branding
- Mobile hamburger menu
- Sticky positioning
- Dropdown for Products

### Usage

```astro
---
import Header from '../components/Header.astro';
---

<Header />
```

---

## Footer

The site-wide footer component.

### Location
`src/components/Footer.astro`

### Features

- Multi-column layout
- Product links
- Company information
- Support resources
- Social media links
- Copyright notice

### Usage

```astro
---
import Footer from '../components/Footer.astro';
---

<Footer />
```

---

## Hero

A hero section component for pages.

### Location
`src/components/Hero.astro`

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | Yes | - | Hero heading |
| `subtitle` | string | No | - | Hero subheading |
| `backgroundImage` | string | No | - | Background image URL |

### Usage

```astro
---
import Hero from '../components/Hero.astro';
---

<Hero 
  title="Welcome to Conterso"
  subtitle="Innovative Technology Solutions"
/>
```

---

## Best Practices

### Animation

- Always add `animate-on-scroll` class to components that should animate on scroll
- Use `transition` CSS property for smooth state changes
- Keep animation duration between 0.3s and 0.8s

### Accessibility

- Use semantic HTML elements
- Include alt text for images
- Ensure proper heading hierarchy
- Test with screen readers
- Maintain sufficient color contrast

### Responsive Design

- Mobile-first approach
- Test at 320px, 768px, 1024px, and 1440px widths
- Use CSS Grid and Flexbox for layouts
- Avoid fixed widths

### Performance

- Optimize SVG files
- Use lazy loading for images
- Minimize CSS and JavaScript
- Leverage Astro's static generation

---

## Styling Guidelines

### CSS Variables

All components use CSS variables from `src/styles/variables.css`:

```css
/* Colors */
--color-primary: #0066cc;
--color-accent: #f59e0b;

/* Neumorphic */
--neu-bg: #e0e5ec;
--neu-shadow-light: ...;

/* Glassmorphism */
--glass-bg: rgba(255, 255, 255, 0.7);
--glass-backdrop-filter: blur(10px);

/* Spacing */
--space-4: 1rem;
--space-8: 2rem;

/* Typography */
--text-xl: 1.25rem;
--font-semibold: 600;
```

### Class Naming

Follow BEM (Block Element Modifier) convention:

- Block: `.feature-card`
- Element: `.feature-card__title`
- Modifier: `.feature-card--glass`

### Component Structure

```astro
---
// 1. Type definitions
export interface Props {
  prop1: string;
  prop2?: boolean;
}

// 2. Props destructuring
const { prop1, prop2 = false } = Astro.props;
---

<!-- 3. HTML markup -->
<div class="component">
  <!-- Content -->
</div>

<!-- 4. Scoped styles -->
<style>
  .component {
    /* Styles */
  }
</style>
```

---

## Contributing

When creating new components:

1. Add comprehensive JSDoc comments
2. Define TypeScript interfaces for props
3. Include usage examples in this document
4. Add responsive styles
5. Include animation classes
6. Test across browsers
7. Ensure accessibility

---

**Last Updated:** November 2025  
**Maintainer:** Conterso Development Team
