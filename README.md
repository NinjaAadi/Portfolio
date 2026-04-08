# Aaditya Pal — Portfolio

A premium, production-ready personal portfolio built with Next.js 14, React Three Fiber, Framer Motion, and TypeScript.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **React Three Fiber** + **@react-three/drei** (3D scene)
- **Framer Motion** (animations)
- **ShadCN-compatible** Radix UI primitives

---

## Getting Started (Local Dev)

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### 1. Install dependencies

```bash
cd portfolio
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customizing Your Content

All portfolio content lives in `/data` — **no UI changes needed**.

| File | What to edit |
|------|-------------|
| `data/profile.ts` | Name, tagline, about, stats, highlights |
| `data/skills.ts` | Skill categories, individual skills + levels |
| `data/experience.ts` | Jobs, roles, impact points, tech stack |
| `data/projects.ts` | Projects, descriptions, links, metrics |
| `data/socials.ts` | GitHub, LinkedIn, Twitter, Email links |

---

## Deploying to GitHub Pages

### Step 1 — Push code to GitHub

```bash
# Inside the portfolio folder
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2 — Add GitHub Pages config to next.config.js

Open `next.config.js` and add these lines for static export:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // ← add this
  trailingSlash: true,       // ← add this
  images: { unoptimized: true }, // ← change this
};
module.exports = nextConfig;
```

### Step 3 — Build static output

```bash
npm run build
```

This generates an `out/` folder with the static site.

### Step 4 — Deploy via GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Step 5 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — it will auto-deploy on every commit

Your site will be live at:  
`https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## Better Alternative: Deploy on Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done!

Vercel natively supports Next.js with zero config. Your live URL will be:  
`https://your-project.vercel.app`

You can add a custom domain from Vercel's dashboard.

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata + fonts
│   ├── page.tsx            # Main page (assembles sections)
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Floating nav with active section tracking
│   │   ├── CustomCursor.tsx
│   │   └── ScrollProgress.tsx
│   ├── three/
│   │   └── HeroScene.tsx   # React Three Fiber 3D scene
│   └── shared/
│       ├── SectionWrapper.tsx  # Scroll-triggered fade-in wrapper
│       └── AnimatedCounter.tsx # Count-up animation
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SystemDesignSection.tsx # Interactive SVG architecture diagrams
│   └── ContactSection.tsx
├── data/                   # ← Edit these to update your portfolio
│   ├── profile.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── socials.ts
├── hooks/
│   ├── useMousePosition.ts
│   └── useScrollProgress.ts
└── lib/
    └── utils.ts
```

---

## Features

- ✅ **3D animated hero** — particle field, floating geometry, mouse parallax
- ✅ **Data-driven** — change your content without touching UI
- ✅ **Scroll animations** — Framer Motion section reveals
- ✅ **Custom cursor** — magnetic ring with hover states
- ✅ **Scroll progress bar** — spring-animated at the top
- ✅ **Project modal** — click any project card for full details
- ✅ **Interactive system design diagrams** — SVG-based architecture views
- ✅ **Fully responsive** — 3D scene lazy-loaded, reduced on mobile
- ✅ **SEO optimized** — metadata, OpenGraph, Twitter cards
- ✅ **Dark theme** — neon accents, glassmorphism, grid overlays
