import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {sentRequest} from "../../pages/ServicePackage";
import {GET, POST, URL_FAVORITE_PRODUCT} from "../../utilities/constantVariable";

function discoutPrice(price, sale){
    return price*(1 - (sale/100));
}

function ShopCard(props) {

    const PRODUCT_API = process.env.REACT_APP_FETCH_API + `/products?size=${props.sizePages}&page=${props.currentPage}&categoryIds=${props.checkedCategory}`;
    const [products, setProducts] = useState([]);
    const [shouldRender, setShouldRender] = useState(false);
    const isLogin = useSelector((state) => state.auth.login?.currentUser);
    let token= '';
    let userId = 0;
    if(isLogin){
        token = isLogin.token;
        userId = isLogin.userDtoResponse.id;
    }
    const FAVORITE_PRODUCTS_API = `http://localhost:8080/api/favorites/user/${userId}`;

    const[productFavorites,setProductFavorites] = useState([]);
    // setProductFavorites(sentRequest(FAVORITE_PRODUCTS_API,GET,null,token));
    const [arrayIdProductFavorite,setArrayIdProductFavorite] = useState([]);
    useEffect(() => {
        axios
            .get(`${PRODUCT_API}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                setProducts(res.data.content)
                props.setTotalPages(res.data.totalPages)
            })
            .catch(err => {console.log(err)
            })
    }, [PRODUCT_API, props, shouldRender, arrayIdProductFavorite.length]);


    useEffect(() => {
        axios
            .get(`${FAVORITE_PRODUCTS_API}`)
            .then(res => {
                const arrayProductId = [];
                res.data.favoriteProductDtoResponses.forEach(item => {
                    arrayProductId.push(item.productDtoResponse.id)
                })
                setArrayIdProductFavorite(arrayProductId);
            })
            .catch(err => {console.log(err)
            })
    }, [ props]);


    const addInFavoriteListHandler = props => {
        setArrayIdProductFavorite(prevState => [...prevState, props])
        setShouldRender(!shouldRender);
        const body = {userId,productId:props}
        const res = sentRequest(URL_FAVORITE_PRODUCT,POST, body,token)
    }

    return (
        <>
            {products.map((item) => {
                const {
                    id,
                    name,
                    image,
                    price,
                    sale,
                    markDtoResponse
                } = item;
                return (
                    <div key={id} className="col-lg-4 col-md-4 col-sm-6">
                        <div className="collection-card">
                            {markDtoResponse.tag === "" ? ("") : (
                                <div
                                    className= {markDtoResponse.tagBadge === "" ? "offer-card" : `offer-card ${markDtoResponse.tagBadge}`}
                                >
                                    <span>{markDtoResponse.tag}</span>
                                </div>
                            )}
                            {arrayIdProductFavorite.includes(id) &&
                                <div className={"cart-icon-list-favorite favorite-yes"}>
                                    <li>
                                        <a >
                                            <img
                                                src="/assets/images/icon/Icon-favorites3.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                </div> }

                            <div className="collection-img">
                                <Link legacyBehavior to={`/shop-details/${id}`}>
                                    <img className="hover_image" style={{width:'200px', height: '200px'}} src={image} alt="" />
                                </Link>

                                <div className="view-dt-btn">
                                    <div className="plus-icon">
                                        <i className="bi bi-plus" />
                                    </div>
                                    <Link legacyBehavior to={`/shop-details/${id}`}>
                                        <a>View Details</a>
                                    </Link>
                                </div>
                                <ul className="cart-icon-list">
                                    <li onClick={addInFavoriteListHandler.bind(null, id)}>
                                        <a >
                                            <img
                                                src="/assets/images/icon/Icon-favorites3.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="collection-content text-center">
                                <h4>
                                    <Link legacyBehavior to={`/shop-details/${id}`} >
                                        {name}
                                    </Link>
                                </h4>
                                <div className="price">
                                    <h6>${discoutPrice(price, sale)}</h6>
                                    {sale !==  0 && <del>${price}</del>}
                                </div>
                                <div className="review">
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default ShopCard;
