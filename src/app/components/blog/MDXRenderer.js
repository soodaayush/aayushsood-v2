"use client";

import { useState, useEffect } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";

import styles from "../../styles/blog/blogPost.module.css";

const components = {
  img: dynamic(() => import("../../MDXComponents/image"), { ssr: false }),
  p: dynamic(() => import("../../MDXComponents/text"), { ssr: false }),
  a: dynamic(() => import("../../MDXComponents/link"), { ssr: false }),
  pre: dynamic(() => import("../../MDXComponents/codeBlock"), { ssr: false }),
  ul: dynamic(() => import("../../MDXComponents/list"), { ssr: false }),
};

export default function MdxRenderer({ rawContent }) {
  const [mdxSource, setMdxSource] = useState(null);

  useEffect(() => {
    async function processMdx() {
      try {
        const serialized = await serialize(rawContent, {
          mdxOptions: {
            format: "mdx",
          },
        });
        setMdxSource(serialized);
      } catch (error) {
        console.error("MDX processing error:", error);
      }
    }
    processMdx();
  }, [rawContent]);

  if (!mdxSource) {
    return <div>Loading content...</div>;
  }

  return (
    <div className={styles.mdxContainer}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}
