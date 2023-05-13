import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ItemCounter from "../components/shop/ProductCount";
import Layout from "../layout/Layout";
import axios from "axios";

import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const CART_API = process.env.REACT_APP_FETCH_API + `/cart/hieu@codegym.com`;
  const DELETE_PRODUCT_CART_API = process.env.REACT_APP_FETCH_API + `/cart`;

  //Confirm delete
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios
      .get(`${CART_API}`)
      .then(res => {
        setCartProducts(res.data.cartDetailDtoResponses)
      })
      .catch(err => {
        console.log(err)
      })
  }, [CART_API])

  function discoutPrice(price, sale) {
    return price * (1 - (sale / 100));
  }

  /*Delete product in cart*/
  const accept = (productId) => {
    if (productId) {
      axios
        .delete(`${DELETE_PRODUCT_CART_API}/${productId}/hieu@codegym.com`)
        .then(res => {
          window.location.href = "/cart"
          toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        })
        .catch(err => {
          throw err;
        });
    }
  };

  const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    setSelectedProductId(null);
  };

  function handleSelectedProductId(productId) {
    setSelectedProductId(productId);
    setVisible(true)
  }

  /*Total Price */
  const [subtotal, setSubtotal] = useState({});

  const handleCountChange = (productId, newCount) => {
    setSubtotal(prevState => (
      {
        ...prevState,
        [productId]: cartProducts.find(product => product.productDtoResponse.id === productId).totalPrice * newCount
      }
    ));
  };
  console.log(subtotal)

  return (
    <>
      <Toast ref={toast} />
      <Layout>
        <Breadcrumb pageName="Cart" pageTitle="Cart" />
        <div className="cart-section pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-wrapper">
                  <table className="eg-table table cart-table">
                    <thead>
                      <tr>
                        <th>Delete</th>
                        <th>Image</th>
                        <th>Food Name</th>
                        <th>Unite Price</th>
                        <th>Discount Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartProducts.map((cartProduct) => {

                          return (
                            <tr key={cartProduct.productDtoResponse.id}>
                              <td data-label="Delete">
                                <div className="delete-icon">
                                  <i className="bi bi-x" onClick={() => handleSelectedProductId(cartProduct.productDtoResponse.id)} />
                                </div>
                              </td>
                              <td data-label="Image">
                                <img src={cartProduct.productDtoResponse.image} alt="" />
                              </td>
                              <td data-label="Food Name">
                                <Link legacyBehavior to={`/shop-details/${cartProduct.productDtoResponse.id}`}>
                                  <span>{cartProduct.productDtoResponse.name}</span>
                                </Link>
                              </td>
                              <td data-label="Unite Price">
                                {
                                  (cartProduct.productDtoResponse.sale === 0) ? <>${cartProduct.productDtoResponse.price}</> : <del>${cartProduct.productDtoResponse.price}</del>
                                }
                              </td>
                              <td data-label="Discount Price">
                                ${discoutPrice(cartProduct.productDtoResponse.price, cartProduct.productDtoResponse.sale)}
                              </td>
                              <td data-label="Quantity">
                                <div className="quantity d-flex align-items-center">
                                  <div className="quantity-nav nice-number d-flex align-items-center">
                                    <ItemCounter
                                      price={cartProduct.totalPrice}
                                      count={cartProduct.amount}
                                      onCountChange={(newCount) => handleCountChange(cartProduct.productDtoResponse.id, newCount)}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td data-label="Subtotal">${Object.keys(subtotal).length === 0 ? cartProduct.totalPrice : subtotal[cartProduct.productDtoResponse.id]}</td>
                            </tr>
                          )
                        })
                      }

                      {selectedProductId && (
                        <ConfirmDialog
                          visible={visible}
                          onHide={() => setVisible(false)}
                          message="Do you want to delete this product?"
                          header="Delete Confirmation"
                          icon="pi pi-exclamation-triangle"
                          acceptClassName='p-button-danger'
                          accept={() => accept(selectedProductId)}
                          reject={reject} />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="coupon-area">
                  <div className="cart-coupon-input">
                    <h5 className="coupon-title">Coupon Code</h5>
                    <form className="coupon-input d-flex align-items-center">
                      <input type="text" placeholder="Coupon Code" />
                      <button type="submit">Apply Code</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <table className="table total-table">
                  <thead>
                    <tr>
                      <th>Cart Totals</th>
                      <th />
                      <th>$128.70</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Shipping</td>
                      <td>
                        <ul className="cost-list text-start">
                          <li>Shipping Fee</li>
                          <li>Total ( tax excl.)</li>
                          <li>Total ( tax incl.)</li>
                          <li>Taxes</li>
                          <li>
                            Shipping Enter your address to view shipping options.{" "}
                            <br /> <a to="#">Calculate shipping</a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul className="single-cost text-center">
                          <li>Fee</li>
                          <li>$15</li>
                          <li></li>
                          <li>$15</li>
                          <li>$15</li>
                          <li>$5</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Subtotal</td>
                      <td />
                      <td>$162.70</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="cart-btn-group">
                  <li>
                    <Link legacyBehavior to="/shop">
                      <a className="primary-btn2 btn-lg">Continue to shopping</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior to="/check-out">
                      <a className="primary-btn3 btn-lg">Proceed to Checkout</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CartPage;
