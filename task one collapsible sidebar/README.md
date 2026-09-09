# Interactive Sidebar Portfolio & Landing Page

A modern, fast, and accessible single-page web template featuring a collapsible responsive sidebar, dynamic scroll-spy section detection, and smooth navigation. Built with semantic HTML5, modern CSS, and clean JavaScript.

---

## 🚀 Key Features

- **Collapsible Sidebar**: Smooth toggle transition with CSS `@starting-style` entry animations and automatic element collapsing.
- **Scroll-Spy Navigation**: Powered by the **Intersection Observer API** to automatically highlight active sidebar links as sections enter the viewport.
- **Responsive Layout**: Designed for all device sizes (Desktop, Tablet, Mobile) with continuous layout adaptability.
- **Accessibility (a11y) Focused**: Built using semantic HTML tags (`<aside>`, `<main>`, `<section>`, `<article>`), keyboard navigable elements, and ARIA attributes (`aria-hidden`, `aria-label`).
- **Smooth Section Scroll**: Clean snap scrolling and smooth hash routing across all main sections (`#home`, `#about`, `#projects`, `#contact`).

---

## 🛠️ Built With

- **HTML5**: Semantic tags, accessible form controls, and structured document hierarchy.
- **CSS3**: CSS Grid, Flexbox, Custom Variables, Fluid Typography (`rem`), and modern CSS transitions.
- **JavaScript (ES6+)**: DOM Manipulation and `IntersectionObserver` API for zero-dependency scroll tracking.

---

## 📁 Project Structure

```text
├── index.html         # Main HTML document containing sidebar and content sections
├── css/
│   └── style.css      # Core styles, layout rules, and responsive media queries
├── js/
│   └── script.js     # Sidebar toggle & IntersectionObserver scroll-spy logic
└── images/            # SVG icons and visual assets
    ├── logo.svg
    ├── home-icon.svg
    ├── about-icon.svg
    ├── web-icon.svg
    └── contact-icon.svg
```

---

## 📄 Sections Included

1. **Home / Hero (`#home`)**: Main landing header, introductory summary, and call-to-action buttons.
2. **About (`#about`)**: Brief bio and multi-column technology stack grid (Frontend, Backend, Design/A11y).
3. **Projects (`#projects`)**: Grid showcase of featured projects with technology tag pills.
4. **Contact (`#contact`)**: Clean, accessible contact form with custom focused input states.

---

## ⚙️ Getting Started

1. **Clone or Download** the project repository.
2. Ensure your file structure matches the layout above.
3. Open `index.html` in any modern web browser or run it using a local server (e.g., **Live Server** extension in VS Code).

---

## 📱 Responsive Behavior

- **Desktop & Laptop (> 768px)**: Fixed height single-page layout with collapsible full-height sidebar and vertical section snap scrolling.
- **Tablet (577px - 768px)**: Optimized sidebar widths and scaled typography for medium-sized viewports.
- **Mobile (≤ 576px)**: Automatic transformation of the sidebar into a sticky/top navigation bar for standard mobile browsing.

---

## 📝 License

This project is open-source and available under the **MIT License**.
