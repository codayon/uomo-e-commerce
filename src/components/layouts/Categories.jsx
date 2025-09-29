import Button from "../common/Button";
import Container from "../common/Container";

export default function Categories() {
  return (
    <section className="py-10">
      <Container>
        <div className="flex gap-8">
          <div className="bg-eff0f2 group flex-1 flex flex-col items-start justify-end p-10">
            <h4 className="text-sm">HOT LIST</h4>
            <h3 className="font-medium text-2xl">
              <span className="font-bold">WOMEN</span> COLLECTION
            </h3>
            <Button label="SHOP NOW" />
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-e5e2dd group flex-1 flex flex-col justify-end p-10 items-start">
              <h4 className="text-sm">HOT LIST</h4>
              <h3 className="font-medium text-2xl">
                <span className="font-bold">MEN</span> COLLECTION
              </h3>
              <Button label="SHOP NOW" />
            </div>

            <div className="flex flex-1 gap-8">
              <div className="bg-e7e6e4 group flex-1 flex flex-col items-start justify-end p-10">
                <h4 className="text-sm">HOT LIST</h4>
                <h3 className="font-medium text-2xl">
                  <span className="font-bold">KIDS</span> COLLECTION
                </h3>
                <Button label="SHOP NOW" />
              </div>

              <div className="bg-f5e6e0 group flex-1 flex flex-col items-start justify-end p-10">
                <h3 className="font-medium text-2xl">
                  <span className="font-bold">E-GIFT</span> CARDS
                </h3>
                <p className="py-3">
                  Surprise someone with the gift they really want.
                </p>
                <Button label="DISCOVER MORE" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
