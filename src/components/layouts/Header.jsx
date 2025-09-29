import Container from "../common/Container";
import Flex from "../common/Flex";

import MenuItem from "../common/MenuItem";
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
                <MenuItem
                  key={item.id}
                  to={item.to}
                  label={item.label}
                  isNav
                />
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
