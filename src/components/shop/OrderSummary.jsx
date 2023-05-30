import React, {useEffect, useState} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import {
  addItemByOne,
  decreaseItemByOne,
  deleteAllItems,
  deleteItem,
  firstCallApi
} from "../../store/cartInventorySlice";
import {useDispatch, useSelector} from "react-redux";

function OrderSummary(props) {
  const [data, setData] = useState([]);
  const cartTotal = useSelector((state) => state.cartInventory.cartTotal)
  const cartItems = useSelector((state) => state.cartInventory.items)
  const [alteredAmount, setAlteredAmount] = useState(0);
  const tax = cartTotal * 0.1;
  const shippingFee = 1;
  const total = cartTotal + tax + shippingFee;
  const dispatch = useDispatch();
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const isLogin = useSelector((state) => state.auth.login?.currentUser);
  let email = "";
  if(isLogin){
    email = isLogin.userDtoResponse.email;
  }
  const URL = `cart/${email}`

  useEffect(()=> {
    const carts = sentRequest(URL, "GET"  );
    carts.then(data => {
      dispatch(deleteAllItems());
      dispatch(firstCallApi(data))
    }).catch(
    )
  }, [])

  useEffect(()=> {
    setData(cartItems)
  }, [shouldFetchData, dispatch])

  props.onSenTotal(total);

  const deleteInCartHandler = async ( props) => {
    setShouldFetchData(!shouldFetchData);
    const body = {
      id: props.typeId,
      userEmail: email,
      ...props
    };
    dispatch(deleteItem(body))
  };

  const increase = (props) => {
    setShouldFetchData(!shouldFetchData)
    const body = {
      userEmail: email,
      ...props,
      amount: 1,
    };
    dispatch(addItemByOne(body))

  };

  const decrease = (props) => {
    setShouldFetchData(!shouldFetchData)
    const body = {
      userEmail: email,
      ...props,
      amount: 1,
    };
    dispatch(decreaseItemByOne(body));

  }

  return (
    <>
      <div className="added-product-summary mb-30">
        <h5 className="title-25 checkout-title">Order Summary</h5>
        <ul className="added-products">
          { data.map(element =>

          <li className="single-product d-flex justify-content-start" key={element.id}>
            <div className="product-img">
              <img src={element.image} alt="" />
            </div>
            <div className="product-info">
              <h5 className="product-title">
                <a href="#">{element.name}</a>
              </h5>
              <>
                <button onClick={decrease.bind(null, element)} type="button">
                  <i className="bi bi-dash"></i>
                </button>
                <span style={{ margin: "0 20px", fontFamily: "Cabin" }}>{element.amount}</span>
                <button onClick={increase.bind(null, element)} type="button">
                  <i className="bi bi-plus"></i>
                </button>
                <span className='product-price'> $ {element.price}</span>
              </>
            </div>
            <div className="delete-btn" onClick={deleteInCartHandler.bind(null, element)}>
              <i className="bi bi-x-lg" />
            </div>
          </li>
          )}
        </ul>
      </div>
      <div className="summery-card cost-summery mb-30">
        <table className="table cost-summery-table">
          <thead>
            <tr>
              <th>Subtotal</th>
              <th>${cartTotal}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tax">Tax</td>
              <td>${tax}</td>
            </tr>
            <tr>
              <td className="tax">Shipping fee</td>
              <td>${shippingFee}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="summery-card total-cost mb-30">
        <table className="table cost-summery-table total-cost">
          <thead>
            <tr>
              <th>Total</th>
              <th>${total}</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default OrderSummary;
