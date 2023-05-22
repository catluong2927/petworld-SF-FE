import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import ProductPriceCount from "./ProductPriceCount";
import axios from "axios";
import {sentRequest} from "../../pages/ServicePackage";



function ProductDetails(props) {
  const product = props.productDetail;
  let {imageDetailList, image} = props.productDetail;
  const [mainImage, setMainImage] = useState("")


  const [productPriceCount, setProductPriceCount] = useState({})
  const [productCart, setProductCart] = useState({})
  function discoutPrice(price, sale){
    return price*(1 - (sale/100));
  }

  if (typeof imageDetailList === "undefined") {
    imageDetailList = [];
  }
  const mainImageHandler = (props) => {
    setMainImage(props)
  }

  useEffect(() => {
    setProductCart({
      ...productPriceCount,
      'productId': props.productId
    })
    setMainImage(product.image)
  }, [productPriceCount, props.productId, imageDetailList])



  const body = {
    userEmail: "luong@codegym.com",
    type: 1,
    typeId: product.id,
    ...productPriceCount

  };
  const handlePostData = async (event) => {
    event.preventDefault();
    try {
      const url = 'cart/';
      const result = await sentRequest(url, 'POST', body);
      console.log('Result:', result);
      props.toast.current.show({severity:'success', summary: 'Success', detail:`Add ${product.name} successfully`, life: 3000});
    } catch (error) {
      props.toast.current.show({severity:'error', summary: 'Fail', detail:`Failed to add to cart `, life: 3000});
      console.error('Error:', error.message);
    }
  };
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
                className="img-fluid product-image"
                src={mainImage} 
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
          
            {imageDetailList.map((item, index) => (
                <button key={index}
                className="nav-link"
                // id={`v-pills-img1-tab`}
                // data-bs-toggle="pill"
                // data-bs-target={`#v-pills-img1`}
                // type="button"
                // role="tab"
                // aria-controls={`v-pills-img1`}
                // aria-selected="false"
                onClick={mainImageHandler.bind(null, item.url)}
                >
                <img src={item.url} alt="" className="product-detail-image" />
              </button>
            ))}
            


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
                <button className="primary-btn3" onClick={handlePostData}>Add to cart</button>
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
