import Flex from "@/components/common/Flex";
import SvgWrapper from "@/components/common/SvgWrapper";
import ImageWrapper from "./ImageWrapper";
import { twMerge } from "tailwind-merge";

type ProductCardProps = {
  className?: string;
  imgClassName?: string;
  productName: string;
  category: string;
  src: string;
  alt: string;
  price?: number;
  prevPrice?: number;
  offerPrice?: number;
};

export default function ProductCard({
  className,
  imgClassName,
  productName,
  category,
  src,
  alt,
  price,
  prevPrice,
  offerPrice,
}: ProductCardProps) {
  return (
    <div className="w-[330px]">
      <ImageWrapper
        className={twMerge("h-[400px]", className)}
        src={src}
        alt={alt}
        imgClassName={imgClassName}
      />
      <div className="pt-3">
        <Flex className={"justify-between"}>
          <h5 className="text-gray-500 text-sm">{category}</h5>
          <SvgWrapper>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7145 1.64647C12.9744 -0.0931851 10.1436 -0.0931851 8.40393 1.64647L7.99986 2.0503L7.59603 1.64647C5.85637 -0.0934205 3.02531 -0.0934205 1.28565 1.64647C-0.418689 3.35081 -0.429756 6.05236 1.25998 7.93071C2.80114 9.64329 7.34643 13.3432 7.53928 13.4998C7.6702 13.6063 7.82773 13.6581 7.98432 13.6581C7.9895 13.6581 7.99468 13.6581 7.99963 13.6578C8.16163 13.6654 8.32481 13.6098 8.45997 13.4998C8.65282 13.3432 13.1986 9.64329 14.7402 7.93048C16.4297 6.05236 16.4186 3.35081 14.7145 1.64647ZM13.69 6.98553C12.4884 8.32042 9.18546 11.0735 7.99963 12.0505C6.8138 11.0738 3.51155 8.32089 2.31018 6.98577C1.13142 5.67561 1.12035 3.80974 2.28452 2.64557C2.87908 2.05125 3.6599 1.75385 4.44072 1.75385C5.22154 1.75385 6.00236 2.05101 6.59693 2.64557L7.48512 3.53377C7.59085 3.6395 7.72413 3.7026 7.86399 3.72474C8.09099 3.77348 8.33729 3.71014 8.51389 3.53401L9.40256 2.64557C10.5919 1.45668 12.5266 1.45692 13.7152 2.64557C14.8794 3.80974 14.8683 5.67561 13.69 6.98553Z"
                fill="#767676"
              />
            </svg>
          </SvgWrapper>
        </Flex>
        <h4>{productName}</h4>
        {price !== undefined ? (
          <h4>${price.toFixed(2)}</h4>
        ) : prevPrice !== undefined && offerPrice !== undefined ? (
          <h4 className="text-red-700">
            <span className="text-gray-500 line-through mr-2">
              ${prevPrice.toFixed(2)}
            </span>
            ${offerPrice.toFixed(2)}
          </h4>
        ) : null}
      </div>
    </div>
  );
}
