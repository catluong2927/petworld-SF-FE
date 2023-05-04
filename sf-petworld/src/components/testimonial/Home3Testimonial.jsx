import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Home3Testimonial() {
  const testimonialSlider = useMemo(() => {
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
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <div className="home3-testimonial-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="section-title3">
              <h2>
                <img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" />
                <span>Customers Think About Us</span>
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
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-11">
            <Swiper
              {...testimonialSlider}
              className="swiper h3-testimonil-slider"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-wrapper">
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
                    </div>
                    <p>
                      Pellentesque maximus augue orci, quis congue puru
                      Pellentesque maximus augue orci, quis congue coug purus
                      iaculis idl Maecenas eu lorem quis massal outi molestie
                      vulputate in sit ameti diam.
                    </p>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/images/bg/h3-autho-1.png" alt="" />
                      </div>
                      <div className="author-name-deg">
                        <h3>Sebastian Ethan</h3>
                        <span>Customer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-wrapper">
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
                    </div>
                    <p>
                      Pellentesque maximus augue orci, quis congue puru
                      Pellentesque maximus augue orci, quis congue coug purus
                      iaculis idl Maecenas eu lorem quis massal outi molestie
                      vulputate in sit ameti diam.
                    </p>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/images/bg/h3-autho-2.png" alt="" />
                      </div>
                      <div className="author-name-deg">
                        <h3>Lokand Donark</h3>
                        <span>Customer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-wrapper">
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
                    </div>
                    <p>
                      Pellentesque maximus augue orci, quis congue puru
                      Pellentesque maximus augue orci, quis congue coug purus
                      iaculis idl Maecenas eu lorem quis massal outi molestie
                      vulputate in sit ameti diam.
                    </p>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/images/bg/h3-autho-3.png" alt="" />
                      </div>
                      <div className="author-name-deg">
                        <h3>Angelina Gushe</h3>
                        <span>Customer</span>
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

export default Home3Testimonial;
