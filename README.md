# Interior Design Portfolio Website

A sophisticated, modern portfolio website for an interior designer, built with Next.js and Tailwind CSS, inspired by Adobe Spectrum design principles.

## Features

- **Clean, Elegant Design**: Spectrum-inspired aesthetic with focus on typography and white space
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Four Main Pages**:
  - **Home**: Hero section with featured projects and introduction
  - **Portfolio**: Filterable project gallery with modal view
  - **CV**: Comprehensive curriculum vitae with downloadable option
  - **About**: Personal story, design philosophy, and process
- **Interactive Gallery**: Click to view full project details with image navigation
- **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Update Designer Information

Replace placeholder text throughout the site:
- `[Designer Name]` - Designer's actual name
- Contact information in `components/Footer.tsx` and `app/about/page.tsx`
- Biography and content in `app/about/page.tsx`

### 2. Add Real Images

Replace placeholder images with actual project photos:
- Add images to `/public/images/` directory
- Update image paths in:
  - `app/page.tsx` (featured projects)
  - `app/portfolio/page.tsx` (all projects)
  - `app/about/page.tsx` (portrait)

### 3. Update Projects Data

Edit the projects array in `app/portfolio/page.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: "Project Title",
    location: "City, State",
    year: "2024",
    type: "Residential", // or "Commercial", "Hospitality"
    description: "Project description...",
    thumbnail: "/images/project-1.jpg",
    images: [
      "/images/project-1-1.jpg",
      "/images/project-1-2.jpg",
    ],
  },
  // Add more projects...
];
```

### 4. Customize Colors

Edit `tailwind.config.ts` to adjust the color scheme:
```typescript
colors: {
  primary: '#2C2C2C',    // Main dark color
  accent: '#B8956A',     // Accent gold color
  background: '#FAFAF8', // Page background
  // etc...
}
```

### 5. Update Metadata

Edit SEO information in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
};
```

### 6. Add CV PDF Download

1. Add PDF file to `/public/` directory
2. Update the download button in `app/cv/page.tsx`:
```typescript
<a href="/cv.pdf" download className="btn-primary">
  Download PDF
</a>
```

## Design System

The website uses a Spectrum-inspired design system:

- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Color Palette**: Sophisticated neutrals with warm accent tones
- **Spacing**: Generous white space with 8px increment system
- **Components**: Reusable button styles, cards, and layouts

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio page
│   ├── cv/
│   │   └── page.tsx        # CV page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── ProjectCard.tsx     # Portfolio project card
│   └── ProjectModal.tsx    # Project detail modal
├── public/
│   └── images/             # Image assets
└── tailwind.config.ts      # Tailwind configuration
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Self-hosted with Node.js

## Performance Tips

1. **Optimize Images**: Convert images to WebP format and compress them
2. **Image Dimensions**: Use consistent aspect ratios (4:3 or 16:9)
3. **Lazy Loading**: Already implemented via Next.js Image component
4. **File Size**: Keep images under 500KB each for fast loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for personal portfolio use.

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
