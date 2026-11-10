# Shaik Mitaigiri Mahmmad Arshad — Developer Portfolio

A production-ready, premium developer portfolio website engineered with **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**, styled in an elegant **Emerald Green & Pure White** visual theme.

Built to present verified academic credentials, full-stack enterprise applications, algorithmic routing engines, and practical internship experiences without simulated metrics or fabricated claims.

---

## 🌟 Live Demo & Preview

- **Author**: Shaik Mitaigiri Mahmmad Arshad
- **Degree**: B.Tech in Information Technology (3rd Year, CGPA 8.08), ANITS
- **GitHub**: [github.com/Arshad786-king](https://github.com/Arshad786-king)
- **LinkedIn**: [linkedin.com/in/shaik-mahmmad-arshad-641a34351](https://linkedin.com/in/shaik-mahmmad-arshad-641a34351)
- **Email**: [aarshad69857@gmail.com](mailto:aarshad69857@gmail.com)

---

## 🎨 Color System & Visual Identity

The design system adheres to a strict high-contrast Green & White palette:

| Color Role | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Green** | `#064E3B` | Brand identity, primary headings, top appbars, footer background |
| **Emerald Green** | `#10B981` | Interactive accents, primary action buttons, active indicators |
| **Emerald Hover** | `#059669` | Button hover and focal state feedback |
| **Light Mint** | `#ECFDF5` | Alternate section backgrounds, badge containers |
| **Soft Green** | `#D1FAE5` | Card borders, subtle divider lines |
| **Dark Slate Text**| `#1F2937` | High-readability body copy |
| **Muted Slate Text**| `#64748B` | Subtitles, secondary descriptions, metadata |
| **Pure White** | `#FFFFFF` | Core canvas, elevated card surfaces |

---

## 🚀 Key Features

1. **Sticky Adaptive Navigation**:
   - Monogram ARSHAD personal brand logo.
   - Dynamic real-time scroll progress indicator bar.
   - Active route detection with light-mint badge highlight.
   - Mobile responsive slide-over drawer with backdrop blur.
   - Direct Resume Download button and interactive PDF modal previewer.

2. **Hero Presentation**:
   - Two-column modern minimalist hero with subtle orbital gradients.
   - Animated rotating professional titles with Framer Motion transitions.
   - Real profile photograph with fallback monogram avatar.
   - Direct CTA buttons and verified social link channels.

3. **Centralized Data Layer (`src/data/`)**:
   - Single source of truth for personal details, skills, projects, internships, education, and certifications.
   - Configurable GitHub and Deployment URLs.
   - Strictly hides action buttons when URLs are unconfigured to avoid 404 dead ends.

4. **Dedicated Project Deep-Dive Pages**:
   - Every project features an independent URL route (`/projects/elms`, `/projects/rideshare-connect`, etc.) with comprehensive architecture breakdowns, problem statements, objectives, and challenge resolutions.
   - **RideShare Connect Interactive Showcase**:
     - 6-scene interactive walkthrough (Landing Page, Driver Dashboard, Passenger Search, Seat Booking Simulation, Route Overlap Map Preview, and Dynamic Fare Calculator).
     - Live reactive calculator implementing the authentic project formula: `₹30 base + (Distance × ₹9/km) × surge multiplier - group discount` with cancellation settlement breakdown (90% refund, 10% driver compensation).
     - Transparently labeled as a Personal Project in Active Local Development.
   - **AI Emergency Route Planning**:
     - Dual distinct road corridor simulator for Visakhapatnam built on authentic OpenStreetMap graph data (12,133 nodes, 31,666 edges) and 250 local hospitals.
   - **Banking Credit Default Risk Engine**:
     - Interactive risk parameter slider evaluating DTI, revolving utilization, and delinquency impacts.

5. **CodeAlpha Internship Experience (`/experience`)**:
   - Detailed documentation and verified repository links for three completed internship projects:
     1. *Cloud Bus Pass System* (Python, MySQL)
     2. *SQL Injection Protection* (Python, MySQL, Cryptography)
     3. *Data Redundancy Removal System* (Python, MySQL)

6. **Academic Timeline & Verified Credentials**:
   - Education timeline highlighting B.Tech IT at ANITS (CGPA: 8.08), Ascent Junior College (89.0%), and Narayana High School (70.8%).
   - Verified achievement cards with image lightbox previews for the **LeetCode SQL 50 Study Plan** and **CodeAlpha Internship Project** certificates.

7. **Validated Contact Module (`/contact`)**:
   - Real-time client-side field validation with input constraint warnings.
   - Transparent email intent integration with zero fake HTTP delivery indicators.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, JavaScript (ESM)
- **Build Tool**: Vite 8 with `@tailwindcss/vite`
- **Styling**: Tailwind CSS v4, Custom Design Tokens
- **Routing**: React Router DOM (v7) with code-splitting (`React.lazy` + `Suspense`)
- **Animation**: Framer Motion
- **Icons**: Lucide React + Custom SVG Brand Vectors
- **Deployment Target**: Vercel (Single Page Application configuration via `vercel.json`)

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg                  # Brand SVG monogram favicon
│   ├── resume.pdf                   # Authoritative converted PDF resume
│   └── images/
│       ├── arshad-photo.jpeg        # Profile photograph
│       ├── certificates/            # LeetCode SQL 50 & CodeAlpha certificates
│       └── projects/                # High-res SVG project architecture previews
├── src/
│   ├── assets/                      # Static branding assets
│   ├── components/
│   │   ├── BackToTopButton.jsx      # Scroll-to-top floating button
│   │   ├── BrandIcons.jsx           # Clean SVG vector icons for GitHub & LinkedIn
│   │   ├── Button.jsx               # Universal multi-variant button component
│   │   ├── Footer.jsx               # Deep green responsive footer
│   │   ├── LoadingSpinner.jsx       # Emerald Suspense fallback spinner
│   │   ├── Navbar.jsx               # Sticky navbar with mobile menu & scroll progress
│   │   ├── ProjectCard.jsx          # Reusable project card with badges & tags
│   │   ├── ProjectLinks.jsx         # Configurable repository & demo buttons
│   │   ├── ResumeModal.jsx          # In-browser PDF preview lightbox
│   │   ├── RideShareShowcase.jsx    # 6-scene interactive animated product showcase
│   │   ├── ScrollToTop.jsx          # Route change scroll reset
│   │   └── SectionTitle.jsx         # Uniform typography and pill headers
│   ├── data/
│   │   ├── certifications.js        # Credentials and achievements
│   │   ├── education.js             # Academic timeline history
│   │   ├── experience.js            # CodeAlpha internship projects & links
│   │   ├── personalInfo.js          # Authoritative biographical information
│   │   ├── projects.js              # Central project configuration & URL settings
│   │   └── skills.js                # Technical skills from resume
│   ├── pages/
│   │   ├── About.jsx                # Background and career objective
│   │   ├── Certifications.jsx       # Certificate records & image lightbox
│   │   ├── Contact.jsx              # Form with real-time validation
│   │   ├── Education.jsx            # Academic timeline
│   │   ├── Experience.jsx           # Internship projects breakdown
│   │   ├── Home.jsx                 # Hero section & featured previews
│   │   ├── NotFound.jsx             # Custom 404 page
│   │   ├── ProjectDetails.jsx       # Dynamic route dispatcher
│   │   ├── Projects.jsx             # Filterable project catalog
│   │   └── Skills.jsx               # Categorized skills matrix
│   ├── projects/
│   │   ├── BankingProject.jsx       # IBM Case Study detail page
│   │   ├── ELMSProject.jsx          # Full-Stack ELMS detail page
│   │   ├── EmergencyRouteProject.jsx# AI Emergency Route Planning detail page
│   │   └── RideShareProject.jsx     # RideShare Connect detail page
│   ├── App.css
│   ├── App.jsx                      # App router with lazy chunking
│   ├── index.css                    # Tailwind v4 import & custom color utilities
│   └── main.jsx                     # Application entry point
├── package.json
├── vercel.json                      # Single Page Application rewrite rules
├── vite.config.js                   # Vite configuration with Tailwind plugin
└── README.md
```

---

## 💻 Installation & Local Development

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed:
```bash
node -v
npm -v
```

### 2. Navigate into the Project Directory
```bash
cd "C:\Users\Mahammad arshad\.gemini\antigravity\scratch\portfolio"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 5. Create Production Build
```bash
npm run build
```
The optimized output is compiled into the `dist/` directory with automated code-splitting and asset minification.

### 6. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Updating Project URLs

To attach real repository or deployment links as your projects go live:
1. Open [`src/data/projects.js`](./src/data/projects.js).
2. Locate the project object (e.g. `elms` or `rideshare-connect`).
3. Update `githubUrl` or `liveUrl`:
```javascript
{
  id: "elms",
  githubUrl: "https://github.com/Arshad786-king/your-repo-name",
  liveUrl: "https://your-elms-deployment.vercel.app",
  isDeployed: true,
  // ...
}
```
The website UI automatically activates the **View Source Code** and **Live Website** action buttons.

---

## 🚀 Deployment Instructions

### Deploy to GitHub
1. Create a new repository on your GitHub account ([github.com/new](https://github.com/new)) named `portfolio`.
2. Connect your local repository and push:
```bash
git remote add origin https://github.com/Arshad786-king/portfolio.git
git branch -M main
git push -u origin main
```

### Deploy to Vercel (Recommended)
1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New Project** and import the `portfolio` repository.
3. Configure the build settings (detected automatically):
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (or `portfolio`)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. The `vercel.json` file automatically handles all direct route rewrites so URLs like `/projects/elms` will resolve seamlessly.

---

## 📄 License
This project is open-source under the MIT License. Developed with pride by Shaik Mitaigiri Mahmmad Arshad.
