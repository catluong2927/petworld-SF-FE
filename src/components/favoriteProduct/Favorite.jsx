import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {sentRequest} from "../../pages/ServicePackage";
import {DELETE, POST, URL_FAVORITE_PRODUCT} from "../../utilities/constantVariable";

function discoutPrice(price, sale){
    return price*(1 - (sale/100));
}
function ShopCard(props) {
    const [arrayIdProductFavorite,setArrayIdProductFavorite] = useState([]);
    const isLogin = useSelector(state => state.auth.login?.currentUser)
    const [products, setProducts] = useState([]);
    let token= '';
    let userId = 0;
    if(isLogin){
        token = isLogin.token;
        userId = isLogin.userDtoResponse.id;
    }
    const FAVORITE_API = process.env.REACT_APP_FETCH_API + `/favorites/user/${isLogin.userDtoResponse.id}`;
    const URL_DELETE_FAVORITE_PRODUCT = "favorite-products";

    useEffect(() => {
        axios
            .get(`${FAVORITE_API}`)
            .then(res => {
                const arrayProduct = [];
                const arrayProductId = [];
                res.data.favoriteProductDtoResponses.forEach(item => {
                    arrayProduct.push(item.productDtoResponse);
                    arrayProductId.push(item.productDtoResponse.id)
                })
                setArrayIdProductFavorite(arrayProductId)
                setProducts(arrayProduct);
            })
            .catch(err => {console.log(err)
            })
    }, [FAVORITE_API, props, arrayIdProductFavorite.length]);

    const deleteFavoriteListHandler = props => {
        setArrayIdProductFavorite(prevState => prevState.slice(0, prevState.length - 1));
        const body = {userId,productId:props}
        const res = sentRequest(URL_DELETE_FAVORITE_PRODUCT,DELETE,body,token);
        if(arrayIdProductFavorite.length === 1){
            window.location.reload(true);
        }
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
                                    <li onClick={deleteFavoriteListHandler.bind(null, id)}>
                                        <a >
                                            <img
                                                src="/assets/images/icon/delete.svg"
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
