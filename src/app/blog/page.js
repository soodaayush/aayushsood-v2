import BlogList from "../components/blog/blogList";
import posts from "../../../public/posts.json";

export const metadata = {
  title: "Blog | Aayush Sood",
  description:
    "Browse my stories ranging from life to technology to anything I desire to write about.",
  creator: "Aayush Sood",
  keywords: [
    "blog",
    "Aayush Sood",
    "writing",
    "technology",
    "software engineering",
    "life",
    "thoughts",
    "articles",
  ],
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

const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Aayush Sood's Blog",
  url: "https://www.aayushsood.com/blog",
  description:
    "Browse my stories ranging from life to technology to anything I desire to write about.",
  author: {
    "@type": "Person",
    name: "Aayush Sood",
    url: "https://www.aayushsood.com",
  },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    url: `https://www.aayushsood.com/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Aayush Sood",
    },
  })),
};

export default function Blog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
      <BlogList />
    </>
  );
}
