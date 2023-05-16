import {json, Link} from "react-router-dom";
import React, {useRef, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "./sign-up.css";
import {Toast} from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Formik} from "formik";
import axios from "axios";

function SignUpPage() {
    const toast = useRef(null);
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    const [isCheckedCus, setIsCheckedCus] = useState(true);
    const [isCheckedOwn, setIsCheckedOwn] = useState(false);
    const [form, setForm] = useState({});
    const [messErorr,setMessErorr] = useState({})
    const REGEX = {
        email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        username: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    };

    const  checkBoxCusHandler = () => {
        setIsCheckedCus(!isCheckedCus)
    }
    const  checkBoxHandOwnHandler = () => {
        setIsCheckedOwn(!isCheckedOwn)
    }
    let roles = [];
    if (isCheckedCus) {
        const customer = {
            "id":2,
            "name":"ROLE_CUSTOMER",
            "desc":"Khách hàng"
        }
        roles.push(customer);
    }
    if (isCheckedOwn) {
        const owner = {
            "id":3,
            "name":"ROLE_OWNER",
            "desc":"Trung tâm dịch vụ"
        }
        roles.push(owner);
    }
    function handleChangeSignup(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }
    function handleValidateSignup() {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
            console.log("code");
        }
        if (!form.password) {
            errors.password = "Required";
        }
        if (!form.username) {
            errors.username = "Required";
        }
        if (!form.confirmPassword) {
            errors.confirmPassword = "Required";
        }
        return errors;
    }

    function handleSubmit() {
        const data ={
            userName: form.username,
            fullName: form.fullName,
            email: form.email,
            password:form.password,
            roles
        }
        axios
            .post(`${LOGIN_API}/users`, data)
            .then((res) => {
                console.log(res)
                if (res.data === '') {
                    toast.current.show({severity: 'success', summary: 'Success', detail: 'registration successful', life: 3000})
                    setTimeout(() => { window.location.href = "/"; }, 6000)
                } else {
                    setMessErorr(res.data.userName);
                    toast.current.show(
                        {severity: 'error', summary: 'Error', detail: 'registration fail', life: 3150})
                }
            })
            .catch(err => {
                console.log(err.message + "abca");
                toast.current.show(
                    {severity: 'error', summary: 'Error', detail: 'registration fail', life: 3150})
            });
    }

    return (
        <>
            <div className="card flex justify-content-center gap-2">
                <Toast ref={toast}/>
            </div>
            <Layout>
                <Breadcrumb pageName="Sign-Up" pageTitle="Sign-Up"/>
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
                                        <h3>Sign Up</h3>
                                        <p>
                                            Do you already have an account?{" "}
                                            <Link to="/login">
                                                Log in here
                                            </Link>
                                        </p>
                                    </div>
                                    <Formik
                                        initialValues={form}
                                        validate={handleValidateSignup}
                                        onSubmit={handleSubmit}
                                    >
                                        {({errors, handleSubmit}) => (
                                            <form className="w-100" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className={`form-inner${errors.username ? "custom-input-error" : ""}`}>
                                                            <label>User Name *</label>
                                                            <input type="text"
                                                                   placeholder="Enter Your User Name"
                                                                   name="username"
                                                                   value={form.username || ""}
                                                                   onChange={handleChangeSignup}
                                                            />
                                                            <p className="error">{errors.username}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-inner">
                                                            <label>Full Name *</label>
                                                            <input type="text"
                                                                   placeholder="Enter Full Name"
                                                                   name="fullName"
                                                                   value={form.fullName || ""}
                                                                   onChange={handleChangeSignup}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`form-inner ${
                                                            errors.email ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Enter Your Email *</label>
                                                            <input type="email"
                                                                   placeholder="Enter Your Email"
                                                                   name="email"
                                                                   value={form.email || ""}
                                                                   onChange={handleChangeSignup}
                                                            />
                                                            <p className="error">{errors.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`form-inner ${
                                                            errors.password ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Password *</label>
                                                            <input
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            placeholder="Enter Your Password"
                                                            value={form.password || ""}
                                                            onChange={handleChangeSignup}
                                                            />
                                                            <p className="error">{errors.password}</p>
                                                            <i className="bi bi-eye-slash" id="togglePassword"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`form-inner ${
                                                            errors.confirmpassword ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Confirm Password *</label>
                                                            <input
                                                                type="password"
                                                                name="confirmPassword"
                                                                id="confirmpassword"
                                                                placeholder="Enter Your Password"
                                                                value={form.confirmPassword || ""}
                                                                onChange={handleChangeSignup}
                                                            />
                                                            <p className="error">{errors.confirmpassword}</p>
                                                            <i className="bi bi-eye-slash" id="togglePassword2"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div
                                                            className="form-agreement form-inner d-flex justify-content-between flex-wrap">
<<<<<<< HEAD
                                                            <div className="form-group" onClick={checkBoxCusHandler}>
                                                                <input defaultChecked="checked" type="checkbox" id="customer" value="customer" />
                                                                <p className="sign-up-checkbox" >{isCheckedCus && <p className="sign-up-checkbox--checked" ></p>}</p>
                                                                <label htmlFor="customer">Customer</label>
                                                            </div>
                                                            <div className="form-group" onClick={checkBoxHandOwnHandler}>
                                                                <input  type="checkbox" id="owner" value="owner"/>
                                                                <p className="sign-up-checkbox" >{isCheckedOwn && <p className="sign-up-checkbox--checked" ></p>}</p>
=======
                                                            <div className="form-group" >
                                                                <input defaultChecked="checked" type="checkbox" id="customer" value="customer" />
                                                                <label htmlFor="customer">Customer</label>
                                                            </div>
                                                            <div className="form-group" >
                                                                <input  type="checkbox" id="owner" value="owner"/>
>>>>>>> d7be61656beccf898ff9c9290d77a015a9c81a58
                                                                <label htmlFor="owner">Owner</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="account-btn" type="submit">Create Account</button>
                                            </form>
                                        )}
                                    </Formik>
                                    {/*<div className="alternate-signup-box">*/}
                                    {/*  <h6>or signup WITH</h6>*/}
                                    {/*  <div className="btn-group gap-4">*/}
                                    {/*    <a*/}
                                    {/*        href="#"*/}
                                    {/*        className="eg-btn google-btn d-flex align-items-center"*/}
                                    {/*    >*/}
                                    {/*      <i className="bx bxl-google" />*/}
                                    {/*      <span>signup whit google</span>*/}
                                    {/*    </a>*/}
                                    {/*    <a*/}
                                    {/*        href="#"*/}
                                    {/*        className="eg-btn facebook-btn d-flex align-items-center"*/}
                                    {/*    >*/}
                                    {/*      <i className="bx bxl-facebook" />*/}
                                    {/*      signup whit facebook*/}
                                    {/*    </a>*/}
                                    {/*  </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-poicy-area">*/}
                                    {/*  <p>*/}
                                    {/*    By clicking the "signup" button, you create a Cobiro*/}
                                    {/*    account, and you agree to Cobiro's{" "}*/}
                                    {/*    <a href="#">Terms &amp; Conditions</a> &amp;{" "}*/}
                                    {/*    <a href="#">Privacy Policy.</a>*/}
                                    {/*  </p>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default SignUpPage;
