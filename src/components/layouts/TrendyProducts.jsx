import axios from "axios";
import { useEffect, useState } from "react";

import Button from "../common/Button";
import Container from "../common/Container";
import MenuItem from "../common/MenuItem";
import ProductCard from "../common/ProductCard";

const data = {
  menu: [
    { id: 1, to: "/", label: "ALL" },
    { id: 2, to: "/", label: "NEWARRIVALS" },
    { id: 3, to: "/", label: "BEST SELLER" },
    { id: 4, to: "/", label: "TOP RATING" },
  ],
};

export default function TrendyProducts() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=8"
        );
        setApiData(response.data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-12">
      <Container>
        <h3 className="text-4xl text-center">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h3>
        <ul className="flex justify-center gap-8 py-10 font-medium">
          {data.menu.map((item) => (
            <MenuItem
              key={item.id}
              to={item.to}
              label={item.label}
            />
          ))}
        </ul>
        <div className={"flex flex-wrap gap-10 justify-between"}>
          {apiData.map((item) => (
            <ProductCard
              key={item.id}
              src={item.thumbnail}
              alt={item.title}
              category={item.category}
              label={item.title}
              price={item.price}
              divClassName="bg-f1f1f1"
            />
          ))}
        </div>
        <div className="flex justify-center pt-8 pb-12">
          <Button label="SEE ALL PRODUCT" />
        </div>
      </Container>
    </section>
  );
}
