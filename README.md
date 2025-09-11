# Zubair Khalid - Portfolio Website

A modern, responsive portfolio website built with Vite, React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design.

## Features

- 🚀 **Modern Tech Stack**: Vite, React 19, TypeScript, Tailwind CSS
- 🎨 **Beautiful Design**: Clean, professional UI with glassmorphism effects
- 🌙 **Dark Mode**: Toggle between light, dark, and system themes
- 📱 **Fully Responsive**: Works seamlessly on all device sizes
- ✨ **Smooth Animations**: Powered by Framer Motion
- 🧭 **Client-side Routing**: TanStack Router for navigation
- 🎯 **SEO Optimized**: Meta tags for better search engine visibility
- ♿ **Accessibility**: WCAG compliant with proper ARIA labels
- 📝 **Code Quality**: ESLint and Prettier for consistent code style

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: TanStack Router
- **Icons**: Lucide React
- **Linting**: ESLint
- **Formatting**: Prettier

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dearzubi/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:4000](http://localhost:5173) with your browser to see the result.

### Building for Production

To build the app for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

The build artifacts will be stored in the `dist/` directory.

### Preview

To preview the production build:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
# or
bun preview
```
## Customization

### Personal Information

Update your personal information in `src/data/site.ts`:

```typescript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "Your Phone Number",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  blurb: "Your personal introduction...",
}
```

### Styling

The project uses Tailwind CSS with custom color tokens. You can customize the color scheme in `src/styles/index.css` and `tailwind.config.js`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://react.dev/) for the UI framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [TanStack Router](https://tanstack.com/router/latest) for routing
- [Lucide](https://lucide.dev/) for the icon library