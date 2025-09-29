import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

import { UomoLogo } from "../common/SvgAssets";
import Flex from "../common/Flex";
import Container from "../common/Container";
import MenuItem from "../common/MenuItem";

const data = {
  menu: [
    {
      id: 1,
      title: "COMPANY",
      items: [
        { id: 1, to: "/", label: "About Us" },
        { id: 2, to: "/", label: "Careers" },
        { id: 3, to: "/", label: "Affiliates" },
        { id: 4, to: "/", label: "Blog" },
        { id: 5, to: "/", label: "Contact Us" },
      ],
    },
    {
      id: 2,
      title: "SHOP",
      items: [
        { id: 1, to: "/", label: "New Arrivals" },
        { id: 2, to: "/", label: "Accessories" },
        { id: 3, to: "/", label: "Men" },
        { id: 4, to: "/", label: "Women" },
        { id: 5, to: "/", label: "Shop All" },
      ],
    },
    {
      id: 3,
      title: "HELP",
      items: [
        { id: 1, to: "/", label: "Customer Service" },
        { id: 2, to: "/", label: "My Account" },
        { id: 3, to: "/", label: "Find a Store" },
        { id: 4, to: "/", label: "Legal & Privacy" },
        { id: 5, to: "/", label: "Contact" },
        { id: 6, to: "/", label: "Gift Card" },
      ],
    },
  ],
  social: [
    { id: 1, url: "https://www.facebook.com/", icon: <FaFacebookF /> },
    { id: 2, url: "https://www.twitter.com/", icon: <FaTwitter /> },
    { id: 3, url: "https://www.instagram.com/", icon: <FaInstagram /> },
    { id: 4, url: "https://www.youtube.com/", icon: <FaYoutube /> },
    { id: 5, url: "https://www.pinterest.com/", icon: <FaPinterest /> },
  ],
};

export default function Footer() {
  return (
    <section className="bg-e4e4e4">
      <Container>
        <div className="flex justify-between py-16">
          <div className="flex flex-col gap-12">
            <UomoLogo />
            <div className="flex flex-col gap-6">
              <p className="max-w-72 text-sm leading-6">
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </p>
              <p className="max-w-28 font-medium text-sm leading-6">
                sale@uomo.com +1 246-345-0695
              </p>
            </div>
            <Flex className="gap-8">
              {data.social.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="hover:text-767676 cursor-pointer transition duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </Flex>
          </div>

          {data.menu.map((section) => (
            <div key={section.id}>
              <h4 className="pb-12 text-lg font-medium">{section.title}</h4>
              <ul className="flex flex-col gap-6 text-sm">
                {section.items.map((item) => (
                  <MenuItem
                    key={item.id}
                    to={item.to}
                    label={item.label}
                  />
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="pb-12 text-lg font-medium">SUBSCRIBE</h4>
            <p className="max-w-72 pb-6 text-sm">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="relative font-sm">
              <input
                type="text"
                placeholder="Your email address"
                className="bg-white w-full py-4 pl-5 pr-16"
              />
              <button className="absolute h-full top-0 right-4 font-medium cursor-pointer">
                JOIN
              </button>
            </div>
            <h4 className="pt-10 pb-3 font-medium">Secure Payments</h4>
            <img
              src="https://res.cloudinary.com/droh6dnbd/image/upload/v1759064570/secure_payments_s91fwx.webp"
              alt="secure_payments"
            />
          </div>
        </div>
        <Flex className="border-cfcdcd justify-between text-sm border-t">
          <span>© 2025 Uomo</span>
          <Flex className="py-6">
            <span className="mr-6 text-767676">Language</span>
            <Flex className="gap-x-4">
              United Kingdom | English <IoIosArrowUp className="text-lg" />
            </Flex>
            <span className="ml-8 mr-6 text-767676">Currency</span>
            <Flex className="gap-x-4">
              $ USD <IoIosArrowUp className="text-lg" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}
