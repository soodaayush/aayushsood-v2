import Image from "next/image";
import CodeBlock from "./codeBlock";

const MDXImage = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width || 800}
    height={height || 400}
    layout="responsive"
  />
);

export const MDXComponents = {
  img: MDXImage,
  pre: CodeBlock,
};
