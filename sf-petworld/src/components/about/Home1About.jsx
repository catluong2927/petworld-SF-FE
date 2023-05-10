import React from "react";
import {useLocation} from "react-router-dom";

function Home1About() {
  const location = useLocation();
  const currentpage = location.pathname;
  return (
    <div
      className={
        currentpage === "/about"
          ? "h1-story-area two mb-120 pt-120"
          : "h1-story-area mb-120"
      }
    >
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-6">
            <div className="section-title1">
              <span>
                <img src="assets/images/icon/section-vec-l1.svg" alt="" />
                Our Story
                <img src="assets/images/icon/section-vec-r1.svg" alt="" />
              </span>
              <h2>come to know what we have done about pets.</h2>
            </div>
            <div className="story-content">
              <p>
                Pellentesque maximus augue orci, quis congue purus iaculison id.
                Maecenas eu lorem quisesdoi massal molestie vulputate in sitagi
                amet diam. Cras eu odio sit amet ipsum cursus for that gone
                pellentesquea. thisaton Vestibulum ut aliquet risus. In hac
                habitasse plateajoa dictumst. Nuncet posuere scelerisque justo
                in accumsan.
              </p>
              <div className="story-title-reviews">
                <h3>
                  We Think Working Process may <span>increase</span> mindset.
                </h3>
                <div className="review">
                  <p>
                    Based on <a href="#">20,921 reviews</a>
                  </p>
                  <img src="assets/images/icon/trastpilot.svg" alt="" />
                </div>
              </div>
              <p>
                Pellentesque maximus augue orci, quis congue purus iaculison id.
                Maecenas eu lorem quisesdoi massal molestie vulputate in sitagi
                amet diam. Cras eu odio sit amet ipsum cursus for that gone
                pellentesquea. thisaton Vestibulum ut aliquet risus.
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
            <div className="story-img">
              <img
                className="img-fluid"
                src="assets/images/bg/story-img1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1About;
