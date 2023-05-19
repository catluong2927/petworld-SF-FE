import React, {useRef} from "react";
import * as events from "events";
import {sentRequest} from "../../pages/ServicePackage";

function BillingDetails(props) {
  const usernameRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const noteRef = useRef();
  const URL_ORDER = 'orders';
  const URL_CART = 'cart';
  let items = [];
  let deleteCartDetailIdList = [];
  props.onGetData.map(element => {
    const item = {
      itemName: element.name,
      quantity: element.amount,
      total: element.totalPrice,
      note: 'Ok'
    };
    deleteCartDetailIdList.push(element.id);
    items.push(item);
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      userEmail: "luong@codegym.com",
      phoneNumber: usernameRef.current.value,
      address: addressRef.current.value,
      note: noteRef.current.value,
      date: new Date(),
      status: 'Waiting for confirm',
      orderDetailDtoRequests: items,
    };
    const res = sentRequest(URL_ORDER, "POST", data)
    res.then(
         sentRequest(URL_CART, "DELETE", deleteCartDetailIdList),
        // props.toast.current.show({severity:'success', summary: 'Success', detail:`Add successfully`, life: 3000})
        alert("success"),
    ).catch(
        // props.toast.current.show({severity:'error', summary: 'Fail', detail:`Failed to add to cart `, life: 3000})
  )

  }
  return (
    <>
      <div className="form-wrap box--shadow mb-30">
        <h4 className="title-25 mb-20">Delivery Details</h4>
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-12">
              <div className="form-inner">
                <label>Reciept's Name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Reciept's name"
                  required
                  ref={usernameRef}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <label>Street Address</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Address to recieve"
                  required
                  ref={addressRef}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Reciept's Phone Number"
                  required
                  ref={phoneNumberRef}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <label>Note for order</label>
                <textarea
                  name="message"
                  placeholder="Order Notes (Optional)"
                  rows={6}
                  defaultValue={""}
                  required
                  ref={noteRef}
                />
              </div>
            </div>
          </div>
          <div className="place-order-btn">
            <button type="submit" className="primary-btn1 lg-btn">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BillingDetails;
