import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ShopCard() {

  const PRODUCT_API = `http://localhost:8080/api/products`;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
        .get(`${PRODUCT_API}`)
        .then(res => {
            setProducts(res.data.content)

        })
        .catch(err => {console.log(err)
        })
}, []);


console.log(products)
  return (
    <>
      {products.map((item) => {
        const {
          name, 
          image,
          price
        } = item;
        return (
          <div key={name} className="col-lg-4 col-md-4 col-sm-6">
            <div className="collection-card">
              {/* {tag == "" ? (
                ""
              ) : (
                <div
                  className={
                    tag_badge === "" ? "offer-card" : `offer-card ${tag_badge}`
                  }
                >
                  <span>{tag}</span>
                </div>
              )} */}
              <div className="collection-img">
                <img className="img-gluid" style={{width:'200px', height:'200px'}} src={image} alt="" />
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
                    <a>{name}</a>
                  </Link>
                </h4>
                <div className="price">
                  <h6>${price}</h6>
                  <del>${price}</del>
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
                  {/* <span>({review})</span> */}
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
