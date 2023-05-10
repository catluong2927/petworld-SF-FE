import {Link} from "react-router-dom";
import React from "react";
import Morphext from "../morphext/Morphext";

function Banner1() {
  const phrases = ["Dog .", "Cat ."];
  return (
    <div className="hero-style-1">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-xxl-6 col-xl-5 d-flex align-items-center">
                <div className="banner-content ">
                  <div className="tag">
                    <ul>
                      <li>Trustworthy</li>
                      <li>Safely</li>
                      <li>Loyalty</li>
                    </ul>
                  </div>
                  <h1>
                    To Ensure Perfect
                    <br /> Service Of Your{" "}
                    <Morphext
                      animation="fadeInLeft"
                      speed="3000"
                      phrases={phrases}
                    />
                  </h1>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 d-flex align-items-center justify-content-md-start justify-content-center">
                <div className="banner-img">
                  <img
                    className="logo-image-homepage"
                    src="/assets/images/logo/petshop.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
