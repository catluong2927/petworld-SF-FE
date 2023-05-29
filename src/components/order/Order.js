import Layout from "../../layout/Layout";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {sentRequest} from "../../pages/ServicePackage";
import {useDispatch, useSelector} from "react-redux";
import {Toast} from "primereact/toast";
import {cancelOrder, deleteAllOrders, getAllOrders} from "../../store/orderSlice";
import Modal from "./CustomePrompt";
import {GET} from "../../utilities/constantVariable";



export const Order = () => {
    const toast = useRef(null);
    const [orders, setOrders] = useState([]);
    const isLogin = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    const [shouldRender, setShouldRender] = useState(false);
    const getOrders = useSelector((state) => state.order.products);
    const [id, setId] = useState(0);
    const navigate = useNavigate();
    let email = "";
    let token = '';
    if(isLogin){
        email = isLogin.userDtoResponse.email;
        token = isLogin.token;
    }

    const URL_ORDER = `orders/${email}`;
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        dispatch(deleteAllOrders)
        const res = sentRequest(URL_ORDER, GET, null, token);
        res.then(data => {
            dispatch(getAllOrders(data))
        }).catch()

    }, [])

    useEffect(() => {
        dispatch(deleteAllOrders)
        setOrders(getOrders)
    }, [shouldRender]);

    let totalBill = 0;
    const openModal = (props) => {
        setShowModal(true);
        setId(props);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const cancelBillHandler = () => {
        setShouldRender(!shouldRender);
        const canceledOrder = {id: id, status: "Canceled" , token}
        dispatch(cancelOrder(canceledOrder))
        navigate('/order')
        setShowModal(!showModal)
    }

    return (<>
        <Layout>
            <Breadcrumb pageName="Your Order" pageTitle="Your Order"/>
            <Toast ref={toast}/>
                {showModal && (
                    <Modal onClose={closeModal}>
                        <h3 className='order-cancel-modal-alert'>Are you Sure?</h3>
                        <div className='order-cancle-modal-btn'>
                            <button className='order-cancle-modal--no' onClick={closeModal}>No</button>
                            <button className='order-cancle-moal--yes' onClick={cancelBillHandler}>Ok</button>
                        </div>
                    </Modal>
                )}
            <div className="col-lg-4">
                {orders.map((element, index) => (<div className="widget-area" key={element.id}>
                    <div className="single-widgets widget_egns_recent_post mb-30 order">
                        <div>
                        </div>
                      <span className="widget-title order-header">
                        <h3>{element.status}</h3>
                          {element.status === 'Waiting for confirm'? <button className='order-cancle'
                                             onClick={openModal.bind(null, element.id ? element.id: orders.length + 1)} >
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
                                    <td>{element.fullName? element.fullName: element.userDtoResponse.fullName}</td>
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
                                    <td className={"order-detail-price"}>$ {element.total.toLocaleString()} </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>))}
            </div>
        </Layout>
    </>)
};
