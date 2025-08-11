import SvgWrapper from "@/components/common/SvgWrapper";
import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import MenuItem from "@/components/common/MenuItem";
import { IoIosArrowUp } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ImageWrapper from "../common/ImageWrapper";

export default function Footer() {
  return (
    <section className="bg-neutral-200">
      <Container>
        <div className="flex justify-between py-20">
          <div>
            <SvgWrapper>
              <svg
                width="112"
                height="28"
                viewBox="0 0 112 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="99" cy="13" r="13" fill="#C32929" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6716 1.5H14.205V17.53C14.205 18.7667 13.8783 19.77 13.225 20.54C12.5717 21.31 11.58 21.695 10.25 21.695C8.94334 21.695 7.96334 21.31 7.31001 20.54C6.65668 19.77 6.33001 18.7667 6.33001 17.53V1.5H0.415009V17.95C0.415009 19.49 0.660009 20.8317 1.15001 21.975C1.66334 23.1183 2.36334 24.0633 3.25001 24.81C4.16001 25.5333 5.21001 26.0817 6.40001 26.455C7.59001 26.8283 8.87334 27.015 10.25 27.015C11.6267 27.015 12.91 26.8283 14.1 26.455C15.3133 26.0817 16.3633 25.5333 17.25 24.81C18.16 24.0633 18.86 23.1183 19.35 21.975C19.8633 20.8317 20.12 19.49 20.12 17.95V6.94843L14.6716 1.5ZM29.996 13.75C29.996 15.1967 30.276 16.48 30.836 17.6C31.4194 18.6967 32.2244 19.56 33.251 20.19C34.301 20.82 35.526 21.135 36.926 21.135C38.3027 21.135 39.5044 20.82 40.531 20.19C40.5889 20.1553 40.6461 20.1198 40.7025 20.0836L44.94 24.3211C44.1148 24.9203 43.2052 25.4216 42.211 25.825C40.601 26.455 38.8394 26.77 36.926 26.77C34.9894 26.77 33.216 26.455 31.606 25.825C29.996 25.1717 28.596 24.2617 27.406 23.095C26.2394 21.9283 25.3294 20.5517 24.676 18.965C24.046 17.3783 23.731 15.64 23.731 13.75C23.731 11.86 24.0577 10.1333 24.711 8.57C25.1558 7.54235 25.7115 6.60545 26.3782 5.75928L30.743 10.1242C30.245 11.1771 29.996 12.3858 29.996 13.75ZM47.7531 21.4774L43.2391 16.9634C43.6271 16.0009 43.821 14.9298 43.821 13.75C43.821 12.3033 43.541 11.0317 42.981 9.935C42.421 8.815 41.6277 7.94 40.601 7.31C39.5744 6.68 38.3494 6.365 36.926 6.365C35.6195 6.365 34.4654 6.63933 33.4637 7.188L29.3423 3.0666C30.0737 2.59833 30.8632 2.20446 31.711 1.885C33.321 1.255 35.0594 0.940001 36.926 0.940001C38.816 0.940001 40.5544 1.255 42.141 1.885C43.751 2.49167 45.151 3.36667 46.341 4.51C47.531 5.65334 48.4527 7.00667 49.106 8.57C49.7594 10.1333 50.086 11.86 50.086 13.75C50.086 15.64 49.7594 17.3783 49.106 18.965C48.7463 19.8709 48.2953 20.7084 47.7531 21.4774ZM60.1761 13.505L58.7061 26H52.4761L56.4311 0.275002L66.8611 15.22L77.3261 0.275002L81.2811 26H75.0511L73.5811 13.505L66.8611 23.725L60.1761 13.505Z"
                  fill="#222222"
                />
              </svg>
            </SvgWrapper>
            <p className="max-w-72 pt-12 pb-10 text-sm leading-6">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>
            <p className="max-w-28 font-medium text-sm leading-6">
              sale@uomo.com +1 246-345-0695
            </p>
            <Flex className={"gap-x-8 pt-14"}>
              <FaFacebookF className="hover:text-gray-500 cursor-pointer" />
              <FaTwitter className="hover:text-gray-500 cursor-pointer" />
              <FaInstagram className="hover:text-gray-500 cursor-pointer" />
              <FaYoutube className="hover:text-gray-500 cursor-pointer" />
              <FaPinterest className="hover:text-gray-500 cursor-pointer" />
            </Flex>
          </div>
          {/* company */}
          <div>
            <h4 className="text-lg font-medium pb-12">COMPANY</h4>
            <ul className="flex flex-col gap-y-6 text-sm">
              <MenuItem label={"About Us"} to={"/"} />
              <MenuItem label={"Careers"} to={"/"} />
              <MenuItem label={"Affiliates"} to={"/"} />
              <MenuItem label={"Blog"} to={"/"} />
              <MenuItem label={"Contact Us"} to={"/"} />
            </ul>
          </div>
          {/* shop */}
          <div>
            <h4 className="text-lg font-medium pb-12">SHOP</h4>
            <ul className="flex flex-col gap-y-6 text-sm">
              <MenuItem label={"New Arrivals"} to={"/"} />
              <MenuItem label={"Accessories"} to={"/"} />
              <MenuItem label={"Men"} to={"/"} />
              <MenuItem label={"Women"} to={"/"} />
              <MenuItem label={"Shop All"} to={"/"} />
            </ul>
          </div>
          {/* help */}
          <div>
            <h4 className="text-lg font-medium pb-12">HELP</h4>
            <ul className="flex flex-col gap-y-6 text-sm">
              <MenuItem label={"Customer Service"} to={"/"} />
              <MenuItem label={"My Account"} to={"/"} />
              <MenuItem label={"Find a Store"} to={"/"} />
              <MenuItem label={"Legal & Privacy"} to={"/"} />
              <MenuItem label={"Contact"} to={"/"} />
              <MenuItem label={"Gift Card"} to={"/"} />
            </ul>
          </div>
          {/* subscribe */}
          <div>
            <h4 className="text-lg font-medium pb-12">SUBSCRIBE</h4>
            <p className="max-w-[21rem] pb-7 text-sm">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Your email address"
                className="bg-white py-4.5 pl-5 pr-12 w-full"
              />
              <button className="absolute top-0 right-0 h-full px-4 cursor-pointer font-medium">
                JOIN
              </button>
            </div>
            <h5 className="pt-10 pb-3 font-medium">Secure Payments</h5>
            <div>
              <ImageWrapper src="/src/assets/images/secure-payments.png" alt="se" />
            </div>
          </div>
        </div>
        <Flex className={"justify-between text-sm border-t-2 border-gray-c"}>
          <span>©2020 Uomo</span>
          <Flex className={"py-7"}>
            <span className="mr-6 text-gray-500">Language</span>
            <Flex className={"gap-x-4"}>
              United Kingdom | English <IoIosArrowUp className="text-lg" />
            </Flex>
            <span className="ml-8 mr-6 text-gray-500">Currency</span>
            <Flex className={"gap-x-4"}>
              $ USD <IoIosArrowUp className="text-lg" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}
