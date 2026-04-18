const nextConfig = {
  serverExternalPackages: ["@resvg/resvg-js", "satori"],
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
