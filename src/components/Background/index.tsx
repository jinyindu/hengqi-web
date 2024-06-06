import CDNImage from "./cdnImage";
import { memo } from "react";
import { ImageProps } from "next/image";

const Background: React.FC<ImageProps> = memo((props) => {
  const { src, ...rest } = props;
  return (
    <CDNImage
      src={src}
      fill
      style={{
        objectFit: 'cover',
        objectPosition: 'center'
      }}
      sizes="100vw"
      {...rest}
    />
  );
});

Background.displayName = "Background";
export default Background;
