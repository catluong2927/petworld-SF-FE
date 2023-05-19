import React, {useEffect, useState} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import ItemCounter from "./ProductCount";

function OrderSummary(props) {
  const [data, setData] = useState([]);
  const ULR = "cart/luong@codegym.com"

  useEffect(()=> {
    const carts = sentRequest(ULR, "GET"  )
    carts.then(data => {
      setData(data)
    }).then(

    )
  }, [])
  props.onSendData(data);
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
              <ItemCounter amount={element.amount}/>
            </div>
            <div className="delete-btn">
              <i className="bi bi-x-lg" />
            </div>
          </li>
          )
          }
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
