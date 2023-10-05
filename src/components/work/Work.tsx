import Image from "next/image";
import instagramVector from "public/vectors/instagram.png";
import youtubeVector from "public/vectors/youtube.png";
import React from "react";

const Work = () => {
  return (
    <section className="bg-sap-green px-8 sm:px-[7.5rem] py-[5rem] sm:py-[8rem]">
      <p className="text-light-beige text-[2.75rem] sm:text-[3rem] font-bold text-center">
        A few of my <span className="text-dark-black">creative</span> endeavors
      </p>
      <div className="mt-[5rem] flex flex-col lg:flex-row items-center gap-[5rem]">
        <div className="border-dark-black border-2 rounded-2xl px-[3rem] sm:w-[75%]">
          {/* youtube icon */}
          <div className="bg-sap-green relative top-[-1.75rem] max-w-fit -ml-3 rounded-2xl px-3">
            <Image src={youtubeVector} alt="youtube vector" height={55} />
          </div>
          <p className="font-extrabold text-[2rem] sm:text-[2.25rem] w-fit drop-shadow-lg">
            YouTube Thumbnails
          </p>
          <p className="text-light-green-bg text-[1.5rem] my-4 mb-8">
            Created thumbnails for YouTube channels which led to{" "}
            <span className="underline underline-offset-4 decoration-light-beige">
              increased click-through rate
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-4 decoration-light-beige">
              watch time
            </span>
            .
          </p>
        </div>

        <div className="border-dark-black border-2 rounded-2xl px-[3rem] sm:w-[75%]">
          {/* instagram icon */}
          <div className="bg-sap-green relative top-[-1.75rem] max-w-fit -ml-3 rounded-2xl px-3">
            <Image
              src={instagramVector}
              alt="youtube vector"
              height={55}
              width={55}
            />
          </div>
          <p className="font-extrabold text-[2rem] sm:text-[2.25rem] w-fit drop-shadow-lg">
            Social Media Posts
          </p>
          <p className="text-light-green-bg text-[1.5rem] my-4 mb-8 lg:max-w-[90%]">
            Created engaging visual content for social media pages to{" "}
            <span className="underline underline-offset-4 decoration-light-beige">
              increase profile views
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-4 decoration-light-beige">
              followers
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
