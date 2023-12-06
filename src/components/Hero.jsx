import SectionStarter from "./SectionStarter";
import Button from "./Button";

export const Hero = () => {
  return (
    <section className="py-[100px] pt-[140px]">
      <div className="max-w-[700px] w-[55%] mx-auto">
        <h1 className="text-[70px] leading-[70px] w-[75%] mb-[50px] font-[500] text-[#100024]">
          Modern day software group
        </h1>
        <p className="w-[100%]  text-[#606885] mb-[50px] font-[400]">
          Obtainal is a newly started frontend agency focusing on developing
          unique userfriendly applications running on the latest technology.
          With 10 years of combined experience, we take pride in tailormade
          products suiting each customer and project the best possible.
          <br></br>
          <br></br>
          As a company we don’t only build software for our clients - we also
          build impactful projects internally by use of our team and combined
          experience and skills. Whether we build software for our clients or
          for ourselves, we take the time to create the best product possible.{" "}
          <br></br>
          <br></br> We don’t just develop software. At Obtainal you’re offered a
          firm sparring partner providing professional guidance throughout the
          entire collaboration, supplying ideas, support and the tools needed to
          make your project go from idea to deployment. We believe the roots of
          a strong collaboration consists of both communication, understanding
          and honesty. <br></br>
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
          collaborate and create innovative solutions
        </p>
        <div className="flex flex-1 gap-[10px]">
          <Button message="Book a free meeting" />
          <Button message="See our work" />
        </div>
      </div>
    </section>
  );
};
