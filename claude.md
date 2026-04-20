# Claude Context - Interior Design Portfolio Website

## Project Overview

**Project Type:** Portfolio website for Antoine Stephan — senior interior designer (70 years old, freelancer, based in Amman, Jordan)
**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS
**Design System:** Adobe Spectrum-inspired (clean, sophisticated, gallery-like)
**Status:** Content partially customized — images and portfolio data still needed (April 2026)

## Designer Contact Info (in code)
- **Name:** Antoine Stephan
- **Email:** stephan.dec@hotmail.com
- **Phone:** +962795535893
- **Location:** Amman, Jordan

## Design Philosophy

- **Target Audience:** High-end clients seeking experienced interior designer
- **Visual Style:** Timeless, elegant, sophisticated
- **Key Principles:**
  - Large, bold imagery to showcase projects
  - Generous white space (gallery-like aesthetic)
  - Classic, readable typography
  - Minimal interface elements (focus on the work)
  - Simple navigation for all age groups

## Design System Specifications

### Color Palette
```
Primary: #2C2C2C (dark charcoal)
Primary Light: #444444
Accent: #B8956A (warm gold)
Accent Dark: #8B7355
Background: #FAFAF8 (off-white)
Background White: #FFFFFF
Text: #333333
Text Light: #666666
```

### Typography
- **Headings:** Playfair Display (serif) - elegant, classical
- **Body:** Inter (sans-serif) - clean, readable
- **Font Sizes:**
  - Display: 56px
  - H1: 48px
  - H2: 36px
  - H3: 24px
  - Body: 18px
  - Body Small: 16px

### Spacing System
- Based on 8px increments
- Section padding: 120px (desktop), 80px (mobile)
- Max content width: 1400px

## Site Structure

```
/                   → Home page
/portfolio          → Portfolio with filterable gallery
/cv                 → Curriculum Vitae
/about              → About page with biography
```

## Current File Structure

```
as-website/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles, Tailwind setup
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio page with project data
│   ├── cv/
│   │   └── page.tsx        # CV page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Header.tsx          # Navigation (mobile & desktop)
│   ├── Footer.tsx          # Footer with contact info
│   ├── ProjectCard.tsx     # Portfolio project card
│   └── ProjectModal.tsx    # Project detail modal with gallery
├── public/
│   └── images/
│       └── .gitkeep        # Placeholder for images
├── package.json
├── tsconfig.json
├── tailwind.config.ts      # Design system configuration
├── next.config.ts
├── README.md               # Full documentation
├── NEXT-STEPS.md           # Customization checklist
└── progress.txt            # Project progress log
```

## Key Components

### Header (`components/Header.tsx`)
- Fixed sticky navigation
- Mobile hamburger menu
- Active page highlighting
- Logo/designer name on left, nav on right

### Footer (`components/Footer.tsx`)
- Three-column layout (Brand, Contact, Social)
- Contact information
- Copyright notice

### ProjectCard (`components/ProjectCard.tsx`)
- Displays project thumbnail
- Shows title, location, year, type
- Hover effect with "View Project" overlay
- Clickable to open modal

### ProjectModal (`components/ProjectModal.tsx`)
- Full-screen modal overlay
- Image gallery with prev/next navigation
- Thumbnail navigation strip
- Project details (title, location, year, description)
- ESC key to close
- Click outside to close

## Page Details

### Home Page (`app/page.tsx`)
**Sections:**
1. Hero - Full-screen with designer name and tagline
2. Featured Projects - 4 project cards in grid
3. Brief Introduction - Two-column (portrait + bio)
4. Contact CTA - Call-to-action with email/phone

**Featured Projects Data (real — already updated):**
1. Mashini Studio (Abdoun Tower, Amman, 2024)
2. Villa Ramzi Louza (Abdoun, Amman, 2023)
3. Villa Wadie Qousous (Rainbow Street, Amman, 2019)
4. Rotana Tower Hotel (Abdali, Amman, 2016)

### Portfolio Page (`app/portfolio/page.tsx`)
**Features:**
- Filter tabs: All, Residential, Commercial, Hospitality
- Project grid (2-3 columns responsive)
- Click to open modal with full gallery
- Still has 6 generic placeholder projects (Beverly Hills, Manhattan, etc.) — needs replacing with Antoine's real projects

**Project Data Structure:**
```typescript
{
  id: number;
  title: string;
  location: string;
  year: string;
  type: "Residential" | "Commercial" | "Hospitality";
  description: string;
  thumbnail: string;
  images: string[];
}
```

### CV Page (`app/cv/page.tsx`)
**Sections:**
- Education
- Professional Experience
- Notable Projects
- Awards & Recognition
- Publications & Press
- Professional Memberships
- Certifications

**Format:** Timeline-style with year on left, details on right

### About Page (`app/about/page.tsx`)
**Sections:**
1. Hero with portrait
2. Biography (5 paragraphs)
3. Design Philosophy (3 principles)
4. How I Work (5-step process)
5. Contact section with CTA

## What Remains to Customize

### Content Still Needed
- Portfolio page: replace 6 generic placeholder projects with Antoine's real projects
- About page biography: update with Antoine's real story
- CV page: update from `source-material/cv/Antoine Stephan_CV 2025.pdf`

