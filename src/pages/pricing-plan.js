import {Link} from "react-router-dom";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function PricingPlan() {
  return (
    <Layout>
      <Breadcrumb pageName="Pricing Plan" pageTitle="Pricing Plan" />
      <div className="h1-pricing-plan-area two pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="section-title1 text-center">
                <span>
                  <img src="assets/images/icon/section-vec-l1.svg" alt="" />
                  Pricing plan
                  <img src="assets/images/icon/section-vec-r1.svg" alt="" />
                </span>
                <h2>Choose your perfect Plan</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link one active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Per Hour
                </button>
                <button
                  className="nav-link two"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Per Day
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="row justify-content-center g-lg-4 gy-5">
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="pricing-card">
                      <img
                        className="price-card-vector"
                        src="assets/images/icon/price-card-bg.svg"
                        alt=""
                      />
                      <div className="title">
                        <h4>Day Care Regular</h4>
                        <h2>
                          <span className="currency">$</span> 39{" "}
                          <span className="time">Per Hour</span>
                        </h2>
                      </div>
                      <ul>
                        <li>
                          Socialise Excercise
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Handscissor Finish
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Watering Plants
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Conditioning Treatment
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                        <li>
                          Ears Flushed &amp; Cleaned
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                      </ul>
                      <div className="book-now-btn">
                        <Link legacyBehavior href="/contact">
                          <a>Book Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="pricing-card active">
                      <div className="offer-batch">
                        <h5>
                          50% <span>Off</span>
                        </h5>
                      </div>
                      <img
                        className="price-card-vector"
                        src="assets/images/icon/price-card-bg.svg"
                        alt=""
                      />
                      <div className="title">
                        <h4>Day Care Standard</h4>
                        <h2>
                          <span className="currency">$</span> 49{" "}
                          <span className="time">Per Hour</span>
                        </h2>
                      </div>
                      <ul>
                        <li>
                          Socialise Excercise
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Handscissor Finish
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Watering Plants
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Conditioning Treatment
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                        <li>
                          Ears Flushed &amp; Cleaned
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                      </ul>
                      <div className="book-now-btn">
                        <Link legacyBehavior href="/contact">
                          <a>Book Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="pricing-card">
                      <img
                        className="price-card-vector"
                        src="assets/images/icon/price-card-bg.svg"
                        alt=""
                      />
                      <div className="title">
                        <h4>Day Care Standard</h4>
                        <h2>
                          <span className="currency">$</span> 99{" "}
                          <span className="time">Per Hour</span>
                        </h2>
                      </div>
                      <ul>
                        <li>
                          Socialise Excercise
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Handscissor Finish
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Watering Plants
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Conditioning Treatment
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                        <li>
                          Ears Flushed &amp; Cleaned
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                      </ul>
                      <div className="book-now-btn">
                        <Link legacyBehavior href="/contact">
                          <a>Book Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="row justify-content-center g-lg-4 gy-5">
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="pricing-card">
                      <img
                        className="price-card-vector"
                        src="assets/images/icon/price-card-bg.svg"
                        alt=""
                      />
                      <div className="title">
                        <h4>Day Care Standard</h4>
                        <h2>
                          <span className="currency">$</span> 390{" "}
                          <span className="time">Per Day</span>
                        </h2>
                      </div>
                      <ul>
                        <li>
                          Socialise Excercise
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Handscissor Finish
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Watering Plants
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Conditioning Treatment
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                        <li>
                          Ears Flushed &amp; Cleaned
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                      </ul>
                      <div className="book-now-btn">
                        <Link legacyBehavior href="/contact">
                          <a>Book Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="pricing-card">
                      <div className="offer-batch">
                        <h5>
                          50% <span>Off</span>
                        </h5>
                      </div>
                      <img
                        className="price-card-vector"
                        src="assets/images/icon/price-card-bg.svg"
                        alt=""
                      />
                      <div className="title">
                        <h4>Day Care Standard </h4>
                        <h2>
                          <span className="currency">$</span> 490{" "}
                          <span className="time">Per Day</span>
                        </h2>
                      </div>
                      <ul>
                        <li>
                          Socialise Excercise
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Handscissor Finish
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Watering Plants
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Conditioning Treatment
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                        <li>
                          Ears Flushed &amp; Cleaned
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                      </ul>
                      <div className="book-now-btn">
                        <Link legacyBehavior href="/contact">
                          <a>Book Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="pricing-card">
                      <img
                        className="price-card-vector"
                        src="assets/images/icon/price-card-bg.svg"
                        alt=""
                      />
                      <div className="title">
                        <h4>Day Care Special</h4>
                        <h2>
                          <span className="currency">$</span> 990{" "}
                          <span className="time">Per Day</span>
                        </h2>
                      </div>
                      <ul>
                        <li>
                          Socialise Excercise
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Handscissor Finish
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Watering Plants
                          <img
                            src="assets/images/icon/pricing-check.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          Conditioning Treatment
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                        <li>
                          Ears Flushed &amp; Cleaned
                          <img src="assets/images/icon/pricing-X.svg" alt="" />
                        </li>
                      </ul>
                      <div className="book-now-btn">
                        <Link legacyBehavior href="/contact">
                          <a>Book Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PricingPlan;
