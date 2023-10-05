import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* navbar */}
      <div className="fixed top-0 left-0 right-0 bg-dark-black text-light-green font-galada py-1 sm:py-4 flex items-center justify-between sm:px-[7.5rem] z-[10]">
        <p className="text-[3rem] mx-auto lg:mx-0">Sonam Chawla</p>
        <div className="hidden lg:flex sm:flex-row items-center font-poppins font-bold text-[1.5rem] gap-[2rem]">
          <Link href="#projects" className="group transition duration-300">
            <p>
              Projects
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-light-green"></span>
            </p>
          </Link>
          <Link href="#about-me" className="group transition duration-300">
            <p>
              About me{" "}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-light-green"></span>{" "}
            </p>
          </Link>
          <Link
            href="#get-in-touch"
            className="bg-light-green text-dark-black px-[1rem] py-1 rounded-[1.75rem] animate-pulse hover:animate-none hover:duration-300 group transition duration-300"
          >
            <p>
              Get in touch
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-dark-black"></span>
            </p>
          </Link>
        </div>
      </div>

      {/* bottom bar for mobile */}
      <div className="fixed bottom-0 left-0 right-0 sm:text-[1.5rem] flex items-center justify-center gap-8 bg-dark-black font-bold py-3 lg:hidden z-[10]">
        <Link href="#projects">
          <p>Projects</p>
        </Link>
        <Link href="#about-me">
          <p>About me</p>
        </Link>
        <Link
          href="#get-in-touch"
          className="bg-light-green text-dark-black px-[1rem] py-1 rounded-[1.75rem] animate-pulse"
        >
          <p>Get in touch</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
