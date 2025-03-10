// components/CustomImage.js
import Image from "next/image";

export default function CustomImage({ src, alt, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={300}
      layout="intrinsic"
      {...props}
    />
  );
}
