"use client";

import Image from "next/image";

export default function CustomImage({ src, alt, ...props }) {
  return (
    <Image
      style={{ border: "2px solid #30353b", borderRadius: "10px" }}
      src={src}
      alt={alt}
      width={2500}
      height={1}
      layout="intrinsic"
      {...props}
    />
  );
}
