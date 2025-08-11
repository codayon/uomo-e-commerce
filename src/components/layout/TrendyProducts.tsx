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
        <ul className="flex gap-8 justify-center py-10 text-gray-500">
          <MenuItem
            to="/"
            label={"ALL"}
            className={"text-black"}
            classBottom={"w-3/5"}
          />
          <MenuItem to="/" label={"NEW ARRIVALS"} />
          <MenuItem to="/" label={"BEST SELLER"} />
          <MenuItem to="/" label={"TOP RATING"} />
        </ul>
        <div className={"flex flex-wrap gap-y-8 justify-between"}>
          <ProductCard
            src=""
            alt=""
            className="bg-gray-100"
            category="Dresses"
            productName="Cropped Faux Leather Jacket"
            price={29}
          />
          <ProductCard
            src=""
            alt=""
            className="bg-gray-100"
            category="Dresses"
            productName="Calvin Shorts"
            price={62}
          />
          <ProductCard
            src=""
            alt=""
            className="bg-gray-200"
            category="Dresses"
            productName="Kirby T-Shirt"
            price={17}
          />
          <ProductCard
            src=""
            alt=""
            className="bg-gray-100"
            category="Dresses"
            productName="Cableknit Shawl"
            prevPrice={129}
            offerPrice={99}
          />
          <ProductCard
            src=""
            alt=""
            className="bg-gray-100"
            category="Dresses"
            productName="Colorful Jacket"
            price={29}
          />
          <ProductCard
            src=""
            alt=""
            className="bg-gray-100"
            category="Dresses"
            productName="Shirt In Botanical Cheetah Print"
            price={62}
          />
          <ProductCard
            src=""
            alt=""
            className="bg-gray-200"
            category="Dresses"
            productName="Cotton Jersey T-Shirt"
            price={17}
          />
          <ProductCard
            src=""
            alt=""
            className="bg-gray-100"
            category="Dresses"
            productName="Zessi Dresses"
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
