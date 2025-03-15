// next.config.js
const nextConfig = {
  webpack: (config) => {
    // Add fallback for Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        // Exclude MDX esbuild from Turbopack processing
        ".*node_modules/@mdx-js/esbuild.*": { raw: {} },
      },
    },
  },
};

export default nextConfig;
