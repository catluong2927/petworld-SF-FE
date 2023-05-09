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
function Home3Category() {
  const categoryslide = useMemo(() => {
    return {
      spaceBetween: 24,
      slidesPerView: "auto",
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2200,
      },
      navigation: {
        nextEl: ".next-btn-11",
        prevEl: ".prev-btn-11",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
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
    <div className="home3-categoty-area pt-120 mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="section-title3">
              <h2>
                <img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" />
                <span>Browse By Categories</span>
                <img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" />
              </h2>
            </div>
            <div className="slider-btn-wrap">
              <div className="slider-btn prev-btn-11">
                <i style={{ cursor: "pointer" }} className="bi bi-arrow-left" />
              </div>
              <div className="slider-btn next-btn-11">
                <i
                  style={{ cursor: "pointer" }}
                  className="bi bi-arrow-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <Swiper {...categoryslide} className="swiper h3-category-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="category-card">
                    <Link legacyBehavior href="/shop">
                      <a className="category-card-inner">
                        <div className="category-card-front">
                          <div className="category-icon">
                            <img src="assets/images/icon/dog.svg" alt="" />
                          </div>
                          <div className="content">
                            <h4>Dog Supplies</h4>
                          </div>
                        </div>
                        <div className="category-card-back">
                          <img
                            src="assets/images/bg/h3-category-1.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="category-card">
                    <Link legacyBehavior href="/shop">
                      <a className="category-card-inner">
                        <div className="category-card-front">
                          <div className="category-icon">
                            <img src="assets/images/icon/cat.svg" alt="" />
                          </div>
                          <div className="content">
                            <h4>Cat Supplies</h4>
                          </div>
                        </div>
                        <div className="category-card-back">
                          <img
                            src="assets/images/bg/h3-category-2.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="category-card">
                    <Link legacyBehavior href="/shop">
                      <a className="category-card-inner">
                        <div className="category-card-front">
                          <div className="category-icon">
                            <img src="assets/images/icon/bird.svg" alt="" />
                          </div>
                          <div className="content">
                            <h4>Bird Supplies</h4>
                          </div>
                        </div>
                        <div className="category-card-back">
                          <img
                            src="assets/images/bg/h3-category-4.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="category-card">
                    <Link legacyBehavior href="/shop">
                      <a className="category-card-inner">
                        <div className="category-card-front">
                          <div className="category-icon">
                            <img src="assets/images/icon/Rabbit.svg" alt="" />
                          </div>
                          <div className="content">
                            <h4>Small Animal</h4>
                          </div>
                        </div>
                        <div className="category-card-back">
                          <img
                            src="assets/images/bg/h3-category-5.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="category-card">
                    <Link legacyBehavior href="/shop">
                      <a className="category-card-inner">
                        <div className="category-card-front">
                          <div className="category-icon">
                            <img src="assets/images/icon/Acces.svg" alt="" />
                          </div>
                          <div className="content">
                            <h4>Accessories</h4>
                          </div>
                        </div>
                        <div className="category-card-back">
                          <img
                            src="assets/images/bg/h3-category-6.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="category-card">
                    <Link legacyBehavior href="/shop">
                      <a className="category-card-inner">
                        <div className="category-card-front">
                          <div className="category-icon">
                            <img src="assets/images/icon/fish.svg" alt="" />
                          </div>
                          <div className="content">
                            <h4>Fish Supplies</h4>
                          </div>
                        </div>
                        <div className="category-card-back">
                          <img
                            src="assets/images/bg/h3-category-3.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </Link>
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

export default Home3Category;
