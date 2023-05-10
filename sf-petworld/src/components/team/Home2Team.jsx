import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Home2Team() {
  const teamSlider = useMemo(() => {
    return {
      spaceBetween: 24,
      slidesPerView: "auto",
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2200,
      },
      pagination: {
        el: ".team-pagination",
        clickable: true,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
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
        1500: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  return (
    <div className="h2-team-area mb-120">
      <div className="vector1">
        <img src="assets/images/bg/team/team-vector-1.png" alt="" />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-11">
            <div className="section-title2 text-center">
              <h2>Our best working team</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11 justify-content-center">
            <Swiper {...teamSlider} className="swiper h2-team-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="team-card">
                    <div className="team-card-inner">
                      <div className="card-style-1">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-1.png"
                            alt=""
                          />
                        </div>
                        <div className="team-content">
                          <h3>Kash Preston</h3>
                          <span>Co-Founder</span>
                        </div>
                      </div>
                      <div className="card-style-2">
                        <div className="team-content">
                          <h3>Kash Preston</h3>
                          <span>Co-Founder</span>
                        </div>
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-1.png"
                            alt=""
                          />
                          <div className="social-area">
                            <div className="share-icon">
                              <i className="bi bi-share-fill" />
                            </div>
                            <ul className="social-icons">
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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-card">
                    <div className="team-card-inner">
                      <div className="card-style-1">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-2.png"
                            alt=""
                          />
                        </div>
                        <div className="team-content">
                          <h3>Scarlett Emily</h3>
                          <span>Kennel Assistant</span>
                        </div>
                      </div>
                      <div className="card-style-2">
                        <div className="team-content">
                          <h3>Scarlett Emily</h3>
                          <span>Kennel Assistant</span>
                        </div>
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-2.png"
                            alt=""
                          />
                          <div className="social-area">
                            <div className="share-icon">
                              <i className="bi bi-share-fill" />
                            </div>
                            <ul className="social-icons">
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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-card">
                    <div className="team-card-inner">
                      <div className="card-style-1">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-3.png"
                            alt=""
                          />
                        </div>
                        <div className="team-content">
                          <h3>Jackson Mateo</h3>
                          <span>Veterinary Assistant</span>
                        </div>
                      </div>
                      <div className="card-style-2">
                        <div className="team-content">
                          <h3>Jackson Mateo</h3>
                          <span>Veterinary Assistant</span>
                        </div>
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-3.png"
                            alt=""
                          />
                          <div className="social-area">
                            <div className="share-icon">
                              <i className="bi bi-share-fill" />
                            </div>
                            <ul className="social-icons">
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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-card">
                    <div className="team-card-inner">
                      <div className="card-style-1">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-4.png"
                            alt=""
                          />
                        </div>
                        <div className="team-content">
                          <h3>Madison Ellie</h3>
                          <span>Groomer Manager</span>
                        </div>
                      </div>
                      <div className="card-style-2">
                        <div className="team-content">
                          <h3>Madison Ellie</h3>
                          <span>Groomer Manager</span>
                        </div>
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-4.png"
                            alt=""
                          />
                          <div className="social-area">
                            <div className="share-icon">
                              <i className="bi bi-share-fill" />
                            </div>
                            <ul className="social-icons">
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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-card">
                    <div className="team-card-inner">
                      <div className="card-style-1">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-5.png"
                            alt=""
                          />
                        </div>
                        <div className="team-content">
                          <h3>Gorjona Hiller</h3>
                          <span>Daycare Manager</span>
                        </div>
                      </div>
                      <div className="card-style-2">
                        <div className="team-content">
                          <h3>Gorjona Hiller</h3>
                          <span>Daycare Manager</span>
                        </div>
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/team/h2-team-5.png"
                            alt=""
                          />
                          <div className="social-area">
                            <div className="share-icon">
                              <i className="bi bi-share-fill" />
                            </div>
                            <ul className="social-icons">
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
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="pagination-area">
                <div className="team-pagination" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2Team;
