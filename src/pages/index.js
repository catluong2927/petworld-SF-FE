import Banner1 from "../components/banner/Banner1";
import FeatureCounter from "../components/feature/FeatureCounter";
import Home1feature from "../components/feature/Home1feature";
import {Footer1} from "../components/footer/Footer1";
import Header1 from "../components/header/Header1";
import Home1Service from "../components/service/Home1Service";
import VideoBanner1 from "../components/video/VideoBanner1";
export default function Home() {
    return (
        <>
            <Header1 />
            <Banner1 />
            <VideoBanner1 />
            <Home1Service />
            <Home1feature />
            <FeatureCounter />
            <Footer1 />
        </>
    );
}