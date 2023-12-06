const ServiceHero = (props) => {
  return (
    <section className="py-[100px] pt-[140px] border-b-[1px]">
      <div className="w-[96%] mx-auto max-md:w-[90% max-w-[1100px]">
        <h1 className="text-[60px] mb-[20px] max-md:text-[45px] max-md:leading-[55px]">
          {props.heading}
        </h1>
        <p className="w-[60%] text-[#606885] max-md:text-[14px] max-md:leading-[24px] max-md:w-[90%]">
          {props.description}
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
