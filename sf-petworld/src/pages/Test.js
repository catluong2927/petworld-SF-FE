import {json, Link, useRouteLoaderData} from "react-router-dom";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "react-datepicker/dist/react-datepicker.css";
import ItemCounter from "../components/shop/ProductCount";
export function Test() {
    const [startDate, setStartDate] = useState(new Date());
    const services = useRouteLoaderData('services');
    return (
        <Layout>
            <Breadcrumb pageName="Packages Details" pageTitle="Service Details" />
            <div className="services-details-area pt-120 mb-120">
                <div className="container">
                    <div className="row g-lg-4 gy-5 mb-120">
                        <div className="col-lg-7">
                            <div className="tab-content tab-content1" id="v-pills-tabContent">
                                <div
                                    className="tab-pane fade active show"
                                    id="v-pills-img1"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-img1-tab"
                                >
                                    <img
                                        className="img-fluid"
                                        src={services.image}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div
                                className="nav nav1 nav-pills"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <button
                                    className="nav-link active"
                                    id="v-pills-img1-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-img1"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-img1"
                                    aria-selected="true"
                                >
                                    <img src="/assets/images/bg/card-sm-01.png" alt="" />
                                </button>
                                <button
                                    className="nav-link"
                                    id="v-pills-img2-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-img2"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-img2"
                                    aria-selected="false"
                                >
                                    <img src="/assets/images/bg/card-sm-02.png" alt="" />
                                </button>
                                <button
                                    className="nav-link"
                                    id="v-pills-img3-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-img3"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-img3"
                                    aria-selected="false"
                                >
                                    <img src="/assets/images/bg/card-sm-03.png" alt="" />
                                </button>
                                <button
                                    className="nav-link"
                                    id="v-pills-img4-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-img4"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-img4"
                                    aria-selected="false"
                                >
                                    <img src="/assets/images/bg/card-sm-04.png" alt="" />
                                </button>
                                <button
                                    className="nav-link"
                                    id="v-pills-img5-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-img5"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-img5"
                                    aria-selected="false"
                                >
                                    <img src="/assets/images/bg/card-sm-05.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="services-datails-content">
                                <div className="banner-title">
                                    <h2>Day Care</h2>
                                    <div className="currency">
                                        <h5>$50.00-$80.00</h5>
                                    </div>
                                </div>
                                <div className="service-area">
                                    <form>
                                        <div className="row g-4">
                                            <div className="col-lg-12">
                                                <div className="form-inner">
                                                    <label>Duration</label>
                                                    <select
                                                        id="duration"
                                                        style={{
                                                            width: "100%",
                                                            padding: "10px",
                                                            borderRadius: "5px",
                                                            border: "1px solid #ddd",
                                                        }}
                                                    >
                                                        <option>Choose an option</option>
                                                        <option>Full Day (over 5 hrs)</option>
                                                        <option>Half Day (under 5 hrs)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-inner date">
                                                    <label>Date</label>
                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        placeholderText="Check In"
                                                        className="calendar"
                                                    />
                                                </div>
                                            </div>
                                            <div className="shop-quantity d-flex flex-wrap align-items-center justify-content-start mb-20">
                                                <div className="quantity d-flex align-items-center">
                                                    <div className="quantity-nav nice-number d-flex align-items-center">
                                                        <ItemCounter />
                                                    </div>
                                                </div>
                                                <Link legacyBehavior href="/cart">
                                                    <a className="primary-btn3">Add to cart</a>
                                                </Link>
                                            </div>
                                            <div className="pyment-method">
                                                <h6>Guaranted Safe Checkout</h6>
                                                <ul>
                                                    <li>
                                                        <img src="/assets/images/icon/visa2.svg" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/icon/amex.svg" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/icon/discover.svg" alt="" />
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="/assets/images/icon/mastercard.svg"
                                                            alt=""
                                                        />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/icon/stripe.svg" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/icon/paypal.svg" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/icon/pay.svg" alt="" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-120">
                        <div className="col-lg-12">
                            <div
                                className="nav nav2 nav  nav-pills"
                                id="v-pills-tab2"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <button
                                    className="nav-link active"
                                    id="v-pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-home"
                                    aria-selected="false"
                                >
                                    Description{" "}
                                </button>
                                <button
                                    className="nav-link"
                                    id="v-pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    aria-selected="true"
                                >
                                    Processes
                                </button>
                                <button
                                    className="nav-link"
                                    id="v-pills-common-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-common"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-common"
                                    aria-selected="true"
                                >
                                    Review
                                </button>
                            </div>
                            <div
                                className="tab-content tab-content2"
                                id="v-pills-tabContent2"
                            >
                                <div
                                    className="tab-pane fade active show"
                                    id="v-pills-home"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-home-tab"
                                >
                                    <div className="description">
                                        <p className="para-2 mb-3">
                                            Our pet care service provides various forms of care for
                                            pets, including feeding, exercise, grooming, and overall
                                            well-being. This type of service can be provided in the
                                            pet owner's home or at a facility, such as a pet hotel or
                                            boarding kennel. We also offer additional services such as
                                            training, transportation, and medical care. We are
                                            specialize in caring for a specific type of animal, such
                                            as cats or dogs, while others may be able to care for a
                                            variety of different types of pets. The level of our care
                                            and type of services offered will vary depending on the
                                            specific pet care service.
                                        </p>
                                        <p className="para-2">
                                            This Pet care services can be a great option for busy pet
                                            owners who are unable to provide the necessary care for
                                            their pets due to work or other commitments. They can also
                                            be a helpful resource for pet owners who are traveling and
                                            need someone to look after their pets while they are away.
                                        </p>
                                    </div>
                                    <div className="row g-lg-4 gy-5">
                                        <div className="col-lg-6">
                                            <p className="para-2 mb-2">
                                                There is often ask some questions about the pet care
                                                service and we always try to give all the answer of
                                                their questions. Before taking services it is important
                                                to know about the service process and its advantages or
                                                disadvantages. Here is some questions and answers we set
                                                as standard.
                                            </p>
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button
                                                            className="accordion-button"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne"
                                                            aria-expanded="true"
                                                            aria-controls="collapseOne"
                                                        >
                                                            01. What services are offered?
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="collapseOne"
                                                        className="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne"
                                                        data-bs-parent="#accordionExample"
                                                    >
                                                        <div className="accordion-body">
                                                            Pet care services can include dog walking, feeding
                                                            and watering, administering medication, providing
                                                            companionship and playtime, and basic grooming.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwo"
                                                        >
                                                            02. How do I choose a pet care service?
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="collapseTwo"
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo"
                                                        data-bs-parent="#accordionExample"
                                                    >
                                                        <div className="accordion-body">
                                                            Some things to consider when choosing a pet care
                                                            service include the type of service you need, the
                                                            cost, the availability of the service.{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree"
                                                            aria-expanded="false"
                                                            aria-controls="collapseThree"
                                                        >
                                                            03. Is it safe to leave my pet with a pet care
                                                            service?
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="collapseThree"
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby="headingThree"
                                                        data-bs-parent="#accordionExample"
                                                    >
                                                        <div className="accordion-body">
                                                            Pet care services should be able to provide a safe
                                                            and comfortable environment for your pet.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-dt-img">
                                                <img
                                                    className="img-fluid"
                                                    src="/assets/images/bg/services-dt-immg.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-profile-tab"
                                >
                                    <div className="description">
                                        <p className="para-2 mb-3">
                                            Choosing a pet care service, it is important to do your
                                            research and select a reputable provider that has
                                            experience and a good track record. You should also
                                            discuss your pet's needs and any special instructions with
                                            the provider to ensure that your pet will receive the best
                                            possible care.
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Boarding:</strong> This is when you leave your
                                                pet at a kennel or other facility while you are away.
                                                Boarding facilities typically offer basic care such as
                                                feeding, watering, and exercise, as well as additional
                                                services like grooming and training.
                                            </li>
                                            <li>
                                                <strong>Daycare:</strong> Daycare is a service that
                                                provides care for your pet while you are at work or
                                                otherwise busy. Daycare facilities typically offer
                                                playtime, socialization, and basic care such as feeding
                                                and watering.
                                            </li>
                                            <li>
                                                <strong>Grooming:</strong> Grooming services can help
                                                keep your pet clean and well-groomed. This can include
                                                bathing, clipping nails, and brushing fur.
                                            </li>
                                            <li>
                                                <strong>Training:</strong> Pet training services can
                                                help teach your pet basic obedience skills or help with
                                                behavioral issues.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-common"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-common-tab"
                                >
                                    <div className="reviews-area">
                                        <div className="row g-lg-4 gy-5">
                                            <div className="col-lg-8">
                                                <div className="number-of-review">
                                                    <h3>Review (02) :</h3>
                                                </div>
                                                <div className="review-list-area">
                                                    <ul className="review-list">
                                                        <li>
                                                            <div className="single-review d-flex justify-content-between flex-md-nowrap flex-wrap">
                                                                <div className="review-image">
                                                                    <img
                                                                        src="/assets/images/bg/review-img-1.png"
                                                                        alt="image"
                                                                    />
                                                                </div>
                                                                <div className="review-content">
                                                                    <div className="c-header d-flex align-items-center">
                                                                        <div className="review-meta">
                                                                            <h5 className="mb-0">
                                                                                <a href="#">Rocky Mike ,</a>
                                                                            </h5>
                                                                            <div className="c-date">06 july,2022</div>
                                                                        </div>
                                                                        <div className="replay-btn">
                                                                            <a href="#">
                                                                                <i className="bi bi-reply" />
                                                                                Reply
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="product-review">
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                    </ul>
                                                                    <div className="c-body">
                                                                        <p>
                                                                            I must explain to you how all this
                                                                            mistaken idea of denouncing pleasure and
                                                                            praising pain was born and I will give you
                                                                            a complete account.{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="single-review d-flex justify-content-between flex-md-nowrap flex-wrap">
                                                                <div className="review-image">
                                                                    <img
                                                                        src="/assets/images/bg/review-img-3.png"
                                                                        alt="image"
                                                                    />
                                                                </div>
                                                                <div className="review-content">
                                                                    <div className="c-header d-flex align-items-center">
                                                                        <div className="review-meta">
                                                                            <h5 className="mb-0">
                                                                                <a href="#">Rony Jhon ,</a>
                                                                            </h5>
                                                                            <div className="c-date">07 july,2022</div>
                                                                        </div>
                                                                        <div className="replay-btn">
                                                                            <a href="#">
                                                                                <i className="bi bi-reply" />
                                                                                Reply
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="product-review">
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="bi bi-star-fill" />
                                                                        </li>
                                                                    </ul>
                                                                    <div className="c-body">
                                                                        <p>
                                                                            I must explain to you how all this
                                                                            mistaken idea of denouncing pleasure and
                                                                            praising pain was born and I will give you
                                                                            a complete account.{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="review-form">
                                                    <div className="number-of-review">
                                                        <h3>Leave A Reply</h3>
                                                    </div>
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-inner mb-20">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Name*"
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-inner mb-20">
                                                                    <input
                                                                        type="email"
                                                                        placeholder="Email*"
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-inner mb-10">
                                  <textarea
                                      placeholder="Message..."
                                      defaultValue={""}
                                  />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-inner2 mb-30">
                                                                    <div className="review-rate-area">
                                                                        <p>Your Rating</p>
                                                                        <div className="rate">
                                                                            <input
                                                                                type="radio"
                                                                                id="star5"
                                                                                name="rate"
                                                                                defaultValue={5}
                                                                            />
                                                                            <label htmlFor="star5" title="text">
                                                                                5 stars
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                id="star4"
                                                                                name="rate"
                                                                                defaultValue={4}
                                                                            />
                                                                            <label htmlFor="star4" title="text">
                                                                                4 stars
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                id="star3"
                                                                                name="rate"
                                                                                defaultValue={3}
                                                                            />
                                                                            <label htmlFor="star3" title="text">
                                                                                3 stars
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                id="star2"
                                                                                name="rate"
                                                                                defaultValue={2}
                                                                            />
                                                                            <label htmlFor="star2" title="text">
                                                                                2 stars
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                id="star1"
                                                                                name="rate"
                                                                                defaultValue={1}
                                                                            />
                                                                            <label htmlFor="star1" title="text">
                                                                                1 star
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-inner two">
                                                                    <button
                                                                        className="primary-btn3 btn-lg"
                                                                        type="submit"
                                                                    >
                                                                        Post Comment
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
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
    );
}
