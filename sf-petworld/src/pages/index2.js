import React from "react";
import Banner2 from "../components/banner/Banner2";
import Home2Blog from "../components/blog/Home2Blog";
import Home2ChooseUs from "../components/chooseUs/Home2ChooseUs";
import Home2Contact from "../components/contact/Home2Contact";
import {Footer1} from "../components/footer/Footer1";
import Header2 from "../components/header/Header2";
import Home2Service from "../components/service/Home2Service";
import Home2Team from "../components/team/Home2Team";
import Home2Testimonial from "../components/testimonial/Home2Testimonial";
import WorkProcess from "../components/workProcess/WorkProcess";

function HomePage2() {
  return (
    <>
      <Header2 />
      <Banner2 />
      <Home2Service />
      <Home2ChooseUs />
      <WorkProcess />
      <Home2Contact />
      <Home2Testimonial />
      <Home2Team />
      <Home2Blog />
      <Footer1 />
    </>
  );
}

export default HomePage2;
