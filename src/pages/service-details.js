import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useMemo, useReducer, useRef, useState} from "react";
import DatePicker from "react-datepicker";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "react-datepicker/dist/react-datepicker.css";
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination,} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {ServiceProcess} from "../components/service/ServiceProcess";
import {ServicePackageDescription} from "../components/service/ServicePackageDescription";
import ProductPriceCount from "../components/shop/ProductPriceCount";
import {sentRequest} from "./ServicePackage";
import { Toast } from 'primereact/toast';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../store/cartInventorySlice";
import {POST, URL_PACKAGE_DETAIL, URL_REVIEW} from "../utilities/constantVariable";
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
function ServiceDetails(props) {
  const toast = useRef(null);
  const [servicePackage, setServicePackage] = useState({});
  const [mainImage, setMainImage] = useState('');
  const [services, setServices] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [amount, setAmount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [descriptions, setDescriptions] = useState('');
  const packageId = useParams();
  const id = packageId.packageId;
  const PACKAGE_URL = URL_PACKAGE_DETAIL +"/" + id;
  const isLogin = useSelector((state) => state.auth.login?.currentUser);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  let email = "";
  let token = '';
  if(isLogin){
    email = isLogin.userDtoResponse.email;
    token = isLogin.token;
  }
  useEffect( () => {
    const request =  sentRequest(PACKAGE_URL);
    request.then(data => {
          setServicePackage(data);
          setMainImage(data.image);
          setReviews(data.packageDetailReviewDtoResponses.content)
          setServices(data.serviceDtoResponses.content);
          const serviceImages = data.serviceDtoResponses.content.flatMap(service => service.serviceImages)
          setImages(serviceImages);
          setDescriptions(data.description)
          const img = {id: 100, url: data.image}
          setImages(prevState => [...prevState, img]);
        }
    );
    setIsLoaded(true);
  }, [isLoaded]);



  const onChangeImageHandler = props => {
    setMainImage(props);
  }
  const  [state, infoDispatch] = useReducer(infoReducer, initialState);
  const {description, review, process} = state;
  const showDescHandler = () => {
    setIsLoaded(!isLoaded)
    infoDispatch( {type:'desc'})
  };
  const showProcessHandler = () => {
    setIsLoaded(!isLoaded)
    infoDispatch({type:'process'})
  };
  const showReviewHandler = () => {
    setIsLoaded(!isLoaded)
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

  /// Duration option
  const [selectedDuration, setSelectedDuration] = useState("full-day");
  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };


  const body = {
    userEmail: email,
    type: false,
    token,
    name: servicePackage.name,
    image: servicePackage.image,
    typeId: servicePackage.id,
    price: servicePackage.price,
    originalPrice: servicePackage.price,
    ...amount

  };

  const addToCartHandler = async (event) => {
    event.preventDefault();
    if(isLogin) {
      try {
        dispatch(addItem(body))
        toast.current.show({severity: 'success', summary: 'Success', detail: `Add successfully`, life: 1000});
        setTimeout(() => {
          navigation("/shop")
        }, 1000)
      } catch (error) {
        toast.current.show({severity: 'error', summary: 'Fail', detail: `Failed to add to cart `, life: 1000});
        console.error('Error:', error.message);
      }
    }else {
      navigation("/login")
    }
  };

  // Prevent the past date

  const today = new Date();
  const handleDateChange = (date) => {
    if (date > today) {
      setStartDate(date);
    }
  };


  const star1Ref = useRef();
  const star2Ref = useRef();
  const star3Ref = useRef();
  const star4Ref = useRef();
  const star5Ref = useRef();
  const messageRef = useRef();

  const submitReviewHandler = (event) => {
    event.preventDefault();
    const star =  star1Ref.current.checked
        ? 1
        : star2Ref.current.checked
            ? 2
            : star3Ref.current.checked
                ? 3
                : star4Ref.current.checked
                    ? 4
                    : star5Ref.current.checked
                        ? 5
                        : 0;
    const review = messageRef.current.value;
    const date = new Date();
    const newReview = {
      star,
      review,
      date,
      packageDetailId: id,
      userEmail: email,
    };
    const res = sentRequest(URL_REVIEW, POST, newReview, token);
    res.then(

    )
    window.location.reload(true);
  };
  return (
      <Layout>
        <Breadcrumb pageName="Packages Details" pageTitle={servicePackage.name} />
        <Toast ref={toast} />
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
                        {images.map(image => (
                                <SwiperSlide className='service-image-swiper' key={image.id}>
                                  <button
                                      className={mainImage === image.url ? 'nav-link active' : 'nav-link'}
                                      id="v-pills-img1-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#v-pills-img1"
                                      type="button"
                                      role="tab"
                                      aria-controls="v-pills-img1"
                                      aria-selected="true"
                                      onClick={onChangeImageHandler.bind(null, image.url)}
                                  >
                                    <img src={image.url} alt="" className='service-image' />
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
                        <h2>{servicePackage.name}</h2>
                        <div className="currency">
                          <h5>${servicePackage.price}</h5>
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
                                    value={selectedDuration}
                                    onChange={handleDurationChange}
                                    style={{
                                      width: "100%",
                                      padding: "10px",
                                      borderRadius: "5px",
                                      border: "1px solid #ddd",
                                    }}
                                >
                                  <option value="full-day">Full Day (over 5 hrs)</option>
                                  <option value="half-day">Half Day (under 5 hrs)</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-inner date">
                                <label>Date</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    minDate={today}
                                    placeholderText="Check In"
                                    className="calendar"
                                />
                              </div>
                            </div>
                            <div className="shop-quantity d-flex flex-wrap align-items-center justify-content-start mb-20">
                              <div className="quantity d-flex align-items-center">
                                <div className="quantity-nav nice-number d-flex align-items-center">
                                  <ProductPriceCount
                                      onSendCart={setAmount}
                                      price={servicePackage.price} />
                                </div>
                              </div>
                              <Link to="/cart">
                                <p className="primary-btn3"
                                   onClick={addToCartHandler}
                                >Add to cart</p>
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
                    {process && <ServiceProcess process ={services} />}
                    {description && <ServicePackageDescription content={descriptions} />}
                    {review &&  <div
                        className="tab-content tab-content2"
                    >
                      <div
                          className="tab-pane fade active show"
                      >
                        <div className="reviews-area">
                          <div className="row g-lg-4 gy-5">
                            <div className="col-lg-8">
                              <div className="number-of-review">
                                <h3>Review ({reviews.length}) :</h3>
                              </div>
                              <div className="review-list-area">
                                <ul className="review-list">
                                  {reviews.map(review =>
                                      <li key={review.key}>
                                        <div className="single-review d-flex  flex-md-nowrap flex-wrap">
                                          <div className="review-image">
                                            <img
                                                className='user-review-image'
                                                src={review.userDtoResponse.avatar}
                                                alt="image"
                                            />
                                          </div>
                                          <div className="review-content">
                                            <div className="c-header d-flex align-items-center">
                                              <div className="review-meta">
                                                <h5 className="mb-0">
                                                  <a href="#">{review.userDtoResponse.fullName}</a>
                                                </h5>
                                                <div className="c-date">
                                                  {new Date(review.date).toLocaleDateString('en-US', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    hour12: true
                                                  })}
                                                </div>

                                              </div>
                                            </div>
                                            <ul className="product-review">
                                              {Array(review.star).fill(0).map((star, index) => (
                                                  <li key={index}>
                                                    <i className="bi bi-star-fill" />
                                                  </li>
                                              ))}
                                            </ul>
                                            <div className="c-body">
                                              <p>{review.review}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                  )
                                  }
                                </ul>
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="review-form">
                                <div className="number-of-review">
                                  <h3>Leave A Reply</h3>
                                </div>
                                <form onSubmit={submitReviewHandler}>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-inner mb-10">
                                      <textarea
                                          placeholder="Message..."
                                          defaultValue={""}
                                          required
                                          ref={messageRef}
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
                                                value={5}
                                                ref={star5Ref}
                                            />
                                            <label htmlFor="star5" title="text">
                                              5 stars
                                            </label>
                                            <input
                                                type="radio"
                                                id="star4"
                                                name="rate"
                                                value={4}
                                                ref={star4Ref}
                                            />
                                            <label htmlFor="star4" title="text">
                                              4 stars
                                            </label>
                                            <input
                                                type="radio"
                                                id="star3"
                                                name="rate"
                                                value={3}
                                                ref={star3Ref}
                                            />
                                            <label htmlFor="star3" title="text">
                                              3 stars
                                            </label>
                                            <input
                                                type="radio"
                                                id="star2"
                                                name="rate"
                                                value={2}
                                                ref={star2Ref}
                                            />
                                            <label htmlFor="star2" title="text">
                                              2 stars
                                            </label>
                                            <input
                                                type="radio"
                                                id="star1"
                                                name="rate"
                                                value={1}
                                                ref={star1Ref}
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
                    </div>}
                  </div>
                </div>
              </div>
            </div>
      </Layout>
  );
}
export default ServiceDetails;
