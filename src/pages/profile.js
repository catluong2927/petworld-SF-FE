import React, {useEffect, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "./sign-up.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {useSelector} from "react-redux";


function Profile() {
    const data = useSelector((state)=>state.users.users?.userDetail);

    const [user,setUser] = useState({});
    useEffect(() => {
        setUser(data);
    }, [user]);
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
                                    <section className="section profile">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <div className="card">
                                                    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                                        <img src={user.avatar} alt="Profile" className="rounded-circle"/>
                                                        <h2>Kevin Anderson</h2>
                                                        <h3>Web Designer</h3>
                                                        <div className="social-links mt-2">
                                                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
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
                                                            <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                                                <h5 className="card-title">About</h5>
                                                                <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nam
                                                                    maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor.
                                                                    Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi
                                                                    sed ea saepe at unde.</p>
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
                                                                <form>
                                                                    <div className="row mb-3">
                                                                        <label htmlFor="profileImage"
                                                                               className="col-md-4 col-lg-3 col-form-label">Profile
                                                                            Image</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <img src="assets/img/profile-img.jpg" alt="Profile"/>
                                                                            <div className="pt-2">
                                                                                <a href="#" className="btn btn-primary btn-sm"
                                                                                   title="Upload new profile image"><i
                                                                                    className="bi bi-upload"></i></a>
                                                                                <a href="#" className="btn btn-danger btn-sm"
                                                                                   title="Remove my profile image"><i
                                                                                    className="bi bi-trash"></i></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full
                                                                            Name</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="fullName" type="text" className="form-control"
                                                                                   id="fullName" value="Kevin Anderson"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="about"
                                                                               className="col-md-4 col-lg-3 col-form-label">About</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                    <textarea name="about" className="form-control" id="about"
                                                              style={{height: "100px"}}>Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="company"
                                                                               className="col-md-4 col-lg-3 col-form-label">Company</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="company" type="text" className="form-control"
                                                                                   id="company" value="Lueilwitz, Wisoky and Leuschke"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="Job"
                                                                               className="col-md-4 col-lg-3 col-form-label">Job</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="job" type="text" className="form-control" id="Job"
                                                                                   value="Web Designer"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="Country"
                                                                               className="col-md-4 col-lg-3 col-form-label">Country</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="country" type="text" className="form-control"
                                                                                   id="Country" value="USA"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="Address"
                                                                               className="col-md-4 col-lg-3 col-form-label">Address</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="address" type="text" className="form-control"
                                                                                   id="Address" value="A108 Adam Street, New York, NY 535022"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="Phone"
                                                                               className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="phone" type="text" className="form-control" id="Phone"
                                                                                   value="(436) 486-3538 x29071"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="Email"
                                                                               className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="email" type="email" className="form-control" id="Email"
                                                                                   value="k.anderson@example.com"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter
                                                                            Profile</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="twitter" type="text" className="form-control"
                                                                                   id="Twitter" value="https://twitter.com/#"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook
                                                                            Profile</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="facebook" type="text" className="form-control"
                                                                                   id="Facebook" value="https://facebook.com/#"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram
                                                                            Profile</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="instagram" type="text" className="form-control"
                                                                                   id="Instagram" value="https://instagram.com/#"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-3">
                                                                        <label htmlFor="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin
                                                                            Profile</label>
                                                                        <div className="col-md-8 col-lg-9">
                                                                            <input name="linkedin" type="text" className="form-control"
                                                                                   id="Linkedin" value="https://linkedin.com/#"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="text-center">
                                                                        <button type="submit" className="btn btn-primary">Save Changes</button>
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
                    </div>
                </div>
            </Layout>
        </>
    );
}


export default Profile;
