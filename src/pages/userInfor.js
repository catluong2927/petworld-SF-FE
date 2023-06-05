import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/apiRequest";
import '../assets/css/style.css';
import {getUserDetail} from "../redux/userRequest";


export const UserInfor = () => {
    const isLogin = useSelector((state) => state.auth.login?.currentUser);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(isLogin.token);
        setUser(isLogin.userDtoResponse);
    }, [isLogin]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout(dispatch, navigate)
    }
    const handleGetUserDetail = () => {
        getUserDetail(user.id, token, dispatch, navigate)
    }
    return(
        <div className='info'>
            <li>
            <p className='infor-linkusername'>Hi! {isLogin.userDtoResponse.userName}</p>
            </li>
            <li>
            <p className='infor-linkusername'>{isLogin.userDtoResponse.email}</p>
            </li>
            <hr/>
            <ul className= 'inforuserul'>
                <li className= 'inforuserli'>
                <Link to='/profile' className='none-border-circle custom-tag'>
                    <span className='infor-link' onClick={handleGetUserDetail}>Profile</span>
                </Link>
                </li>
                <li className= 'inforuserli'>
                <Link to='/updatePassword' className='none-border-circle custom-tag'>
                    <span className='infor-link' >Settings</span>
                </Link>
                </li>
                <li className= 'inforuserli'>
                <Link to='/login' className='none-border-circle custom-tag'>
                    <span className='infor-link' onClick={handleLogout}>Logout</span>
                </Link>
                </li>
            </ul>
            <div className="footer-infor">
            </div>
        </div>
    )
};
export default UserInfor;

