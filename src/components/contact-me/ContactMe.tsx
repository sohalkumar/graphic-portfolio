import Link from "next/link";
import React from "react";

const ContactMe = () => {
  return (
    <section
      id="get-in-touch"
      className="bg-dark-black px-8 sm:px-[7.5rem] py-10 pb-[5rem] sm:py-[5rem] text-light-green text-center"
    >
      <h2 className="font-extrabold text-[2.25rem] sm:text-[3.5rem]">
        Connect with me
      </h2>

      <div className="text-[1.5rem] mt-[2rem] flex flex-col gap-[1.5rem]">
        <p className="hover:scale-[1.1] duration-300">
          <span className="text-light-beige">Email - </span>{" "}
          <br className="sm:hidden" />
          <Link
            href="mailto:23032003sonamchawla@gmail.com"
            target="_blank"
            className="text-[1rem] sm:text-[1.5rem] hover:text-sap-green hover:underline"
          >
            23032003sonamchawla@gmail.com
          </Link>
        </p>
        <p className="hover:scale-[1.1] duration-300">
          <span className="text-light-beige">Linkedin - </span>
          <Link
            href="https://www.linkedin.com/in/sonamchawla02"
            target="_blank"
            className="hover:text-sap-green hover:underline"
          >
            sonamchawla02
          </Link>
        </p>
        <p className="hover:scale-[1.1] duration-300">
          <span className="text-light-beige">Phone - </span>
          <Link
            href="tel:+91892-022-5044"
            target="_blank"
            className="hover:text-sap-green hover:underline"
          >
            +91 8920225044
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;
