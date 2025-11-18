# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Your Information
Before running the site, update these files:

**`src/data/personal.ts`**
- Replace email, GitHub, and LinkedIn URLs with your actual links
- Customize the about section text if needed

**`public/Harrison_Martin_Resume.pdf`**
- Replace the placeholder PDF with your actual resume

**`app/layout.tsx`** (optional)
- Update metadata (title, description, OpenGraph URL) for SEO

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📝 Adding Projects

Edit `src/data/projects.ts` to add or modify projects. Simply add a new object to the `projects` array:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Short description',
  longDescription: 'Longer description...',
  category: 'ML' | 'Full-Stack' | 'Research' | 'BME',
  technologies: ['Tech1', 'Tech2'],
  highlights: ['Highlight 1', 'Highlight 2'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  featured: true
}
```

## 🎨 Customization Tips

- **Colors**: Edit Tailwind classes in components to change color schemes
- **Fonts**: Change the font in `app/layout.tsx` (currently using Inter)
- **Animations**: Adjust animation delays and durations in component files
- **Layout**: Modify section spacing in `src/components/Section.tsx`

## 🌐 Deploy

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick Deploy to Vercel:**
1. Push to GitHub
2. Import on Vercel
3. Deploy!

## ❓ Common Issues

**Build errors?**
- Run `npm run build` to check for TypeScript errors
- Make sure all imports are correct

**Styles not working?**
- Ensure Tailwind is properly configured
- Check that `postcss.config.js` exists

**Theme toggle not working?**
- Make sure `next-themes` is installed
- Check browser console for errors

## 📚 Next Steps

- Add your actual projects to `src/data/projects.ts`
- Update skills in `src/data/skills.ts`
- Add research experiences in `src/data/research.ts`
- Configure contact form backend (see DEPLOYMENT.md)
- Add custom domain
- Set up analytics

Happy building! 🎉

