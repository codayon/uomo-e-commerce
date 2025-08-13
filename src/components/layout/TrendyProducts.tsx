import Container from "@/components/common/Container";
import MenuItem from "@/components/common/MenuItem";
import Button from "@/components/common/Button";
import ProductCard from "@/components/common/ProductCard";
import productsData from "@/api/productsData.json";

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
          {productsData.map((item) => (
            <ProductCard
              key={item.id}
              src={item.image}
              alt={item.name}
              className="bg-gray-100"
              category={item.category}
              productName={item.name}
              price={item.price}
              prevPrice={item.prevPrice}
              offerPrice={item.offerPrice}
            />
          ))}
        </div>
        <div className="flex justify-center pt-8 pb-12">
          <Button text={"SEE ALL PRODUCT"} className={"group"} />
        </div>
      </Container>
    </section>
  );
}
