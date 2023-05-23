import axios from "axios";
import {
    loginFail,
    loginStart,
    loginSuccess,
    registerFail,
    registerStart,
    registerSuccess,
    logoutStart,
    logoutSuccess,
    logoutFail,
} from "./authSlice";
import {getUserFail, getUserStart, getUserSuccess} from "./userSlice";

export const loginUser = async (form, dispatch, navigate, toast) => {
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    dispatch(loginStart());
    try {
        const res = await axios.post(`${LOGIN_API}/auth/login`, form);
        dispatch(loginSuccess(res.data));
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Login successfully', life: 1000})
        setTimeout(() => {
            navigate("/")
        }, 1000);

    } catch (err) {
        dispatch(loginFail());
        toast.current.show(
            {severity: 'error', summary: 'Error', detail: 'Login fail', life: 1500})
    }
}
export const signUpUser = async (data, dispatch, navigate, toast) => {
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    dispatch(registerStart());
    try {
        const res = await axios.post(`${LOGIN_API}/users`, data);
        dispatch(registerSuccess());
        toast.current.show(
            {severity: 'success', summary: 'Success', detail: 'Create account successfully', life: 1000})
        setTimeout(() => {
            navigate("/login")
        }, 1000);

    } catch (err) {
        dispatch(registerFail(err.response.data));
        toast.current.show(
            {severity: 'error', summary: 'Error', detail: 'Create account fail', life: 1500})

    }
}

export const logout = async (dispatch,navigate) =>{
    dispatch(logoutStart());
    try{
        localStorage.removeItem('persist:root')
        dispatch(logoutSuccess());
        navigate("/login")
    }catch (err){
        dispatch(logoutFail());
    }
}

export const getUserDetail = async (userId,token,dispatch,navigate) =>{
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    dispatch(getUserStart());

    try{
        const res = await axios.get(`${LOGIN_API}/users/${userId}`,{
           headers: {
               Authorization: `Bearer ${token}`
           }
       })
        dispatch(getUserSuccess(res.data));
        navigate("/profile");
    }catch (err){
        dispatch(getUserFail())
    }
}
