#!/usr/bin/env node
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const fontData = readFileSync(
  join(ROOT, "public/assets/fonts/wotfard-regular-webfont.ttf")
);

const posts = JSON.parse(
  readFileSync(join(ROOT, "public/posts.json"), "utf-8")
);

const W = 1200;
const H = 630;

const C = {
  bg: "#090e1a",
  blue: "#718de1",
  white: "#f8fafc",
  muted: "#8892a4",
  divider: "#202534",
};

async function toSvg(element) {
  return satori(element, {
    width: W,
    height: H,
    fonts: [{ name: "Wotfard", data: fontData, weight: 400, style: "normal" }],
  });
}

function toPng(svg) {
  return new Resvg(svg, { fitTo: { mode: "width", value: W } })
    .render()
    .asPng();
}

function save(filePath, buffer) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, buffer);
  console.log(`  ✓ ${filePath.replace(ROOT + "/", "")}`);
}

// Build a standard OG layout as a plain element tree (Satori-compatible)
function ogLayout({ breadcrumb, title, titleSize, lines, footerLeft, footerRight }) {
  const resolvedTitleSize =
    titleSize ?? (title.length > 55 ? "50px" : "62px");

  const contentChildren = [
    {
      type: "div",
      props: {
        style: { fontSize: resolvedTitleSize, color: C.blue, margin: "0 0 20px 0", lineHeight: 1.2 },
        children: title,
      },
    },
    ...lines.map(({ text, color, size, margin }) => ({
      type: "div",
      props: {
        style: {
          fontSize: size ?? "26px",
          color: color ?? C.white,
          lineHeight: 1.5,
          ...(margin ? { margin } : {}),
        },
        children: text,
      },
    })),
  ];

  const footerChildren = footerRight
    ? [
        { type: "span", props: { style: { color: C.muted, fontSize: "20px" }, children: footerLeft } },
        { type: "span", props: { style: { color: C.muted, fontSize: "18px" }, children: footerRight } },
      ]
    : { type: "span", props: { style: { color: C.muted, fontSize: "18px" }, children: footerLeft } };

  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: C.bg,
        padding: "64px 80px 56px",
        fontFamily: "Wotfard",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", color: C.muted, fontSize: "18px", letterSpacing: "0.06em", marginBottom: "48px" },
            children: breadcrumb,
          },
        },
        {
          type: "div",
          props: {
            style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" },
            children: contentChildren,
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: footerRight ? "space-between" : "flex-start",
              borderTop: `1px solid ${C.divider}`,
              paddingTop: "24px",
              flexShrink: 0,
            },
            children: footerChildren,
          },
        },
      ],
    },
  };
}

async function generate(filePath, layout) {
  const svg = await toSvg(layout);
  const png = toPng(svg);
  save(filePath, png);
}

const ogDir = join(ROOT, "public/assets/openGraph");
const postsDir = join(ogDir, "posts");

console.log("Generating OG images...");

await generate(
  join(ogDir, "home.png"),
  ogLayout({
    breadcrumb: "aayushsood.com",
    title: "Aayush Sood",
    titleSize: "80px",
    lines: [
      { text: "Fullstack Developer", color: C.white, size: "30px", margin: "0 0 12px 0" },
      { text: "Nova Scotia, Canada", color: C.muted, size: "22px" },
    ],
    footerLeft: "Portfolio · Blog · Books · Resume",
  })
);

await generate(
  join(ogDir, "blog.png"),
  ogLayout({
    breadcrumb: "aayushsood.com / blog",
    title: "Blog",
    titleSize: "80px",
    lines: [
      { text: "Stories from life, technology, and anything in between.", color: C.white, size: "26px" },
    ],
    footerLeft: "Aayush Sood",
  })
);

await generate(
  join(ogDir, "books.png"),
  ogLayout({
    breadcrumb: "aayushsood.com / books",
    title: "Books",
    titleSize: "80px",
    lines: [
      { text: "A collection of books I've read and the knowledge they shaped.", color: C.white, size: "26px" },
    ],
    footerLeft: "Aayush Sood",
  })
);

await generate(
  join(ogDir, "resume.png"),
  ogLayout({
    breadcrumb: "aayushsood.com / resume",
    title: "Resume",
    titleSize: "80px",
    lines: [
      { text: "Fullstack Developer", color: C.white, size: "28px", margin: "0 0 16px 0" },
      { text: "Experience · Skills · Education", color: C.muted, size: "22px" },
    ],
    footerLeft: "Aayush Sood",
  })
);

for (const post of posts) {
  const title = post.meta?.title ?? "Blog Post";
  const description = post.meta?.description ?? "";
  const truncDesc =
    description.length > 120 ? description.slice(0, 120) + "..." : description;

  await generate(
    join(postsDir, `${post.slug}.png`),
    ogLayout({
      breadcrumb: "aayushsood.com / blog",
      title,
      lines: truncDesc
        ? [{ text: truncDesc, color: C.white, size: "22px" }]
        : [],
      footerLeft: "Aayush Sood",
      footerRight: post.meta?.date || undefined,
    })
  );
}

console.log("Done!");
