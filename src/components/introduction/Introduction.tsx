import Image from "next/image";
import Script from "next/script";
import React from "react";
// import particlesConfig from "";
import profilePicture from "public/profile/profile-picture.png";

const Introduction = () => {
  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        defer
      ></script>
      <Script id="particle-js-script-desktop" defer>
        {`
        particlesJS.load('particles-js-desktop', '/particles-desktop.json', function(){})
            `}
      </Script>
      <Script id="particle-js-script-mobile" defer>
        {`
        particlesJS.load('particles-js-mobile', '/particles-mobile.json', function(){})
            `}
      </Script>

      <section className="bg-dark-green flex flex-col gap-8 lg:gap-0 justify-around lg:flex-row mt-[5rem] sm:mt-[6.5rem] px-8 py-10 lg:py-[4rem] lg:px-[7.5rem] z-[-999]">
        {/* particles container */}
        {/* particles mobile */}
        <div className="absolute sm:hidden top-[5rem] left-0 min-h-[100vh] w-full z-[0] opacity-50">
          <div className="absolute inset-0" id="particles-js-mobile"></div>
        </div>
        {/* particles desktop */}
        <div className="hidden sm:block absolute top-[7rem] left-0 min-h-[105vh] w-full z-[0] opacity-50">
          <div className="absolute inset-0" id="particles-js-desktop"></div>
        </div>

        <div className="sm:flex sm:gap-5 z-[2]">
          {/* intro text */}
          <div className="text-light-green my-auto mx-auto sm:ms-auto">
            <p className="font-extrabold text-[2.75rem] sm:text-[3.75rem]">
              Hi! I&apos;m <span className="text-light-beige">Sonam</span>
              <span className="block text-[2.25rem] font-bold opacity-80">
                Graphic <span className="text-light-beige">Designer</span>
              </span>
            </p>
            <p className="mt-[0.75rem] text-light-beige text-[1.5rem]">
              Experienced in designing engaging{" "}
              <br className="hidden sm:block" />
              <span className="text-light-green">social media posts</span>,
              brand logos, <br className="hidden sm:block" />
              <span className="text-light-green">YouTube thumbnails</span> and
              much more ...
            </p>
          </div>
          {/* intro image */}
          <div className="sm:w-[36.5rem] sm:mx-auto mr-auto">
            <Image
              src={profilePicture}
              alt="profile picture"
              className="w-full h-full"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
