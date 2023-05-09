import React from "react";

function BillingDetails() {
  return (
    <>
      <div className="form-wrap box--shadow mb-30">
        <h4 className="title-25 mb-20">Billing Details</h4>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-inner">
                <label>First Name</label>
                <input type="text" name="fname" placeholder="Your first name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner">
                <label>Last Name</label>
                <input type="text" name="fname" placeholder="Your last name" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <label>Country / Region</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Your country name"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <label>Street Address</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="House and street name"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <select>
                  <option>Town / City</option>
                  <option>Dhaka</option>
                  <option>Saidpur</option>
                  <option>Newyork</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <input type="text" name="fname" placeholder="Post Code" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <label>Additional Information</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <input type="text" name="postcode" placeholder="Post Code" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <textarea
                  name="message"
                  placeholder="Order Notes (Optional)"
                  rows={6}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BillingDetails;
