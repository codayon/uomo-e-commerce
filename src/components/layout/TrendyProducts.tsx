import Container from "@/components/common/Container";
import MenuItem from "@/components/common/MenuItem";
import Button from "@/components/common/Button";
import ProductCard from "@/components/common/ProductCard";

export default function TrendyProducts() {
  return (
    <section className="py-12">
      <Container>
        <h3 className="text-4xl text-center">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h3>
        <ul className="flex gap-8 justify-center py-10 text-gray-b">
          <MenuItem
            to="/"
            label={"ALL"}
            className={"text-black-a"}
            classBottom={"w-3/5"}
          />
          <MenuItem to="/" label={"NEW ARRIVALS"} />
          <MenuItem to="/" label={"BEST SELLER"} />
          <MenuItem to="/" label={"TOP RATING"} />
        </ul>
        <div className={"flex flex-wrap gap-y-8 justify-between"}>
          <ProductCard
            imgClass={"bg-gray-100"}
            categoryName={"Dresses"}
            productName={"Cropped Faux Leather Jacket"}
            normalPrice={29}
          />
          <ProductCard
            imgClass={"bg-gray-100"}
            categoryName={"Dresses"}
            productName={"Calvin Shorts"}
            normalPrice={62}
          />
          <ProductCard
            imgClass={"bg-gray-200"}
            categoryName={"Dresses"}
            productName={"Kirby T-Shirt"}
            normalPrice={17}
          />
          <ProductCard
            imgClass={"bg-gray-100"}
            categoryName={"Dresses"}
            productName={"Cableknit Shawl"}
            prevPrice={129}
            offerPrice={99}
          />
          <ProductCard
            imgClass={"bg-gray-100"}
            categoryName={"Dresses"}
            productName={"Colorful Jacket"}
            normalPrice={29}
          />
          <ProductCard
            imgClass={"bg-gray-100"}
            categoryName={"Dresses"}
            productName={"Shirt In Botanical Cheetah Print"}
            normalPrice={62}
          />
          <ProductCard
            imgClass={"bg-gray-200"}
            categoryName={"Dresses"}
            productName={"Cotton Jersey T-Shirt"}
            normalPrice={17}
          />
          <ProductCard
            imgClass={"bg-gray-100"}
            categoryName={"Dresses"}
            productName={"Zessi Dresses"}
            prevPrice={129}
            offerPrice={99}
          />
        </div>
        <div className="flex justify-center pt-8 pb-12">
          <Button text={"SEE ALL PRODUCT"} className={"group"} />
        </div>
      </Container>
    </section>
  );
}
