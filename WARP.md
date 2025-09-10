# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production (outputs to `dist/`)
- `pnpm preview` - Preview production build locally

### Code Quality
- `npx prettier --write .` - Format code using Prettier with Tailwind CSS plugin
- `vue-tsc -b` - Type check TypeScript (runs automatically during build)

## Project Architecture

### Technology Stack
- **Framework**: Vue 3 with Composition API (`<script setup>`)
- **Build Tool**: Vite with Vue plugin
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with custom CSS animations
- **Font**: JetBrains Mono Variable (loaded via @fontsource-variable)
- **Icons**: Lucide Vue Next
- **Package Manager**: pnpm

### Application Structure
This is a **single-page application (SPA)** with a minimalist architecture:

- **`src/App.vue`**: Main and only component containing the entire portfolio layout
- **`src/main.ts`**: Application entry point with Vue app initialization
- **`src/assets/main.css`**: Global styles with Tailwind imports and custom properties

### Component Architecture
The application follows a **single-component design pattern** where all functionality is contained within `App.vue`:

- **Template**: Semantic HTML5 structure (header, main, footer)
- **Script**: Composition API with utility style objects and imported icons
- **Styles**: Scoped CSS with complex gradient animations and keyframe definitions

### Styling Approach
- **Base Framework**: Tailwind CSS with utility-first approach
- **Responsive Design**: Mobile-first with `md:` and `lg:` breakpoints
- **Custom Animations**: Hand-crafted CSS gradients with multiple animation layers:
  - `gradientShift`: Background position animation (48s duration)
  - `gradientRotate`: Hue rotation effect (3s duration)
  - `shine`: Moving highlight overlay
- **Typography**: Monospace font stack with custom underline effects

### Key Features
- **Interactive Gradient Container**: Mouse/touch responsive gradient with real-time color shifts and scaling
- **Background Light Bleed**: Subtle moving gradient behind main container for depth
- **Enhanced Link Interactions**: Gradient underline animations with lift effects and bouncing arrows
- **Performance Optimized**: GPU-accelerated animations with reduced motion support
- **Responsive Layout**: Flexbox-based layout adapting from mobile to desktop
- **External Integrations**: Links to Dialpad, LinkedIn, GitHub, Behance, and personal projects

## Deployment

### GitHub Pages
- **Trigger**: Automatic deployment on push to `main` branch
- **Build Environment**: Ubuntu with Node.js 20, pnpm 8
- **Process**: `pnpm install` → `pnpm run build` → deploy `dist/` folder
- **Base Path**: Configured for `/portfolio/` subpath in `vite.config.ts`

### Local Preview
Use `pnpm preview` after building to test the production version locally.

## Development Environment

### Prerequisites
- Node.js 20+
- pnpm 8+

### VS Code Setup
- Required extension: Vue.volar (specified in `.vscode/extensions.json`)
- Prettier configured with Tailwind CSS plugin for optimal formatting

### TypeScript Configuration
- **Strict Mode**: Enabled with comprehensive linting rules
- **Project Structure**: Composite configuration with separate app and node configs
- **Vue Support**: Uses `@vue/tsconfig` presets for DOM environment

### File Structure Notes
- Static assets in `public/` folder
- All source code contained in minimal `src/` structure
- No component organization needed due to single-component architecture
- CSS animations and styles are co-located with component logic
