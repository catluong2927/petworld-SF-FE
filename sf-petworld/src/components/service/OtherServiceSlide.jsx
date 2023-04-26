import {Link} from 'react-router-dom'
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function OtherServiceSlide() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 24,
      // centeredSlides: true,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".next-btn-1",
        prevEl: ".prev-btn-1",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
      <>
        <div className="row">
          <div className="col-lg-12 d-flex flex-wrap align-items-center justify-content-sm-between justify-content-start gap-4 mb-60">
            <div className="inner-section-title">
              <h2>Other Services</h2>
            </div>
            <div className="swiper-btn-wrap d-flex align-items-center">
              <div className="slider-btn prev-btn-1">
                <i style={{ cursor: "pointer" }} className="bi bi-arrow-left" />
              </div>
              <div className="slider-btn next-btn-1">
                <i style={{ cursor: "pointer" }} className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...slider} className="swiper home1-services-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="services-card1">
                  <img
                      className="services-card-vec"
                      src="assets/images/bg/services-card-vec.png"
                      alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/daycare-center2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior to="/service-details">
                        <a>Daycare </a>
                      </Link>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista ut aliquet risus In
                      hac habitasse.
                    </p>
                  </div>
                  <Link legacyBehavior to="/service-details">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card1 two">
                  <img
                      className="services-card-vec"
                      src="assets/images/bg/services-card-vec.png"
                      alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/grooming2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior to="/service-details">
                        <a>Grooming</a>
                      </Link>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista ut aliquet risus In
                      hac habitasse.
                    </p>
                  </div>
                  <Link legacyBehavior to="/service-details">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card1 three">
                  <img
                      className="services-card-vec"
                      src="assets/images/bg/services-card-vec.png"
                      alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/boarding2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior to="/service-details">
                        <a>Boarding</a>
                      </Link>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista ut aliquet risus In
                      hac habitasse.
                    </p>
                  </div>
                  <Link legacyBehavior to="/service-details">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card1 four">
                  <img
                      className="services-card-vec"
                      src="assets/images/bg/services-card-vec.png"
                      alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/veterinary2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior to="/service-details">
                        <a>veterinary</a>
                      </Link>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista ut aliquet risus In
                      hac habitasse.
                    </p>
                  </div>
                  <Link legacyBehavior to="/service-details">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </>
  );
}

export default OtherServiceSlide;
