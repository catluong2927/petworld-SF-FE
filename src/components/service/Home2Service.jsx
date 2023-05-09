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

function Home2Service() {
  const serviceSlider = useMemo(() => {
    return {
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2200,
      },
      navigation: {
        nextEl: ".next-btn-2",
        prevEl: ".prev-btn-3",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        480: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
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
      <div className="h2-services-area">
        <div className="services-top">
          <div className="services-section-card">
            <div className="card-vector">
              <img
                  className="services-card-vect-01"
                  src="assets/images/bg/h2-services-title-rt.png"
                  alt=""
              />
              <img
                  className="services-card-vect-02"
                  src="assets/images/bg/h2-services-title-lb.png"
                  alt=""
              />
            </div>
            <div className="services-title">
              <h2>
                See Our All <span>Services.</span>
              </h2>
              <Link legacyBehavior to="/contact">
                <a className="primary-btn2">Book Your Day</a>
              </Link>
            </div>
          </div>
          <Swiper {...serviceSlider} className="swiper h2-services-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="services-card daycare-card">
                  <div className="card-vector">
                    <img
                        className="services-card-vect-01"
                        src="assets/images/bg/services-card-vec.png"
                        alt=""
                    />
                    <img
                        className="services-card-vect-02"
                        src="assets/images/bg/services-card-vec2.png"
                        alt=""
                    />
                  </div>
                  <div className="services-icon">
                    <img src="assets/images/icon/daycare3.svg" alt="" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link legacyBehavior to="/service-details">
                        <a>Daycare</a>
                      </Link>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista uten aliquet risus In
                      hac habitasse.
                    </p>
                    <div className="more-btn">
                      <Link legacyBehavior to="/shop-details">
                        <a>
                          More Details
                          <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card grooming-card">
                  <div className="card-vector">
                    <img
                        className="services-card-vect-01"
                        src="assets/images/bg/services-card-vec.png"
                        alt=""
                    />
                    <img
                        className="services-card-vect-02"
                        src="assets/images/bg/services-card-vec2.png"
                        alt=""
                    />
                  </div>
                  <div className="services-icon">
                    <img src="assets/images/icon/grooming3.svg" alt="" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link legacyBehavior to="/service-details">
                        <a>Grooming</a>
                      </Link>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista uten aliquet risus In
                      hac habitasse.
                    </p>
                    <div className="more-btn">
                      <Link legacyBehavior to="/service-details">
                        <a>
                          {" "}
                          More Details
                          <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card boarding-card">
                  <div className="card-vector">
                    <img
                        className="services-card-vect-01"
                        src="assets/images/bg/services-card-vec.png"
                        alt=""
                    />
                    <img
                        className="services-card-vect-02"
                        src="assets/images/bg/services-card-vec2.png"
                        alt=""
                    />
                  </div>
                  <div className="services-icon">
                    <img src="assets/images/icon/bording3.svg" alt="" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link legacyBehavior to="/service-details">
                        <a>Boarding</a>
                      </Link>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista uten aliquet risus In
                      hac habitasse.
                    </p>
                    <div className="more-btn">
                      <Link legacyBehavior to="/service-details">
                        <a>
                          {" "}
                          More Details
                          <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card vaterinary-card">
                  <div className="card-vector">
                    <img
                        className="services-card-vect-01"
                        src="assets/images/bg/services-card-vec.png"
                        alt=""
                    />
                    <img
                        className="services-card-vect-02"
                        src="assets/images/bg/services-card-vec2.png"
                        alt=""
                    />
                  </div>
                  <div className="services-icon">
                    <img src="assets/images/icon/vetenary3.svg" alt="" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link legacyBehavior to="/service-details">
                        <a>Vaterinary</a>
                      </Link>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista uten aliquet risus In
                      hac habitasse.
                    </p>
                    <div className="more-btn">
                      <Link legacyBehavior to="/service-details">
                        <a>
                          {" "}
                          More Details
                          <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="services-btm pt-120 mb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="services-img">
                  <div className="services-img-bg">
                    <img src="assets/images/icon/h2-services-img-bg.svg" alt="" />
                  </div>
                  <img
                      className="img-fluid"
                      src="assets/images/bg/h2-services-img.png"
                      alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="services-content">
                  <img src="assets/images/icon/section-sl-no.svg" alt="" />
                  <h2>we are providing pet care service for years.</h2>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                    id. Maecenas eu lorem quisesdoi massal molestie vulputate in
                    sitagi amet diam. Cras eu odio sit amet ipsum cursus for that
                    gone pellentesquea. thisaton Vestibulum ut aliquet risus. In
                    hac habitasse plateajoa dictumst. Nuncet posuere scelerisque
                    justo in accumsan.
                  </p>
                  <div className="author-area">
                    <div className="author-quat">
                      <p>
                        <sup>
                          <img
                              src="assets/images/icon/author-quat-icon.svg"
                              alt=""
                          />
                        </sup>{" "}
                        Pllentesque maximus augue orci, quis congue purus
                        iaculisona ideno joku Maecenas eu lorem quisesdoi massal
                        molestie jugnute vulputate in sitagajoi amet diam Cras eu
                        odio sit amet.
                      </p>
                    </div>
                    <div className="author-name-deg">
                      <h4>Kash Prestonal </h4>
                      <span>Founder, Scooby</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home2Service;
