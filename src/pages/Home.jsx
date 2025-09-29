import Banner from "@/components/layouts/Banner";
import Categories from "@/components/layouts/Categories";
import DealOfTheWeek from "@/components/layouts/DealOfTheWeek";
import TrendyProducts from "@/components/layouts/TrendyProducts";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <TrendyProducts />
      <DealOfTheWeek />
    </>
  );
}
