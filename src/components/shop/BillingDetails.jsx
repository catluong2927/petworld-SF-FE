import React, {useRef} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deleteAllItems} from "../../store/cartInventorySlice";

function BillingDetails(props) {
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const noteRef = useRef();
  const dispatch = useDispatch();
  const URL_ORDER = 'orders';
  const URL_CART = 'cart';
  const isLogin = useSelector((state) => state.auth.login?.currentUser);
  let email = "";
  if(isLogin){
    email = isLogin.userDtoResponse.email;
  }
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cartInventory.items)
  const validatePhoneNumber = () => {
    const phoneNumber = phoneNumberRef.current.value;
    const phoneNumberPattern = /^\d{10}$/;

    if (!phoneNumberPattern.test(phoneNumber)) {
      phoneNumberRef.current.setCustomValidity("Invalid phone number");
    } else {
      phoneNumberRef.current.setCustomValidity("");
    }
  };


  let items = [];
  let deleteCartDetailIdList = [];
  cartItems.map(element => {
    const totalPrice =  element.price * element.amount;
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
    if(cartItems.isEmpty){
    const res = sentRequest(URL_ORDER, "POST", data)
      res.then(
          sentRequest(URL_CART, "DELETE", deleteCartDetailIdList),
          dispatch(deleteAllItems()),
          props.toast.current.show({severity:'success', summary: 'Success', detail:`Check out successfully`, life: 1000}),
          navigate('/')
      ).catch(
          props.toast.current.show({severity:'success', summary: 'Success', detail:`Failed payment!`, life: 1000}),
      )
    } else {
          navigate('/shop')
    }


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
                    name="phoneNumber"
                    placeholder="Address to recieve our order"
                    required
                    ref={addressRef}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner form-inner-phone">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Reciept's Phone Number"
                  required
                  ref={phoneNumberRef}
                  onChange={validatePhoneNumber}
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
