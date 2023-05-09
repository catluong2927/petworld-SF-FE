import {Link} from "react-router-dom";
import React, { useMemo } from "react";
import Marquee from "react-fast-marquee";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Banner3() {
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
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".h3-hero-slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
          );
        },
      },
    };
  }, []);
  return (
    <>
      <div className="hero3 mb-90">
        <div className="background-text">
          <Marquee pauseOnHover={true} gradient={false} speed={60}>
            <h2 className="marquee_text">
              <img src="assets/images/icon/marque-foot.svg" alt="image" />
              <span>Get exciting Discount</span> Up To 40%
              <img src="assets/images/icon/marque-foot.svg" alt="image" />
              <span>On Your first buying</span> Up To 50%
              <img src="assets/images/icon/marque-foot.svg" alt="image" />
              <span>Get exciting Discount</span> Up To 30%
            </h2>
          </Marquee>
        </div>
        <Swiper {...bannerSlider} className="swiper hero3-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="hero-wrapper">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h6>Limited Offer</h6>
                        <h1>Best Food For Your Loving Dog.</h1>
                        <div className="btn-group">
                          <Link legacyBehavior to="/shop">
                            <a className="primary-btn5 btn-md">Shop Now</a>
                          </Link>
                          <Link legacyBehavior to="/shop-details">
                            <a className="primary-btn6">View Details</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                      <div className="hero-img">
                        <div className="offer-card">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/h3-banner-offer.png"
                            alt=""
                          />
                        </div>
                        <img
                          className="img-fluid banner-imgas"
                          src="assets/images/bg/h3-banner-img.png"
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
                        <h6>Limited Offer</h6>
                        <h1>Best Food For Your Loving Cat.</h1>
                        <div className="btn-group">
                          <Link legacyBehavior to="/shop">
                            <a className="primary-btn5 btn-md">Shop Now</a>
                          </Link>
                          <Link legacyBehavior to="/shop-details">
                            <a className="primary-btn6">View Details</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                      <div className="hero-img">
                        <div className="offer-card">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/h3-banner-offer.png"
                            alt=""
                          />
                        </div>
                        <img
                          className="img-fluid banner-imgas"
                          src="assets/images/bg/h3-banner-img-cat.png"
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
                        <h6>Limited Offer</h6>
                        <h1>Best Food For Your Loving Dog.</h1>
                        <div className="btn-group">
                          <Link legacyBehavior to="/shop">
                            <a className="primary-btn5 btn-md">Shop Now</a>
                          </Link>
                          <Link legacyBehavior to="/shop-details">
                            <a className="primary-btn6">View Details</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                      <div className="hero-img">
                        <div className="offer-card">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/h3-banner-offer.png"
                            alt=""
                          />
                        </div>
                        <img
                          className="img-fluid banner-imgas"
                          src="assets/images/bg/h3-banner-img-dog.png"
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
          <div className="slider-pagination-area">
            <div className="h3-hero-slider-pagination" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner3;
