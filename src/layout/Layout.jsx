import React from "react";
import Header1 from "../components/header/Header1";
import {Footer1} from "../components/footer/Footer1";

function Layout({ children }) {
  return (
    <>
      <Header1 />
      {children}
      <Footer1/>
    </>
  );
}

export default Layout;
