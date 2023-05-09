import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import teamData from "../../data/team_data.json";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function Home1Team() {
  const temSlider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 24,
      // centeredSlides: true,
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
          spaceBetween: 15,
        },
        480: {
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
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="team-area mb-120 position-relative">
      <div className="swiper-btn-wrap d-flex align-items-center justify-content-between">
        <div className="slider-btn prev-btn-2">
          <i className="bi bi-arrow-left" />
        </div>
        <div className="slider-btn next-btn-2">
          <i className="bi bi-arrow-right" />
        </div>
      </div>
      <div className="container">
        <div className="row mb-50">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title1 text-center">
              <span>
                <img src="assets/images/icon/section-vec-l1.svg" alt="" />
                Our Team
                <img src="assets/images/icon/section-vec-r1.svg" alt="" />
              </span>
              <h2>See Our Scooby Team members</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...temSlider} className="swiper team-slider-1">
            <div className="swiper-wrapper">
              {teamData.map((item) => {
                return (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="single-team-card">
                      <div className="member-img">
                        <img className="img-fluid" src={item.image} alt="" />
                      </div>
                      <div className="member-content">
                        <span>{item.designation}</span>
                        <h3>{item.name}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home1Team;
