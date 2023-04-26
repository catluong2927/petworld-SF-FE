import {Link} from "react-router-dom";
import React from "react";
import petCollection from "../../data/petCollection.json";
function ShopCard() {
  return (
    <>
      {petCollection.map((item) => {
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
          <div key={id} className="col-lg-4 col-md-4 col-sm-6">
            <div className="collection-card">
              {tag == "" ? (
                ""
              ) : (
                <div
                  className={
                    tag_badge === "" ? "offer-card" : `offer-card ${tag_badge}`
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
                  <Link legacyBehavior to="/shop-details">
                    <a>View Details</a>
                  </Link>
                </div>
                <ul className="cart-icon-list">
                  <li>
                    <a to="#">
                      <img src="assets/images/icon/Icon-cart3.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a to="#">
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
                  <Link legacyBehavior to="/shop-details">
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
    </>
  );
}

export default ShopCard;
