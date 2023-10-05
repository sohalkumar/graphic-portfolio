import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="bg-light-beige px-8 sm:px-[7.5rem] py-[5rem] sm:py-[8rem] text-dark-black"
    >
      <p className="font-extrabold text-[2.5rem] sm:text-[3.5rem] text-center">
        A bit <span className="text-sap-green">about</span> me
      </p>
      <p className="font-bold text-[1.5rem] sm:text-[2rem] text-center mt-[1.5rem] sm:mt-[3.5rem]">
        I am ...
      </p>

      {/* point 01 */}
      <div className="flex flex-col md:flex-row mt-[2.5rem] sm:mt-[5rem] max-w-[45rem] mx-auto md:gap-8">
        <div>
          <p className="text-[#bbb] font-extrabold text-[2.5rem] sm:text-[3.5rem]">
            01
          </p>
        </div>
        <div>
          <p className="font-medium text-[1.75rem] sm:text-[2.5rem]">
            a self taught graphic designer
          </p>
          <p>
            I taught myself how to design using the resources freely available
            on the internet and absolutely fell in love with the creativity
            involved. Always willing to learn more and gain knowledge.
          </p>
        </div>
      </div>

      {/* point 02 */}
      <div className="flex flex-col md:flex-row mt-[2.5rem] sm:mt-[5rem] max-w-[45rem] mx-auto md:gap-8">
        <div>
          <p className="text-[#bbb] font-extrabold text-[2.5rem] sm:text-[3.5rem]">
            02
          </p>
        </div>
        <div>
          <p className="font-medium text-[1.75rem] sm:text-[2.5rem]">
            a design and details fanatic
          </p>
          <p>
            Carefully crafting and designing amazing designs for a broad types
            of clients allows me to express and experiment with my creativity. I
            love the challenge of learning new design concepts.
          </p>
        </div>
      </div>

      {/* point 03 */}
      <div className="flex flex-col md:flex-row mt-[2.5rem] sm:mt-[5rem] max-w-[45rem] mx-auto md:gap-8">
        <div>
          <p className="text-[#bbb] font-extrabold text-[2.5rem] sm:text-[3.5rem]">
            03
          </p>
        </div>
        <div>
          <p className="font-medium text-[1.75rem] sm:text-[2.5rem]">
            an excellent communicator
          </p>
          <p>
            {`Communication is the key and it's paramount value of mine. I believe
            in constructive communication. This helps me develop deep
            relationships and ensures my effectiveness and productivity.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
