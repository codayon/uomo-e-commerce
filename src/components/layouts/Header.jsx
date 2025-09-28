import { NavLink } from "react-router";
import Container from "../common/Container";
import Flex from "../common/Flex";
import {
  BarsIcon,
  CartIcon,
  HeartIcon,
  SearchIcon,
  UomoLogo,
  UserIcon,
} from "../common/SvgAssets";

const data = {
  menu: [
    { id: 1, to: "/", label: "HOME" },
    { id: 2, to: "shop", label: "SHOP" },
    { id: 3, to: "collection", label: "COLLECTION" },
    { id: 4, to: "journal", label: "JOURNAL" },
    { id: 5, to: "lookbook", label: "LOOKBOOK" },
    { id: 6, to: "pages", label: "PAGES" },
  ],
};

export default function Header() {
  return (
    <section className="py-8">
      <Container>
        <Flex className="justify-between">
          <Flex className="gap-14">
            <UomoLogo />
            <ul className="flex items-center gap-10">
              {data.menu.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `relative group py-2 font-medium text-sm ${
                        isActive ? "text-c32929" : "text-767676"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={`absolute left-0 bottom-0 h-0.5 ${
                            isActive
                              ? "bg-c32929 w-full"
                              : "bg-767676 w-0 group-hover:w-full transition-all ease-out duration-300"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Flex>
          <Flex className="gap-8">
            <SearchIcon />
            <UserIcon />
            <HeartIcon />
            <CartIcon />
            <BarsIcon />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}
