import Container from "@/components/common/Container";
import BannerImage from "@/assets/images/banner.png";
import Button from "@/components/common/Button";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

export default function Banner() {
  return (
    <section className="flex pb-12">
      <div className="flex flex-col gap-y-14 items-center justify-center text-gray-500">
        <div className="flex flex-col gap-y-6">
          <FaFacebookF className="cursor-pointer hover:text-black transition duration-300" />
          <FaTwitter className="cursor-pointer hover:text-black transition duration-300" />
          <FaInstagram className="cursor-pointer hover:text-black transition duration-300" />
          <FaPinterest className="cursor-pointer hover:text-black transition duration-300" />
        </div>
        <span className="text-sm font-medium transform -rotate-90 min-w-20 uppercase">
          follow us
        </span>
      </div>
      <div className="p-2 border-2 border-solid border-pink-50 w-full">
        <div
          className="h-[780px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <Container>
            <h4 className="pt-80 text-sm text-red-700 font-medium flex items-center before:block before:w-10 before:h-0.5 before:bg-red-700 before:mr-2">
              NEW TREND
            </h4>
            <h1 className="text-7xl leading-20 max-w-3xl ">
              SUMMER SALE STYLISH <span className="font-bold">WOMENS</span>
            </h1>
            <div className="pb-64">
              <Button text={"DISCOVER MORE"} />
            </div>
          </Container>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end">
        <span className="mb-9 text-sm font-medium transform -rotate-90 min-w-20 uppercase flex items-center before:block before:w-8 before:h-0.5 before:bg-black before:mr-2">
          Scroll
        </span>
      </div>
    </section>
  );
}
