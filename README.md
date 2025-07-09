# Lexa Studios Web App

A modern, creative portfolio and services website built with React, Vite, and TypeScript. This project is designed for easy navigation, maintainability, and scalability, making it simple for new contributors to understand and extend.

---

## 🚀 Project Overview

Lexa Studios is a digital design studio portfolio and services site. It features:
- A homepage with hero, services, and featured work sections
- Dedicated pages for About, Services, Works, Gallery, and Contact
- Modular, reusable components for each section
- Responsive, modern UI with dark mode support

---

## 🗂️ Project Structure

```
lexa-studios/
├── public/                # Static assets (images, etc.)
├── src/
│   ├── aboutPage-emmeax/  # About page component(s)
│   ├── contactPage-emmeax/# Contact page component(s)
│   ├── galleryPage/       # Gallery page
│   ├── homePage/          # Home page
│   ├── servicesPage/      # Services page
│   ├── worksPage/         # Works/portfolio page
│   ├── components/        # Shared and page-specific components
│   │   ├── homepage/      # Homepage sections (Hero, Services, etc.)
│   │   ├── services/      # Services page sections (Hero, Faqs, etc.)
│   │   ├── works/         # Works page sections
│   │   └── svgs/          # SVG icon components
│   ├── styles/            # SCSS and Tailwind styles
│   ├── assets/            # Logos and static assets
│   ├── App.tsx            # Main app, routing, layout
│   ├── Navbar.tsx         # Top navigation bar
│   ├── Footer.tsx         # Footer with contact form and links
│   └── main.tsx           # App entry point
├── package.json           # Project metadata and scripts
├── tailwind.config.js/ts  # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── README.md              # This file
```

---

## 🧭 Navigation & Routing

Routing is handled in `src/App.tsx` using `react-router-dom`. Main routes:
- `/` → Home (`src/homePage/home.tsx`)
- `/about` → About (`src/aboutPage-emmeax/AboutUs.tsx`)
- `/services` → Services (`src/servicesPage/service.tsx`)
- `/works` → Works (`src/worksPage/works.tsx`)
- `/gallery` → Gallery (`src/galleryPage/gallery.tsx`)
- `/contact` → Contact (`src/contactPage-emmeax/ContactPage.tsx`)

The `Navbar` and `Footer` are persistent across all pages.

---

## 🧩 Component & Page Breakdown

### Home Page (`src/homePage/home.tsx`)
- **Hero**: Eye-catching intro section
- **Services**: Overview of main services (Branding, Product Design, etc.)
- **FeaturedWork**: Highlights select projects

### About Page (`src/aboutPage-emmeax/AboutUs.tsx`)
- Studio introduction, mission, and team/skills overview

### Services Page (`src/servicesPage/service.tsx`)
- **Hero**: Showcases creative team
- **OurServices**: Detailed service cards
- **WorkWithUs**: Call-to-action for collaboration
- **Faqs**: Frequently asked questions

### Works Page (`src/worksPage/works.tsx`)
- **Hero**: Filterable categories for works
- **WorksContent**: Displays projects filtered by category

### Gallery Page (`src/galleryPage/gallery.tsx`)
- Visual gallery of collections with captions

### Contact Page (`src/contactPage-emmeax/ContactPage.tsx`)
- Contact form, call-to-action, and FAQ

### Shared Components
- **Navbar**: Top navigation, dark mode toggle, mobile menu
- **Footer**: Contact form, links, and social media
- **SVGs**: Custom SVG icon components for visual consistency

---

## 🎨 Styling
- **Tailwind CSS**: Utility-first styling (`src/index.css`, `tailwind.config.js/ts`)
- **SCSS**: Custom variables, mixins, and base styles (`src/styles/`)
- **Dark Mode**: Toggle in Navbar, persists via `localStorage`

---

## 🧵 SCSS Architecture

Your project uses a modular, scalable SCSS architecture, organized for maintainability and easy extension. Here’s how it’s structured:

### 1. Main Entry: `src/styles/index.scss`
This file imports all foundational, utility, and base styles in a clear order:
- **Reset**: Resets browser default styles.
- **Utils**: Variables, functions, mixins, vendor overrides, responsive helpers.
- **Base**: Fonts and base element styles.

### 2. Base Styles (`src/styles/base/`)
- **_reset.scss**:  Applies a CSS reset for consistent rendering across browsers. Resets margins, paddings, font sizes, and sets block display for HTML5 elements.
- **_fonts.scss**:  Imports Google Fonts (Quintessential, Urbanist) and defines utility classes for font families and weights using mixins.
- **_base.scss**:  Sets global element styles (box-sizing, font, background, color, scroll behavior). Responsive font sizing for headings, paragraphs, etc. Styles for links, images, inputs, buttons. Uses variables and mixins for consistency.

### 3. Utility Styles (`src/styles/utils/`)
- **_variables.scss**:  Central place for color palette, font names, and z-index layers.
- **_functions.scss**:  Custom SCSS functions, e.g., `z($name)` for semantic z-index management.
- **_mixins.scss**:  Reusable style patterns: aspect ratios, ellipses, hide-scrollbar, responsive layouts, font utilities, etc.
- **_responsive.scss**:  Defines breakpoints and integrates the `include-media` library for easy responsive mixins.
- **_vendors.scss**:  Vendor-specific overrides (e.g., for dat.gui z-index).

### 4. How to Use/Extend
- **Add new variables** to `_variables.scss` for colors, spacing, etc.
- **Create new mixins** in `_mixins.scss` for reusable patterns.
- **Use responsive mixins** from `_responsive.scss` for media queries.
- **Import new fonts** in `_fonts.scss` and add utility classes with mixins.
- **Component-level styles** can be added in new SCSS files and imported as needed.

### 5. Integration with Tailwind
- Tailwind is used for utility-first styling in components.
- SCSS is used for global styles, variables, and advanced patterns not easily handled by Tailwind.

### 6. Example: Adding a New Color
```scss
// _variables.scss
$color-sky-blue: #00CFFF;
// Usage in any SCSS file
background-color: $color-sky-blue;
```

### 7. Example: Responsive Mixin
```scss
.my-section {
  @include section-grid(2rem, 2, 1.5rem);
  @include media('<phone') {
    padding: 1rem;
  }
}
```

This structure ensures your styles are DRY, consistent, and easy to maintain. For more, see the `src/styles/` directory.

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd lexa-studios
   ```
2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```
3. **Start the development server:**
   ```bash
   yarn dev
   # or
   npm run dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 📦 Scripts
- `yarn dev` / `npm run dev` — Start development server
- `yarn build` / `npm run build` — Build for production
- `yarn preview` / `npm run preview` — Preview production build
- `yarn lint` / `npm run lint` — Lint code

---

## 🛠️ Technologies Used
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SCSS](https://sass-lang.com/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📁 Folder Descriptions
- **src/components/homepage/**: Hero, Services, and FeaturedWork for homepage
- **src/components/services/**: Service cards, creative team, FAQs, etc.
- **src/components/works/**: Works page hero and content
- **src/components/svgs/**: SVG icon components
- **src/styles/**: SCSS base, variables, mixins, and Tailwind integration
- **public/images/**: All static images used in the site

---

## 🤝 Contribution Guidelines
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please follow the existing code style and structure. For major changes, open an issue first to discuss what you’d like to change.

---

## 📜 License

[Specify your license here, e.g., MIT, Apache 2.0, etc.]

---

## 🙏 Credits
- Lexa Studios team
- [Your name or contributors]

---

For any questions or support, please open an issue or contact the maintainers.
