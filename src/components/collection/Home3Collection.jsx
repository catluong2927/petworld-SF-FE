import {Link} from "react-router-dom";
import React from "react";
import petCollection from "../../data/petCollection.json";

function Home3Collection() {
  return (
    <div className="home3-collection-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="section-title3">
              <h2>
                <img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" />
                <span>Find Pet Collections</span>
                <img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" />
              </h2>
            </div>
            <div className="h3-view-btn d-md-flex d-none">
              <Link legacyBehavior href="/shop">
                <a>
                  View All Product
                  <img src="assets/images/icon/haf-button-2.svg" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {petCollection.slice(0, 8).map((item) => {
            const {
              id,
              img,
              title,
              review,
              offer_price,
              regular_price,
              tag,
              tag_badge,
            } = item;
            return (
              <div key={id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="collection-card">
                  {tag == "" ? (
                    ""
                  ) : (
                    <div
                      className={
                        tag_badge === ""
                          ? "offer-card"
                          : `offer-card ${tag_badge}`
                      }
                    >
                      <span>{tag}</span>
                    </div>
                  )}
                  <div className="collection-img">
                    <img className="img-gluid" src={img} alt="" />
                    <div className="view-dt-btn">
                      <div className="plus-icon">
                        <i className="bi bi-plus" />
                      </div>
                      <Link legacyBehavior href="/shop-details">
                        <a>View Details</a>
                      </Link>
                    </div>
                    <ul className="cart-icon-list">
                      <li>
                        <a href="#">
                          <img src="assets/images/icon/Icon-cart3.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="assets/images/icon/Icon-favorites3.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="collection-content text-center">
                    <h4>
                      <Link legacyBehavior href="/shop-details">
                        <a>{title}</a>
                      </Link>
                    </h4>
                    <div className="price">
                      <h6>${offer_price}</h6>
                      <del>${regular_price}</del>
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
                      <span>({review})</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row d-md-none d-block pt-30">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="h3-view-btn">
              <Link legacyBehavior href="/shop">
                <a>
                  View All Product
                  <img src="assets/images/icon/haf-button-2.svg" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Collection;
