import React, {useEffect, useState} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import ItemCounter from "./ProductCount";

function OrderSummary(props) {
  const [data, setData] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [alteredAmount, setAlteredAmount] = useState(0);
  const tax = subTotal * 0.1;
  const shippingFee = 1;
  const total = subTotal + tax + shippingFee;
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const ULR = "cart/luong@codegym.com"

  useEffect(()=> {
    const carts = sentRequest(ULR, "GET"  );
    calculateTotal();
    carts.then(data => {
      setData(data)
      setShouldFetchData(false)
    }).catch(
    )
  }, [shouldFetchData, alteredAmount])

  props.onSendData(data);
  props.onSenTotal(total);

  const calculateTotal = () => {
    let sum = 0;
    data.forEach((item) => {
      const itemPrice = item.price ? item.price : item.minPrice;
      sum += itemPrice * item.amount;
    });
    setSubTotal(sum);
  };
  props.onSentAmount(alteredAmount)
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
              <ItemCounter
                  amount={element.amount}
                  typeId={element.typeId}
                  onSetAmount={setAlteredAmount}
                  totalPrice={element.totalPrice}
                  type={element.type} />
            </div>
            <div className="delete-btn">
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
              <th>${subTotal}</th>
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
