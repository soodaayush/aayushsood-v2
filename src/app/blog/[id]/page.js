import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import styles from "../../styles/blog/blogPost.module.css";

// Fetch the blog post data based on the ID (slug)
export default async function BlogPost({ params }) {
  const { id } = params;

  const filePath = path.join(process.cwd(), "src/app/posts", `${id}.mdx`);

  try {
    const content = await fs.readFile(filePath, "utf-8");
    console.log("File Content:", content);

    const { content: mdxContent, data: frontmatter } = matter(content);
    console.log("Parsed Frontmatter:", frontmatter);
    console.log("MDX Content:", mdxContent);

    // Check if there is MDX content
    if (!mdxContent) {
      throw new Error("MDX content is empty.");
    }

    // // Compile MDX content to React component
    // const { compiledSource } = await compileMDX({
    //   source: mdxContent,
    // });

    // // If no compiledSource is returned, throw an error
    // if (!compiledSource) {
    //   throw new Error("MDX compilation failed. No compiled source returned.");
    // }

    // // Log the compiled source for debugging
    // console.log("Compiled Source:", compiledSource); // Debugging compiled source

    // Return the blog post content
    return (
      <div className={styles.blogPostContainer}>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div>
          <MDXRemote source={content} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error reading or compiling MDX file:", error);
    return <p>Post not found. Please check the console for errors.</p>;
  }
}
