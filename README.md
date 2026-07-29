# Dipendra Sharma — Portfolio
Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack
- Next.js 16 (App Router, `src/` directory)
- TypeScript, strict mode, no `any`
- Tailwind CSS with a custom violet-on-black design token system
- Hand-built shadcn-style primitives on top of Radix UI (`components/ui`)
- `next-themes` for light / dark / system mode
- `cmdk` + Radix Dialog for the ⌘K command menu
- Lucide React for every icon, no image-based logos
- Markdown blog posts via `gray-matter` + `react-markdown`, no CMS

## Getting started
```bash
pnpm install
pnpm dev
```
Runs on `http://localhost:3000`.

```bash
pnpm build   # production build
pnpm lint    # eslint, flat config
pnpm start
```
**Resumt Pdf**- There are the 4 Different set of resume exist on the Website.
`resume.pdf`: Core Resume For the Universal System with Combined: DSA, Web Dev & Devops
`dsa.pdf`: This is the Pure Problem Solving & DSa With Heavy Codeforces/Leetcode 
`frontend.pdf`: Only frontend or the Client side Project Exist Pure Frontend
`backend.pdf`: Only backend or the server side Project Exist Pure Backend
`devops.pdf`: Pure Cloud or the Devops Resume Major Focus on the Deployment ci cd pipeline, Github Action, Docker, Aws. 

**Blog Posts**: Blog Post Exist on the .md File inside: `src/content/blogs` With Content Exist such as: `title, excerpt, tags, readTime, date, featured` 

The blog list and `/blogs/[slug]` route pick it up automatically 

## Content sources
Project, skill, experience, and LeetCode data all live in `src/config/*.ts`,
typed against the interfaces in `src/lib/types.ts`. LeetCode and GitHub stats
are a static snapshot with an `asOf` field rather than a live API call, since
this is a static, backend-free site — update `src/config/leetcode.ts` by hand
when the numbers move.

## Structure
```
src/
  app/            routes: home, /leetcode, /blogs, /blogs/[slug]
  components/
    layout/       navbar, theme toggle, resume picker, command menu
    home/         hero, projects, experience, skills, contact
    leetcode/     stats visualization
    blogs/        post card
    ui/           hand-built primitives (button, card, command, dropdown...)
  config/         typed content — With The Content Such as Blogs 
  content/blogs/  markdown blog posts
  lib/            types, utils, blog loader
  providers/      theme provider
```
