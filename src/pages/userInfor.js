import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
export const  UserInfor = ()=>{
    const isLogin = useSelector((state) => state.auth.login?.currentUser);
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
                <Link to='/profile' className='none-border-circle'>
                    <span className='infor-link'>Profile</span>
                </Link>
                </li>
                <li className= 'inforuserli'>
                <Link to='/profile' className='none-border-circle'>
                    <span className='infor-link'>Settings</span>
                </Link>
                </li>
                <li className= 'inforuserli'>
                <Link to='/profile' className='none-border-circle'>
                    <span className='infor-link'>Logout</span>
                </Link>
                </li>
            </ul>
            <div className="footer-infor">
            </div>
        </div>
    )
}