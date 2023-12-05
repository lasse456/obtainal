import Slider from "react-infinite-logo-slider";

const Logoslide = () => {
  return (
    <div className="max-w-[1100px] mx-auto py-[40px]">
      <Slider
        width="190px"
        duration={40}
        pauseOnHover={true}
        blurBorders={true}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
          <img src="public/tailwind.png" alt="any" className="w-36" />
        </Slider.Slide>

        <Slider.Slide>
          <img src="public/tailwind.png" alt="any" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="public/tailwind.png" alt="any" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="public/tailwind.png" alt="any" className="w-36" />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default Logoslide;
