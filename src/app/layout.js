import "./styles/global/globals.css";

import Header from "./components/global/header";
import Footer from "./components/global/footer";

export const metadata = {
  title: "Aayush Sood",
  description: "Aayush Sood's Portfolio",
  creator: "Aayush Sood",
  keywords: [
    "portfolio",
    "Aayush Sood",
    "developer",
    "programming",
    "projects",
  ],
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
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon/android-chrome-512x512.png",
    shortcut: "/favicon/android-chrome-192x192.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Sood",
    description: "Aayush Sood's Portfolio",
    images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
