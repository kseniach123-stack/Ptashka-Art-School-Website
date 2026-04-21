# 🐦 Ptashka — Art School Website

Online art school landing page and class booking site.  
Students join classes via Zoom from anywhere in the world.

## Tech stack
- Next.js 14 — App Router
- TypeScript
- Tailwind CSS
- Framer Motion — animations
- React Hook Form + Zod — form validation
- Netlify — deployment

## Getting started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
/app
  layout.tsx       — root layout, fonts, metadata
  page.tsx         — main landing page
/components
  Navbar.tsx       — sticky navigation with mobile drawer
  Hero.tsx         — full-height hero section with brand pattern
  About.tsx        — about section with photo and YouTube embed
  Services.tsx     — 2x2 service cards grid
  CtaBanner.tsx    — orange CTA banner between sections
  Pricing.tsx      — 3-tier pricing cards
  Reviews.tsx      — testimonials carousel + Instagram block
  Contact.tsx      — booking form + contact info
  Footer.tsx       — dark footer with links and socials
/lib
  brand.ts         — brand colors, pattern component
  data.ts          — all content (replace with real text before launch)
/public
  logo.png         — extracted brand logo with transparent background
  logo-square.png  — square version for favicon
```

## Brand colors
Orange  `#F5A623`   — primary CTA, accents  
Teal    `#2BB5A0`   — secondary accents, links  
Dark    `#1A1A2E`   — footer, headings  
Cream   `#FFF8F0`   — hero background

## Deployment
Auto-deploy via Netlify on push to `main`.

1. Push to GitHub
2. Connect repo on [netlify.com](https://www.netlify.com/)
3. Build command: `npm run build`
4. Publish dir: `.next`
5. Deploy

## Content
All placeholder text lives in `/lib/data.ts`.  
Replace with real content before launch:
- About me text
- Real prices
- Testimonials
- Phone, email, address
- YouTube video ID
- Instagram handle

## Environment variables
No environment variables required for MVP.  
Add `RESEND_API_KEY` later for email notifications (Stage 2).
