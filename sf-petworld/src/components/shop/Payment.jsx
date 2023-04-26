import React from "react";

function Payment() {
  return (
    <>
      <form className="payment-form">
        <div className="payment-methods mb-50">
          <div className="form-check payment-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Check payments
            </label>
            <p className="para">
              Please send a check to Store Name, Store Street, Store Town, Store
              State / County, Store Postcode.
            </p>
          </div>
          <div className="form-check payment-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Cash on delivery
            </label>
            <p className="para">Pay with cash upon delivery.</p>
          </div>
          <div className="form-check payment-check paypal d-flex flex-wrap align-items-center">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              PayPal
            </label>
            <img src="assets/images/bg/payonert.png" alt="" />
            <a href="#" className="about-paypal">
              What is PayPal
            </a>
          </div>
          <div className="payment-form-bottom d-flex align-items-start">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I have read and agree to the website <br />{" "}
              <a href="#">Terms and conditions</a>
            </label>
          </div>
        </div>
        <div className="place-order-btn">
          <button type="submit" className="primary-btn1 lg-btn">
            Place Order
          </button>
        </div>
      </form>
    </>
  );
}

export default Payment;
