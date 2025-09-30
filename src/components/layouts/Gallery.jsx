import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import Button from "../common/Button";
import MenuItem from "../common/MenuItem";
import { GallerySkeleton } from "../common/Skeleton";
import ImageWrapper from "../common/ImageWrapper";

const menuData = [
  { id: 1, to: "/", label: "ALL" },
  { id: 2, to: "/", label: "PERFUME" },
  { id: 3, to: "/", label: "DEODORANT" },
  { id: 4, to: "/", label: "SOAP" },
];

export default function Gallery() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization: "API_KEY",
          },
          params: {
            query: "gallery",
            per_page: 12,
            orientation: "square",
          },
        });

        const imageUrls = response.data.photos.map((photo) => {
          return `${photo.src.original}?w=208&h=208&fm=webp&fit=crop`;
        });

        setApiData(imageUrls);
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
        <h3 className="text-4xl text-center">@UOMO</h3>

        <ul className="flex flex-wrap justify-center gap-8 py-8 font-medium w-">
          {menuData.map((item) => (
            <MenuItem
              key={item.id}
              to={item.to}
              label={item.label}
            />
          ))}
        </ul>

        <div className="flex flex-wrap justify-between gap-4">
          {error ? (
            <div className="text-c32929 py-10">
              Failed to load images. Please don't try again. Pexels API key is
              missing.
            </div>
          ) : loading ? (
            Array.from({ length: 12 }).map((_, idx) => (
              <GallerySkeleton key={idx} />
            ))
          ) : (
            apiData.map((url, index) => (
              <ImageWrapper
                key={index}
                src={url}
                alt={`Pexels image ${index}`}
                divClassName="w-52"
                imgClassName="aspect-square"
              />
            ))
          )}
        </div>

        <div className="flex justify-center pt-8">
          <Button label="SEE ALL GALLERY" />
        </div>
      </Container>
    </section>
  );
}
