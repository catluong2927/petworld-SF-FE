import Layout from "../../layout/Layout";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import {useSelector} from "react-redux";
import {Toast} from "primereact/toast";

export const Order = (props) => {
    const toast = useRef(null);
    const [orders, setOrders] = useState([]);
    const isLogin = useSelector((state) => state.auth.login?.currentUser);
    const navigate = useNavigate();
    let email = "";
    if(isLogin){
        email = isLogin.userDtoResponse.email;
    }
    const URL_ORDER = `orders/${email}`;
    useEffect(() => {
        const res = sentRequest(URL_ORDER);
        res.then(data => {
            setOrders(data);
        }).catch(

        )
    }, [])
    let totalBill = 0;
    const cancelBillHandler = (props) => {
        const url = "orders/" + props
      const res =  sentRequest(url, "PUT", {status: "Canceled"});
            res.then(
                toast.current.show({severity: 'success', summary: 'Success', detail: `Cancel our order successfully!`, life: 1000}),
                navigate('/order')
            )


    }
    return (<>
        <Layout>
            <Breadcrumb pageName="Your Order" pageTitle="Your Order"/>
            <Toast ref={toast}/>
            <div className="col-lg-4">
                {orders.map((element) => (<div className="widget-area" key={element.id}>
                    <div className="single-widgets widget_egns_recent_post mb-30 order">
                      <span className="widget-title order-header">
                        <h3>{element.status}</h3>
                          {element.status === 'Waiting for confirm'? <button className='order-cancle' onClick={cancelBillHandler.bind(null, element.id)} >
                              <h4 className='order-cancle-btn'> Cancel Order</h4></button>: ''}
                      </span>
                        <div className="recent-post-wraper">
                            {Array.isArray(element.orderDetailDtoResponses) && element.orderDetailDtoResponses.map((item) => (
                                <div className="widget-cnt mb-25" key={item.id}>
                                    <div className="wi">
                                        <Link legacyBehavior href="/blog-details">
                                            <a>
                                                <img src={item.image} alt="image" className='order-image'/>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="wc">
                                        <Link legacyBehavior href="/blog-grid">
                                            <a> x {item.quantity}</a>
                                        </Link>
                                        <div className="order-detail-content">
                                            <h6 className='order-detail-content--name'>{item.itemName}</h6>
                                            <h6>
                                                <p> $ {item.total}</p>
                                               <p hidden={true}>{totalBill += item.total}</p>
                                            </h6>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                        <div className="recent-post-wraper info-customer">
                            <table className={"order-table"}>
                                <tr>
                                    <th> Date: </th>
                                    <td>{new Date(element.date).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true
                                    })}</td>
                                </tr>
                                <tr>
                                    <th>Order's Name: </th>
                                    <td>{element.userDtoResponse.fullName}</td>
                                </tr>
                                <tr>
                                    <th>Phone Number:</th>
                                    <td>{element.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <th>Address: </th>
                                    <td>{element.address}</td>
                                </tr>
                                <tr>
                                    <th>Notice: </th>
                                    <td>{element.note}</td>
                                </tr>
                                <tr>
                                    <th>Shipping fee</th>
                                    <td>$ 1</td>
                                </tr>
                                <tr>
                                    <th>Tax</th>
                                    <td> $ {((element.total / 1.1) * 0.1).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <th>Total price: </th>
                                    <td className={"order-detail-price"}>{element.total.toLocaleString()} $</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>))}
            </div>
        </Layout>
    </>)
};
