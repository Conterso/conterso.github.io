/**
 * Lenis Smooth Scrolling Integration
 * 
 * This script initializes Lenis smooth scrolling library for enhanced
 * user experience with buttery smooth scroll animations.
 * 
 * @see https://lenis.studiofreight.com/
 */

import Lenis from 'lenis';

let lenis;

/**
 * Initialize Lenis smooth scrolling
 */
export function initLenis() {
  // Create Lenis instance with custom configuration
  lenis = new Lenis({
    duration: 1.2,          // Animation duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    orientation: 'vertical', // Scroll direction
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,     // Disable on touch devices for better performance
    touchMultiplier: 2,
    infinite: false,
  });

  // RAF loop for smooth animation
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Handle anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        lenis.scrollTo(target, {
          offset: -100,
          duration: 1.5,
        });
      }
    });
  });

  return lenis;
}

/**
 * Add scroll-triggered animations
 */
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all elements with animation class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Initialize all scroll features
 */
export function initScrollFeatures() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLenis();
      initScrollAnimations();
    });
  } else {
    initLenis();
    initScrollAnimations();
  }
}
