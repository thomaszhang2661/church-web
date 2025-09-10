# Harbor Lutheran Church Website

A lightweight church website built with React and Vite. It focuses on clear communication, fast loading, and simple interactions (smooth in‑page navigation and a contact form).

## Overview

- Single‑page layout with anchor navigation (Home / About / Contact)
- Responsive design across mobile, tablet, and desktop
- Info Bar for core facts (Location / Worship time / Pastor / Contact)
- Contact form powered by EmailJS with inline success/error feedback
- Minimal dependencies, easy to deploy on Vercel

## Demo

Production (example): https://your-vercel-domain.vercel.app

Replace the link above with your actual Vercel deployment.

## Features

- Smooth scroll to sections via buttons and anchor links
- Inline form status (idle / sending / success / error)
- Consistent visual system and accessible focus states
- Optimized hero background and image layering

## Tech Stack

- React 19 + TypeScript + Vite
- CSS (responsive layout, transitions)
- Lucide React (icons)
- EmailJS (contact form)

## Getting Started

```bash
# 1) Install dependencies
npm install

# 2) Start development server (http://localhost:5173)
npm run dev

# 3) Build for production
npm run build

# 4) Preview the production build
npm run preview
```

## Environment Variables (optional)

If you want the contact form to send emails, create `.env.local` in the project root and add:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these, the UI renders normally but won’t send emails.

## Scripts

- `npm run dev` – Start the dev server
- `npm run build` – Build production assets
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint

## Project Structure

```
src/
├─ pages/
│  ├─ HomePage.tsx       # Main page component
│  └─ HomePage.css       # Styles for the main page
├─ App.tsx               # Routes (home only)
├─ main.tsx              # React entry
├─ index.css             # Global styles
└─ assets/               # Static assets (images, etc.)
```

## Accessibility

- High contrast and readable input text
- Visible focus states and hover feedback
- Larger tap targets on mobile
- Smooth scrolling with reduced layout shift

## Deployment (Vercel)

1. Push the repository to GitHub/GitLab/Bitbucket
2. Create a new project on https://vercel.com and import the repo
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. If using EmailJS, add the `VITE_...` variables under Project → Settings → Environment Variables

## Roadmap

- [ ] Optional sermons/resources pages powered by an external CMS (kept as a separate backend service)
- [ ] Dark mode
- [ ] i18n (English/Chinese)
- [ ] Lighthouse improvements (performance / a11y)

## Contributing

Issues and pull requests are welcome. Please open an issue first to discuss major changes.

## License

MIT

## Contact

- Maintainer: Your Name
- Email: your-email@example.com
- Project: Harbor Lutheran Church Website
