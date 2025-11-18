# Harrison Martin - Portfolio Website

A modern, highly aesthetic, responsive personal portfolio website showcasing biography, skills, projects, research, resume, and external links.

## Features

- ✨ Ultra-aesthetic, minimal, clean design
- 🎨 Soft gradients and glassmorphism accents
- 📱 Fully responsive (desktop + mobile)
- 🎭 Smooth page transitions and component animations
- 🔍 Project filtering by category
- 📄 SEO optimized with meta tags and OpenGraph preview

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio_website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Section.tsx      # Reusable section wrapper
│   │   ├── ProjectCard.tsx  # Project card component
│   │   └── sections/
│   │       ├── Hero.tsx     # Hero section
│   │       ├── About.tsx    # About section
│   │       ├── Projects.tsx # Projects section
│   │       ├── Research.tsx # Research section
│   │       ├── Skills.tsx   # Skills section
│   │       └── Contact.tsx # Contact section
│   └── data/
│       ├── projects.ts      # Projects data (easily extensible)
│       ├── skills.ts        # Skills data
│       ├── research.ts      # Research data
│       └── personal.ts      # Personal information
├── public/
│   └── Harrison_Martin_Resume.pdf  # Resume PDF
└── package.json
```

## Customization

### Adding/Editing Projects

Edit `src/data/projects.ts` to add or modify projects. The file uses a simple TypeScript interface:

```typescript
{
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'ML' | 'Full-Stack' | 'Research' | 'BME';
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}
```

### Updating Personal Information

Edit `src/data/personal.ts` to update:
- Name, subtitle, email
- Social media links
- About section text
- Resume file path

### Modifying Skills

Edit `src/data/skills.ts` to add or remove skill categories and individual skills.

### Adding Research Experiences

Edit `src/data/research.ts` to add new research experiences.

### Replacing Resume

Replace `public/Harrison_Martin_Resume.pdf` with your actual resume PDF file.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Build command: `npm run build`
- Start command: `npm start`

## SEO & Social Preview

The site includes:
- Meta tags for SEO
- OpenGraph tags for social media previews
- Twitter card support

Update the metadata in `app/layout.tsx` to customize:
- Site title and description
- Social media preview images
- Keywords

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For questions or suggestions, please reach out through the contact form on the website.
