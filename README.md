# WanderWise - Interactive Travel Discovery Landing Page

WanderWise is a visually rich landing page that helps users discover offbeat travel destinations using interactive filters, curated experiences, and visual storytelling. Built with Astro, Alpine.js, and Tailwind CSS.

## ✨ Features

- **Hero Section**: Full-screen background video with engaging headline
- **Interactive Destination Finder**: Filter destinations by category using Alpine.js
- **Featured Destinations**: Beautiful cards with hover animations
- **Curated Experiences Timeline**: Vertical scroll section showcasing unique travel itineraries
- **Newsletter Signup**: Simple form integration with Formspree
- **Responsive Design**: Beautiful on all devices

## 🚀 Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Alpine.js](https://alpinejs.dev) - Lightweight JavaScript Framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS Framework
- [Formspree](https://formspree.io) - Form Backend

## 📁 Project Structure

```text
/
├── public/
│   ├── images/
│   │   └── destinations/   # Destination images
│   └── videos/            # Hero background video
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── DestinationFinder.astro
│   │   ├── ExperiencesTimeline.astro
│   │   ├── Newsletter.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
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
   - Update Formspree endpoint in Newsletter.astro

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
- Update Formspree endpoint with your form ID
- Customize colors in `tailwind.config.mjs`
- Add your own destinations and experiences content
