# WanderWise - Interactive Travel Discovery Landing Page

WanderWise is a visually rich landing page that helps users discover offbeat travel destinations using interactive filters, curated experiences, and visual storytelling. Built with Astro, Alpine.js, and Tailwind CSS.

## ✨ Features

- **Hero Section**: Full-screen background video with engaging headline
- **Interactive Destination Finder**: Filter destinations by category using Alpine.js
- **Featured Destinations**: Beautiful cards with hover animations
- **Curated Experiences Timeline**: Vertical scroll section showcasing unique travel itineraries
- **Responsive Design**: Beautiful on all devices

## 🚀 Tech Stack

- [Astro](https://astro.build) - Static Site Generator

## 📁 Project Structure

```text
/
├── public/
│   ├── images/
│   │   └── destinations/   # Destination images
│   └── videos/            # Hero background video
├── src/
│   ├── components/
│   │   ├── AnimatedHero.tsx
│   │   ├── Hero.astro
│   │   ├── DestinationsSection.tsx
│   │   ├── DestinationFinder.astro
│   │   ├── ExperiencesTimelineSection.tsx
│   │   ├── ExperiencesTimeline.astro
│   │   ├── NewsLetterSection.tsx
│   │   ├── Newsletter.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│       └── 404.astro
└── package.json
```

## 🛠️ Setup & Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Required Assets**
   - Add destination images to `/public/images/destinations/`
   - Add hero video to `/public/videos/`

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321`

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Notes

- Replace placeholder images and video with properly licensed media
- Customize colors in `tailwind.config.mjs`
- Add your own destinations and experiences content
