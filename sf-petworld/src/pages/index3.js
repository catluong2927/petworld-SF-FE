import React from "react";
import Banner3 from "../components/banner/Banner3";
import Home3Blog from "../components/blog/Home3Blog";
import Home3Category from "../components/category/Home3Category";
import Home3Collection from "../components/collection/Home3Collection";
import Footer3 from "../components/footer/Footer3";
import Header3 from "../components/header/Header3";
import Home3EssentialItems from "../components/item/Home3EssentialItems";
import Home3Newslatter from "../components/newslatter/Home3Newslatter";
import Home3Offer from "../components/offer/Home3Offer";
import OfferBanner from "../components/offer/OfferBanner";
import Home3Testimonial from "../components/testimonial/Home3Testimonial";

function HomePage3() {
  return (
    <>
      <Header3 />
      <Banner3 />
      <Home3Category />
      <Home3Collection />
      <Home3Offer />
      <Home3EssentialItems />
      <OfferBanner />
      <Home3Testimonial />
      <Home3Newslatter />
      <Home3Blog />
      <Footer3 />
    </>
  );
}

export default HomePage3;
