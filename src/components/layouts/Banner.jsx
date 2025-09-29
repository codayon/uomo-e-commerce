import Button from "../common/Button";
import Container from "../common/Container";

export default function Banner() {
  return (
    <section className="mb-20">
      <Container>
        <div className="flex flex-1 gap-8">
          <div className="bg-d6001c text-white group flex-1 flex flex-col items-start justify-end p-12 pt-52">
            <h4 className="text-sm">STARTING AT $19</h4>
            <h3 className="font-medium text-2xl">Women’s T-Shirts</h3>
            <Button
              label="SHOP NOW"
              spanClassName="bg-white"
            />
          </div>

          <div className="bg-faf9f8 group flex-1 flex flex-col items-start justify-end p-12 pt-52">
            <h4 className="text-sm">STARTING AT $39</h4>
            <h3 className="font-medium text-2xl">Men’s Sportswear</h3>
            <Button label="SHOP NOW" />
          </div>
        </div>
      </Container>
    </section>
  );
}
