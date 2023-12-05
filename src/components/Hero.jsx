import SectionStarter from "./SectionStarter";
import Button from "./Button";

export const Hero = () => {
  return (
    <section className="py-[100px] pt-[140px]">
      <div className="max-w-[700px] w-[60%] mx-auto">
        <h1 className="text-[50px] leading-[60px] w-[75%] font-sans mb-[30px] font-[600]">
          Frontend solutions for your business
        </h1>
        <p className="w-[100%] text-[14px] text-[#606885] mb-[40px] font-[400]">
          iny Rhino is a technical product agency that has been at the forefront
          of innovation for over 7 years. We are proud to have delivered many
          innovate solutions to a range of clients from a variety of industries,
          driven by a passion for new and innovative technology.
          <br></br>
          <br></br>
          At Tiny Rhino, we focus on creating solutions that not only address
          hard problems but also have a positive impact on society. We thrive on
          tackling challenges in education and developing products that make a
          difference.<br></br>
          <br></br> What sets us apart is our commitment to providing complete
          product solutions for our clients. We don't just offer development
          services; we also provide guidance on milestones, implementation
          strategies, and selecting the right platforms and service providers.
          We understand that success goes beyond coding - it requires a
          comprehensive approach.<br></br>
          <br></br> Collaboration is at the core of our work. We partner closely
          with our clients to understand their goals and challenges, ensuring
          that our solutions align with their vision. Together, we leverage our
          technical expertise and strategic guidance to deliver exceptional
          outcomes.<br></br>
          <br></br> Throughout our journey, we have had the privilege of working
          with diverse clients across various industries. From startups to
          established enterprises, we have consistently delivered products that
          exceed expectations and drive success.<br></br>
          <br></br> If you are seeking a technical product agency that not only
          provides development solutions but also offers comprehensive guidance
          and a focus on societal impact, look no further than Tiny Rhino. Let's
          collaborate and create innovative solutions that shape the future.
        </p>
        <Button message="Book a free meeting" />
      </div>
    </section>
  );
};
