<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Enhanced Aesthetics Medi Spa — agent notes

## Architecture
- Next.js 16 App Router · React 19 · TypeScript · Tailwind v4 (CSS-first via `@theme`).
- Single source of truth for business info: `src/lib/spa.ts`. Every page / schema / footer reads from it.
- Treatments, reviews, FAQs, and other repeatable content live in `src/lib/content.ts`.
- Brand tokens (`--color-spa-deep`, `--color-champagne`, etc.) are declared in `src/app/globals.css` under `@theme` and used as Tailwind utility colors.

## Brand
- Primary: deep spa-teal `#0E4F4A` — matches the leaf in her logo.
- Background: warm ivory `#F8F1EC` — never pure white.
- Accent 1: champagne `#C9A66A` — used sparingly on dividers, badges, ★ stars.
- Accent 2: dusty blush `#E8C4BD` — used on hover states + soft tags.
- Type: Fraunces (display serif) + Geist Sans (body). Italics on hero.

## Tone
- 60% warm girlfriend / 40% premium clinical. Outcome-led headlines, specific copy, real reviews.
- No fake luxury, no "call for pricing", no stock photo people.
