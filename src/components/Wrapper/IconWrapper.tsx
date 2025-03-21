export interface IconWrapperProps {
  width?: number;
  height?: number;
  src: string;
  alt?: string;
  title: string;
  color?: string;
}

export default function IconWrapper({
  src,
  title,
  alt = title,
  height = 24,
  width = 24,
  color = "text-gray-500",
}: IconWrapperProps) {
  const iconElement = (
    <img
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      className={`${color}`}
    />
  );

  return (
    <div className="inline-flex items-center" title={title} aria-label={alt}>
      {iconElement}
    </div>
  );
}
