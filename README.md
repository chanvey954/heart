# You & Me ❤️ — Love Landing Page

A romantic, single-page love story website. Pure HTML + CSS + Vanilla JavaScript — no frameworks, no backend.

## ✨ Features

- Full-screen hero with gradient glow, floating hearts and sparkles
- Circular couple photo with glowing, floating border + hover effect
- "Our Story" section with a typing animation
- "Our Journey" timeline (May → August) with alternating cards, glowing hearts and an animated center line
- Responsive photo gallery (4 images) with hover zoom + scroll reveal
- Fullscreen lightbox (click a photo, close via ✕ / backdrop / Escape)
- Live "Since [date]" counter (days / hours / minutes / seconds)
- Glassmorphism sticky navigation with mobile hamburger menu
- Active-section highlighting, smooth scrolling
- `prefers-reduced-motion` support
- Fully responsive: 320px → 1440px+

## 📁 Project structure

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── image1.png      ← hero couple photo
│       ├── image2.png      ← journey · May
│       ├── image3.png      ← journey · June
│       ├── image5.png      ← journey · July
│       ├── image6.png      ← journey · August
│       ├── image7.png      ← gallery photo 1
│       ├── image8.png      ← gallery photo 2
│       ├── image9.png      ← gallery photo 3
│       ├── couple.jpg      ← unused placeholders (safe to delete)
│       ├── photo1-4.jpg
│       ├── may.jpg
│       ├── june.jpg
│       ├── july.jpg
│       └── august.jpg
└── README.md
```

> Note: `image4.png` is missing from the set, so the journey skips it. If you add `image4.png`,
> or want a different photo as the couple picture, change the paths in `loveConfig` in `js/script.js`.

## 🎨 How to customize

Everything lives in one place — the `loveConfig` object at the top of `js/script.js`:

```js
const loveConfig = {
    yourName: 'Your Name',
    partnerName: 'Her Name',
    startDate: '2025-02-07',              // change the date here (YYYY-MM-DD)
    heroMessage: 'Every moment with you is a beautiful memory.',
    heroSubtitle: 'A little world of us — written in moments, kept forever in my heart.',
    storyMessage: 'Some people come into our lives and quietly become our favorite part of every day.',
    memories: [
        { image: 'assets/images/image1.png', date: '2025 · First Date', caption: 'First Memory ❤️', note: 'One of my favorite moments.' },
        // ... add or remove memories freely — the gallery adapts automatically
    ],
    journey: {
        heading: 'Our Journey Together ❤️',
        subtitle: 'ពីខែ ៥ ដល់ខែ ៨ — រាល់ខែមានអនុស្សាវរីយ៍ពិសេសរបស់យើង',
        items: [
            { month: 'ខែ ៥ — May', emoji: '❤️', image: 'assets/images/may.jpg', description: 'ចាប់ផ្តើមស្គាល់ និងទាក់ទងគ្នា ❤️' },
            // ... add or remove months — the timeline adapts automatically
        ]
    }
};
```

No need to search through the project — edit this object and you're done.

> The timeline images (`may.jpg`, `june.jpg`, `july.jpg`, `august.jpg`) are also generated
> placeholders — replace them with your own photos.

## 🎨 Design system

Colors, fonts and spacing are CSS variables in `css/style.css` → `:root`:

| Variable       | Value      | Usage            |
| -------------- | ---------- | ---------------- |
| `--primary`    | `#ff4d6d`  | CTA, hearts      |
| `--secondary`  | `#c77dff`  | Purple accents   |
| `--text`       | `#fdf3f5`  | Body text        |
| `--bg-deep`    | `#180a1f`  | Dark background  |

Typography: **Poppins** (body) + **Great Vibes** (script headings). Font stacks include
Khmer-safe fallbacks (`Noto Sans Khmer`, `Khmer OS`, `Siemreap`), so Khmer text renders
correctly if added.

## ▶️ Run

Just open `index.html` in any modern browser — no build step required.

Optionally serve it locally:

```bash
npx serve .
```
