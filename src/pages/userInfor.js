import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/apiRequest";
export const  UserInfor = ()=>{
    const isLogin = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = ()=>{
        logout(dispatch,navigate)
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
                    <span className='infor-link'>Profile</span>
                </Link>
                </li>
                <li className= 'inforuserli'>
                <Link to='/profile' className='none-border-circle custom-tag'>
                    <span className='infor-link'>Settings</span>
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
}
