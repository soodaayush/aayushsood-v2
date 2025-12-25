import { marked } from "marked";
import { notFound } from "next/navigation";
import posts from "../../../../public/posts.json";

import BackToTopButton from "@/app/components/blog/backToTopButton";

import styles from "../../styles/blog/blogPost.module.css";

export async function generateMetadata({ params }) {
  const resolvedParams = await params; // <-- unwrap the promise
  const { id } = resolvedParams;
  const post = posts.find((p) => p.slug === id);

  if (!post) {
    return {
      title: "Post not Found | Aayush Sood",
      description: "The requested blog post could not be found",
    };
  }

  return {
    metadataBase: new URL("https://www.aayushsood.com"),
    title: `${post.meta.title} | Aayush Sood`,
    authors: [{ name: "Aayush Sood" }],
    description: post.meta.description,
    keywords: post.meta.keywords,
    openGraph: {
      locale: "en_US",
      title: `${post.meta.title} | Aayush Sood`,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      url: `https://www.aayushsood.com/blog/${id}`,
      images: [
        {
          url: "https://www.aayushsood.com/assets/openGraph/banner.png",
          width: 800,
          height: 600,
          alt: "Aayush Sood's Blog Post",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.meta.title} | Aayush Sood`,
      description: post.meta.description,
      images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
    },
    alternates: {
      canonical: `https://www.aayushsood.com/blog/${id}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params; // <-- unwrap the promise
  const { id } = resolvedParams;

  const post = posts.find((p) => p.slug === id);
  if (!post) return notFound();

  let htmlContent = marked.parse(post.content);

  htmlContent = htmlContent.replace(
    /<a /g,
    '<a target="_blank" rel="noopener noreferrer" '
  );

  return (
    <div className={styles.blogPostContainer}>
      <div className={`content ${styles.blogPostContentContainer}`}>
        <div className={styles.blogPostContent}>
          <div className={styles.details}>
            <h1 className={`${styles.text} ${styles.title}`}>
              {post.meta.title}
            </h1>
            <p className={styles.text}>{post.meta.date}</p>
          </div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <BackToTopButton />
        </div>
      </div>
    </div>
  );
}
