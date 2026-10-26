# CLAUDE.md — aayushsood-v2

Personal portfolio website for Aayush Sood, built with Next.js App Router.

## Tech Stack

- **Framework**: Next.js 16 (App Router, default Node runtime)
- **React**: 19, with `"use client"` on all interactive components
- **Styling**: CSS Modules (`.module.css`) per feature, global variables/resets in `src/app/styles/global/globals.css`
- **Animations**: Framer Motion (`motion/react`)
- **Themes**: `next-themes` — dark/light via `html.dark` / `html.light` class
- **Icons**: `react-icons` (`fa`, `si`, `ri` families)
- **Blog**: MDX files in `content/posts/`, read directly at build time by `utils/fetchPosts.js` (`gray-matter`), rendered with `marked` v18 (plain Markdown — no JSX in posts); RSS feed at `/feed.xml`
- **Database**: Firestore (via `firebase-admin`, server-only) — blog post view and like counts, served by `src/app/api/posts/[id]/route.js`. No Firebase SDK in the browser
- **Analytics**: Google Analytics via `@next/third-parties`
- **OG Images**: Next `opengraph-image.js` files (home, blog, books, each post) using the shared layout in `utils/ogImage.js`
- **Linting**: ESLint 9 flat config (`eslint.config.mjs`) using `eslint-config-next/core-web-vitals` — ESLint 10 is not yet supported by the Next plugins
- **Sitemap / robots**: `src/app/sitemap.js` and `src/app/robots.js`

## Project Structure

```
src/app/
  components/
    global/       # Header, Footer, CommandPalette
    home/         # welcomeSection, technicalSkillsSection, projectsSection, interestsSection
    blog/         # TableOfContents, likeButton, backToTopButton
    books/        # book card
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
  blog/[id]/opengraph-image.js  # Per-post OG image
  feed.xml/route.js        # RSS feed (static route handler)
  sitemap.js, robots.js    # Generated from posts at build time
  opengraph-image.js       # Default OG image (also blog/, books/)
  layout.js                # Root layout — ThemeProvider, Header, Footer, CommandPalette

content/posts/             # MDX blog posts (YAML frontmatter) — the single source of truth
libs/                      # firebaseAdmin (server-only Firestore client)
utils/                     # fetchPosts (post loader + validation), ogImage (shared OG layout), postStats (client helpers for the counts API)
```

## Key Conventions

- **CSS Modules** for all component styles; CSS custom properties in `globals.css` for theming
- Theme variables pattern: `--variable-name` defined in `html.light {}` and `html.dark {}` blocks
- **Server Components** for pages/layouts; `"use client"` for anything with state, effects, or event handlers
- Data lives in `src/app/data/*.json` — edit these to update site content
- Blog posts are `.mdx` files in `content/posts/` with YAML frontmatter (`title`, `description`, `date`, `keywords`, `tags`, optional `updated` for `dateModified`). Dates are quoted human-readable strings (e.g. `"March 15, 2025"`) and converted to ISO for metadata
- **Publishing a post**: add an `.mdx` file to `content/posts/` — the page, OG image, sitemap entry, RSS item and command palette entry are all derived from it. The build fails if `title`, `description` or `date` is missing or a date doesn't parse
- **Client components get post summaries only** (`getPostSummaries()` — no `content`), passed as props from server components. Never import post content into a client component; it ships in every page's JS

## Scripts

```bash
npm run dev        # Dev server with Turbopack
npm run build      # next build (posts, OG images, sitemap, feed all generated here)
npm run lint       # ESLint (eslint .)
```

## Important Details

- **Blog headings**: Markdown headings render one level down (`#` → `<h2>`, `##` → `<h3>`, …) so the post title is the page's only `<h1>`; `.blog-content h2–h5` styles in `globals.css` match the old sizes. IDs are injected server-side in `blog/[id]/page.js` via `.replace(/<h([2-4])>/, ...)` in document order. The TOC parser only picks up `#`–`###` and skips fenced code blocks; keep both in sync.
- **Headings / a11y**: one `<h1>` per page. The header brand and nav are styled spans, not headings; home has a visually hidden `<h1>`. New-tab links need `rel="noopener noreferrer"`
- **Blog images**: Not lazy-loaded (`decoding="async"` only) so TOC scroll positions are accurate.
- **Theme colors**: All colors are CSS variables. Never hardcode colors in components — add a new variable to `globals.css` instead.
- **Command palette**: Opens on `Ctrl+K` / `Cmd+K` or via search button in header. Only indexes Pages and Blog Posts.
- **Environment variables**: `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY` (service account, server-only) in `.env.local` and the host's env settings — never committed, never `NEXT_PUBLIC_`.
- **View/like counts**: `POST /api/posts/[id]` with `{ action: "view" | "like" }` increments; `GET` reads. Each browser records a view/like once via `localStorage` (`utils/postStats.js`). The API 404s for slugs not in `content/posts`, so `next.config.mjs` traces those files into its function.
