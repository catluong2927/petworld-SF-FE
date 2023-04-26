import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialData from "../../data/testimonial_data.json";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function Home1Testimonial() {
  const testimonialSlider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 24,
      // centeredSlides: true,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 1800,
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
          slidesPerView: 2,
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
    <div className="h1-testimonial-area mb-120">
      <div className="container-fluid">
        <div className="row mb-50">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title1 text-center">
              <span>
                <img src="assets/images/icon/section-vec-l2.svg" alt="" />
                Testimonial
                <img src="assets/images/icon/section-vec-r2.svg" alt="" />
              </span>
              <h2 className="text-white">valueable words from Customers</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xxl-10 col-md-11  p-sm-0">
            <Swiper
              {...testimonialSlider}
              className="swiper h1-testimonial-slider"
            >
              <div className="swiper-wrapper">
                {testimonialData.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <div className="testimonial-card">
                        <div className="testimonial-img">
                          <img
                            className="img-fluid"
                            src={item.home1Image}
                            alt=""
                          />
                        </div>
                        <div className="testimonial-content">
                          <ul className="review">
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
                          <p>{item.review}</p>
                          <div className="author-area">
                            <h4>{item.authorName}</h4>
                            <span>Customer</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
          <div className="col-md-11">
            <div className="swiper-btn-wrap d-flex align-items-center justify-content-center">
              <div className="slider-btn prev-btn-1">
                <i style={{ cursor: "pointer" }} className="bi bi-arrow-left" />
              </div>
              <div className="slider-btn next-btn-1">
                <i
                  style={{ cursor: "pointer" }}
                  className="bi bi-arrow-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1Testimonial;
