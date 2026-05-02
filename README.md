# Dipendra Sharma - Portfolio
> Personal portfolio website showcasing my projects, skills, certificates, and professional journey as a full-stack developer.

🔗 **Live Demo:** [https://tech-dipesh.vercel.app](https://tech-dipesh.vercel.app)

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Challenges & Solutions](#challenges--solutions)
- [Libraries Used](#libraries-used)
- [Future Improvements](#future-improvements)

---

## 📖 Overview
A modern, responsive portfolio website built with React and TailwindCSS to showcase my development projects, technical skills, certificates, and professional experience. Features dark/light mode, GitHub contribution graph, and contact form integration.


## Features

| Feature | Description |
|---------|-------------|
| **Responsive Design** | Fully responsive layout with hamburger menu for mobile devices |
| **Dark/Light Mode** | Theme toggle with localStorage persistence using custom hook |
| **Project Gallery** | Interactive cards displaying 3+ projects with live links |
| **Skills Section** | Technical skills categorized with icons (Parcel, DevTools, Documentation) |
| **Certificates** | Professional certifications including C++, DSA, PostgreSQL |
| **GitHub Activity** | Contribution graph integrated with react-github-calendar |
| **Contact Form** | FormSubmit integration with toast notifications |
| **Analytics** | Vercel Analytics for visitor tracking |
| **Github API** | Integrate GitHub API for live project stats |

---

##  Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TailwindCSS v4, React Router |
| **Icons** | Lucide React, FontAwesome |
| **State Management** | Custom hooks (useLocalStorage) |
| **Analytics** | Vercel Analytics |
| **Form Handling** | FormSubmit API, React Toastify |
| **UI Components** | Dnd-Kit (drag & drop), React GitHub Calendar |

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation with hamburger menu
│   ├── Footer.jsx          # Site footer
│   ├── ProjectCard.jsx     # Reusable project display
│   ├── CertificateCard.jsx # Certificate display component
│   └── Skills.jsx          # Skills section with icons
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Projects.jsx        # Projects gallery
│   ├── Skills.jsx          # Skills & tools
│   ├── Certificates.jsx    # Certifications
│   └── Contact.jsx         # Contact form
├── hooks/
│   └── useLocalStorage.js  # Custom localStorage hook
├── assets/                 # Images and static files
└── App.jsx                 # Main app with routes
```

## Installation & Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Steps

```bash
git clone https://github.com/tech-dipesh/portfolio.git
cd portfolio
npm install
npm run dev
```


## Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| **Dark mode not working** | Implemented TailwindCSS v4 custom variant: `@custom-variant dark (&:where(.dark, .dark *))` |
| **Theme persistence** | Created custom `useLocalStorage` hook to store user preference |
| **Responsive header** | Added hamburger menu with mobile-first approach |
| **Form submission** | Integrated FormSubmit API with React Toastify for user feedback |

---

## 📦 Libraries Used

| Library | Purpose |
|---------|---------|
| `react-router` | Client-side routing |
| `tailwindcss` | Styling and dark mode |
| `lucide-react` | Modern icons |
| `@fortawesome/react-fontawesome` | FontAwesome icons |
| `react-toastify` | Toast notifications |
| `react-github-calendar` | GitHub contribution graph |
| `@vercel/analytics` | Visitor analytics |
| `dnd-kit` | Drag-and-drop functionality |

---

## Future Improvements
- Add blog section for technical articles
- Add animations with Framer Motion
- Implement i18n for multiple languages



## Acknowledgements
- TailwindCSS v4 for simplified theming
- FormSubmit for easy form handling
- Vercel for seamless deployment

## 🙏 Thanks.
