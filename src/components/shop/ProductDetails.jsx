import {Link} from "react-router-dom";

import React from "react";
import ProductPriceCount from "./ProductPriceCount";

function ProductDetails() {
  return (
    <>
      <div className="row g-lg-4 gy-5 mb-120">
        <div className="col-lg-7">
          <div className="tab-content tab-content1" id="v-pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="v-pills-img1"
              role="tabpanel"
              aria-labelledby="v-pills-img1-tab"
            >
              <img
                className="img-fluid"
                src="assets/images/bg/shop-big-01.png"
                alt=""
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-img2"
              role="tabpanel"
              aria-labelledby="v-pills-img2-tab"
            >
              <img
                className="img-fluid"
                src="assets/images/bg/shop-big-02.png"
                alt=""
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-img3"
              role="tabpanel"
              aria-labelledby="v-pills-img3-tab"
            >
              <img
                className="img-fluid"
                src="assets/images/bg/shop-big-03.png"
                alt=""
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-img4"
              role="tabpanel"
              aria-labelledby="v-pills-img4-tab"
            >
              <img
                className="img-fluid"
                src="assets/images/bg/shop-big-04.png"
                alt=""
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-img5"
              role="tabpanel"
              aria-labelledby="v-pills-img5-tab"
            >
              <img
                className="img-fluid"
                src="assets/images/bg/shop-big-05.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="nav nav1 nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-img1-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-img1"
              type="button"
              role="tab"
              aria-controls="v-pills-img1"
              aria-selected="true"
            >
              <img src="assets/images/bg/shop-sm-01.png" alt="" />
            </button>
            <button
              className="nav-link"
              id="v-pills-img2-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-img2"
              type="button"
              role="tab"
              aria-controls="v-pills-img2"
              aria-selected="false"
            >
              <img src="assets/images/bg/shop-sm-02.png" alt="" />
            </button>
            <button
              className="nav-link"
              id="v-pills-img3-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-img3"
              type="button"
              role="tab"
              aria-controls="v-pills-img3"
              aria-selected="false"
            >
              <img src="assets/images/bg/shop-sm-03.png" alt="" />
            </button>
            <button
              className="nav-link"
              id="v-pills-img4-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-img4"
              type="button"
              role="tab"
              aria-controls="v-pills-img4"
              aria-selected="false"
            >
              <img src="assets/images/bg/shop-sm-04.png" alt="" />
            </button>
            <button
              className="nav-link"
              id="v-pills-img5-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-img5"
              type="button"
              role="tab"
              aria-controls="v-pills-img5"
              aria-selected="false"
            >
              <img src="assets/images/bg/shop-sm-05.png" alt="" />
            </button>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="shop-details-content">
            <h3>To Make Delicious Food Item.</h3>
            <ul className="shopuct-review2 d-flex flex-row align-items-center mb-25">
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
              <li>
                <a to="#" className="review-no">
                  (1 customer review)
                </a>
              </li>
            </ul>
            <div className="model-number">
              <span>SKU:9852410</span>
            </div>
            <div className="price-tag">
              <h4>
                $50.00 <del>$80.00</del>
              </h4>
            </div>
            <p>
              Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai
              wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis.{" "}
            </p>
            <div className="shop-quantity d-flex align-items-center justify-content-start mb-20">
              <div className="quantity d-flex align-items-center">
                <ProductPriceCount price={30} />
              </div>
              <Link legacyBehavior to="/cart">
                <a className="primary-btn3">Add to cart</a>
              </Link>
            </div>
            <div className="buy-now-btn">
              <Link legacyBehavior to="/cart">
                <a>Buy Now</a>
              </Link>
            </div>
            <div className="compare-wishlist-area">
              <ul>
                <li>
                  <a to="#">
                    <span>
                      <img src="assets/images/icon/compare.svg" alt="" />
                    </span>{" "}
                    Compare
                  </a>
                </li>
                <li>
                  <a to="#">
                    <span>
                      <img
                        src="assets/images/icon/Icon-favorites2.svg"
                        alt=""
                      />
                    </span>{" "}
                    Add to wishlist
                  </a>
                </li>
              </ul>
            </div>
            <div className="pyment-method">
              <h6>Guaranted Safe Checkout</h6>
              <ul>
                <li>
                  <img src="assets/images/icon/visa2.svg" alt="" />
                </li>
                <li>
                  <img src="assets/images/icon/amex.svg" alt="" />
                </li>
                <li>
                  <img src="assets/images/icon/discover.svg" alt="" />
                </li>
                <li>
                  <img src="assets/images/icon/mastercard.svg" alt="" />
                </li>
                <li>
                  <img src="assets/images/icon/stripe.svg" alt="" />
                </li>
                <li>
                  <img src="assets/images/icon/paypal.svg" alt="" />
                </li>
                <li>
                  <img src="assets/images/icon/pay.svg" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
