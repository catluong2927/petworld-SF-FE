import {Link} from "react-router-dom";
import React, {useRef, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "./login.css";
import axios from "axios";
import {Toast} from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Formik} from "formik";

function LoginPage() {
    const toast = useRef(null);
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    const [form, setForm] = useState({});
    const REGEX = {
        email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    };

    function handleChangeLogin(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidateLogin() {
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
        return errors;
    }

    const handleSubmit = () => {
        axios
            .post(`${LOGIN_API}/auth/login`, form)
            .then((res) => {
                toast.current.show({severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000})
                setTimeout(window.location.href = "/", 6000)
            })
            .catch(err => {
                    toast.current.show(
                        {severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150})
                }
            )
    }


    return (
        <>
            <div className="card flex justify-content-center gap-2">
                <Toast ref={toast}/>
            </div>
            <Layout>
                <Breadcrumb pageName="Login" pageTitle="Login"/>
                <div className="login-section pt-120 pb-120">
                    <div className="container">
                        <div className="row d-flex justify-content-center g-4">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div
                                    className="form-wrapper wow fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay=".2s"
                                >
                                    <div className="form-title">
                                        <h3>Log In</h3>
                                        <p>
                                            New Member?{" "}
                                            <Link to="/sign-up">
                                                signup here
                                            </Link>
                                        </p>
                                    </div>
                                    <Formik
                                        initialValues={form}
                                        validate={handleValidateLogin}
                                        onSubmit={handleSubmit}
                                    >
                                        {({errors, handleSubmit}) => (
                                            <form className="w-100" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className={`form-inner ${
                                                            errors.email ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Enter Your Email *</label>
                                                            <input type="email"
                                                                   placeholder="Enter Your Email"
                                                                   name="email"
                                                                   value={form.email || ""}
                                                                   onChange={handleChangeLogin}
                                                            />
                                                            <p className="error">{errors.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className={`form-inner ${
                                                            errors.password ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Password *</label>
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                id="password"
                                                                placeholder="Password"
                                                                value={form.password || ""}
                                                                onChange={handleChangeLogin}
                                                            />
                                                            <p className="error">{errors.password}</p>
                                                            <i className="bi bi-eye-slash" id="togglePassword"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div
                                                            className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                                            <div className="form-group">
                                                                <input type="checkbox" id="html"/>
                                                                <label htmlFor="html">
                                                                    I agree to the <a href="#">Terms &amp; Policy</a>
                                                                </label>
                                                            </div>
                                                            <a href="#" className="forgot-pass">
                                                                Forgotten Password
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="account-btn" type="submit">Log in</button>
                                            </form>
                                        )}
                                    </Formik>
                                    {/*<div className="alternate-signup-box">*/}
                                    {/*    <h6>or signup WITH</h6>*/}
                                    {/*    <div className="btn-group gap-4">*/}
                                    {/*        <a*/}
                                    {/*            href="#"*/}
                                    {/*            className="eg-btn google-btn d-flex align-items-center"*/}
                                    {/*        >*/}
                                    {/*            <i className="bx bxl-google"/>*/}
                                    {/*            <span>signup whit google</span>*/}
                                    {/*        </a>*/}
                                    {/*        <a*/}
                                    {/*            href="#"*/}
                                    {/*            className="eg-btn facebook-btn d-flex align-items-center"*/}
                                    {/*        >*/}
                                    {/*            <i className="bx bxl-facebook"/>*/}
                                    {/*            signup whit facebook*/}
                                    {/*        </a>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-poicy-area">*/}
                                    {/*    <p>*/}
                                    {/*        By clicking the "signup" button, you create a Cobiro*/}
                                    {/*        account, and you agree to Cobiro's{" "}*/}
                                    {/*        <a href="#">Terms &amp; Conditions</a> &amp;{" "}*/}
                                    {/*        <a href="#">Privacy Policy.</a>*/}
                                    {/*    </p>*/}
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
export default LoginPage;

