import cn from "@/utils/cn";
import Flex from "./Flex";
import ImageWrapper from "./ImageWrapper";
import { HeartIcon } from "./SvgAssets";

export default function ProductCard({
  divClassName = "",
  imgClassName = "",
  category = "",
  label = "",
  src = "",
  alt = "",
  price = 0,
}) {
  return (
    <div className="bg-f9f9f9 relative group border">
      <ImageWrapper
        divClassName={cn("bg-f1f1f1", divClassName)}
        imgClassName={cn("w-[300px] aspect-square", imgClassName)}
        src={src}
        alt={alt}
      />
      <button className="bg-white text-222222 shadow absolute bottom-20 left-3 right-3  py-3 px-6 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
        Add to Cart
      </button>
      <div className="p-2">
        <Flex className={"justify-between"}>
          <h4 className="text-767676 text-sm capitalize cursor-pointer">
            {category}
          </h4>
          <HeartIcon />
        </Flex>
        <Flex className="justify-between pt-2 font-medium">
          <h4 className="cursor-pointer w-4/5 truncate">{label}</h4>
          <h4>${price.toFixed(2)}</h4>
        </Flex>
      </div>
    </div>
  );
}
