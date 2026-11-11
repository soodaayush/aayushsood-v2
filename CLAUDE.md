# CLAUDE.md — aayushsood-v2

Personal portfolio website for Aayush Sood, built with Next.js App Router.

## Tech Stack

- **Framework**: Next.js 16 (App Router, default Node runtime)
- **React**: 19, with `"use client"` on all interactive components
- **Styling**: CSS Modules (`.module.css`) per feature, global variables/resets in `src/app/styles/global/globals.css`
- **Animations**: Framer Motion (`motion/react`), only the command palette uses it now; the design has no entrance animations or hover effects on images
- **Fonts**: DM Sans (text, headings) and JetBrains Mono (nav, section labels, dates, meta) via `next/font/google`, exposed as `--font-sans` and `--font-mono`
- **Themes**: `next-themes`, dark is the default and the choice is saved in localStorage; `html.light` swaps the tokens. The nav button shows "light"/"dark" (both labels are in the HTML, CSS picks one, so there is no flash)
- **Icons**: `react-icons`, only in the command palette and the 404 page
- **Blog**: MDX files in `content/posts/`, read directly at build time by `utils/fetchPosts.js` (`gray-matter`), rendered with `marked` v18 (plain Markdown — no JSX in posts); RSS feed at `/feed.xml`
- **Database**: Firebase (Firestore) — used for blog post likes
- **Analytics**: Google Analytics via `@next/third-parties`
- **OG Images**: Next `opengraph-image.js` files (home, blog, books, each post) using the shared layout in `utils/ogImage.js`
- **Linting**: ESLint 9 flat config (`eslint.config.mjs`) using `eslint-config-next/core-web-vitals` — ESLint 10 is not yet supported by the Next plugins
- **Sitemap / robots**: `src/app/sitemap.js` and `src/app/robots.js`

## Project Structure

```
src/app/
  components/
    global/       # Header, Footer, CommandPalette
    home/         # welcomeSection, projectsSection, aboutSection, technicalSkillsSection, writingSection, interestsSection, contactSection (all server components)
    blog/         # TableOfContents, likeButton, backToTopButton
    books/        # book card
  styles/
    global/       # globals.css, header/footer/commandPalette modules
    home/         # home.module.css
    blog/         # blogPost, likeButton modules
  data/
    technicalSkills.json   # Skills by category (Frontend, Backend, Mobile, AI)
    projects.json          # All portfolio projects (only the four in featuredProjects.json are shown on home; rows link to the GitHub repo of the entry named in `source`)
    featuredProjects.json  # The four home rows: name, subtitle, tech list, `source` (name in projects.json)
    roles.json             # The four "/ about" rows
    interests.json         # Interests with their YouTube channels (home shows name + channel links)
    books.json             # Reading list with ratings
  blog/[id]/page.js        # Blog post page (server component, statically generated)
  blog/[id]/opengraph-image.js  # Per-post OG image
  feed.xml/route.js        # RSS feed (static route handler)
  sitemap.js, robots.js    # Generated from posts at build time
  opengraph-image.js       # Default OG image (also blog/, books/)
  layout.js                # Root layout — ThemeProvider, Header, Footer, CommandPalette

content/posts/             # MDX blog posts (YAML frontmatter) — the single source of truth
libs/                      # firebaseConfig
hooks/                     # useAnonAuth (anonymous Firebase auth)
utils/                     # fetchPosts (post loader + validation), formatDate ("August 2026"), ogImage (shared OG layout; still uses the old Wotfard font and dark-blue colours)
```

## Key Conventions

- **CSS Modules** for all component styles; CSS custom properties in `globals.css` for theming
- Theme tokens: `--bg --ink --muted --line --accent` live in `:root` (dark) and are overridden in `html.light {}` in `globals.css`
- **Design**: plain single column (`.shell`, 700px; a page widens it by putting `data-width="760"` or `"960"` on its root), mono lowercase section labels (`/ projects`), hairline rows, one accent colour. No cards, shadows, gradients or hover effects on images. Reference: `portfolio-redesign/DESIGN.md` (not committed)
- **Images**: every image is WebP (favicons and the apple-touch-icon stay PNG/ICO because browsers need them; OG images are generated PNGs)
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
- **Theme colors**: Use the five tokens. Never hardcode colors in components; for tints use `color-mix(in srgb, var(--ink) 7%, transparent)`.
- **Command palette**: Opens on `Ctrl+K` / `Cmd+K` only (the design has no search button). Only indexes Pages and Blog Posts.
- **Environment variables**: Firebase config stored in `.env.local` (never committed). See `.env.local` for `NEXT_PUBLIC_FIREBASE_*` keys.
