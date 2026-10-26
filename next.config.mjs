const nextConfig = {
  // The posts API validates slugs against content/posts, so ship those files with its function
  outputFileTracingIncludes: {
    "/api/posts/[id]": ["./content/posts/**/*"],
  },
};

export default nextConfig;
