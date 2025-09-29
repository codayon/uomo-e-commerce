import Button from "../common/Button";
import Container from "../common/Container";

export default function DealOfTheWeek() {
  return (
    <section className="bg-ebebeb py-28 mb-20">
      <Container>
        <h4 className="text-c32929 before:bg-c32929 flex items-center before:block before:w-10 before:h-0.5 before:mr-2 text-sm font-medium">
          DEAL OF THE WEEK
        </h4>
        <h1 className="max-w-3xl text-7xl py-3">
          <span className="font-bold">SPRING</span> COLLECTION
        </h1>
        <Button label="SHOP NOW" />
        <div className="flex text-center gap-6 mt-24">
          <div className="flex flex-col">
            <span className="text-3xl">05</span>
            <span className="text-767676 font-bold leading-8">DAYS</span>
          </div>
          <span className="text-3xl">:</span>

          <div className="flex flex-col">
            <span className="text-3xl">07</span>
            <span className="text-767676 font-bold leading-8">HOURS</span>
          </div>
          <span className="text-3xl">:</span>

          <div className="flex flex-col">
            <span className="text-3xl">09</span>
            <span className="text-767676 font-bold leading-8">MINS</span>
          </div>
          <span className="text-3xl">:</span>

          <div className="flex flex-col">
            <span className="text-3xl">03</span>
            <span className="text-767676 font-bold leading-8">SEC</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
