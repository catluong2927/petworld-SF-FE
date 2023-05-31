import axios from "axios";
import {editPassFail, editPassStart, editPassSuccess, getUserFail, getUserStart, getUserSuccess} from "./userSlice";

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
export const changePassword = async (form, dispatch, navigate, toast, token) =>{
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    console.log(0)
    dispatch(editPassStart);
    console.log(1)
    try{
        const res = await axios.put(`${LOGIN_API}/users/password`,form,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(editPassSuccess);
        toast.current.show({severity: 'success', summary: 'Success', detail: 'update password successfully', life: 1000})
        setTimeout(() => {
            navigate("/profile")
        }, 1000);
    }catch (err){
        dispatch(editPassFail);
        toast.current.show(
            {severity: 'error', summary: 'Error', detail: 'update password fail', life: 1500})
    }
}
