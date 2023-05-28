import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useMemo, useReducer, useRef, useState} from "react";
import DatePicker from "react-datepicker";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "react-datepicker/dist/react-datepicker.css";
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination,} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {ServiceReview} from "../components/service/ServiceReview";
import {ServiceProcess} from "../components/service/ServiceProcess";
import {ServicePackageDescription} from "../components/service/ServicePackageDescription";
import ProductPriceCount from "../components/shop/ProductPriceCount";
import {sentRequest} from "./ServicePackage";
import { Toast } from 'primereact/toast';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../store/cartInventorySlice";
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
  const [amount, setAmount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [descriptions, setDescriptions] = useState('');
  const packageId = useParams();
  const PACKAGE_URL = "package-details/" + packageId.packageId;
  const isLogin = useSelector((state) => state.auth.login?.currentUser);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  let email = "";
  if(isLogin){
    email = isLogin.userDtoResponse.email;
  }
  useEffect( () => {
    const request =  sentRequest(PACKAGE_URL);
    request.then(data => {
          setServicePackage(data);
          setMainImage(data.image);
          setServices(data.serviceDtoResponses);
          const serviceImages = data.serviceDtoResponses.flatMap(service => service.serviceImages)
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

  /// Duration option
  const [selectedDuration, setSelectedDuration] = useState("full-day");
  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };


  const body = {
    userEmail: email,
    type: false,
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
                    {description && <ServicePackageDescription content={descriptions} />}
                    {review && <ServiceReview />}
                    {process && <ServiceProcess process ={services} />}
                  </div>
                </div>
              </div>
            </div>
      </Layout>
  );
}
export default ServiceDetails;
