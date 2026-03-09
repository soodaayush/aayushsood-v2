# CLAUDE.md — aayushsood-v2

Personal portfolio website for Aayush Sood, built with Next.js App Router.

## Tech Stack

- **Framework**: Next.js (App Router, edge runtime globally via `export const runtime = "edge"` in `layout.js`)
- **React**: 19, with `"use client"` on all interactive components
- **Styling**: CSS Modules (`.module.css`) per feature, global variables/resets in `src/app/styles/global/globals.css`
- **Animations**: Framer Motion (`motion/react`)
- **Themes**: `next-themes` — dark/light via `html.dark` / `html.light` class
- **Icons**: `react-icons` (`fa`, `si`, `ri` families)
- **Blog**: Markdown files in `content/posts/`, compiled to `public/posts.json` at build time, rendered with `marked` v17
- **Database**: Firebase (Firestore) — used for blog post likes
- **Analytics**: Google Analytics via `@next/third-parties`
- **OG Images**: Generated pre-build with Satori + Resvg (`scripts/generate-og-images.mjs`)
- **Sitemap**: `next-sitemap` runs post-build

## Project Structure

```
src/app/
  components/
    global/       # Header, Footer, CommandPalette
    home/         # welcomeSection, technicalSkillsSection, projectsSection, interestsSection
    blog/         # TableOfContents, likeButton, backToTopButton
    books/        # book card
    resume/       # ResumeContent
  styles/
    global/       # globals.css, header/footer/commandPalette modules
    home/         # page, project, interest, technicalSkill modules
    blog/         # blogPost, likeButton modules
  data/
    technicalSkills.json   # Skills by category (Frontend, Backend, Mobile, AI)
    projects.json          # Portfolio projects
    interests.json         # Interest cards with YouTube links
    books.json             # Reading list with ratings
  blog/[id]/page.js        # Blog post page (server component)
  layout.js                # Root layout — edge runtime, ThemeProvider, Header, Footer, CommandPalette

content/posts/             # Markdown blog posts (YAML frontmatter)
public/posts.json          # Compiled blog posts (generated at build)
scripts/                   # OG image generation
```

## Key Conventions

- **CSS Modules** for all component styles; CSS custom properties in `globals.css` for theming
- Theme variables pattern: `--variable-name` defined in `html.light {}` and `html.dark {}` blocks
- **Server Components** for pages/layouts; `"use client"` for anything with state, effects, or event handlers
- Data lives in `src/app/data/*.json` — edit these to update site content
- Blog posts are `.md` files in `content/posts/` with YAML frontmatter (`title`, `description`, `date`, `keywords`, `tags`)

## Scripts

```bash
npm run dev        # Dev server with Turbopack
npm run build      # Prebuild (OG images) → next build → postbuild (sitemap)
npm run lint       # ESLint
```

## Important Details

- **Edge runtime**: The entire app runs on the edge. Avoid Node.js-only APIs (e.g., `marked.Renderer` class may not be available — use string post-processing instead).
- **Blog heading IDs**: Injected server-side in `blog/[id]/page.js` via `.replace(/<h([1-4])>/, ...)` in document order — do not rely on `marked.Renderer`.
- **Blog images**: Not lazy-loaded (`decoding="async"` only) so TOC scroll positions are accurate.
- **Theme colors**: All colors are CSS variables. Never hardcode colors in components — add a new variable to `globals.css` instead.
- **Command palette**: Opens on `Ctrl+K` / `Cmd+K` or via search button in header. Only indexes Pages and Blog Posts.
- **Environment variables**: Firebase config stored in `.env.local` (never committed). See `.env.local` for `NEXT_PUBLIC_FIREBASE_*` keys.
