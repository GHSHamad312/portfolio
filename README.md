<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0050?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-Custom-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

<h1 align="center">⚔️ HAMAD — Developer Portfolio</h1>

<p align="center">
  <strong>A fully interactive, RPG-themed developer portfolio</strong><br/>
  Built with React, Framer Motion & pure CSS — featuring cinematic animations, micro-interactions, and a quest-driven UI.
</p>

<p align="center">
  <a href="https://github.com/GHSHamad312"><img src="https://img.shields.io/badge/GitHub-GHSHamad312-181717?style=flat-square&logo=github" /></a>
  <a href="https://www.linkedin.com/in/ghshamad/"><img src="https://img.shields.io/badge/LinkedIn-ghshamad-0A66C2?style=flat-square&logo=linkedin" /></a>
</p>

---

## 🏰 Overview

This portfolio reimagines the traditional developer website as an **RPG character sheet** — complete with quest logs, skill trees, achievement badges, level indicators, and an XP-driven design language. Every page is crafted with smooth animations, ambient effects, and attention to micro-detail.

### ✨ Highlights

- **🎮 RPG Design System** — Gold-accented dark theme with Cinzel headings, custom design tokens, and a medieval-fantasy aesthetic
- **🌟 Cinematic Animations** — Staggered page entries, typewriter hero text, count-up stats, floating orbs, and particle systems
- **⚡ Micro-Interactions** — Hover glows, shimmer sweeps, tilt effects, underline animations, corner ornaments, and pulsing indicators
- **📱 Fully Responsive** — Desktop sidebar → mobile hamburger menu with smooth slide-in transitions
- **🎯 Quest & Achievement System** — Track completed quests, display progress bars, rarity-colored achievement cards with rotating rings
- **🔮 Ambient Effects** — Mouse-following radial spotlight, floating glow particles, animated gradient borders, and grid pattern overlay

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Animation** | Framer Motion 12 |
| **Routing** | React Router DOM 7 |
| **Styling** | Vanilla CSS (custom design tokens) |
| **Typography** | Google Fonts (Cinzel, Cinzel Decorative, Inter) |
| **Linting** | OxLint |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── avatar.png              # Profile avatar
│   ├── fantasy_bg.png          # Hero background image
│   └── sword.svg               # Favicon
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Sidebar.jsx     # Desktop sidebar + mobile menu
│   │   │   ├── Sidebar.css
│   │   │   ├── TopBar.jsx      # Top navigation bar with avatar
│   │   │   └── TopBar.css
│   │   └── UI/
│   │       ├── StatBar.jsx     # Reusable stat/progress bar
│   │       └── StatBar.css
│   ├── data/
│   │   └── portfolio.js        # All portfolio data (projects, skills, etc.)
│   ├── pages/
│   │   ├── Home.jsx / .css     # Hero section with quest log
│   │   ├── Skills.jsx / .css   # Tech stack arsenal
│   │   ├── Projects.jsx / .css # Project cards with rarity system
│   │   ├── Experience.jsx/.css # Timeline with animated flow
│   │   ├── Achievements.jsx/.css # Unlockable achievement badges
│   │   ├── Contact.jsx / .css  # Contact form + social links
│   │   └── Research.jsx / .css # Research publications
│   ├── styles/
│   │   ├── globals.css         # Design tokens, reset, utilities
│   │   └── animations.css      # All keyframe animations
│   ├── App.jsx                 # Root layout + routing
│   └── main.jsx                # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/GHSHamad312/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173/`.

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section with typewriter name, quest log, stats, and latest achievement |
| **Skills** | `/skills` | Grouped tech stack arsenal with quick facts panel |
| **Projects** | `/projects` | Filterable project cards with rarity levels, tags, and live demo links |
| **Experience** | `/experience` | Animated timeline with work and education entries |
| **Achievements** | `/achievements` | Unlockable badges with rarity tiers and progress tracking |
| **Contact** | `/contact` | Contact form (opens mailto) with social links and availability status |

---

## 🎨 Design System

The portfolio uses a custom RPG-inspired design system:

- **Colors** — Dark backgrounds (`#080604`) with gold accents (`#c9a84c`, `#f0d080`)
- **Typography** — `Cinzel` / `Cinzel Decorative` for headings, `Inter` for body
- **Cards** — Glassmorphism with backdrop blur, golden borders, and hover transitions
- **Rarity Tiers** — Epic (purple), Rare (blue), Common (green), Basic (gray)
- **Animations** — 15+ custom keyframe animations for various micro-interactions

---

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome! Feel free to open an issue or reach out via the contact page.

---

## 📬 Contact

- **Email** — [ghshamad312@gmail.com](mailto:ghshamad312@gmail.com)
- **GitHub** — [@GHSHamad312](https://github.com/GHSHamad312)
- **LinkedIn** — [ghshamad](https://www.linkedin.com/in/ghshamad/)
- **Twitter/X** — [@hamadcodess](https://twitter.com/hamadcodess)

---

<p align="center">
  <sub>Built with ⚔️ by <strong>Hamad Ali Shah</strong> — CS Undergrad @ NUST</sub>
</p>
