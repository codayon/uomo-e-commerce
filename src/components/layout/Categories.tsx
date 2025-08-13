import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import image1 from "@/assets/images/categories/categories1.jpg";
import image2 from "@/assets/images/categories/categories2.jpg";
import image3 from "@/assets/images/categories/categories3.jpg";
import image4 from "@/assets/images/categories/categories4.jpg";

export default function Categories() {
  return (
    <section className="py-12">
      <Container>
        <div className={"flex w-full gap-8"}>
          {/* div 1 */}
          <div
            className="text-sm w-1/2 flex flex-col justify-end p-10 h-[600px] items-start group cursor-pointer bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <h4>HOT LIST</h4>
            <h3 className="font-medium text-2xl">
              <span className="font-bold">WOMEN</span> COLLECTION
            </h3>
            <Button text={"SHOP NOW"} />
          </div>
          <div className={"flex w-1/2 flex-col gap-8"}>
            {/* div 2 */}
            <div
              className="bg-stone-200 text-sm w-full flex flex-col justify-end p-10 h-[284px] items-start group cursor-pointer bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${image2})` }}
            >
              <h4>HOT LIST</h4>
              <h3 className="font-medium text-2xl">
                <span className="font-bold">MEN</span> COLLECTION
              </h3>
              <Button text={"SHOP NOW"} />
            </div>
            <div className={"flex w-full gap-8"}>
              {/* div 3 */}
              <div
                className="text-sm w-1/2 flex flex-col justify-end p-10 h-[284px] items-start group cursor-pointer bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${image3})` }}
              >
                <h4>HOT LIST</h4>
                <h3 className="font-medium text-2xl">
                  <span className="font-bold">KIDS</span> COLLECTION
                </h3>
                <Button text={"SHOP NOW"} />
              </div>
              {/* div 4 */}
              <div
                className="text-sm w-1/2 flex flex-col justify-end p-10 h-[284px] items-start group cursor-pointer bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${image4})` }}
              >
                <h3 className="font-medium text-2xl">
                  <span className="font-bold">E-GIFT</span> CARDS
                </h3>
                <p className="max-w-[213px] leading-6 pt-2 pb-3">
                  Surprise someone with the gift they really want.
                </p>
                <Button text={"DISCOVER MORE"} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
