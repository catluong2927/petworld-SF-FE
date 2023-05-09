import React, { useMemo, useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import gallaryData from "../../data/gallary_data.json";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function Home1Gallary() {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const gallarySlider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 12,
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
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 7,
        },
        1400: {
          slidesPerView: 8,
        },
        1600: {
          slidesPerView: 8,
        },
      },
    };
  }, []);
  return (
    <div className="gallery-img-area">
      <Swiper {...gallarySlider} className="swiper gallery-1">
        <div className="swiper-wrapper">
          {gallaryData.map((item, index) => {
            return (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="gallery2-img">
                  <div className="gallery-img">
                    <img className="img-fluid" src={item.smallimage} alt="" />
                    <div className="overlay">
                      <div className="zoom-icon">
                        <i
                          className="bi bi-zoom-in"
                          onClick={() =>
                            setOpenimg({
                              openingState: true,
                              openingIndex: index,
                            })
                          }
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={gallaryData.map(function (elem) {
          return { src: elem.imageBig };
        })}
      />
    </div>
  );
}

export default Home1Gallary;
