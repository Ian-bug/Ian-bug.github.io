# Agent Guide for Ian-bug.github.io

## Project Overview

This is a personal portfolio website built with Next.js 16.1.6 (App Router), TypeScript, shadcn/ui, and Tailwind CSS 4. It features a dark theme by default with a light mode toggle (press `d` key), responsive design, and showcases GitHub projects.

## Essential Commands

### Development
```bash
npm run dev              # Start development server with Turbopack (localhost:3000)
```

### Build & Production
```bash
npm run build            # Build for production
npm start                # Start production server
```

### Code Quality
```bash
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
npm run typecheck        # Run TypeScript type checking (noEmit)
```

### shadcn/ui Components
```bash
npx shadcn@latest add [component-name]  # Add new shadcn/ui components
```

Example:
```bash
npx shadcn@latest add card
npx shadcn@latest add badge
```

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with fonts and theme provider
│   ├── page.tsx             # Main portfolio page
│   ├── globals.css          # Global styles and CSS custom properties
│   └── favicon.ico
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   └── button.tsx       # Example shadcn component
│   └── theme-provider.tsx   # Dark/light theme toggle with keyboard shortcut
├── lib/
│   └── utils.ts             # Utility functions (cn() for class merging)
├── hooks/                   # Custom React hooks (currently empty)
└── public/                  # Static assets (currently empty)
```

## Code Conventions

### TypeScript
- **Strict mode enabled**: All TypeScript strict checks are enforced
- **Path aliases configured**: Use `@/` prefix for imports
  - `@/components` → `./components`
  - `@/lib/utils` → `./lib/utils`
  - `@/components/ui` → `./components/ui`
  - `@/lib` → `./lib`
  - `@/hooks` → `./hooks`

### Styling
- **Tailwind CSS 4.1.18** with CSS custom properties for theming
- Use `cn()` utility from `@/lib/utils` for conditional class merging
- **shadcn/ui components** follow variant-based styling with `class-variance-authority`
- **Icons**: Use Lucide React for all UI icons
- **Color system**: OKLCH color space with CSS custom properties (see `app/globals.css`)

### Component Patterns

#### Client Components
Mark client-side components with `"use client"` directive at the top of the file:

```typescript
"use client"

import * as React from "react"
// ...
```

#### shadcn/ui Components
shadcn components use variant props for styling:

```typescript
<Button variant="outline" size="lg" asChild>
  <a href="https://example.com">Link</a>
</Button>
```

Available Button variants: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`
Available Button sizes: `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`

#### Utility Functions
Use the `cn()` function for merging Tailwind classes:

```typescript
import { cn } from "@/lib/utils"

<div className={cn("base-class", conditional && "conditional-class")}>
```

### Formatting Rules (Prettier)
- **Line width**: 80 characters
- **Indentation**: 2 spaces
- **Quotes**: Double quotes
- **Semicolons**: Omitted (no semicolons)
- **Line endings**: LF
- **Trailing commas**: ES5 compatible
- **Tailwind plugin**: `prettier-plugin-tailwindcss` for automatic class sorting

### ESLint Configuration
- Uses `eslint-config-next` with `core-web-vitals` and `typescript` presets
- Global ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Theming

### Theme Provider
The app uses `next-themes` for dark/light mode switching:
- **Default theme**: Dark
- **System detection**: Enabled
- **Toggle shortcut**: Press `d` key (only when not typing in an input field)
- **No transition**: Theme changes are instant (`disableTransitionOnChange`)

### CSS Custom Properties
Colors are defined in `app/globals.css` using OKLCH color space with separate definitions for `:root` (light) and `.dark` (dark):

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.87 0.00 0);
  /* ... */
}
```

Available color tokens: `background`, `foreground`, `card`, `card-foreground`, `popover`, `popover-foreground`, `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `muted`, `muted-foreground`, `accent`, `accent-foreground`, `destructive`, `border`, `input`, `ring`, plus chart colors and sidebar colors.

## Dependencies

### Core
- **next**: 16.1.6 (React framework)
- **react**: 19.2.4
- **react-dom**: 19.2.4

