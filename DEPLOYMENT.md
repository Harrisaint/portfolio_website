# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Update Environment Variables** (if needed)
   - Add any API keys or environment variables in Vercel dashboard
   - Redeploy after adding variables

## Pre-Deployment Checklist

- [ ] Replace placeholder email in `src/data/personal.ts`
- [ ] Update GitHub and LinkedIn URLs in `src/data/personal.ts`
- [ ] Replace placeholder resume PDF in `public/Harrison_Martin_Resume.pdf`
- [ ] Update metadata in `app/layout.tsx` (title, description, OpenGraph URL)
- [ ] Test dark/light mode toggle
- [ ] Test all navigation links
- [ ] Verify all external links work
- [ ] Test contact form (configure backend if needed)
- [ ] Test on mobile devices
- [ ] Run `npm run build` locally to check for build errors

## Custom Domain Setup (Vercel)

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 24 hours)

## Contact Form Backend

The contact form currently uses a placeholder submission. To make it functional:

1. **Option 1: Use a service like Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Get your form endpoint
   - Update the form submission in `src/components/sections/Contact.tsx`

2. **Option 2: Use Vercel Serverless Functions**
   - Create `app/api/contact/route.ts`
   - Implement email sending (using SendGrid, Resend, etc.)
   - Update form submission handler

3. **Option 3: Use EmailJS**
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Configure email service
   - Add EmailJS SDK and update form handler

## Performance Optimization

- Images: Use Next.js Image component for any images you add
- Fonts: Already optimized with Next.js font optimization
- Code splitting: Automatic with Next.js
- Consider adding analytics (Google Analytics, Vercel Analytics)

## SEO Checklist

- [ ] Update `app/layout.tsx` metadata
- [ ] Add OpenGraph image (`public/og-image.png`)
- [ ] Submit sitemap to Google Search Console
- [ ] Add structured data (JSON-LD) if needed
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

