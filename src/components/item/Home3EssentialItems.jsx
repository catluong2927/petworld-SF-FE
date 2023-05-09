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

function Home3EssentialItems() {
  const slider = useMemo(() => {
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
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  return (
    <div className="essential-items-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="section-title3">
              <h2>
                <img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" />
                <span>Essential Items</span>
                <img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" />
              </h2>
            </div>
            <div className="slider-btn-wrap">
              <div className="slider-btn prev-btn-12">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="slider-btn next-btn-12">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slider} className="swiper essential-items-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="collection-card">
                    <div className="offer-card">
                      <span>Offer</span>
                    </div>
                    <div className="collection-img">
                      <img
                        className="img-gluid"
                        src="assets/images/bg/category/h3-collection-01.png"
                        alt=""
                      />
                      <div className="view-dt-btn">
                        <div className="plus-icon">
                          <i className="bi bi-plus" />
                        </div>
                        <Link legacyBehavior href="/shop-details">
                          <a>View Details</a>
                        </Link>
                      </div>
                      <ul className="cart-icon-list">
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-cart3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-favorites3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="collection-content">
                      <h4>
                        <Link legacyBehavior href="/shop-details">
                          <a>Whiskas Cat Food Core Tuna</a>
                        </Link>
                      </h4>
                      <div className="price">
                        <h6>$25.00</h6>
                        <del>$30.00</del>
                      </div>
                      <div className="review">
                        <ul>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                        <span>(50)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="collection-card">
                    <div className="collection-img">
                      <img
                        className="img-gluid"
                        src="assets/images/bg/category/h3-collection-02.png"
                        alt=""
                      />
                      <div className="view-dt-btn">
                        <div className="plus-icon">
                          <i className="bi bi-plus" />
                        </div>
                        <Link legacyBehavior href="/shop-details">
                          <a>View Details</a>
                        </Link>
                      </div>
                      <ul className="cart-icon-list">
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-cart3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-favorites3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="collection-content">
                      <h4>
                        <Link legacyBehavior href="/shop-details">
                          <a>Friskies Kitten Discoveries.</a>
                        </Link>
                      </h4>
                      <div className="price">
                        <h6>$39.00</h6>
                        <del>$39.00</del>
                      </div>
                      <div className="review">
                        <ul>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                        <span>(50)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="collection-card">
                    <div className="offer-card sale">
                      <span>Hot Sale</span>
                    </div>
                    <div className="collection-img">
                      <img
                        className="img-gluid"
                        src="assets/images/bg/category/h3-collection-03.png"
                        alt=""
                      />
                      <div className="view-dt-btn">
                        <div className="plus-icon">
                          <i className="bi bi-plus" />
                        </div>
                        <Link legacyBehavior href="/shop-details">
                          <a>View Details</a>
                        </Link>
                      </div>
                      <ul className="cart-icon-list">
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-cart3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-favorites3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="collection-content">
                      <h4>
                        <Link legacyBehavior href="/shop-details">
                          <a>Joules Cat Cotton House.</a>
                        </Link>
                      </h4>
                      <div className="price">
                        <h6>$150.00</h6>
                        <del>$200.00</del>
                      </div>
                      <div className="review">
                        <ul>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                        <span>(50)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="collection-card">
                    <div className="collection-img">
                      <img
                        className="img-gluid"
                        src="assets/images/bg/category/h3-collection-04.png"
                        alt=""
                      />
                      <div className="view-dt-btn">
                        <div className="plus-icon">
                          <i className="bi bi-plus" />
                        </div>
                        <Link legacyBehavior href="/shop-details">
                          <a>View Details</a>
                        </Link>
                      </div>
                      <ul className="cart-icon-list">
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-cart3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-favorites3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="collection-content">
                      <h4>
                        <Link legacyBehavior href="/shop-details">
                          <a>Natural Dog Fresh Food.</a>
                        </Link>
                      </h4>
                      <div className="price">
                        <h6>$18.00</h6>
                        <del>$30.00</del>
                      </div>
                      <div className="review">
                        <ul>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                        <span>(50)</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="collection-card">
                    <div className="offer-card sold-out">
                      <span>Sold Out</span>
                    </div>
                    <div className="collection-img">
                      <img
                        className="img-gluid"
                        src="assets/images/bg/category/h3-collection-07.png"
                        alt=""
                      />
                      <div className="view-dt-btn">
                        <div className="plus-icon">
                          <i className="bi bi-plus" />
                        </div>
                        <Link legacyBehavior href="/shop-details">
                          <a>View Details</a>
                        </Link>
                      </div>
                      <ul className="cart-icon-list">
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-cart3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon/Icon-favorites3.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="collection-content">
                      <h4>
                        <Link legacyBehavior href="/shop-details">
                          <a>Rooibos Pet Food Supple</a>
                        </Link>
                      </h4>
                      <div className="price">
                        <h6>$75.00</h6>
                        <del>$80.00</del>
                      </div>
                      <div className="review">
                        <ul>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                        <span>(50)</span>
                      </div>
                    </div>
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

export default Home3EssentialItems;
