import "./styles/global/globals.css";

import Header from "./components/global/header";
import Footer from "./components/global/footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12192b",
};

export const metadata = {
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
    images: [
      {
        url: "https://www.aayushsood.com/assets/openGraph/banner.png",
        width: 800,
        height: 600,
        type: "image/png",
        alt: "Blue text on dark background",
      },
    ],
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
    images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
  },
  alternates: {
    canonical: "https://www.aayushsood.com/",
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
};

export const runtime = "edge";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
