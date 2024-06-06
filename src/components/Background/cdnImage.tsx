import Image, { ImageLoaderProps, ImageProps } from "next/image";

const isBuild = process.env.NODE_ENV === "production";
const isQA = process.env.NEXT_PUBLIC_ENV === "qa";

export const CDNLoader = ({ src, width, quality = 100 }: ImageLoaderProps) => {
  return src;
};

function CDNImage(props: ImageProps) {
  return <Image loader={isBuild ? CDNLoader : undefined} {...props} alt="" />;
}

export default CDNImage;
