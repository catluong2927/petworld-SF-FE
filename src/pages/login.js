import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "./login.css";
import {Toast} from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Formik} from "formik";
import {loginUser} from "../redux/apiRequest";
import {useDispatch, useSelector} from "react-redux";



function LoginPage() {
    const toast = useRef(null);
    const [form, setForm] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    function handleChangeLogin(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidateLogin() {
        const errors = {};
        if (!form.account) {
            errors.account = "Required";
        }
        if (!form.password) {
            errors.password = "Required";
        }
        return errors;
    }

    const handleSubmit = async (e) => {
        await loginUser(form, dispatch, navigate, toast)
    }
    function handleShowPass(event){
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    console.log(form)
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
                                                            errors.account ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Enter Your Account *</label>
                                                            <p className='customer'>(Email or User Name or Phone Number)</p>
                                                            <input type="text"
                                                                   placeholder="Enter Your Account"
                                                                   name="account"
                                                                   value={form.account || ""}
                                                                   onChange={handleChangeLogin}
                                                            />
                                                        </div>
                                                        <p className="error">{errors.account}</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className={`form-inner ${
                                                            errors.password ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Password *</label>
                                                            <input
                                                                type={showPassword ? 'text' : 'password'}
                                                                name="password"
                                                                id="password"
                                                                placeholder="Password"
                                                                value={form.password || ""}
                                                                onChange={handleChangeLogin}
                                                            />
                                                            {
                                                                showPassword?<i className="bi bi-eye-fill" id="togglePassword"
                                                                                onClick={handleShowPass}
                                                                />:<i className="bi bi-eye-slash" id="togglePassword"
                                                                      onClick={handleShowPass}
                                                                />
                                                            }
                                                        </div>
                                                        <p className="error">{errors.password}</p>
                                                    </div>
                                                    {/*<div className="col-12">*/}
                                                    {/*    <div*/}
                                                    {/*        className="form-agreement form-inner d-flex justify-content-between flex-wrap">*/}
                                                    {/*        <div className="form-group">*/}
                                                    {/*            <input type="checkbox" id="html"/>*/}
                                                    {/*            <label htmlFor="html">*/}
                                                    {/*                I agree to the <Link  to="#">Terms &amp; Policy</Link>*/}
                                                    {/*            </label>*/}
                                                    {/*        </div>*/}
                                                    {/*        <Link to="#" className="forgot-pass">*/}
                                                    {/*            Forgotten Password*/}
                                                    {/*        </Link>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <button className="account-btn" type="submit">Log in</button>
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default LoginPage;

