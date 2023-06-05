import {useSelector} from "react-redux";

export const URL_ORDER = "orders";
export const URL_PACKAGE_DETAIL = 'package-details';
export const URL_FAVORITE_PRODUCT ="favorite-products";
export const URL_REVIEW_PACKAGE = 'package-detail-reviews/package-detail';
export const URL_REVIEW = 'package-detail-reviews';
export const PUT = 'PUT';
export const POST = 'POST';
export const GET = 'GET';
export const DELETE = 'DELETE';
export const URL_CART = 'cart';
export let email = "";
export const SetEmail = () => {
     const isLogin = useSelector((state) => state.auth.login?.currentUser);

    if (isLogin) {
        email = isLogin.userDtoResponse.email;
    }
}
