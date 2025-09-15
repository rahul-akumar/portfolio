# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Nuxt 4 and Vue 3, showcasing a creative developer's work with beautiful animations and modern web technologies. The site features an interactive blob background animation, smooth scrolling, and a glass morphism design aesthetic.

## Development Commands

### Setup and Installation
```bash
# Install dependencies (pnpm is preferred due to configuration)
pnpm install

# Alternative package managers
npm install
yarn install
bun install
```

### Development Server
```bash
# Start development server on http://localhost:3000
pnpm dev

# Alternative commands
npm run dev
yarn dev
bun run dev
```

### Build and Deploy
```bash
# Build for production
pnpm build

# Generate static site
pnpm generate

# Preview production build locally
pnpm preview
```

### Code Quality
```bash
# Run ESLint (configured via @nuxt/eslint)
npx eslint .

# ESLint auto-fix
npx eslint . --fix
```

## Architecture Overview

### Tech Stack
- **Framework**: Nuxt 4 with Vue 3 Composition API
- **Styling**: Tailwind CSS 4 with custom animations
- **Content**: Nuxt Content for markdown processing
- **Animations**: Custom CSS and JavaScript animations (no external motion library)
- **Build Tool**: Vite with Tailwind CSS plugin
- **Package Manager**: pnpm (with specific built dependencies config)

### Project Structure
```
app/
├── app.vue                 # Root application component with global styles
├── assets/main.css         # Tailwind CSS imports
├── components/             # Vue components
│   ├── BlobBackground.vue  # Complex physics-based blob animation
│   ├── HeroSection.vue     # Landing hero with ShinyText effects
│   ├── NavBar.vue         # Navigation component
│   ├── ShinyText.vue      # Animated text effect component
│   └── [Other components] # Project cards, sections, tools display
├── layouts/               # Nuxt layouts
├── pages/                 # Nuxt pages (file-based routing)
│   ├── index.vue         # Homepage with sections integration
│   └── about.vue         # About page
├── plugins/              # Vue/Nuxt plugins
│   └── tilt.ts          # Tilt.js integration plugin
content/                  # Markdown content files
public/                   # Static assets (images, favicon, etc.)
```

### Key Components Architecture

#### BlobBackground.vue
- Physics-based animation system with gravitational forces
- Multiple gradient-animated blobs with morphing shapes
- Responsive design with performance optimizations
- Uses requestAnimationFrame for smooth 60fps animation
- Complex CSS animations with staggered delays

#### Component Composition Pattern
- All components use Vue 3 Composition API with `<script setup>`
- Reactive data management with `ref()` and `reactive()`
- Lifecycle hooks (`onMounted`, `onUnmounted`) for animations
- Performance-first approach with `will-change` and transform3d

#### Styling Architecture
- Tailwind CSS 4 with Vite plugin integration
- Custom CSS animations alongside Tailwind utilities
- Glass morphism design with backdrop-blur effects
- Responsive design with mobile-first approach
- Custom scrollbar styling for consistent UX

### Configuration Files

#### nuxt.config.ts
- Tailwind CSS Vite plugin configuration
- Multiple Nuxt modules: content, eslint, fonts, icon, image, scripts
- Compatibility date set for Nuxt 4 features

#### content.config.ts
- Nuxt Content collection configuration
- Schema validation with Zod for content structure

### Animation System
- Native CSS transforms and requestAnimationFrame for complex animations
- Intersection Observer API for scroll-triggered animations
- Custom keyframe animations for morphing effects
- Performance-optimized with hardware acceleration
- Accessibility-conscious with `prefers-reduced-motion` support

### Development Patterns

#### Performance Considerations
- All animations use transform3d and will-change for GPU acceleration
- Images are optimized through @nuxt/image module
- Custom scrollbar implementation for consistent cross-browser experience
- Reduced motion accessibility support built-in

#### SEO and Meta Management
- Comprehensive meta tags with Open Graph and Twitter Card support
- Canonical URLs configuration
- Structured data ready through Nuxt's head management

#### State Management
- No external state management (Vuex/Pinia) - uses component-level reactive state
- Physics simulation state managed within BlobBackground component
- Smooth scroll behavior implemented via native CSS and JavaScript APIs

## Content Management

The project uses Nuxt Content for markdown processing:
- Content stored in `content/` directory
- Schema validation through content.config.ts
- Currently minimal content structure (expandable for blog/portfolio entries)

## Deployment Notes

- Supports both static generation (`pnpm generate`) and server-side rendering
- No database dependencies - fully static or SSR capable
- Optimized for modern browsers with graceful degradation