// app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "../../../../utils/fetchPosts";
import MdxRenderer from "./MDXRenderer";

import styles from "../../styles/blog/blogPost.module.css";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) {
    return {
      title: "Post not Found | Aayush Sood",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: `${post.meta.title} | Aayush Sood`,
    description: post.meta.description,
    openGraph: {
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

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.slug }));
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) {
    notFound();
  }

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
          <MdxRenderer rawContent={post.content} />
        </div>
      </div>
    </div>
  );
}
