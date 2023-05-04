import Home1About from "../components/about/Home1About";
import Banner1 from "../components/banner/Banner1";
import Home1Blog from "../components/blog/Home1Blog";
import ChooseUs from "../components/chooseUs/ChooseUs";
import FeatureCounter from "../components/feature/FeatureCounter";
import Home1feature from "../components/feature/Home1feature";
import {Footer1} from "../components/footer/Footer1";
import Home1Gallary from "../components/gallary/Home1Gallary";
import Header1 from "../components/header/Header1";
import Home1Newslatter from "../components/newslatter/Home1Newslatter";
import Home1Partner from "../components/partner/Home1Partner";
import Home1PricePlan from "../components/pricePlan/Home1PricePlan";
import Home1Service from "../components/service/Home1Service";
import Home1Team from "../components/team/Home1Team";
import Home1Testimonial from "../components/testimonial/Home1Testimonial";
import VideoBanner1 from "../components/video/VideoBanner1";

export default function Home() {
  return (
    <>
      <Header1 />
      <Banner1 />
      <VideoBanner1 />
      <Home1Service />
      <Home1About />
      <Home1feature />
      <FeatureCounter />
      <ChooseUs />
      <Home1Partner />
      <Home1PricePlan />
      <Home1Testimonial />
      <Home1Team />
      <Home1Newslatter />
      <Home1Blog />
      <Home1Gallary />
      <Footer1 />
    </>
  );
}
