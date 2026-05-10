# Enhanced Aesthetics Medi Spa

The website for Razan Shahrour's private, home-based medical aesthetics studio in Mississauga, ON.

[enhancedaesthetics.ca](https://enhancedaesthetics.ca) · `@enhancedaesthetics.spa` on Instagram · 4.8★ / 374 Google reviews

## Stack

- **Next.js 16** App Router · **React 19** · **TypeScript**
- **Tailwind v4** (CSS-first via `@theme`)
- **framer-motion** for scroll-reveal · **lucide-react** for icons
- **Fresha** embed for booking

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

- Business info (phone, hours, address, links) → `src/lib/spa.ts`
- Treatments, prices, reviews, FAQs → `src/lib/content.ts`
- Brand tokens (colors, fonts) → `src/app/globals.css` under `@theme`

That's it — every page reads from those three files.

## Deploy

Push to GitHub → import on [Vercel](https://vercel.com/new) → live with HTTPS in ~60 seconds.
