import BlogList from "../components/blog/blogList";

export const metadata = {
  title: "Blog | Aayush Sood",
  description:
    "Browse my stories ranging from life to technology to anything I desire to write about.",
  creator: "Aayush Sood",
  openGraph: {
    title: "Blog | Aayush Sood",
    description:
      "Browse my stories ranging from life to technology to anything I desire to write about.",
    url: "https://www.aayushsood.com/blog",
    siteName: "Aayush Sood's Blog",
    images: [
      {
        url: "https://www.aayushsood.com/assets/openGraph/banner.png",
        width: 800,
        height: 600,
        alt: "Aayush Sood's Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Aayush Sood",
    description:
      "Browse my stories ranging from life to technology to anything I desire to write about.",
    images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
  },
  alternates: {
    canonical: "https://www.aayushsood.com/blog",
  },
};

export default function Blog() {
  return <BlogList />;
}
