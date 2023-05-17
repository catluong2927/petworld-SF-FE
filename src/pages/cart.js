import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ItemCounter from "../components/shop/ProductCount";
import Layout from "../layout/Layout";
import axios from "axios";

import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

import moment from 'moment';

function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);

  //API
  const CART_API = process.env.REACT_APP_FETCH_API + `/cart/hieu@codegym.com`;
  const DELETE_PRODUCT_CART_API = process.env.REACT_APP_FETCH_API + `/cart`;
  const GET_COUPON_CODE_API = process.env.REACT_APP_FETCH_API + `/couponcode`

  //Confirm delete
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  //Handle subtotal
  const [subtotal, setSubtotal] = useState({});

  //Cart total
  const [cartTotals, setCartTotals] = useState(0);

  //Coupon Code
  const [couponCodeList, setCouponCodeList] = useState([])
  const [couponCode, setCouponCode] = useState({})
  const [discoutCode, setDiscoutCode] = useState('')


  useEffect(() => {
    axios
      .get(`${CART_API}`)
      .then(res => {
        setCartProducts(res.data.cartDetailDtoResponses);
        res.data.cartDetailDtoResponses.forEach((cartProduct) => {
          subtotal[cartProduct.productDtoResponse.id] = cartProduct.totalPrice;
        });
        setSubtotal(subtotal);
        sumCartTotal();
        console.log(cartTotals);
      })
      .catch(err => {
        console.log(err)
      })
  }, [CART_API])

  function sumCartTotal() {
    let sumWithInitial = Object.values(subtotal).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setCartTotals(sumWithInitial);
  }

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
  function handlePrice(productId) {
    let temporaryPrice = null;
    cartProducts.forEach(cartProduct => {
      if (cartProduct.productDtoResponse.id === productId) {
        if (cartProduct.productDtoResponse.sale !== 0) {
          temporaryPrice = discoutPrice(cartProduct.productDtoResponse.price, cartProduct.productDtoResponse.sale);
        } else {
          temporaryPrice = cartProduct.productDtoResponse.price;
        }
      }
    });
    return temporaryPrice;
  }

  const handleCountChange = (productId, newCount) => {
    let newSubTotal = handlePrice(productId) * newCount;
    setSubtotal(subtotal => (
      {
        ...subtotal,
        [productId]: newSubTotal
      }
    ));
  };

  //Cart Totals
  useEffect(() => {
    sumCartTotal();
  }, [subtotal])

  //Coupon Code
  useEffect(() => {
    const currentTime = moment().format("YYYY-MM-DD");
    axios
      .get(`${GET_COUPON_CODE_API}?currentDate=${currentTime}&cartTotals=${cartTotals}`)
      .then(res => {
        setCouponCodeList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [cartTotals])

  // function handleChangeValue(e, newInputValue) {
  //   setCouponCode(newInputValue);
  // }
  function handleDiscoutCodeChange(e) {
    setDiscoutCode(e.target.value);
  }

  function handleCouponCodeClick(discoutCode) {
    setCouponCode(
      couponCodeList.find(element => element.code === discoutCode) || {}
    );
  }

  console.log(discoutCode)
  console.log(couponCode)

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
                                      count={cartProduct.amount}
                                      onCountChange={(newCount) => handleCountChange(cartProduct.productDtoResponse.id, newCount)}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td data-label="Subtotal">${subtotal[cartProduct.productDtoResponse.id]}</td>
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
                      <input 
                        type="text" 
                        id="code" 
                        name="code" 
                        value={discoutCode} 
                        onChange={handleDiscoutCodeChange}
                        placeholder="Coupon Code" 
                      />

                      <button type="button" onClick={() => handleCouponCodeClick(discoutCode)}>Apply Code</button>
                    </form>
                    <div>
                      <p>Mã giảm giá</p>
                      <ul>
                        {couponCodeList &&
                          couponCodeList.map((item, index) => (
                            <li key={index}>{item.code}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <table className="table total-table">
                  <thead>
                    <tr>
                      <th>Cart Totals</th>
                      <th />
                      <th>${cartTotals}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Shipping</td>
                      <td>
                        <ul className="cost-list text-start">
                          <li>Shipping Fee</li>
                          {/* <li>Total ( tax excl.)</li>
                          <li>Total ( tax incl.)</li>
                          <li>Taxes</li> */}
                          <li>{couponCode.code || ""}</li>
                          <li>
                            Shipping Enter your address to view shipping options.{" "}
                            <br /> <a to="#">Calculate shipping</a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul className="single-cost text-center">
                          <li>Fee</li>
                          {/* <li>$15</li>
                          <li></li>
                          <li>$15</li>
                          <li>$15</li>
                          <li>$5</li> */}
                          {couponCode.code && <li>{couponCode.discount}%</li>}
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
