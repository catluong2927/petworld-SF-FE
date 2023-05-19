import {Link} from "react-router-dom";
export const  UserInfor = ()=>{
    return(
        <div className='info'>
            {/*<div className="header-infor">*/}
            {/*    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7v4Q4NzyvPUeP2yNEtp7xXzeyOoKgpWTOw&usqp=CAU" alt="" className="header-infor-image"/>*/}
            {/*    <h1 className="header-infor-name">Nguyen Van Minh</h1>*/}
            {/*</div>*/}
            <div>
                <Link to='/profile' className='none-border-circle'>
                    <span className='infor-link'>Profile</span>
                </Link>
                <Link to='/profile' className='none-border-circle'>
                    <span className='infor-link'>Settings</span>
                </Link>
                <Link to='/profile' className='none-border-circle'>
                    <span className='infor-link'>Logout</span>
                </Link>
            </div>
            <div className="footer-infor">
            </div>
        </div>
    )
}