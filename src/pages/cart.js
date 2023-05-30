import {Link, } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {addItemByOne, decreaseItemByOne, deleteAllItems, deleteItem, firstCallApi} from "../store/cartInventorySlice";
import {sentRequest} from "./ServicePackage";
import {GET, URL_CART} from "../utilities/constantVariable";

function CartPage() {
  const [data, setData] = useState([]);
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const isLogin = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartInventory.items);
  const cartTotal = useSelector((state) => state.cartInventory.cartTotal)
  let email = "";
  let token= '';
  if(isLogin){
    email = isLogin.userDtoResponse.email;
    token = isLogin.token;
  }
  console.log(token)
  useEffect(() => {
    const URL = `${URL_CART}/${email}`
        dispatch(deleteAllItems());
      const res = sentRequest(URL, GET, null, token);
      res.then(data => {
        dispatch(firstCallApi(data))
      })

  }, [])


    useEffect(()=> {
      setData(cartItems)
    }, [shouldFetchData, dispatch])

  const deleteInCartHandler = async ( props) => {
    setShouldFetchData(!shouldFetchData);
    const body = {
    id: props.typeId,
      token,
      userEmail: email,
      ...props
    };
    dispatch(deleteItem(body))
  };



  const increase = (props) => {
    setShouldFetchData(!shouldFetchData)
    const body = {
      userEmail: email,
      token,
      ...props,
      amount: 1,
    };
    dispatch(addItemByOne(body))

  };
  const decrease = (props) => {
    setShouldFetchData(!shouldFetchData)
    const body = {
      userEmail: email,
      token,
      ...props,
      amount: 1,
    };
    dispatch(decreaseItemByOne(body));

  }
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Cart" pageTitle="Cart" />
        { cartItems &&
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
                               amount: item.amount, typeId: item.typeId, price: item.price
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
                         item.price
                      }</td>
                      <td data-label="Quantity" >
                        <div className="quantity d-flex align-items-center">
                          <div className="quantity-nav nice-number d-flex align-items-center">
                            <>
                              <button onClick={decrease.bind(null, item)} type="button">
                                <i className="bi bi-dash"></i>
                              </button>
                              <span style={{ margin: "0 20px", fontFamily: "Cabin" }}>{item.amount}</span>
                              <button onClick={increase.bind(null, item)} type="button">
                                <i className="bi bi-plus"></i>
                              </button>
                            </>
                          </div>
                        </div>
                      </td>
                      <td data-label="Subtotal">${(item.price * item.amount).toLocaleString()}</td>
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
                      <th>${cartTotal.toLocaleString()}</th>
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
        }
      </Layout>
    </>
  );
}

export default CartPage;
