import { Form } from "./Form";

const BookingHero = () => {
  return (
    <section className="py-[100px] pt-[140px] mx-auto">
      <div className="max-w-[700px] w-[55%] mx-auto">
        <h1 className="text-[40px] mb-[20px] font-[500]">
          Hi, nice to see you here!
        </h1>
        <p className="mb-[30px]">
          We carefully plan and strategise to ensure our products create results
          that matter. Through workshops and analysis, we facilitate a product
          strategy that fulfills the expectations of your users while ensuring
          the growth and success of your business
        </p>
        <Form />
      </div>
    </section>
  );
};

export default BookingHero;
