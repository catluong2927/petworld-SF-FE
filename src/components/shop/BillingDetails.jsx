import React, {useRef} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";

function BillingDetails(props) {
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const noteRef = useRef();
  const URL_ORDER = 'orders';
  const URL_CART = 'cart';
  const isLogin = useSelector((state) => state.auth.login?.currentUser);
  let email = "";
  if(isLogin){
    email = isLogin.userDtoResponse.email;
  }
  console.log(isLogin)
  const navigate = useNavigate();
  let items = [];
  let deleteCartDetailIdList = [];
  props.onGetData.map(element => {
    const totalPrice = element.price? element.price * element.amount: element.minPrice * element.amount;
    const item = {
      itemName: element.name,
      image: element.image,
      quantity: element.amount,
      total: totalPrice,
      note: 'Ok'
    };
    deleteCartDetailIdList.push(element.id);
    items.push(item);
    console.log(props);
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      userEmail: email,
      phoneNumber: phoneNumberRef.current.value,
      address: addressRef.current.value,
      note: noteRef.current.value,
      date: new Date(),
      status: 'Waiting for confirm',
      total: props.onGetTotal,
      orderDetailDtoRequests: items,
    };
    const res = sentRequest(URL_ORDER, "POST", data)
    res.then(
         sentRequest(URL_CART, "DELETE", deleteCartDetailIdList),
        props.toast.current.show({severity:'success', summary: 'Success', detail:`Check out successfully`, life: 1000}),
        navigate('/')
    ).catch(
        props.toast.current.show({severity:'success', summary: 'Success', detail:`Failed payment!`, life: 1000}),
    )

  }
  return (
    <>
      <div className="form-wrap box--shadow mb-30">
        <h4 className="title-25 mb-20">Delivery Details</h4>
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-12">
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
                  type="number"
                  name="phoneNumber"
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
