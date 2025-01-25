/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.aayushsood.com/",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,

  additionalPaths: async (config) => {
    const additionalPaths = ["/books", "/resume", "/"];

    return additionalPaths.map((path) => ({
      loc:
        path === "/"
          ? "https://www.aayushsood.com/"
          : `https://www.aayushsood.com${path}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: path === "/" ? 1.0 : 0.7,
    }));
  },

  transform: async (config, path) => {
    return {
      loc:
        path === "/"
          ? "https://www.aayushsood.com/"
          : `https://www.aayushsood.com${path}`,
      changefreq: "monthly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
