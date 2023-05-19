
import {Link} from "react-router-dom";
import React from "react";

function TestPage() {

    return (
     <div className='info'>
         <div className="header-infor">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7v4Q4NzyvPUeP2yNEtp7xXzeyOoKgpWTOw&usqp=CAU" alt="" className="header-infor-image"/>
             <h1 className="header-infor-name">Nguyen Van Minh</h1>
         </div>
         <div className="content-infor">
            <Link to='/profile'>
                <p className='infor-link'>Your Profile</p>
            </Link>
             <Link to='/profile'>
                 <p className='infor-link'>Settings</p>
             </Link>
             <Link to='/profile'>
                 <p className='infor-link'>Log out</p>
             </Link>
         </div>
         <div className="footer-infor">
             
         </div>
     </div>
    );
}
export default TestPage;
