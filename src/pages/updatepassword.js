import {useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "./login.css";
import {Toast} from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {changePassword} from "../redux/userRequest";




function ChangPassword() {
    const response = useSelector((state)=>state.auth.login?.currentUser);
    const toast = useRef(null);
    const [form, setForm] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [token,setToken] = useState('');
    useEffect(()=>{
        setEmail(response.userDtoResponse.email);
        setToken(response.token)
    },[response]);

    function handleChangeUpdate(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidateLogin() {
        const errors = {};
        if (!form.currentPass) {
            errors.currentPass = "Required";
        }
        if (!form.newPassword) {
            errors.newPassword = "Required";
        }
        if (!form.confirmPassword) {
            errors.confirmPassword = "Required";
        } else if (form.newPassword !== form.confirmPassword) {
            errors.confirmPassword = "password does not match";
        }
        return errors;
    }

    const handleSubmit = async () => {
        const password={};
        password.oldPassword = form.currentPass;
        password.newPassword = form.newPassword;
        password.email = email;
        console.log(password);
        await changePassword(password, dispatch, navigate, toast, token);
    }



    return (
        <>
            <div className="card flex justify-content-center gap-2">
                <Toast ref={toast}/>
            </div>
            <Layout>
                <Breadcrumb pageName="Settings & Privacy" pageTitle="Settings & Privacy"/>
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
                                        <h3>Change Password</h3>
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
                                                            errors.currentPass ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Your Current Password *</label>
                                                            <input type="password"
                                                                   placeholder="Enter Your Current Password"
                                                                   name="currentPass"
                                                                   value={form.currentPass || ""}
                                                                   onChange={handleChangeUpdate}
                                                            />
                                                        </div>
                                                        <p className="error">{errors.currentPass}</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className={`form-inner ${
                                                            errors.newPassword ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>New Password *</label>
                                                            <input
                                                                type="password"
                                                                name="newPassword"
                                                                id="password"
                                                                placeholder="Enter New Password"
                                                                value={form.newPassword || ""}
                                                                onChange={handleChangeUpdate}
                                                            />
                                                            <i className="bi bi-eye-slash" id="togglePassword"/>
                                                        </div>
                                                        <p className="error">{errors.newPassword}</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className={`form-inner ${
                                                            errors.confirmPassword ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Confirm New Password *</label>
                                                            <input
                                                                type="password"
                                                                name="confirmPassword"
                                                                id="confirmPassword"
                                                                placeholder="Enter New Password"
                                                                value={form.confirmPassword || ""}
                                                                onChange={handleChangeUpdate}
                                                            />
                                                            <i className="bi bi-eye-slash" id="togglePassword"/>
                                                        </div>
                                                        <p className="error">{errors.confirmPassword}</p>
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
                                                <button className="account-btn" type="submit">Change Password</button>
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
export default ChangPassword;

