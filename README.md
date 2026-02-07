# vitorpinho - Personal Website & Blog

A modern, animated personal website and blog for a cybersecurity professional and bug bounty hunter. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Preview](./public/og-image.png)

## ✨ Features

- **Beautiful Dark Theme** - Cyber-inspired design with cyan accents
- **Smooth Animations** - Page transitions, scroll reveals, and micro-interactions
- **MDX Blog** - Write blog posts in MDX with syntax highlighting
- **Progress Dashboard** - Track learning progress and achievements
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, Open Graph, sitemap, and robots.txt
- **Custom Cursor** - Unique cursor effect on desktop

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX with gray-matter
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and post pages
│   ├── about/             # About page
│   ├── progress/          # Progress dashboard
│   ├── projects/          # Projects showcase
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── animations/        # Animation components
│   ├── blog/             # Blog-specific components
│   ├── home/             # Homepage sections
│   ├── layout/           # Navbar, Footer
│   ├── providers/        # Theme provider
│   └── ui/               # UI components (Button, Card, etc.)
├── content/              # MDX blog posts
│   └── posts/
├── lib/                  # Utility functions and data
│   ├── posts.ts          # Blog post utilities
│   ├── projects.ts       # Projects data
│   ├── stats.ts          # Progress stats
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── styles/               # Global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vitorpinho/personalblog.git
cd personalblog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Writing Blog Posts

Create a new MDX file in `content/posts/`:

```mdx
---
title: "Your Post Title"
date: "2026-01-15"
excerpt: "Brief description of your post"
tags: ["Web Security", "Tutorial"]
author: "vitorpinho"
featured: false
---

Your content here...
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```ts
colors: {
  cyber: {
    500: '#00FFE0', // Main accent color
    // ...
  }
}
```

### Content

- **Projects**: Edit `lib/projects.ts`
- **Progress Stats**: Edit `lib/stats.ts`
- **Social Links**: Edit `components/layout/Footer.tsx`

## 📦 Build

```bash
npm run build
npm start
```

## 🚢 Deployment

The site is optimized for deployment on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Deploy

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

- Design inspired by Apple product pages and Lando Norris website
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Built with 💚 by vitorpinho