### UI & Styling
- **shadcn**: 4.0.2
- **tailwindcss**: 4.1.18
- **next-themes**: 0.4.6
- **class-variance-authority**: 0.7.1 (variant-based styling)
- **clsx**: 2.1.1
- **tailwind-merge**: 3.5.0
- **tw-animate-css**: 1.4.0
- **lucide-react**: 0.577.0 (icons)
- **radix-ui**: 1.4.3 (headless UI primitives)

### Development
- **typescript**: 5.9.3
- **prettier**: 3.8.1
- **prettier-plugin-tailwindcss**: 0.7.2
- **eslint**: 9.39.2
- **eslint-config-next**: 16.1.6

## Important Gotchas

### Next.js App Router
- All components in `app/` directory are Server Components by default
- Use `"use client"` directive for interactive components
- Use `suppressHydrationWarning` on `html` tag when theming (see `app/layout.tsx:25`)

### Type Imports
- When importing types only, use `type` keyword: `import type { ComponentProps } from "react"`
- This prevents runtime import overhead

### ESLint Rules
- **Unescaped entities**: ESLint enforces escaping of special HTML entities in JSX
  - Apostrophes: Use `&apos;` instead of `'`
  - Example: `Let&apos;s Connect` instead of `Let's Connect`
  - This is enforced by the `react/no-unescaped-entities` rule

### Tailwind CSS 4
- Uses the new Tailwind CSS 4 with `@import "tailwindcss"` syntax
- PostCSS config uses `@tailwindcss/postcss` plugin
- Custom variant defined: `@custom-variant dark (&:is(.dark *));` in `app/globals.css:5`

### shadcn/ui Configuration
- **Style**: `radix-nova`
- **Base color**: `neutral`
- **Icon library**: `lucide`
- **RSC**: Enabled (React Server Components)
- **CSS variables**: Enabled
- See `components.json` for full configuration

### Fonts
The project uses **Geist Sans** and **Geist Mono** fonts from `next/font/google`:
- `fontSans` for body text
- `fontMono` for code/monospace text
- Font variables are set in `app/layout.tsx` and available in Tailwind as `--font-sans` and `--font-mono`

### GitHub Pages Deployment
This project is deployed as a GitHub Pages site at: `https://ian-bug.github.io`

## Testing

No test framework is currently configured. When adding tests:
- Consider Jest + React Testing Library for component testing
- Consider Playwright for end-to-end testing
- Add test scripts to `package.json`

## Common Tasks

### Adding a New Page
1. Create a new file in `app/` directory (e.g., `app/about/page.tsx`)
2. Export a default React component
3. The file will be accessible at `/about`

### Adding a New Component
1. Create component in `components/` directory
2. Use `.tsx` extension for TypeScript
3. Use `"use client"` if the component needs interactivity
4. Import and use in pages or other components

### Modifying Theme Colors
Edit CSS custom properties in `app/globals.css`:
1. Modify `:root` for light theme
2. Modify `.dark` for dark theme
3. Tailwind classes automatically use the new values

### Adding shadcn/ui Component
```bash
npx shadcn@latest add [component-name]
```

The component will be added to `components/ui/[component].tsx` and automatically imported.

## Code Style Summary

```typescript
// ✅ Good: No semicolons, double quotes, 2-space indentation
export default function MyComponent({ title }: { title: string }) {
  return (
    <div className="p-4">
      <h1>{title}</h1>
    </div>
  )
}

// ❌ Bad: Semicolons, wrong quotes, inconsistent spacing
export default function MyComponent( { title } : { title : string } ) {
  return (
    <div className="p-4">
      <h1>{title}</h1>;
    </div>
  );
}
```

## Before Making Changes

1. **Run the dev server**: `npm run dev`
2. **Check existing patterns**: Look at similar components in `components/` directory
3. **Follow shadcn patterns**: If adding UI components, check existing shadcn components in `components/ui/`
4. **Type check**: Run `npm run typecheck` before committing
5. **Lint**: Run `npm run lint` to catch style issues
6. **Format**: Run `npm run format` to ensure consistent formatting

## Repository-Specific Notes

- This is a personal portfolio site showcasing GitHub projects
- The site uses GitHub Pages for hosting
- Footer includes dynamic year: `© {new Date().getFullYear()} Ian`
- All external links should use `target="_blank" rel="noopener noreferrer"` for security
