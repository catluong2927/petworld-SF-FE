import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Home2ChooseUs() {
  const partnarSlider = useMemo(() => {
    return {
      spaceBetween: 24,
      slidesPerView: "auto",
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2200,
      },
      navigation: {
        nextEl: ".next-btn-12",
        prevEl: ".prev-btn-12",
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        420: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 6,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    };
  }, []);
  return (
    <div className="h2-choose-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title2 text-center">
              <h2>Why Choose Us</h2>
              <p>
                Enjoy Your Holiday We Can Keep Them Happy{" "}
                <a href="#">Your Pet Our Priority</a> Happy Pets, Happy Humans
                We Are The Best Of This Country We Are Always Ready For your
                pet.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center pt-90 pb-90 g-4">
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="single-card">
              <div className="icon">
                <img src="assets/images/icon/care2.svg" alt="" />
              </div>
              <div className="content">
                <h4>Personalized care</h4>
                <p>
                  Pellentesque maximus augue orci, quis congue purus iaculison
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="single-card">
              <div className="icon">
                <img src="assets/images/icon/team2.svg" alt="" />
              </div>
              <div className="content">
                <h4>Trusted Team</h4>
                <p>
                  Pellentesque maximus augue orci, quis congue purus iaculison
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="single-card">
              <div className="icon">
                <img src="assets/images/icon/mind2.svg" alt="" />
              </div>
              <div className="content">
                <h4>Peace of mind</h4>
                <p>
                  Pellentesque maximus augue orci, quis congue purus iaculison
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="single-card">
              <div className="icon">
                <img src="assets/images/icon/mind2.svg" alt="" />
              </div>
              <div className="content">
                <h4>Nice Environment</h4>
                <p>
                  Pellentesque maximus augue orci, quis congue purus iaculison
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-area">
        <div className="container">
          <div className="row">
            <Swiper {...partnarSlider} className="swiper h2-partner">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="partner-logo">
                    <img src="assets/images/icon/partner/envato.svg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="partner-logo">
                    <img src="assets/images/icon/partner/xidex.svg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="partner-logo">
                    <img src="assets/images/icon/partner/arrow.svg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="partner-logo">
                    <img src="assets/images/icon/partner/ozgeo.svg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="partner-logo">
                    <img src="assets/images/icon/partner/avianca.svg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="partner-logo">
                    <img src="assets/images/icon/partner/olinski.svg" alt="" />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2ChooseUs;
