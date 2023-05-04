import {Link} from "react-router-dom";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ItemCounter from "../components/shop/ProductCount";
import Layout from "../layout/Layout";

function CartPage() {
  return (
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
                    <tr>
                      <td data-label="Delete">
                        <div className="delete-icon">
                          <i className="bi bi-x" />
                        </div>
                      </td>
                      <td data-label="Image">
                        <img src="assets/images/bg/cart-01.png" alt="" />
                      </td>
                      <td data-label="Food Name">
                        <Link legacyBehavior to="/shop-details">
                          <a>Whiskas Cat Food Core Tuna</a>
                        </Link>
                      </td>
                      <td data-label="Unite Price">
                        <del>$30.00</del>
                      </td>
                      <td data-label="Discount Price">$25.00</td>
                      <td data-label="Quantity">
                        <div className="quantity d-flex align-items-center">
                          <div className="quantity-nav nice-number d-flex align-items-center">
                            <ItemCounter />
                          </div>
                        </div>
                      </td>
                      <td data-label="Subtotal">$25.006</td>
                    </tr>
                    <tr>
                      <td data-label="Delete">
                        <div className="delete-icon">
                          <i className="bi bi-x" />
                        </div>
                      </td>
                      <td data-label="Image">
                        <img src="assets/images/bg/cart-02.png" alt="" />
                      </td>
                      <td data-label="Food Name">
                        <Link legacyBehavior to="/shop-details">
                          <a>Friskies Kitten Discoveries.</a>
                        </Link>
                      </td>
                      <td data-label="Unite Price">
                        <del>$49.00</del>
                      </td>
                      <td data-label="Discount Price">$39.00</td>
                      <td data-label="Quantity">
                        <div className="quantity d-flex align-items-center">
                          <div className="quantity-nav nice-number d-flex align-items-center">
                            <ItemCounter />
                          </div>
                        </div>
                      </td>
                      <td data-label="Subtotal">$39.00</td>
                    </tr>
                    <tr>
                      <td data-label="Delete">
                        <div className="delete-icon">
                          <i className="bi bi-x" />
                        </div>
                      </td>
                      <td data-label="Image">
                        <img src="assets/images/bg/cart-03.png" alt="" />
                      </td>
                      <td data-label="Food Name">
                        <Link legacyBehavior to="/shop-details">
                          <a>Natural Dog Fresh Food.</a>
                        </Link>
                      </td>
                      <td data-label="Unite Price">$30.00</td>
                      <td data-label="Discount Price">$18.00</td>
                      <td data-label="Quantity">
                        <div className="quantity d-flex align-items-center">
                          <div className="quantity-nav nice-number d-flex align-items-center">
                            <ItemCounter />
                          </div>
                        </div>
                      </td>
                      <td data-label="Subtotal">$18.00</td>
                    </tr>
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
  );
}

export default CartPage;
