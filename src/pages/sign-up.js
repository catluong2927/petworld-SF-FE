import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "./sign-up.css";
import {Toast} from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Formik} from "formik";

// import {signUpUser} from "../redux/apiRequest";
import {useDispatch, useSelector} from "react-redux";
import {selectRegisterError, signUpUser} from "../redux/authSlice";

function SignUpPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registerError = useSelector(selectRegisterError);
    const toast = useRef(null);
    const [isCheckedCus, setIsCheckedCus] = useState(true);
    const [isCheckedOwn, setIsCheckedOwn] = useState(false);
    const [form, setForm] = useState({});
    const [messErorr, setMessErorr] = useState({})
    const REGEX = {
        email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/,
        username: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
    };

    useEffect(() => {
        console.log("registerError: " + registerError);
        console.log("registerError: " + registerError);
    }, [])

    const checkBoxCusHandler = () => {
        setIsCheckedCus(!isCheckedCus)
    }
    const checkBoxHandOwnHandler = () => {
        setIsCheckedOwn(!isCheckedOwn)
    }
    let roles = [];
    if (isCheckedCus) {
        const customer = {
            "id": 2,
            "name": "ROLE_CUSTOMER",
            "desc": "Khách hàng"
        }
        roles.push(customer);
    }
    if (isCheckedOwn) {
        const owner = {
            "id": 3,
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
        if (!form.username) {
            errors.username = "Required";
        } else if (!REGEX.username.test(form.username)) {
            errors.username = "be at least 8 to 20 characters, without periods. _ at the beginning of the middle name and at the end of the name";
            console.log("code");
        }
        if (!form.confirmPassword) {
            errors.confirmPassword = "Required";
        } else if (form.password !== form.confirmPassword) {
            errors.confirmPassword = "password does not match";
        }
        console.log(messErorr);
        return errors;
    }

    // function handleBlurSignup(e) {
    //     if (e.target.name === "username") {
    //         setIsInputBlurred(false)
    //         setMessErorr((prevState) => ({ ...prevState, userName: null }));
    //     }
    //     if (e.target.name === "email") {
    //         setMessErorr((prevState) => ({ ...prevState, email: null }));
    //     }
    // }


    const handleSubmit = async (e) => {
        const data = {
            userName: form.username,
            fullName: form.fullName,
            email: form.email,
            password: form.password,
            roles
        }
        await signUpUser(data, dispatch, navigate, toast);
        console.log("registerError: " + registerError);
        console.log("registerError: " + registerError);
        // setMessErorr(signupFailMsg);
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
                                                        <div
                                                            className={`form-inner${errors.username ? "custom-input-error" : ""}`}>
                                                            <label>User Name *</label>
                                                            <input type="text"
                                                                   placeholder="Enter Your User Name"
                                                                   name="username"
                                                                   value={form.username || ""}
                                                                   onChange={handleChangeSignup}
                                                                   // onBlur={isInputBlurred ? handleBlurSignup : null}

                                                            />
                                                            <p className="error">{errors.username}</p>
                                                            {messErorr.userName &&
                                                                <p className="error">{messErorr.userName}</p>}
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
                                                                   // onBlur={isInputBlurred ? handleBlurSignup : null}
                                                            />
                                                            <p className="error">{errors.email}</p>
                                                            {messErorr.email &&
                                                                <p className="error">{messErorr.email}</p>}
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
                                                            {/*<i className="bi bi-eye-slash" id="togglePassword"/>*/}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`form-inner ${
                                                            errors.confirmPassword ? "custom-input-error" : ""
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
                                                            <p className="error">{errors.confirmPassword}</p>
                                                            {/*<i className="bi bi-eye-slash" id="togglePassword2"/>*/}
                                                        </div>
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
