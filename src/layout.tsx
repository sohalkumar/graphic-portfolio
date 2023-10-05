import React from "react";
import Navbar from "./components/navbar/Navbar.component";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
