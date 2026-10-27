import "./styles/global/globals.css";

import Header from "./components/global/header";
import Footer from "./components/global/footer";
import CommandPalette from "./components/global/commandPalette";
import MotionProvider from "./components/global/motionProvider";

import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";

import { getPostSummaries } from "../../utils/fetchPosts";

const wotfard = localFont({
  src: "../../public/assets/fonts/wotfard-regular-webfont.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-wotfard",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#12192b" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://www.aayushsood.com"),
  title: "Portfolio | Aayush Sood",
  description:
    "Welcome to my personal portfolio. Discover my skills, projects, interests, and experience.",
  creator: "Aayush Sood",
  keywords: [
    "portfolio",
    "Aayush Sood",
    "developer",
    "programming",
    "tech",
    "web development",
    "software engineer",
    "projects",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  category: "portfolio",
  openGraph: {
    title: "Aayush Sood",
    description: "Aayush Sood's Portfolio",
    url: "https://www.aayushsood.com/",
    siteName: "Aayush Sood",
    locale: "en_US",
    type: "website",
  },
  appleWebApp: {
    title: "Aayush Sood",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Sood",
    description: "Aayush Sood's Portfolio",
  },
  alternates: {
    canonical: "https://www.aayushsood.com/",
    types: {
      "application/rss+xml": "https://www.aayushsood.com/feed.xml",
    },
  },
};

const structuredData = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Aayush Sood",
  url: "https://www.aayushsood.com",
  description:
    "Hi, I'm Aayush And I am a fullstack developer! I'm based in Nova Scotia, Canada, and I'm passionate about Math, Software Engineering, Gaming, and Jiu Jitsu.",
  sameAs: [
    "https://www.linkedin.com/in/soodaayush/",
    "https://github.com/soodaayush",
    "https://www.youtube.com/@soodaayush",
    "https://leetcode.com/u/soodaayush/",
  ],
  image: {
    "@type": "ImageObject",
    url: "https://www.aayushsood.com/assets/welcome/aayush.webp",
  },
  jobTitle: "Fullstack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1 (902)-789-4315",
    contactType: "Developer Support",
    areaServed: "Global",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Halifax",
    addressRegion: "Nova Scotia",
    addressCountry: "Canada",
  },
  knowsAbout: [
    "Web Development",
    "Fullstack Development",
    "Software Engineering",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Competitive Programming",
    "Mathematics",
    "Brazilian Jiu Jitsu",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={wotfard.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MotionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CommandPalette posts={getPostSummaries()} />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />
            <GoogleAnalytics gaId="G-ZSFY8QD3JM" />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
