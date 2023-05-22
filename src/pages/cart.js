import {Link, redirect, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ItemCounter from "../components/shop/ProductCount";
import Layout from "../layout/Layout";
import { sentRequest} from "./ServicePackage";
import {useSelector} from "react-redux";

function CartPage() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const [alteredAmount, setAlteredAmount] = useState(0)
  const navigation = useNavigate();
  const isLogin = useSelector((state) => state.auth.login?.currentUser);

  if(isLogin){
    navigation("/login")
  }

  const ULR = "cart/luong@codegym.com";

    useEffect(()=> {
      calculateTotal();
       const carts = sentRequest(ULR, "GET"  )
      carts.then(data => {
      setData(data)
        setShouldFetchData(false)
      }).then(
      )
    }, [shouldFetchData, alteredAmount])


  const deleteInCartHandler = async ( props) => {
    setShouldFetchData(!shouldFetchData);
    const body = {
      userEmail: "luong@codegym.com",
      ...props
    };
    try {
      const url = 'cart';
      const result = await sentRequest(url, 'PUT', body);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
    }

  };


  const calculateTotal = () => {
    let sum = 0;
    data.forEach((item) => {
      const itemPrice = item.price ? item.price : item.minPrice;
      sum += itemPrice * item.amount;
    });
    setTotal(sum);
  };


  return (
    <>
      <Layout>
        <Breadcrumb pageName="Cart" pageTitle="Cart" />
        <div className="cart-section pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-wrapper">
                  <table className="eg-table table cart-table">
                    <thead>
                    <tr>
                      <th>Delete</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Unite Price</th>
                      <th>Discount Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    { data.map(item =>
                    <tr key={item.id}>
                      <td data-label="Delete">
                        <div className="delete-icon"
                             onClick={deleteInCartHandler.bind(null, {type: item.type,
                               amount: item.amount, typeId: item.typeId, totalPrice: item.totalPrice
                             })}
                        >
                          <i className="bi bi-x" />
                        </div>
                      </td>
                      <td data-label="Image">
                        <img src={item.image} alt="" />
                      </td>
                      <td data-label="Food Name">
                        <Link legacyBehavior href="/shop-details">
                          <a>{item.name}</a>
                        </Link>
                      </td>
                      <td data-label="Unite Price">
                        <del>${item.originalPrice}</del>
                      </td>
                      <td data-label="Discount Price">${
                         item.price? item.price: item.minPrice
                      }</td>
                      <td data-label="Quantity" >
                        <div className="quantity d-flex align-items-center">
                          <div className="quantity-nav nice-number d-flex align-items-center">
                            <ItemCounter
                                amount={item.amount}
                                typeId={item.typeId}
                                onSetAmount={setAlteredAmount}
                                totalPrice={item.totalPrice}
                                type={item.type} />
                          </div>
                        </div>
                      </td>
                      <td data-label="Subtotal">${item.price ? (item.price * item.amount): (item.minPrice * item.amount)}</td>
                    </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>





            <div className="row g-4">
              <div className="col-lg-4">
                <div className="coupon-area">
                </div>
              </div>
              <div className="col-lg-8">
                <table className="table total-table">
                  <thead>
                    <tr>
                      <th>Cart Totals</th>
                      <th />
                      <th>${total}</th>
                    </tr>
                  </thead>
                </table>
                <ul className="cart-btn-group">
                  <li>
                    <Link legacyBehavior to="/shop">
                      <a className="primary-btn2 btn-lg">Continue to shopping</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior to="/check-out">
                      <a className="primary-btn3 btn-lg">Proceed to Checkout</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CartPage;
