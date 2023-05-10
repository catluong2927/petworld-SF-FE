import {Link} from "react-router-dom";
import React from "react";

function OfferBanner() {
  return (
    <div className="offer-banner-area mb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-6 col-sm-8">
            <div className="offer-banner-card">
              <div className="offer-img d-lg-none d-flex justify-content-center">
                <img src="assets/images/bg/offer-img-31.png" alt="" />
              </div>
              <div className="offer-content">
                <h4>
                  <Link legacyBehavior href="#">
                    <a>All Natural Cat Food Package </a>
                  </Link>
                </h4>
                <div className="price">
                  <h6>$25.00</h6>
                  <del>$30.00</del>
                </div>
              </div>
              <div className="offer-img d-lg-block d-none">
                <img src="assets/images/bg/offer-img-31.png" alt="" />
              </div>
              <div className="offer-right">
                <div className="offer-tag  d-lg-none d-flex justify-content-center">
                  <h3>
                    50%<span>Off</span>
                  </h3>
                </div>
                <Link legacyBehavior href="/shop">
                  <a className="primary-btn6">Shop Now</a>
                </Link>
                <div className="offer-tag d-lg-flex d-none">
                  <h3>
                    50%
                    <br />
                    <span>Off</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferBanner;
