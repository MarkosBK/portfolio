# Markos Basilio Portfolio

Modern web developer portfolio built with Next.js 15, React 19, TypeScript and Tailwind CSS.

## 🚀 Technologies

- **Next.js 15** (App Router, React Server Components)
- **React 19**
- **TypeScript 5.6+**
- **Tailwind CSS 4** (@tailwindcss/oxide)
- **HeroUI** - component library
- **Framer Motion 12** - animations
- **next-intl 3.x** - internationalization (en, de, es)
- **next-themes** - theme switching

## 📸 Adding Photo

To add Markos Basilio photo:

1. **Replace file** `public/images/main-photo.webp` with real photo
2. **Recommended parameters**:
   - Format: WebP
   - Dimensions: 800x1000px or similar aspect ratio
   - File size: up to 500KB for web optimization
   - Style: professional head and shoulders photo

3. **Photo is used in**:
   - Hero section (main page)
   - About section ("About Me" section)

## 🎨 Design Features

- **Responsive design** - mobile-first approach
- **Dark/light theme** - automatic switching
- **Smooth animations** - Framer Motion
- **Optimized images** - Next.js Image
- **SEO optimization** - metadata and structured data

## 🌍 Supported Languages

- 🇺🇸 English (en)
- 🇩🇪 German (de)
- 🇪🇸 Spanish (es)

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run production version
npm start
```

## 📁 Project Structure

```
├── app/                   # Next.js App Router
│   ├── [locale]/          # Localized pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # UI components
│   └── providers/        # Providers (themes, animations)
├── lib/                  # Utilities and configurations
│   ├── constants/        # Constants and utilities
│   ├── data/            # JSON data (projects)
│   └── utils/           # Helper functions
├── messages/             # Translations
├── public/              # Static files
└── i18n/               # Internationalization configuration
```

## 🎯 Main Sections

1. **Hero** - Main section with photo and call to action
2. **About** - Developer information
3. **Work Process** - Work process
4. **Skills** - Technical skills
5. **Projects** - Project portfolio
6. **Contact** - Contact information

## 🔧 Configuration

### Editing Projects

All project data is stored in `lib/data/projects.json`. To add/edit a project:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "category": "current|previous|personal|first",
  "tech": ["React", "TypeScript", "Next.js"],
  "confidential": false,
  "description": "Project description",
  "role": "Frontend Developer",
  "highlights": ["Feature 1", "Feature 2"],
  "duration": "6 months",
  "note": "Additional information"
}
```

**Project categories:**

- `current` - Current projects
- `previous` - Previous projects
- `personal` - Personal projects
- `first` - First projects

### Changing Color Scheme

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: 274 75% 62%; /* Primary color */
  --background: 0 0% 100%; /* Background */
  --foreground: 213 31% 22%; /* Text */
}
```

### Adding New Languages

1. Create file `messages/[locale].json`
2. Add locale to `i18n/routing.ts`
3. Update middleware

## 📱 Responsiveness

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ Performance

- **Lazy Loading** - components load as needed
- **Image Optimization** - automatic image optimization
- **Code Splitting** - code splitting by pages
- **Bundle Analysis** - bundle size analysis

## 🔒 Security

- **Content Security Policy** - XSS protection
- **HTTPS** - secure connection
- **Input Validation** - user input validation

## 📄 License

© 2025 Markos Basilio. All rights reserved.
