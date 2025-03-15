/** @type {import('next-sitemap').IConfig} */
const fs = require("fs");
const path = require("path");

const siteUrl = "https://www.aayushsood.com/";

const blogJsonPath = path.join(__dirname, "public/posts.json");
const allBlogs = JSON.parse(fs.readFileSync(blogJsonPath, "utf8"));

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,

  exclude: ["/blog", "/books", "/resume", "/"],

  additionalPaths: async () => {
    const additionalPaths = ["/blog", "/books", "/resume", "/"];

    const blogPaths = allBlogs.map((blog) => ({
      loc: `${siteUrl}/blog/${blog.slug}`,
      lastmod: new Date(blog.meta.date).toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    }));

    return [
      ...additionalPaths.map((path) => ({
        loc: `${siteUrl}${path === "/" ? "" : path}`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: path === "/" ? 1.0 : 0.7,
      })),
      ...blogPaths,
    ];
  },
};
