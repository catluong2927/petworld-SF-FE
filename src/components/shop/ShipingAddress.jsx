import React from "react";

function ShipingAddress() {
  return (
    <div className="form-wrap box--shadow">
      <h4 className="title-25 mb-20">Ship to a Different Address?</h4>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-inner">
              <label>First Name</label>
              <input type="text" name="fname" placeholder="Your first name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-inner">
              <label>Last Name</label>
              <input type="text" name="fname" placeholder="Your last name" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <textarea
                name="message"
                placeholder="Order Notes (Optional)"
                rows={3}
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShipingAddress;
