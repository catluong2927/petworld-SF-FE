import {useSelector} from "react-redux";

export const URL_ORDER = "orders";
export const URL_REVIEW_PACKAGE = 'review-package-details';
export const PUT = 'PUT';
export const POST = 'POST';
export const DELETE = 'DELETE';
export const URL_CART = 'cart';
export let email = "";
export const SetEmail = () => {
     const isLogin = useSelector((state) => state.auth.login?.currentUser);

    if (isLogin) {
        email = isLogin.userDtoResponse.email;
    }
}
