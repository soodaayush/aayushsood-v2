import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "../../../../utils/fetchPosts";
import MdxRenderer from "./MDXRenderer";

import styles from "../../styles/blog/blogPost.module.css";

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.id);

  return {
    title: `${post?.meta.title ?? "Post not Found"} | Aayush Sood`,
    description:
      post?.meta.description || "Explore insights and articles by Aayush Sood",
    openGraph: {
      title: `${post?.meta.title ?? "Post not Found"} | Aayush Sood`,
      description: post?.meta.description || "A blog post by Aayush Sood",
      type: "article",
      publishedTime: post?.meta.date || "",
      url: `https://www.aayushsood.com/blog/${params.id}`,
      images: [
        {
          url: "https://www.aayushsood.com/assets/openGraph/banner.png",
          width: 800,
          height: 600,
          alt: "Aayush Sood's Blog Post",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post?.meta.title ?? "Post not Found"} | Aayush Sood`,
      description: post?.meta.description || "A blog post by Aayush Sood",
      images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
    },
    alternates: {
      canonical: `https://www.aayushsood.com/blog/${params.id}`,
    },
  };
}

export async function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.blogPostContainer}>
      <div className={`content ${styles.blogPostContent}`}>
        <div className={styles.details}>
          <h1 className={`${styles.text} ${styles.title}`}>
            {post.meta.title}
          </h1>
          <p className={styles.text}>{post.meta.date}</p>
        </div>
        <MdxRenderer rawContent={post.content} />
      </div>
    </div>
  );
}
