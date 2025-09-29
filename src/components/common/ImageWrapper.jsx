import cn from "@/utils/cn";

export default function ImageWrapper({
  divClassName = "",
  imgClassName = "",
  src = "",
  alt = "",
}) {
  return (
    <div className={cn("overflow-hidden", divClassName)}>
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-auto object-cover object-center", imgClassName)}
      />
    </div>
  );
}
