---
title: "Why I moved from npm to pnpm and got over 20 GB of disk back"
excerpt: "npm kept a separate copy of every dependency in every project. pnpm keeps one. Here is why I switched, how I migrated, and what it cost me."
tags: ["pnpm", "Tooling", "Node.js"]
readTime: "6 min read"
date: "2026-11-22"
featured: false
---

![npm keeps a copy of every package in every project, pnpm keeps one shared store and links to it](/assets/blogs/pnpm-store.svg)

I didn't switch to pnpm because of a benchmark. I switched because my laptop ran out of room.

My machine has a 512 GB drive, and between the portfolio, Yeti Jobs, DaiGo and a pile of assignments and experiments, almost every folder had its own `node_modules`. When I finally went looking for what was eating the disk, the answer was boring: the same packages, copied over and over. Cleaning that up and moving to pnpm gave me back over 20 GB.

## Why npm piles up

npm installs a full copy of every dependency inside each project's `node_modules`. React in project A and React in project B are the same files, stored twice. A Next.js project pulls in hundreds of packages, so every new project adds another full copy, and nothing ever tidies the old ones. Deleting a project's source doesn't help while its `node_modules` is still sitting there.

## What pnpm does differently

pnpm keeps one content-addressable store on disk. Every file of every package version is saved there once, and your project's `node_modules` doesn't hold copies, it holds links into that store.

Two details make that work:

- **Hard links.** The files in your project point at the same data as the store, so installing a package that already exists somewhere on the machine is mostly linking, not downloading or copying.
- **A nested layout.** Real packages live under `node_modules/.pnpm`, and symlinks make sure each package only sees what it declared in its own `package.json`.

The second one has a side effect I now count as a feature. A package can't quietly import something it never listed. With npm's flat layout, that kind of phantom dependency works by accident until the day it doesn't.

## The Windows catch

I work on Windows 11, mostly in Git Bash. Hard links can't cross drives, so the store and your projects need to be on the same one. If they aren't, you end up with a second store or plain copies, and most of the saving disappears. It takes five seconds to check:

```bash
pnpm store path
```

If that path is on a different drive than your code, fix that first.

## How I migrated

Per project, it's three steps:

```bash
pnpm import
rm -rf node_modules package-lock.json
pnpm install
```

`pnpm import` reads `package-lock.json` and writes a `pnpm-lock.yaml` with the same resolved versions, so nothing changes under you. After that the old lockfile and folder can go.

The commands map over almost one to one. I use pnpm's short alias, `pn`:

- `npm install` becomes `pn i`
- `npm install zod` becomes `pn add zod`
- `npm run dev` becomes `pn dev`
- `npx something` becomes `pn dlx something`
- `npm ci` becomes `pn i --frozen-lockfile`

## Getting the space back

Migrating stops the growth. The real win comes from deleting the folders you don't need anymore. A tool like npkill lists every `node_modules` on the drive with its size, which is how I first saw how bad it was, and clearing the dead ones takes a few keypresses. After that, the store has its own housekeeping:

```bash
pnpm store prune
```

That removes packages from the store that no project references anymore.

## What it costs you

pnpm isn't free of trade-offs, and I'd rather list them than pretend:

- **Strictness will break something.** A package that relied on an undeclared dependency fails loudly. The right fix is to declare the dependency. `shamefully-hoist=true` in `.npmrc` exists as a last resort, and I treat it like one.
- **Some guides assume npm.** Copy-pasted setup steps need a quick translation.
- **The store lives outside your project.** Deleting a project folder doesn't free store space until you prune.

## Would I switch again

Yes, without thinking about it. The 20 GB is the headline, but the part I notice every day is that starting a new project no longer feels expensive.
