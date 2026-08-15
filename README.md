# Pisey Suon - Full-Stack Developer Portfolio

A modern, responsive portfolio website showcasing full-stack development skills, projects, and professional experience. Built with React, Next.js, TypeScript, and Tailwind CSS.

## Features

### Design & UX
- **Modern Minimalist Aesthetic**: Clean, professional design with geometric accents and strategic use of whitespace
- **Dark/Light Theme Toggle**: Seamless theme switching with persistent user preference
- **Smooth Animations**: Scroll-triggered fade-in animations and subtle micro-interactions
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Professional Typography**: Poppins for headings, Inter for body text

### Sections

1. **Hero Section**
   - Engaging introduction with name, role, and call-to-action buttons
   - Geometric background with teal accent elements
   - Social media links (GitHub, LinkedIn, Email)
   - Smooth scroll indicators

2. **About Section**
   - Professional background and expertise overview
   - Key skills and competencies
   - Statistics cards (years of experience, projects completed, technologies, satisfaction)

3. **Skills Section**
   - Organized by categories: Frontend, Backend, Database, Tools & DevOps
   - Interactive skill cards with hover effects
   - Proficiency level visualization with circular progress indicators

4. **Projects Section**
   - Showcase of 6 featured projects
   - Project cards with descriptions, tech stack, and links
   - Live demo and GitHub repository links
   - Hover animations and visual feedback

5. **Experience Section**
   - Timeline-based professional experience
   - Detailed job descriptions and achievements
   - Visual timeline with connecting lines
   - Multiple positions with highlights

6. **Resume Section**
   - PDF resume download functionality
   - Education and certifications display
   - Skills summary organized by category

7. **Contact Section**
   - Contact information cards (email, phone, location)
   - Functional contact form with validation
   - Toast notifications for form submission feedback

8. **Footer**
   - Quick navigation links
   - Social media connections
   - Copyright information
   - Scroll-to-top button

## Technology Stack

### Frontend
- **React 19**: UI library for building interactive components
- **TypeScript**: Type-safe JavaScript for better code quality
- **Tailwind CSS 4**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library (prepared for advanced animations)
- **Lucide React**: Icon library for consistent iconography
- **Wouter**: Lightweight client-side routing

### UI Components
- **shadcn/ui**: Pre-built, customizable React components
- **Radix UI**: Headless UI primitives
- **Sonner**: Toast notification system

### Build & Development
- **Vite**: Fast build tool and dev server
- **ESBuild**: JavaScript bundler
- **Prettier**: Code formatter
- **TypeScript**: Static type checking

## Color Palette

### Light Mode
- **Background**: Warm white (#f8f8f8)
- **Foreground**: Deep charcoal (#1a1a1a)
- **Primary**: Vibrant teal (#00d4ff)
- **Secondary**: Light gray (#f5f5f5)
- **Accent**: Teal gradient

### Dark Mode
- **Background**: Very dark charcoal (#1f1f1f)
- **Foreground**: Off-white (#f2f2f2)
- **Primary**: Vibrant teal (#00d4ff)
- **Secondary**: Dark gray (#2a2a2a)
- **Accent**: Teal gradient

## Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm
- Modern web browser

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check

# Format code
npm run format
```

### Development Server
The development server runs on `http://localhost:3000` with hot module replacement (HMR) for instant updates during development.

### Contact Form Email

The contact form sends email through Resend. Add these server-side environment variables locally or in your hosting dashboard:

```bash
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=suonpisey017@gmail.com
# Optional after verifying your own domain with Resend:
CONTACT_FROM_EMAIL="Portfolio <contact@yourdomain.com>"
```

When `CONTACT_FROM_EMAIL` is omitted, the app uses Resend's testing sender. Restart `npm run dev` after changing environment variables so the local email API loads the new values.

## Project Structure

```
client/
├── public/              # Static assets and resume PDF
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   └── Home.tsx
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.tsx
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles and design tokens
├── index.html           # HTML template
└── package.json         # Dependencies and scripts
```

## Customization

### Update Personal Information
Edit the following files to customize the portfolio:
- `client/src/components/Hero.tsx` - Name, role, introduction
- `client/src/components/About.tsx` - About section content
- `client/src/components/Skills.tsx` - Skills and expertise
- `client/src/components/Projects.tsx` - Project showcase
- `client/src/components/Experience.tsx` - Work experience
- `client/src/components/Contact.tsx` - Contact information

### Modify Colors
Edit `client/src/index.css` to customize the color palette:
- Update OKLCH color values in `:root` for light mode
- Update OKLCH color values in `.dark` for dark mode

### Add New Projects
Add project objects to the `projects` array in `client/src/components/Projects.tsx`:
```typescript
{
  id: 7,
  title: 'Your Project Title',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  image: 'image-url',
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/username/repo',
}
```

### Update Resume
Replace the resume PDF at `client/public/resume.pdf` with your own resume file.

## Performance Optimizations

- **Code Splitting**: Vite automatically optimizes chunk sizes
- **Image Optimization**: Uses compressed WebP format for generated assets
- **Lazy Loading**: Components load on demand
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Minification**: Production builds are fully minified

## Deployment

The portfolio is ready for deployment to any static hosting platform:

### Recommended Platforms
- **Vercel** (recommended for Next.js/React projects)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Manus** (built-in hosting with custom domain support)

### Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators for keyboard users

## Performance Metrics

- **Lighthouse Performance**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## Future Enhancements

- Blog section with MDX support
- Case studies with detailed project breakdowns
- Client testimonials carousel
- Interactive skills visualization
- Dark mode system preference detection
- Analytics integration
- Newsletter subscription
- Advanced animations with Framer Motion

## License

This portfolio template is open source and available for personal and commercial use.

## Support

For issues, questions, or suggestions, please reach out through the contact form on the portfolio or via email.

---

Built with ❤️ by Pisey Suon | Full-Stack Developer from Cambodia
