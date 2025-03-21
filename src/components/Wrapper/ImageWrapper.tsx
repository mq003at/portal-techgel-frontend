export interface ImageWrapperProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  title: string;
}

export default function ImageWrapper({
  src,
  alt,
  title,
  height = 400,
  width = 800,
}: ImageWrapperProps) {
  return (
    <img src={src} alt={alt} title={title} width={width} height={height} />
  );
}
