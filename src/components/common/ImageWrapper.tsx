import { twMerge } from "tailwind-merge";

type ImageWrapperProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export default function ImageWrapper({
  src,
  alt,
  className,
  imgClassName,
}: ImageWrapperProps) {
  return (
    <div className={twMerge("overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className={twMerge("w-full h-full", imgClassName)}
      />
    </div>
  );
}
