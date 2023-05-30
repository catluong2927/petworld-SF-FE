import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import ProductPriceCount from "./ProductPriceCount";
import {sentRequest} from "../../pages/ServicePackage";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../store/cartInventorySlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo } from "react";
import {GET} from "../../utilities/constantVariable";

function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const URL_PRODUCT_DETAIL = "products/" + id;
  let [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [productPriceCount, setProductPriceCount] = useState({});
  const [productCart, setProductCart] = useState({});
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.login?.currentUser);
  let email = "";
  let token = '';
  if (isLogin) {
    email = isLogin.userDtoResponse.email;
    token = isLogin.token;
  }
  function discoutPrice(price, sale) {
    return price * (1 - sale / 100);
  }

  const mainImageHandler = (props) => {
    setMainImage(props);
  };

  const onChangeImageHandler = props => {
    setMainImage(props);
  }


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

  useEffect(() => {
    const res = sentRequest(URL_PRODUCT_DETAIL, GET, null, token);
    res.then((data) => {
      setProduct(data);
      setMainImage(data.image);
      setImages([...data.imageDetailList, { url: data.image }]);
    });
    setProductCart({
      ...productPriceCount,
      'productId': props.productId
    })
  }, [])

  const finalPrice = product.sale? product.price*(1 - (product.sale/100)): product.price;
  const body = {
    userEmail: email,
    type: true,
    typeId: product.id,
    image: product.image,
    token,
    name: product.name,
    originalPrice: product.price,
    price: finalPrice,
    ...productPriceCount
  };
  const handlePostData = async (event) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const url = 'cart';
        dispatch(addItem(body));
        props.toast.current.show({
          severity: "success",
          summary: "Success",
          detail: `Add ${product.name} successfully`,
          life: 1000,
        });
        setTimeout(() => {
          navigation("/shop");
        }, 1000);
      } catch (error) {
        props.toast.current.show({severity: 'error', summary: 'Fail', detail: `Failed to add to cart `, life: 1000});
        console.error('Error:', error.message);

      }
    } else {
      navigation("/login");
    }
  };
  return (
    <>
      <div className="row g-lg-4 gy-5 mb-120">
        <div className="col-lg-7">
          <div className="tab-content tab-content1" id="v-pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="v-pills-img1"
              role="tabpanel"
              aria-labelledby="v-pills-img1-tab"
            >
              <img className="img-fluid product-image" src={mainImage} alt="" />
            </div>
          </div>
          <div
            className="nav nav1 nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <Swiper {...slider}>
              {images.map((image, index) => (
                <SwiperSlide className="service-image-swiper" key={index}>
                  <button
                    className={
                      mainImage === image.url ? "nav-link active" : "nav-link"
                    }
                    id="v-pills-img1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-img1"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-img1"
                    aria-selected="true"
                    onClick={onChangeImageHandler.bind(null, image.url)}
                  >
                    <img src={image.url} alt="" className="service-image" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="shop-details-content">
            <h3>{product.name}</h3>
            <ul className="shopuct-review2 d-flex flex-row align-items-center mb-25">
            </ul>
            <div className="model-number">
              <span>Product Code: {product.productCode}</span>
            </div>
            <div className="price-tag">
              <h4>
                ${finalPrice} <del>${product.price}</del>
              </h4>
            </div>
            <p>Description : {product.description} </p>
            <div className="shop-quantity d-flex align-items-center justify-content-start mb-20">
              <div className="quantity d-flex align-items-center">
                <ProductPriceCount
                  price={finalPrice}
                  onSendCart={setProductPriceCount}
                />
              </div>
              <Link legacyBehavior to="/cart">
                <button className="primary-btn3" onClick={handlePostData}>
                  Add to cart
                </button>
              </Link>
            </div>
            <div className="buy-now-btn" onClick={handlePostData}>
              <Link legacyBehavior to="/cart">
                <a>Buy Now</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
