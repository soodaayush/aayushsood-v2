import { marked } from "marked";
import { notFound } from "next/navigation";
import posts from "../../../../public/posts.json";

import BackToTopButton from "@/app/components/blog/backToTopButton";
import TableOfContents from "@/app/components/blog/TableOfContents";

import styles from "../../styles/blog/blogPost.module.css";

function slugify(anyText) {
  const text = (anyText ?? "").toString().replace(/\s+/g, " ").trim();
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getTocFromMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const headings = [];

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) {
      headings.push({
        text: trimmed.slice(2).trim(),
        depth: 1,
        id: slugify(trimmed.slice(2).trim()),
      });
    } else if (trimmed.startsWith("## ")) {
      headings.push({
        text: trimmed.slice(3).trim(),
        depth: 2,
        id: slugify(trimmed.slice(3).trim()),
      });
    } else if (trimmed.startsWith("### ")) {
      headings.push({
        text: trimmed.slice(4).trim(),
        depth: 3,
        id: slugify(trimmed.slice(4).trim()),
      });
    }
  });

  return headings.filter((h) => h.depth >= 1 && h.depth <= 4);
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
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
          url: `https://www.aayushsood.com/assets/openGraph/posts/${id}.png`,
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.meta.title} | Aayush Sood`,
      description: post.meta.description,
      images: [`https://www.aayushsood.com/assets/openGraph/posts/${id}.png`],
    },
    alternates: {
      canonical: `https://www.aayushsood.com/blog/${id}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const post = posts.find((p) => p.slug === id);
  if (!post) return notFound();

  const toc = getTocFromMarkdown(post.content);

  let htmlContent = marked.parse(post.content);
  toc.forEach(({ id }) => {
    htmlContent = htmlContent.replace(/<h([1-4])>/, `<h$1 id="${id}">`);
  });
  htmlContent = htmlContent.replace(
    /<a /g,
    '<a target="_blank" rel="noopener noreferrer" '
  );
  htmlContent = htmlContent.replace(/<img /g, '<img decoding="async" ');

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    url: `https://www.aayushsood.com/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Aayush Sood",
      url: "https://www.aayushsood.com",
    },
    publisher: {
      "@type": "Person",
      name: "Aayush Sood",
      url: "https://www.aayushsood.com",
    },
    image: `https://www.aayushsood.com/assets/openGraph/posts/${post.slug}.png`,
    keywords: post.meta.keywords,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: "Aayush Sood's Blog",
      url: "https://www.aayushsood.com/blog",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <div className={styles.blogPostContainer}>
        <div className={`content ${styles.blogPostContentContainer}`}>
          <div className={styles.details}>
            <h1 className={`${styles.text} ${styles.title}`}>
              {post.meta.title}
            </h1>
            <p className={styles.text}>{post.meta.date}</p>
          </div>
          <div className={styles.blogPostRow}>
            <div className={styles.blogPostContent}>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
              <BackToTopButton />
            </div>
            {toc.length >= 2 && (
              <aside className={styles.blogPostToc}>
                <TableOfContents items={toc} postId={post.slug} />
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
