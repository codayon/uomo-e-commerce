import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

import Container from "../common/Container";
import Button from "../common/Button";

const data = {
  social: [
    { id: 1, icon: <FaFacebookF />, url: "https://www.facebook.com/" },
    { id: 2, icon: <FaTwitter />, url: "https://www.twitter.com/" },
    { id: 3, icon: <FaInstagram />, url: "https://www.instagram.com/" },
    { id: 4, icon: <FaPinterest />, url: "https://www.pinterest.com/" },
  ],
};

export default function Banner() {
  return (
    <section className="flex pb-12">
      <div className="text-222222 flex flex-col items-center justify-center gap-y-14">
        <div className="text-767676 flex flex-col gap-6">
          {data.social.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="hover:text-black cursor-pointer transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <span className="text-767676 min-w-20 transform -rotate-90 text-sm font-medium">
          FOLLOW US
        </span>
      </div>
      <div className="border-f5e6e0 w-full p-2 border-2">
        <div className="h-[780px] bg-[url('https://res.cloudinary.com/droh6dnbd/image/upload/v1758975697/hero_bg_povvju.webp')] bg-no-repeat bg-center bg-cover">
          <Container>
            <h4 className="text-c32929 before:bg-c32929 flex items-center pt-80 before:block before:w-10 before:h-0.5 before:mr-2 text-sm font-medium">
              NEW TREND
            </h4>
            <h1 className="text-7xl leading-20 max-w-3xl ">
              SUMMER SALE STYLISH <span className="font-bold">WOMENS</span>
            </h1>
            <div className="pb-64">
              <Button label="DISCOVER MORE" />
            </div>
          </Container>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end">
        <span className="before:bg-black flex items-center min-w-20 mb-10 before:block before:w-8 before:h-0.5 before:mr-2 transform -rotate-90 text-sm font-medium">
          SCROLL
        </span>
      </div>
    </section>
  );
}
