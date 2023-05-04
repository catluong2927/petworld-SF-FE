import {json, Link, useRouteLoaderData} from "react-router-dom";
import React, {useEffect, useMemo, useReducer, useState} from "react";
import DatePicker from "react-datepicker";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "react-datepicker/dist/react-datepicker.css";
import ItemCounter from "../components/shop/ProductCount";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {ServiceReview} from "../components/service/ServiceReview";
import {ServiceProcess} from "../components/service/ServiceProcess";
import {ServicePackageDescription} from "../components/service/ServicePackageDescription";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const  initialState = {description: true, review: false, process: false};
const infoReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "desc":
       newState = {...state,description: true, review: false, process: false }
    break;
    case "process":
      newState = {...state,description: false, review: false, process: true }
      break;
    case "review":
      newState = {...state,description: false, review: true, process: false }
      break;
    default:
      throw new Error();
  }
  return newState;
};


function ServiceDetails() {
  const [startDate, setStartDate] = useState(new Date());
  const services = useRouteLoaderData('services');
  const [mainImage, setMainImage] = useState(services.image)
  const onChangeImageHandler = props => {
    setMainImage(props);
  }

  const  [state, infoDispatch] = useReducer(infoReducer, initialState);
  const {description, review, process} = state;
  const showDescHandler = () => {
        infoDispatch( {type:'desc'})
  };
  const showProcessHandler = () => {
        infoDispatch({type:'process'})
  };
  const showReviewHandler = () => {
        infoDispatch({type:'review'})
  };

  const slider = useMemo(() => {
    return (
        {
          slidesPerView: "auto",
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".next-btn-1",
        prevEl: ".prev-btn-1",
        },
       }
    )
  })


  return (
    <Layout>
      <Breadcrumb pageName="Packages Details" pageTitle={services.name} />
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
                    src={mainImage}
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
                <Swiper {...slider}>
                {services.products.map(service => (
                  <SwiperSlide className='service-image-swiper'>
                      <button
                          className={mainImage === service.image ? 'nav-link active' : 'nav-link'}
                          id="v-pills-img1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-img1"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-img1"
                          aria-selected="true"
                          onClick={onChangeImageHandler.bind(null, service.image)}
                      >
                        <img src={service.image} alt="" className='service-image' />
                      </button >
                  </SwiperSlide>
                    )
                )}
                </Swiper>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="services-datails-content">
                <div className="banner-title">
                  <h2>{services.name}</h2>
                  <div className="currency">
                    <h5>${services.price}</h5>
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
                        <Link legacyBehavior to="/cart">
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
              <div className="nav nav2 nav  nav-pills">
                <button className={`nav-link ${description? 'active': ''}`}
                        onClick={showDescHandler}
                >Description{" "}</button>
                <button className={`nav-link ${process? 'active': ''}`}
                        onClick={showProcessHandler}
                >Processes </button>
                <button className={`nav-link ${review? 'active': ''}`}
                        onClick={showReviewHandler}
                >Review</button>
              </div>
              {description && <ServicePackageDescription/>}
              {review && <ServiceReview/>}
              {process && <ServiceProcess/>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServiceDetails;

export async function loader({request, params}) {
  const id = params.packageId;
  const response = await fetch('https://6436d35a3e4d2b4a12dcb9a2.mockapi.io/api/v1/service-packages/'+ id );
  if (!response.ok) {
    throw json({message: "no result"}, {status: 500})
  } else {
    const resData = await response.json();
    return resData;
  }
};
