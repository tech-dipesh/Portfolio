---
title: "How to implement a theme toggle in React with Tailwind CSS v4"
excerpt: "The one line that fixes dark mode toggling in Tailwind v4, and the hours I lost before finding it."
tags: ["React", "Tailwind CSS", "Frontend"]
readTime: "4 min read"
date: "2026-04-02"
featured: false
---

I tried to implement dark and light mode more times than I want to admit. I read guides, watched videos, asked peers, asked teachers, asked LLMs — and nothing worked. The actual problem turned out to be one line, and I only found it because of a Stack Overflow post.

## The real problem

I had Tailwind v4 installed but was following v3-era instructions for toggling dark mode. Tailwind v4 changed how dark mode variants are configured, and every guide I'd found online was still written for v3. The symptoms looked like a React bug. It wasn't — it was a one-line CSS configuration mismatch.

## Prerequisite setup

If you're starting from scratch with Vite:

```bash
npm create vite@latest .
npm install tailwindcss @tailwindcss/vite
```

Add the Tailwind plugin to your Vite config:

```ts
import tailwindcss from "@tailwindcss/vite";

export default {
  plugins: [tailwindcss()],
};
```

And in your global CSS file:

```css
@import "tailwindcss";
```

## The actual implementation

Once the setup is right, the toggle logic itself is small. Run an effect whenever your theme state changes, and add or remove the `dark` class on the root element:

```ts
useEffect(() => {
  if (theme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);
```

Or the shorter version, if you don't need to handle both directions explicitly:

```ts
useEffect(() => {
  document.documentElement.classList.toggle("dark");
}, [theme]);
```

## Where everyone gets stuck

Make sure you're actually on Tailwind v4 before following this approach — v3 configures dark mode differently, and mixing the two is exactly what cost me the most time. The second common mistake is importing `index.css` incorrectly, which silently breaks the whole setup with no obvious error. Even most AI tools won't catch this, because they default to explaining the toggle logic and skip the CSS import step entirely.

I watched a handful of YouTube videos and tried a long list of prompts before I nearly gave up. The fix, when I finally found it, wasn't in the React code at all — it was sitting quietly in the CSS file the entire time.
