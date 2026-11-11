// A Content-Security-Policy is left out on purpose: Google Analytics, Firebase and the inline
// JSON-LD would all need exceptions, and a wrong policy breaks the site silently.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

const nextConfig = {
  images: {
    // Book covers use quality 65; Next only serves the qualities listed here
    qualities: [65, 75],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
