import { ServiceHeadphone, ServiceShield } from "../common/SvgAssets";
import Container from "../common/Container";
import Flex from "../common/Flex";

const data = [
  {
    id: 1,
    icon: <ServiceShield />,
    title: "FAST AND FREE DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: <ServiceHeadphone />,
    title: "24/7 CUSTOMER SUPPORT",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: <ServiceShield />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

export default function Services() {
  return (
    <section className="mb-20">
      <Container>
        <Flex className="justify-between">
          {data.map((service) => (
            <Flex
              key={service.id}
              className="flex-col justify-center gap-6"
            >
              {service.icon}
              <div className="text-center">
                <h4 className="text-222222 text-lg font-medium mb-2">
                  {service.title}
                </h4>
                <p className="text-767676 text-sm">{service.description}</p>
              </div>
            </Flex>
          ))}
        </Flex>
      </Container>
    </section>
  );
}
