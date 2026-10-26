# CLAUDE.md — aayushsood-v2

Personal portfolio website for Aayush Sood, built with Next.js App Router.

## Tech Stack

- **Framework**: Next.js 16 (App Router, default Node runtime)
- **React**: 19, with `"use client"` on all interactive components
- **Styling**: CSS Modules (`.module.css`) per feature, global variables/resets in `src/app/styles/global/globals.css`
- **Animations**: Framer Motion (`motion/react`)
- **Themes**: `next-themes` — dark/light via `html.dark` / `html.light` class
- **Icons**: `react-icons` (`fa`, `si`, `ri` families)
- **Blog**: MDX files in `content/posts/`, compiled to `public/posts.json` by `scripts/generatePosts.mjs` (runs in `prebuild`), rendered with `marked` v18; RSS feed at `/feed.xml`
- **Database**: Firebase (Firestore) — used for blog post likes
- **Analytics**: Google Analytics via `@next/third-parties`
- **OG Images**: Generated pre-build with Satori + Resvg (`scripts/generate-og-images.mjs`)
- **Linting**: ESLint 9 flat config (`eslint.config.mjs`) using `eslint-config-next/core-web-vitals` — ESLint 10 is not yet supported by the Next plugins
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
  blog/[id]/page.js        # Blog post page (server component, statically generated)
  feed.xml/route.js        # RSS feed (static route handler)
  layout.js                # Root layout — ThemeProvider, Header, Footer, CommandPalette

content/posts/             # MDX blog posts (YAML frontmatter)
public/posts.json          # Compiled blog posts (regenerated in prebuild, committed)
scripts/                   # generatePosts.mjs (posts.json), generate-og-images.mjs
libs/                      # firebaseConfig
hooks/                     # useAnonAuth (anonymous Firebase auth)
utils/                     # fetchPosts
```

## Key Conventions

- **CSS Modules** for all component styles; CSS custom properties in `globals.css` for theming
- Theme variables pattern: `--variable-name` defined in `html.light {}` and `html.dark {}` blocks
- **Server Components** for pages/layouts; `"use client"` for anything with state, effects, or event handlers
- Data lives in `src/app/data/*.json` — edit these to update site content
- Blog posts are `.mdx` files in `content/posts/` with YAML frontmatter (`title`, `description`, `date`, `keywords`, `tags`, optional `updated` for `dateModified`). Dates are human-readable (e.g. `"March 15, 2025"`) and converted to ISO for metadata

## Scripts

```bash
npm run dev        # Dev server with Turbopack
npm run posts      # Regenerate public/posts.json from content/posts
npm run build      # Prebuild (posts.json + OG images) → next build → postbuild (sitemap)
npm run lint       # ESLint (eslint .)
```

## Important Details

- **Blog heading IDs**: Injected server-side in `blog/[id]/page.js` via `.replace(/<h([1-3])>/, ...)` in document order. The TOC parser only picks up `#`–`###` and skips fenced code blocks; keep both in sync.
- **Blog images**: Not lazy-loaded (`decoding="async"` only) so TOC scroll positions are accurate.
- **Theme colors**: All colors are CSS variables. Never hardcode colors in components — add a new variable to `globals.css` instead.
- **Command palette**: Opens on `Ctrl+K` / `Cmd+K` or via search button in header. Only indexes Pages and Blog Posts.
- **Environment variables**: Firebase config stored in `.env.local` (never committed). See `.env.local` for `NEXT_PUBLIC_FIREBASE_*` keys.
