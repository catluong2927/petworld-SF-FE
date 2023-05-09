import {Link} from "react-router-dom";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function Banner2() {
  const bannerSlider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 12,
      effect: "fade",
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination121",
        clickable: true,
      },
    };
  }, []);
  return (
    <div className="hero2">
      <div className="left-sidebar">
        <div className="swiper-pagination121" />
      </div>
      <Swiper {...bannerSlider} className="swiper hero2-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="hero-wrapper">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h6>your pet our family</h6>
                      <h1>
                        Your <span>pet</span> is part of our family.
                      </h1>
                      <div className="btn-group">
                        <Link legacyBehavior to="/contact">
                          <a className="primary-btn2">Make a Reservation</a>
                        </Link>
                        <Link legacyBehavior to="/about">
                          <a className="primary-btn3">About More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <div className="hero-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/hero2-img.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="hero-wrapper">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h6>your pet our family</h6>
                      <h1>
                        Your <span>cat</span> is part of our family.
                      </h1>
                      <div className="btn-group">
                        <Link legacyBehavior to="/contact">
                          <a className="primary-btn2">Make a Reservation</a>
                        </Link>
                        <Link legacyBehavior to="/about">
                          <a className="primary-btn3">About More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <div className="hero-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/hero2-img-cat.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="right-sidebar">
        <div className="social-area">
          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="bx bxl-pinterest-alt" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
