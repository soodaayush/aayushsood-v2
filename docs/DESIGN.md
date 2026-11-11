# Portfolio redesign: "Clean x Mono" with light/dark switch

Goal: restyle aayushsood.com. Keep all existing content and routes. Change the look only.

## Look in one line
Plain, quiet, one narrow column. DM Sans for text, JetBrains Mono for small labels and meta.
One orange accent. Hairline rules. No cards, no shadows, no gradients, no hover effects on images.

## Fonts (Google Fonts)
- DM Sans 400, 500, 600, 700 (body, headings)
- JetBrains Mono 400, 500 (nav, section labels, dates, tech lists, small meta)

## Color tokens (CSS variables on the page root; toggle swaps them)
| token    | dark     | light    |
|----------|----------|----------|
| --bg     | #0c0c0d  | #fbfaf7  |
| --ink    | #ececea  | #151515  |
| --muted  | #9a9a95  | #6b6a66  |
| --line   | #262628  | #e6e4de  |
| --accent | #ff6a3d  | #c2410c  |
Default is dark. Transition background and color about 0.2s.
Toggle: a text button at the end of the nav, label "light" when dark and "dark" when light,
thin left border, aria-label "Switch to light theme" / "Switch to dark theme".
Persist choice in localStorage (try/catch). First visit may follow prefers-color-scheme.

## Layout
- Single column, max-width 700px, centered, padding 20px 24px, 96px bottom.
- Nav: left "aayush sood" (medium weight, ink). Right: blog, books, resume, then the theme button.
  Mono 14px, muted links, 44px min tap height.
- Hero: oval headshot (assets/headshot.png, about 104px wide, transparent background, no frame)
  beside the name. Name: DM Sans 600, 36px, tight tracking.
  Under name: mono 13.5px muted "software engineering student, full stack developer".
- Intro paragraph: 19px, line-height 1.55.
- Section headings: mono 14px, accent color, written as "/ projects", "/ about", "/ skills",
  "/ writing", "/ interests", "/ contact". Margin top about 68px.
- Rows (projects, roles, posts): flex, space-between, wrap, 13px vertical padding,
  1px top border in --line, last row also gets a bottom border.
  Left: bold title (+ muted subtitle). Right: mono 13.5px muted, lowercase.
- Skills and interests: mono muted label (lowercase) above the comma list.
- Links hover to --accent. No underline by default.

## Content decisions (already made by Aayush)
- Headline is just his name. Do NOT use "I build apps that people actually use."
- Intro: "I'm a Software Engineering student at the University of Waterloo and a full stack developer
  originally from Nova Scotia. I build and ship apps, and outside of code I spend my time on math,
  geopolitics and Brazilian Jiu-Jitsu."
- Projects: only four, no descriptions, tech on the right: IWKids, CoinDeno, SAP-1, Market Maker.
  No project images.
- About: only the four role lines (role, org, dates). No role paragraphs. No high school paragraph.
- Books page: keep the cover images, plain grid, NO hover effect.
- Photo: no background color or box around it.

## Pages
Home is fully designed (reference/home-desktop and home-mobile).
Blog list and Books grid follow the same tokens; reference/blog-list-style and books-grid-style
show the intended list and grid (they use the dark theme; use the variables so both themes work).
Post pages and project case-study pages are not designed yet: apply the same tokens, column width,
mono labels and hairline rows. Keep the existing text.

## Responsive
- Under 640px: rows stack (title above the mono meta), book grid becomes 2 columns.
- Tap targets at least 44px. Text contrast must pass in both themes.

## Notes on the reference files
The reference/*.dc.html files come from a design tool. Read the markup and the <style> block for
exact sizes and spacing. Ignore the {{ }} placeholders and the small script at the bottom;
the theme logic is described above. Image paths like /_blob/... are placeholders: use assets/.
