# Next Steps - Portfolio Website Setup

## Immediate Actions

### 1. Start the Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your website

### 2. Replace Placeholder Content

#### Designer Name & Contact Info
- [ ] Update `[Designer Name]` throughout the site
- [ ] Replace email: `hello@example.com` with actual email
- [ ] Replace phone: `+1 (234) 567-890` with actual phone
- [ ] Update location/address information

**Files to update:**
- `components/Header.tsx` - Logo/name
- `components/Footer.tsx` - Contact info
- `app/layout.tsx` - Page title and metadata
- `app/about/page.tsx` - Contact section

#### Images
- [ ] Add professional portrait photo
- [ ] Add hero image for homepage
- [ ] Add project photos (at least 4-6 projects)
- [ ] Each project needs 1 thumbnail + 3-6 detail images

**Image Requirements:**
- Format: JPG or PNG (WebP recommended)
- Max file size: 500KB per image
- Recommended dimensions: 1200-1600px width
- Place all images in `/public/images/`

#### Content Updates

**About Page** (`app/about/page.tsx`):
- [ ] Replace biography text
- [ ] Update design philosophy quotes
- [ ] Customize process steps
- [ ] Add actual studio address

**CV Page** (`app/cv/page.tsx`):
- [ ] Update education history
- [ ] Update professional experience
- [ ] Update awards and recognition
- [ ] Update publications
- [ ] Update professional memberships
- [ ] Create and link PDF version of CV

**Portfolio** (`app/portfolio/page.tsx`):
- [ ] Replace sample projects with real projects
- [ ] Add accurate project details (location, year, type, description)
- [ ] Update project images paths

**Home Page** (`app/page.tsx`):
- [ ] Update tagline
- [ ] Update featured projects (pulls from portfolio data)
- [ ] Update brief introduction text

### 3. Customize Brand Colors (Optional)

Edit `tailwind.config.ts` if you want different colors:

```typescript
colors: {
  primary: '#2C2C2C',    // Change this for main color
  accent: '#B8956A',     // Change this for accent color
  // etc...
}
```

Current palette:
- Primary: Dark charcoal (#2C2C2C)
- Accent: Warm gold (#B8956A)
- Background: Off-white (#FAFAF8)

### 4. SEO Optimization

Update metadata in `app/layout.tsx`:
- [ ] Page title
- [ ] Description
- [ ] Keywords
- [ ] Add favicon to `/public/`

### 5. Social Media Links

Update social links in:
- [ ] `components/Footer.tsx`
- [ ] `app/about/page.tsx`

Add actual LinkedIn and Instagram profile URLs

### 6. Testing Checklist

- [ ] Test all pages load correctly
- [ ] Test navigation menu (desktop & mobile)
- [ ] Test portfolio filter buttons
- [ ] Test project modal (click on projects)
- [ ] Test modal image navigation (prev/next)
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Verify contact email/phone links work

### 7. Performance Optimization

Before deploying:
- [ ] Compress all images (use tools like TinyPNG or Squoosh)
- [ ] Convert images to WebP format if possible
- [ ] Run `npm run build` to check for errors
- [ ] Test website performance with Google PageSpeed Insights

### 8. Deployment

**Option A: Vercel (Recommended)**
1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repository
4. Deploy (automatic)

**Option B: Netlify**
1. Push code to GitHub
2. Go to netlify.com
3. Import repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### 9. Domain Setup (Optional)

If you have a custom domain:
- Configure DNS settings with your deployment platform
- Update in platform settings
- Enable HTTPS (usually automatic)

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check for TypeScript errors
npm run lint
```

## File Structure Quick Reference

```
Key files to customize:
├── app/
│   ├── page.tsx           → Home page content
│   ├── portfolio/page.tsx → Portfolio projects data
│   ├── cv/page.tsx       → CV content
│   └── about/page.tsx    → About page content
├── components/
│   ├── Header.tsx        → Navigation & logo
│   └── Footer.tsx        → Contact info & social
├── public/
│   └── images/          → Add all images here
└── tailwind.config.ts   → Design system colors
```

## Need Help?

- Check README.md for detailed documentation
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

## Estimated Time to Complete

- Content updates: 2-4 hours
- Image collection and optimization: 3-6 hours
- Testing and refinement: 1-2 hours
- Deployment: 30 minutes

**Total: ~1-2 days for full customization**

Good luck with your portfolio website!
