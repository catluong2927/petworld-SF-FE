import React from "react";
import ProductPriceCount from "./ProductPriceCount";

function OrderSummary() {
  return (
    <>
      <div className="added-product-summary mb-30">
        <h5 className="title-25 checkout-title">Order Summary</h5>
        <ul className="added-products">
          <li className="single-product d-flex justify-content-start">
            <div className="product-img">
              <img src="assets/images/bg/check-out-01.png" alt="" />
            </div>
            <div className="product-info">
              <h5 className="product-title">
                <a href="#">Whiskas Cat Food Core Tuna</a>
              </h5>
              <ProductPriceCount price={22} />
            </div>
            <div className="delete-btn">
              <i className="bi bi-x-lg" />
            </div>
          </li>
          <li className="single-product d-flex justify-content-start">
            <div className="product-img">
              <img src="assets/images/bg/check-out-02.png" alt="" />
            </div>
            <div className="product-info">
              <h5 className="product-title">
                <a href="#">Friskies Kitten Discoveries.</a>
              </h5>
              <ProductPriceCount price={24} />
            </div>
            <div className="delete-btn">
              <i className="bi bi-x-lg" />
            </div>
          </li>
          <li className="single-product d-flex justify-content-start">
            <div className="product-img">
              <img src="assets/images/bg/check-out-03.png" alt="" />
            </div>
            <div className="product-info">
              <h5 className="product-title">
                <a href="#">Natural Dog Fresh Food.</a>
              </h5>
              <ProductPriceCount price={12} />
            </div>
            <div className="delete-btn">
              <i className="bi bi-x-lg" />
            </div>
          </li>
        </ul>
      </div>
      <div className="summery-card cost-summery mb-30">
        <table className="table cost-summery-table">
          <thead>
            <tr>
              <th>Subtotal</th>
              <th>$128.70</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tax">Tax</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Total ( tax excl.)</td>
              <td>$15</td>
            </tr>
            <tr>
              <td>Total ( tax incl.)</td>
              <td>$15</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="summery-card total-cost mb-30">
        <table className="table cost-summery-table total-cost">
          <thead>
            <tr>
              <th>Total</th>
              <th>$162.70</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default OrderSummary;
