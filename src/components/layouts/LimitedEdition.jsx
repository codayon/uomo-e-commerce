import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Container from "../common/Container";
import ProductCard from "../common/ProductCard";
import { ProductCardSkeleton } from "../common/Skeleton";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function LimitedEdition() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?skip=8&limit=8"
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

  return (
    <section className="mb-20">
      <Container>
        <h3 className="text-4xl text-center mb-10">
          LIMITED <span className="font-bold">EDITION</span>
        </h3>

        <div className="relative">
          {error ? (
            <div className="text-c32929 py-10">
              Failed to load products. Please try again.
            </div>
          ) : (
            <Swiper
              modules={[Navigation]}
              spaceBetween={40}
              slidesPerView={4}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {loading
                ? Array.from({ length: 8 }).map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <ProductCardSkeleton />
                    </SwiperSlide>
                  ))
                : apiData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ProductCard
                        src={item.thumbnail}
                        alt={item.title}
                        category={item.category}
                        label={item.title}
                        price={item.price}
                      />
                    </SwiperSlide>
                  ))}
            </Swiper>
          )}

          {!error && (
            <>
              <button
                ref={prevRef}
                className="text-767676 text-3xl swiper-prev absolute -left-12 top-1/2 cursor-pointer"
              >
                <BsChevronLeft />
              </button>
              <button
                ref={nextRef}
                className="text-767676 text-3xl swiper-prev absolute -right-12 top-1/2 cursor-pointer"
              >
                <BsChevronRight />
              </button>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
