# Dipendra Sharma — Portfolio

Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router, `src/` directory)
- TypeScript, strict mode, no `any` — generics used wherever a value's shape varies
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
```

## Where to drop your own content

**Contact form** — the form on the homepage posts to Formspree. Create a free
form at [formspree.io](https://formspree.io), then swap the endpoint in
`src/config/contact.ts`:

```ts
export const contactConfig = {
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};
```

**Project screenshots** — until these exist, each project card falls back to an
abstract mock UI automatically. Drop real screenshots in:

```
public/projects/yeti-jobs.png
public/projects/stateflow.png
public/projects/home-finder.png
public/projects/beat-bridge.png
```

**Resume PDFs** — the resume picker (navbar dropdown + ⌘K → "Download resume")
expects these exact filenames:

```
public/resume/resume.pdf     (main)
public/resume/frontend.pdf
public/resume/backend.pdf
public/resume/devops.pdf
```

**Blog posts** — add a new `.md` file to `src/content/blogs/` with frontmatter:

```md
---
title: "Post title"
excerpt: "One sentence summary"
tags: ["Tag One", "Tag Two"]
readTime: "5 min read"
date: "2026-07-09"
featured: false
---

Body content in markdown.
```

The blog list and `/blogs/[slug]` route pick it up automatically, no code
changes needed.

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
  config/         typed content — edit these files to change what's on the site
  content/blogs/  markdown blog posts
  lib/            types, utils, blog loader
  providers/      theme provider
```
