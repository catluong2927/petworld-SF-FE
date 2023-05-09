import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Home2Testimonial() {
  const testimonialSlider = useMemo(() => {
    return {
      spaceBetween: 24,
      slidesPerView: "auto",
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".next-btn-5",
        prevEl: ".prev-btn-5",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <div className="h2-testimonial-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12">
            <div className="section-title2 text-center">
              <h2>What Our Customer Say</h2>
            </div>
          </div>
        </div>
        <div className="row mb-50">
          <div className="col-lg-12">
            <div className="client-review-area">
              <div className="single-area">
                <div className="icon">
                  <img src="assets/images/icon/truspilot.svg" alt="" />
                  <p>Rating</p>
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
                  <span>190 reviews</span>
                </div>
              </div>
              <div className="total-review">
                <img src="assets/images/icon/total-review-star.svg" alt="" />
                <h3>4.9</h3>
              </div>
              <div className="single-area">
                <div className="icon">
                  <img src="assets/images/icon/google.svg" alt="" />
                  <p>Rating</p>
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
                  <span>390 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-50">
          <Swiper
            {...testimonialSlider}
            className="swiper h2-testimonial-slider"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-content text-center">
                    <div className="quat-icon">
                      <img
                        className="left-quat"
                        src="assets/images/icon/left-quat.svg"
                        alt=""
                      />
                      <img
                        className="right-quat"
                        src="assets/images/icon/right-quat.svg"
                        alt=""
                      />
                    </div>
                    <div className="foot-vector">
                      <img
                        className="testimonial-vec-left"
                        src="assets/images/icon/h2-testimonial-vec-left.svg"
                        alt=""
                      />
                      <img
                        className="testimonial-vec-right"
                        src="assets/images/icon/h2-testimonial-vec-right.svg"
                        alt=""
                      />
                    </div>
                    <div className="author-name-deg">
                      <h3>Sebastian Ethan</h3>
                      <span>Customer</span>
                    </div>
                    <p>
                      Pellentesque maximus augue orci, quisdal andosp
                      Pellentesque maximus augue orci, quisoki congue Nullam
                      egestas, nisi id mollis elementum.
                    </p>
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
                  </div>
                  <div className="testimonial-img">
                    <img src="assets/images/bg/h2-testi-1.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-content text-center">
                    <div className="quat-icon">
                      <img
                        className="left-quat"
                        src="assets/images/icon/left-quat.svg"
                        alt=""
                      />
                      <img
                        className="right-quat"
                        src="assets/images/icon/right-quat.svg"
                        alt=""
                      />
                    </div>
                    <div className="foot-vector">
                      <img
                        className="testimonial-vec-left"
                        src="assets/images/icon/h2-testimonial-vec-left.svg"
                        alt=""
                      />
                      <img
                        className="testimonial-vec-right"
                        src="assets/images/icon/h2-testimonial-vec-right.svg"
                        alt=""
                      />
                    </div>
                    <div className="author-name-deg">
                      <h3>Anthony Dylan</h3>
                      <span>Customer</span>
                    </div>
                    <p>
                      Pellentesque maximus augue orci, quisdal andosp
                      Pellentesque maximus augue orci, quisoki congue Nullam
                      egestas, nisi id mollis elementum.
                    </p>
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
                  </div>
                  <div className="testimonial-img">
                    <img src="assets/images/bg/h2-testi-2.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between">
            <div className="slider-btn prev-btn-5">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="swiper-scrollbar" />
            <div className="slider-btn next-btn-5">
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2Testimonial;
