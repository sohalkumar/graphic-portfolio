import AboutMe from "@/components/about-me/AboutMe";
import ContactMe from "@/components/contact-me/ContactMe";
import Introduction from "@/components/introduction/Introduction";
import Objective from "@/components/objective/Objective";
import Projects from "@/components/projects/Projects";
import Work from "@/components/work/Work";
import RootLayout from "@/layout";
import Head from "next/head";

const Homepage = () => {
  return (
    <>
      <RootLayout>
        <Head>
          <title>Portfolio</title>
        </Head>
        <Introduction />
        <Objective />
        <Work />
        <Projects />
        <AboutMe />
        <ContactMe />
        
      </RootLayout>
    </>
  );
};

export default Homepage;