### Images (source material available but not yet integrated)
- 22 photos available in `/source-photos/` — need to be categorized, renamed, and copied to `/public/images/`
- Once in `/public/images/`, update image paths in portfolio/page.tsx and page.tsx
- CV PDF available at `source-material/cv/Antoine Stephan_CV 2025.pdf` (copy to /public/ for download link)

**Image target location:** `/public/images/`

## Tailwind Custom Classes

### Utility Classes (in `globals.css`)
- `.container-custom` - Max-width container with padding
- `.section-padding` - Responsive vertical padding
- `.btn-primary` - Primary button style
- `.btn-accent` - Accent button style
- `.card` - Card component with hover effect
- `.link-underline` - Link with animated underline

## Important Configuration Details

### Next.js Configuration (`next.config.ts`)
- Image optimization enabled (AVIF, WebP)
- Static rendering for all pages

### TypeScript Configuration (`tsconfig.json`)
- Strict mode enabled
- Path alias: `@/*` maps to root directory

### Tailwind Configuration (`tailwind.config.ts`)
- Custom color palette
- Font family variables
- Custom spacing (section, section-sm)
- Custom max-width (content: 1400px)

### Playwright Configuration (`playwright.config.ts`)
- Test directory: `./tests`
- Runs tests in parallel
- Configured for multiple browsers: Chromium, Firefox, WebKit
- Mobile testing: Pixel 5, iPhone 12
- Auto-starts dev server before testing
- Screenshots on failure
- HTML reporter for test results

## Testing with Playwright

### Test Structure
```
tests/
├── home.spec.ts        # Home page tests
├── portfolio.spec.ts   # Portfolio page and modal tests
├── cv.spec.ts         # CV page tests
├── about.spec.ts      # About page tests
└── navigation.spec.ts # Navigation and footer tests
```

### Test Coverage
- **Home Page**: Hero, featured projects, CTAs, links
- **Portfolio Page**: Filters, project cards, modal functionality, image navigation
- **CV Page**: All sections, timeline layout, responsiveness
- **About Page**: Biography, philosophy, process steps, contact
- **Navigation**: Header, footer, mobile menu, active states, sticky behavior

### Test Commands

```bash
# Run all tests (headless)
npm test

# Run tests with UI mode (interactive)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests only in Chromium
npm run test:chromium

# Show test report (after running tests)
npm run test:report
```

### Writing New Tests
Example test structure:
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should do something', async ({ page }) => {
    await expect(page.locator('selector')).toBeVisible();
  });
});
```

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check TypeScript/linting
npm test             # Run Playwright tests
npm run test:ui      # Run tests in UI mode
npm run test:report  # Show test report
```

## Development Server

- **Local:** http://localhost:3000
- To start: `npm run dev`

## Known Issues / Warnings

1. Next.js workspace root warning — multiple lockfiles detected (safe to ignore)
2. `public/images/` is empty — all image src attributes return 404 until photos are added from `/source-photos/`
3. Portfolio page still uses generic placeholder project data

## Customization Status (April 2026)

### Done ✓
- Designer name, email, phone, location
- Page metadata/SEO in app/layout.tsx
- Home page featured projects (real titles/locations)

### Remaining
- **Phase 2:** Copy and rename source photos to `/public/images/`
- **Phase 3:** Update portfolio page with real projects; update About bio; update CV page from PDF
- **Phase 4:** CV PDF download link; favicon; LinkedIn/Instagram URLs

## Design Decisions Made

1. **Spectrum-inspired over Material/Carbon** - Better for creative portfolio
2. **Static generation** - All pages pre-rendered for performance
3. **Client-side filtering** - Portfolio filters without page reload
4. **Modal for project details** - Better UX than separate pages
5. **Placeholder images with text** - Easy to identify what needs replacing
6. **Generous white space** - Sophisticated, gallery-like feel
7. **Mobile-first responsive** - Works well on all devices
8. **Accessible navigation** - Simple, clear for all age groups

## Next Steps Guidance

When resuming work:
1. Read `progress.txt` to see what's been done
2. Check which phase of customization you're in
3. Test the site is running: visit http://localhost:3000
4. If server not running: `npm run dev`

## File Conventions

- Use TypeScript for all components
- Client components need `"use client"` directive
- Images go in `/public/images/` directory
- Color changes in `tailwind.config.ts`
- Content changes in respective page files

## Testing Checklist

Before considering complete:
- [ ] All pages load without errors
- [ ] Navigation works (desktop and mobile)
- [ ] Portfolio filters work correctly
- [ ] Project modals open and close
- [ ] Image gallery navigation works
- [ ] All links are functional
- [ ] Responsive on mobile/tablet/desktop
- [ ] Contact links work (email, phone)
- [ ] No placeholder content remains
- [ ] All images replaced
- [ ] SEO metadata updated

## Resources

- **README.md** - Detailed documentation and setup
- **NEXT-STEPS.md** - Step-by-step customization checklist
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Component Gallery:** https://component.gallery/design-systems/

## Important Notes

- This is for a 70-year-old freelance interior designer
- Design should feel timeless, not trendy
- Focus on showcasing work over flashy features
- Keep navigation simple and intuitive
- Large text for readability
- Professional, sophisticated aesthetic
