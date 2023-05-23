import Layout from "../../layout/Layout";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import {useSelector} from "react-redux";

export const Order = (props) => {
    const [orders, setOrders] = useState([]);
    const isLogin = useSelector((state) => state.auth.login?.currentUser);
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
    return (<>
        <Layout>
            <Breadcrumb pageName="Your Order" pageTitle="Your Order"/>
            <div className="col-lg-4">
                {orders.map((element) => (<div className="widget-area" key={element.id}>
                    <div className="single-widgets widget_egns_recent_post mb-30 order">
                      <span className="widget-title order-header">
                        <h3>{element.status}</h3>
                        <p>{new Date(element.date).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                        })}</p>
                        <p>{element.phoneNumber}</p>
                        <p>{element.note}</p>
                        <p>{element.address}</p>
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
                                            </h6>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </div>))}
            </div>
        </Layout>
    </>)
};
