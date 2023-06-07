import React, {useEffect, useRef, useState} from 'react';
import "./UserProfile.css"
import "./assets/vendor/bootstrap/css/bootstrap-grid.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/quill/quill.bubble.css"
import "./assets/vendor/quill/quill.snow.css"
import "./assets/vendor/remixicon/remixicon.css"
import "./assets/vendor/simple-datatables/style.css"
import './update.css'

import "./assets/vendor/bootstrap/js/bootstrap.bundle.min"
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../layout/Layout";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import {Link, useNavigate} from "react-router-dom";
import {updateInfor} from "../../redux/userRequest";
import axios from "axios";
import {Toast} from "primereact/toast";


function ProfileSection() {
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    const userResponse = useSelector((state) => state.auth.login?.currentUser);
    const toast = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [phone, setPhone] = useState('')
    const [phoneUser,setPhoneUser] = useState('');
    const [messPhoneErr, setMessPhoneErr] = useState(false);

    useEffect(() => {
        console.log(userResponse)
        if (userResponse) {
            console.log(1);
            setPhoneUser(userResponse.userDtoResponse.phone);
           axios
                .get(`${LOGIN_API}/users/${userResponse.userDtoResponse.id}`, {
                    headers: {
                        Authorization: `Bearer ${userResponse.token}`
                    }
                })
                .then(res => {
                    setUser(res.data);
                })
                .catch(err => {
                    throw err;
                });
        }
        console.log(2)
    }, [userResponse]);
    useEffect(()=>{
        if(user){
            setToken(userResponse.token);
        }
    },[user])

    function handleChangeEdit(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!messPhoneErr) {
            await updateInfor(user, dispatch, navigate, toast, token);
        }
    }
    const handleBlurEdit = async () => {
        await setPhone(user.phone);

    }
    useEffect(() => {
        if (phone !== phoneUser) {
            axios.get(`${LOGIN_API}/auth?account=${phone}`)
                .then(res => setMessPhoneErr(res.data))
                .catch(err => {
                    setMessPhoneErr(err.response.data)
                })
        }else setMessPhoneErr(false)
    }, [phone, LOGIN_API])
    console.log('messPhoneErr: ', messPhoneErr)
    return (
        <>
            <div className="card flex justify-content-center gap-2">
                <Toast ref={toast}/>
            </div>
            <Layout>
                <Breadcrumb pageName="Your profile" pageTitle="Your profile"/>
                <div className="signup-section pt-120 pb-120">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <section className="section profile">
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="card">
                                            <div
                                                className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                                <div className='avatar-edit'>
                                                    <img src={user.avatar} alt="Profile" className="rounded-circle"/>
                                                    <Link to="/update-image">
                                                        <img alt='image' className='edit-icon' src='data:image/png;base64,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'/>
                                                    </Link>
                                                </div>

                                                <h2>{user.userName}</h2>
                                                <div className="social-links mt-2">
                                                    <a href="#" className="twitter"><i
                                                        className="bi bi-twitter"></i></a>
                                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                                    <a href="#" className="instagram"><i
                                                        className="bi bi-instagram"></i></a>
                                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8">
                                        <div className="card">
                                            <div className="card-body pt-3">
                                                <ul className="nav nav-tabs nav-tabs-bordered">
                                                    <li className="nav-item">
                                                        <button className="nav-link active" data-bs-toggle="tab"
                                                                data-bs-target="#profile-overview">Overview
                                                        </button>
                                                    </li>
                                                    <li className="nav-item">
                                                        <button className="nav-link" data-bs-toggle="tab"
                                                                data-bs-target="#profile-edit">Edit Profile
                                                        </button>
                                                    </li>
                                                </ul>
                                                <div className="tab-content pt-2">
                                                    <div className="tab-pane fade show active profile-overview"
                                                         id="profile-overview">
                                                        <h5 className="card-title">About</h5>
                                                        <p className="small fst-italic">{user.descript}</p>
                                                        <h5 className="card-title">Profile Details</h5>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label">User Name</div>
                                                            <div className="col-lg-9 col-md-8">{user.userName}</div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label">Full name</div>
                                                            <div className="col-lg-9 col-md-8">{user.fullName}</div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label">Day of Birth</div>
                                                            <div className="col-lg-9 col-md-8">{user.dob}</div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label">Phone Number</div>
                                                            <div className="col-lg-9 col-md-8">{user.phone}</div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label">Email</div>
                                                            <div className="col-lg-9 col-md-8">{user.email}</div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label">Address</div>
                                                            <div className="col-lg-9 col-md-8">{user.address}</div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="profile-edit">
                                                        <h5 className="card-title">Edit Profile</h5>
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="row mb-3">
                                                                <label htmlFor="profileImage"
                                                                       className="col-md-4 col-lg-3 col-form-label">Profile
                                                                    Image</label>
                                                                <div className="col-md-8 col-lg-9">
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <label htmlFor="fullName"
                                                                       className="col-md-4 col-lg-3 col-form-label">Full
                                                                    Name</label>
                                                                <div className="col-md-8 col-lg-9">
                                                                    <input name="fullName"
                                                                           type="text"
                                                                           className="form-control"
                                                                           id="fullName"
                                                                           value={user.fullName || ""}
                                                                           onChange={handleChangeEdit}

                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-3">
                                                                <label htmlFor="about"
                                                                       className="col-md-4 col-lg-3 col-form-label">About</label>
                                                                <div className="col-md-8 col-lg-9">
                                                    <textarea name="descript"
                                                              className="form-control"
                                                              id="descript"
                                                              style={{height: "100px"}}
                                                              value={user.descript || ""}
                                                              onChange={handleChangeEdit}>
                                                    </textarea>
                                                                </div>
                                                            </div>

                                                            <div className="row mb-3">
                                                                <label htmlFor="company"
                                                                       className="col-md-4 col-lg-3 col-form-label">Day
                                                                    of Birth</label>
                                                                <div className="col-md-8 col-lg-9">
                                                                    <input name="dob"
                                                                           type="text"
                                                                           className="form-control"
                                                                           id="dob"
                                                                           value={user.dob || ""}
                                                                           onChange={handleChangeEdit}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-3">
                                                                <label htmlFor="Address"
                                                                       className="col-md-4 col-lg-3 col-form-label">Address</label>
                                                                <div className="col-md-8 col-lg-9">
                                                                    <input name="address"
                                                                           type="text"
                                                                           className="form-control"
                                                                           id="address"
                                                                           value={user.address || ""}
                                                                           onChange={handleChangeEdit}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-3">
                                                                <label htmlFor="Phone"
                                                                       className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                                <div className="col-md-8 col-lg-9">
                                                                    <input name="phone"
                                                                           type="text"
                                                                           className="form-control"
                                                                           id="phone"
                                                                           value={user.phone || ""}
                                                                           onChange={handleChangeEdit}
                                                                           onBlur={handleBlurEdit}
                                                                    />
                                                                    {messPhoneErr &&
                                                                        <p className="error">this Phone already
                                                                            exists</p>}
                                                                </div>

                                                            </div>

                                                            {/*<div className="row mb-3">*/}
                                                            {/*    <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter*/}
                                                            {/*        Profile</label>*/}
                                                            {/*    <div className="col-md-8 col-lg-9">*/}
                                                            {/*        <input name="twitter" type="text" className="form-control"*/}
                                                            {/*               id="Twitter" value="https://twitter.com/#"/>*/}
                                                            {/*    </div>*/}
                                                            {/*</div>*/}

                                                            {/*<div className="row mb-3">*/}
                                                            {/*    <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook*/}
                                                            {/*        Profile</label>*/}
                                                            {/*    <div className="col-md-8 col-lg-9">*/}
                                                            {/*        <input name="facebook" type="text" className="form-control"*/}
                                                            {/*               id="Facebook" value="https://facebook.com/#"/>*/}
                                                            {/*    </div>*/}
                                                            {/*</div>*/}

                                                            {/*<div className="row mb-3">*/}
                                                            {/*    <label htmlFor="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram*/}
                                                            {/*        Profile</label>*/}
                                                            {/*    <div className="col-md-8 col-lg-9">*/}
                                                            {/*        <input name="instagram" type="text" className="form-control"*/}
                                                            {/*               id="Instagram" value="https://instagram.com/#"/>*/}
                                                            {/*    </div>*/}
                                                            {/*</div>*/}

                                                            {/*<div className="row mb-3">*/}
                                                            {/*    <label htmlFor="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin*/}
                                                            {/*        Profile</label>*/}
                                                            {/*    <div className="col-md-8 col-lg-9">*/}
                                                            {/*        <input name="linkedin" type="text" className="form-control"*/}
                                                            {/*               id="Linkedin" value="https://linkedin.com/#"/>*/}
                                                            {/*    </div>*/}
                                                            {/*</div>*/}

                                                            <div className="text-center">
                                                                <button type="submit" className="btn btn-primary">Save
                                                                    Changes
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default ProfileSection;
