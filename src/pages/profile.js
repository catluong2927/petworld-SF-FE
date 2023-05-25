import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "./sign-up.css";
import {Toast} from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Formik} from "formik";

import {logout, signUpUser} from "../redux/apiRequest";
import {useDispatch, useSelector} from "react-redux";


function Profile() {
    const data = useSelector((state)=>state.users.users?.userDetail);

    // const [user,setUser] = useState({});
    // useEffect(() => {
    //     setUser(data);
    // }, [user]);
    return (
        <>
            <Layout>
                <Breadcrumb pageName="Your profile" pageTitle="Your profile"/>
                <div className="signup-section pt-120 pb-120">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div
                                    className="form-wrapper wow fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay=".2s"
                                >
                                    <div className="form-title">
                                        <h3>Detail</h3>
                                    </div>
                                        <div className="w-100" >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div
                                                        className='form-inner'>
                                                        <label>User Name *</label>
                                                        <p>{data.userName}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-inner">
                                                        <label>Full Name *</label>
                                                        <p>{data.fullName}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className='form-inner'>
                                                        <label>Email</label>
                                                        <p>{data.email}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className='form-inner'>
                                                        <label>Address</label>
                                                        {data.address?<p>{data.address}</p>:<>empty</>}
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className='form-inner'>
                                                        <label>Phone number</label>
                                                        {data.phone ? <p>{data.phone}</p>:<>empty</>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}


export default Profile;
