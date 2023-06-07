import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "./sign-up.css";
import {Toast} from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Formik} from "formik";

import {signUpUser} from "../redux/apiRequest";
import {useDispatch} from "react-redux";
import axios from "axios";


function SignUpPage() {
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    // const registerError = useSelector((state) => state.auth.register?.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useRef(null);
    const [isCheckedCus, setIsCheckedCus] = useState(true);
    const [isCheckedOwn, setIsCheckedOwn] = useState(false);
    const [form, setForm] = useState({});
    const [userName, setUserName] = useState('');
    const [messErrName, setMessErrName] = useState(false);
    const [email, setEmail] = useState('');
    const [messEmailErr, setMessEmailErr] = useState(false);
    const [phone, setPhone] = useState(null);
    const [messPhoneErr, setMessPhoneErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const REGEX = {
        email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/,
        userName: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
    };

    const checkBoxCusHandler = () => {
        setIsCheckedCus(!isCheckedCus)
    }
    const checkBoxHandOwnHandler = () => {
        setIsCheckedOwn(!isCheckedOwn)
    }
    let roles = [];
    if (isCheckedCus) {
        const customer = {
            "id": 4,
            "name": "ROLE_CUSTOMER",
            "desc": "Khách hàng"
        }
        roles.push(customer);
    }
    if (isCheckedOwn) {
        const owner = {
            "id": 2,
            "name": "ROLE_OWNER",
            "desc": "Trung tâm dịch vụ"
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
        } else if (!REGEX.password.test(form.password)) {
            errors.password = "have at least 8 characters, have uppercase letters, lowercase letters, special characters";
            console.log("code");
        }
        if (!form.userName) {
            errors.userName = "Required";
        } else if (!REGEX.userName.test(form.userName)) {
            errors.userName = "be at least 8 to 20 characters, without periods. _ at the beginning of the middle name and at the end of the name";
        }
        if (!form.confirmPassword) {
            errors.confirmPassword = "Required";
        } else if (form.password !== form.confirmPassword) {
            errors.confirmPassword = "password does not match";
        }
        if (!form.phone) {
            errors.phone = "Required";
        }
        return errors;
    }


    const handleBlurSignup = async (e) => {
        // await setUserName(form.userName);
        if (e.target.name === 'userName') {
            console.log(1)
            await setUserName(form.userName)
        }
        if (e.target.name === 'email') {
            console.log(2)
            await setEmail(form.email)
        }
        if (e.target.name === 'phone') {
            console.log(3)
            await setPhone(form.phone)
        }
    }

    const handleSubmit = async () => {
        const data = {
            userName: userName,
            fullName: form.fullName,
            email: email,
            password: form.password,
            phone: phone,
            roles
        }
        console.log(data)
        await signUpUser(data, dispatch, navigate, toast);
    }
    useEffect(()=>{
            axios.get(`${LOGIN_API}/auth?account=${userName}`)
                .then(res => setMessErrName(res.data))
                .catch(err => {
                    setMessErrName(err.response.data)
                })
        console.log(1)
    },[userName,LOGIN_API])

    useEffect(() => {
        axios.get(`${LOGIN_API}/auth?account=${email}`)
            .then(res => setMessEmailErr(res.data))
            .catch(err => {
                setMessEmailErr(err.response.data)
            })

    }, [email, LOGIN_API])

    useEffect(() => {
        axios.get(`${LOGIN_API}/auth?account=${phone}`)
            .then(res => setMessPhoneErr(res.data))
            .catch(err => {
                setMessPhoneErr(err.response.data)
            })

    }, [phone, LOGIN_API])

    function handleShowPass(event){
        event.preventDefault();
        setShowPassword(!showPassword);
    }
    function handleShowConfirmPass(event){
        event.preventDefault();
        setShowConfirmPassword(!showConfirmPassword)
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
                                                        <div className={`form-inner ${
                                                            errors.userName ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>User Name *</label>
                                                            <input type="text"
                                                                   placeholder="Enter Your User Name"
                                                                   name="userName"
                                                                   value={form.userName || ""}
                                                                   onChange={handleChangeSignup}
                                                                   onBlur={handleBlurSignup}

                                                            />
                                                            <p className="error">{errors.userName}</p>
                                                            {messErrName &&
                                                                <p className="error">this User Name already exists</p>}
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
                                                                   onBlur={handleBlurSignup}
                                                            />
                                                            <p className="error">{errors.email}</p>
                                                            {messEmailErr &&
                                                                <p className="error">this Email already exists</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`form-inner ${
                                                            errors.phone ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Enter Your Phone Number *</label>
                                                            <input type="text"
                                                                   placeholder="Enter Your Phone Number"
                                                                   name="phone"
                                                                   value={form.phone || ""}
                                                                   onChange={handleChangeSignup}
                                                                   onBlur={handleBlurSignup}
                                                            />
                                                            <p className="error">{errors.phone}</p>
                                                            {messPhoneErr &&
                                                                <p className="error">this Phone already exists</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`form-inner ${
                                                            errors.password ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Password *</label>
                                                            <input
                                                                type={showPassword ? 'text' : 'password'}
                                                                name="password"
                                                                id="password"
                                                                placeholder="Enter Your Password"
                                                                value={form.password || ""}
                                                                onChange={handleChangeSignup}
                                                            />
                                                            {
                                                                showPassword?<i className="bi bi-eye-fill" id="togglePassword1"
                                                                                onClick={handleShowPass}
                                                                />:<i className="bi bi-eye-slash" id="togglePassword1"
                                                                      onClick={handleShowPass}
                                                                />
                                                            }
                                                        </div>
                                                        <p className="error">{errors.password}</p>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`form-inner ${
                                                            errors.confirmPassword ? "custom-input-error" : ""
                                                        }`}>
                                                            <label>Confirm Password *</label>
                                                            <input
                                                                type={showConfirmPassword ? 'text' : 'password'}
                                                                name="confirmPassword"
                                                                id="confirmpassword"
                                                                placeholder="Enter Your Password"
                                                                value={form.confirmPassword || ""}
                                                                onChange={handleChangeSignup}
                                                            />
                                                            {
                                                                showConfirmPassword?<i className="bi bi-eye-fill" id="togglePassword"
                                                                                onClick={handleShowConfirmPass}
                                                                />:<i className="bi bi-eye-slash" id="togglePassword"
                                                                      onClick={handleShowConfirmPass}
                                                                />
                                                            }
                                                        </div>
                                                        <p className="error">{errors.confirmPassword}</p>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div
                                                            className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                                            <div className="form-group" onClick={checkBoxCusHandler}>
                                                                <input defaultChecked="checked" type="checkbox"
                                                                       id="customer" value="customer"/>
                                                                <p className="sign-up-checkbox">{isCheckedCus &&
                                                                    <p className="sign-up-checkbox--checked"></p>}</p>
                                                                <label htmlFor="customer">Customer</label>
                                                            </div>
                                                            <div className="form-group"
                                                                 onClick={checkBoxHandOwnHandler}>
                                                                <input type="checkbox" id="owner" value="owner"/>
                                                                <p className="sign-up-checkbox">{isCheckedOwn &&
                                                                    <p className="sign-up-checkbox--checked"></p>}</p>
                                                                <div className="form-group">
                                                                    <input type="checkbox" id="owner" value="owner"/>
                                                                    <label htmlFor="owner">Owner</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="account-btn" type="submit">Create Account
                                                        </button>
                                                    </div>
                                                </div>
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
    );
}


export default SignUpPage;
