import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import ProductPriceCount from "./ProductPriceCount";
import axios from "axios";



function ProductDetails(props) {
  const product = props.productDetail;
  const [productPriceCount, setProductPriceCount] = useState({})
  const [productCart, setProductCart] = useState({})
  const CART_API = process.env.REACT_APP_FETCH_API + `/cart/hieu@codegym.com`;

  function discoutPrice(price, sale){
    return price*(1 - (sale/100));
  }

  useEffect(() => {
    setProductCart({
      ...productPriceCount,
      'productId': props.productId
    })
  }, [productPriceCount, props.productId])

  function handleAddToCart(e) {
    e.preventDefault();
    axios
        .post(`${CART_API}`, productCart)
        .then(res => {
          console.log(res.data);
          props.toast.current.show({severity:'success', summary: 'Success', detail:`Add ${product.name} successfully`, life: 3000});
        })
        .catch(err => {
          props.toast.current.show({severity:'error', summary: 'Fail', detail:`Failed to add to cart `, life: 3000});
          throw err;
        });
}
  
  
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
                src="../assets/images/bg/shop-big-01.png"
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
                src="../assets/images/bg/shop-big-02.png"
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
                src="../assets/images/bg/shop-big-03.png"
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
                src="../assets/images/bg/shop-big-04.png"
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
                src="../assets/images/bg/shop-big-05.png"
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
              <img src="../assets/images/bg/shop-sm-01.png" alt="" />
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
              <img src="../assets/images/bg/shop-sm-02.png" alt="" />
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
              <img src="../assets/images/bg/shop-sm-03.png" alt="" />
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
              <img src="../assets/images/bg/shop-sm-04.png" alt="" />
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
              <img src="../assets/images/bg/shop-sm-05.png" alt="" />
            </button>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="shop-details-content">
            <h3>{product.name}</h3>
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
              <span>{product.productCode}</span>
            </div>
            <div className="price-tag">
              <h4>
                ${discoutPrice(product.price, product.sale)} {product.sale !==  0 && <del>${product.price}</del>}
              </h4>
            </div>
            <p>
              {product.description} {" "}
            </p>
            <div className="shop-quantity d-flex align-items-center justify-content-start mb-20">
              <div className="quantity d-flex align-items-center">
                <ProductPriceCount 
                    price={product.sale !== 0 ? discoutPrice(product.price, product.sale) : product.price} 
                    onSendCart={setProductPriceCount}
                 />
              </div>
              <Link legacyBehavior to="/cart">
                <button className="primary-btn3" onClick={handleAddToCart}>Add to cart</button>
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
                      <img src="../assets/images/icon/compare.svg" alt="" />
                    </span>{" "}
                    Compare
                  </a>
                </li>
                <li>
                  <a to="#">
                    <span>
                      <img
                        src="../assets/images/icon/Icon-favorites2.svg"
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
                  <img src="../assets/images/icon/visa2.svg" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/amex.svg" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/discover.svg" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/mastercard.svg" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/stripe.svg" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/paypal.svg" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/pay.svg" alt="" />
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
