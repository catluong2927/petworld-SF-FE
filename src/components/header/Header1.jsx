import {Link, useLocation} from "react-router-dom";
import React, {useEffect, useReducer, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {UserInfor} from "../../pages/userInfor";
/*---------Using reducer mange the active or inactive menu----------*/
const initialState = {
    activeMenu: "",
    mobileMenuState: false,
    navState: false,
    scrollY: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case "home":
            return {...state, activeMenu: "home"};
        case "blog":
            return {...state, activeMenu: "blog"};
        case "shop":
            return {...state, activeMenu: "shop"};
        case "services":
            return {...state, activeMenu: "services"};
        case "pages":
            return {...state, activeMenu: "pages"};
        case "mobileMenu":
            return {...state, mobileMenuState: action.isMobileMenu};
        case "setScrollY":
            return {...state, scrollY: action.payload};
        default:
            throw new Error();
    }
}

function Header1() {
    const isLogin = useSelector((state) => state.auth.login?.currentUser);
    // const [isEdit, setIsEdit]= useState(false);
    const edit = useSelector((state) => state.user.image.isUpdated);
    const currentRoute = useLocation().pathname;
    const [state, dispatch] = useReducer(reducer, initialState);
    const headerRef = useRef(null);
    const [user, setUser] = useState({})
    const [avatar, setAvatar] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const handleScroll = () => {
        const {scrollY} = window;
        dispatch({type: "setScrollY", payload: scrollY});
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if(isLogin && !edit){
            console.log(1)
            setUser(isLogin.userDtoResponse)
            setAvatar(isLogin.userDtoResponse.avatar);
            setNewAvatar('')
            console.log(2);
        }
    }, [isLogin])
    useEffect( () => {

        if (edit != '') {
            console.log(3)
            setNewAvatar(edit);
            setAvatar('');
            console.log(4)
        }

    }, [edit])
    console.log(newAvatar)
    return (
        <>
            <div className="top-bar">
                <div className="container-lg container-fluid ">
                    <div className="row">
                        <div
                            className="col-lg-12 d-flex align-items-center justify-content-md-between justify-content-center">
                            <div className="social-area">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <i className="bx bxl-facebook"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/">
                                            <i className="bx bxl-twitter"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/">
                                            <i className="bx bxl-pinterest-alt"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/">
                                            <i className="bx bxl-instagram"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="opening-time text-center">
                                <p>
                                    Opening Hours
                                    <br/>
                                    <span>Mon - Sat 9.00 - 19.00</span>
                                </p>
                            </div>
                            <div className="contact-number">
                                <a href="tel:+1(541)754-3020">
                                    +1 (541) 754-3010{" "}
                                    <img src="/assets/images/icon/support.svg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header
                ref={headerRef}
                className={
                    state.scrollY > 150
                        ? "header-area style-1 sticky"
                        : "header-area style-1"
                }
            >
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="header-logo">
                        <Link to="/">
                            <p>
                                <img
                                    alt="image"
                                    className="img-fluid"
                                    src="/assets/images/header1-logo.svg"
                                />
                            </p>
                        </Link>
                    </div>
                    <div
                        className={
                            state.mobileMenuState === true
                                ? "main-menu show-menu"
                                : "main-menu"
                        }
                    >
                        <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                            <div className="mobile-logo-wrap">
                                <Link to="/">
                                    <p>
                                        {" "}
                                        <img alt="image" src="/assets/images/header1-logo.svg"/>
                                    </p>
                                </Link>
                            </div>
                            <div className="menu-close-btn">
                                <i
                                    className="bi bi-x-lg text-white"
                                    onClick={() =>
                                        dispatch({type: "mobileMenu", isMobileMenu: false})
                                    }
                                />
                            </div>
                        </div>
                        <ul className="menu-list">
                            <li>
                                <Link to="/">
                                    <p className='menu-list-navigation'>Home</p>
                                </Link>
                            </li>
                            <li className={currentRoute === "/about" ? "active" : ""}>
                                <a href="/about">
                                    <p className='menu-list-navigation'>About</p>
                                </a>
                            </li>
                            <li className="menu-item-has-children">
                                <p className='menu-list-navigation-has-children'>SERVICES</p>
                                <i
                                    className="bi bi-plus dropdown-icon"
                                    onClick={() => dispatch({type: "services"})}
                                />
                                <ul
                                    className={
                                        state.activeMenu === "services"
                                            ? "sub-menu  d-block"
                                            : "sub-menu d-xl-block d-none"
                                    }
                                >
                                    <li>
                                        <a href="/service-packages/search/Day care">
                                            <p className={`menu-item-children ${currentRoute === "/service-packages/search/Day Care" ? "active" : ""}`}>
                                                Day Care
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-packages/search/Walking Service">
                                            <p className='menu-item-children'>Walking Service</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-packages/search/Pet's Sap">
                                            <p className='menu-item-children'>'Pet's Sapa'</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-packages/search/Training Program">
                                            <p className='menu-item-children'>Training Program</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <p className='menu-list-navigation-has-children'>PAGES</p>
                                <i
                                    className="bi bi-plus dropdown-icon"
                                    onClick={() => dispatch({type: "pages"})}
                                />
                                <ul
                                    className={
                                        state.activeMenu === "pages"
                                            ? "sub-menu  d-block"
                                            : "sub-menu d-xl-block d-none"
                                    }
                                >
                                    <li>
                                        <Link to="/order">
                                            <p className={`menu-item-children ${currentRoute === "/pricing-plan" ? "active" : ""}`}>
                                                Your order
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/login">
                                            <p className={`menu-item-children ${currentRoute === "/login" ? "active" : ""}`}>
                                                Login
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sign-up">
                                            <p className={`menu-item-children ${currentRoute === "/sign-up" ? "active" : ""}`}>
                                                sign up
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <p className='menu-list-navigation-has-children'>SHOPPING</p>
                                <i
                                    className="bi bi-plus dropdown-icon"
                                    onClick={() => dispatch({type: "shop"})}
                                />
                                <ul
                                    className={
                                        state.activeMenu === "shop"
                                            ? "sub-menu  d-block"
                                            : "sub-menu d-xl-block d-none"
                                    }
                                >
                                    <li>
                                        <Link to="/shop">
                                            <p className={`menu-item-children ${currentRoute === "/shop" ? "active" : ""}`}>
                                                products
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cart">
                                            <p className={`menu-item-children ${currentRoute === "/cart" ? "active" : ""}`}>
                                                Cart
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/check-out">
                                            <p className={`menu-item-children ${currentRoute === "/check-out" ? "active" : ""}`}>
                                                Check Out
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={currentRoute === "/contact" ? "active" : ""}>
                                <Link to="/contact">
                                    <p className='menu-list-navigation'>Contact</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="for-mobile-menu d-lg-none d-block">
                            <div className="hotline mb-5">
                                <div className="hotline-info">
                                    <span>Click To Call</span>
                                    <h6>
                                        <a href="tel:+1(541)754-3010">+1 (541) 754-3010</a>
                                    </h6>
                                </div>
                            </div>
                            <ul className="social-link mb-5">
                                <li>
                                    <Link to="/">
                                        <svg
                                            width={14}
                                            height={13}
                                            viewBox="0 0 14 13"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.4147 1.51371C11.0037 0.302997 8.92573 0.534835 7.61736 1.87434L7.12993 2.38954L6.61684 1.87434C5.33413 0.534835 3.23047 0.302997 1.81948 1.51371C0.203258 2.90473 0.126295 5.37767 1.56294 6.87174L6.53988 12.0237C6.84773 12.3586 7.38647 12.3586 7.69433 12.0237L12.6713 6.87174C14.1079 5.37767 14.0309 2.90473 12.4147 1.51371Z"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <svg
                                            width={16}
                                            height={13}
                                            viewBox="0 0 16 13"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.6365 5.46266C15.6365 5.12721 15.3541 4.84336 15.0202 4.84336H13.274L10.5262 1.07601C10.2694 0.688956 9.75576 0.611544 9.39624 0.895386C9.01104 1.15342 8.934 1.6695 9.21648 2.03075L11.2452 4.84336H5.21036L7.2391 2.03075C7.52158 1.6695 7.44454 1.15342 7.05934 0.895386C6.69982 0.611544 6.18621 0.688956 5.92941 1.07601L3.18163 4.84336H1.46105C1.10153 4.84336 0.844727 5.12721 0.844727 5.46266V5.87552C0.844727 6.23677 1.10153 6.49481 1.46105 6.49481H1.66649L2.33418 11.2169C2.41122 11.8362 2.92482 12.2749 3.54115 12.2749H12.9144C13.5308 12.2749 14.0444 11.8362 14.1214 11.2169L14.8148 6.49481H15.0202C15.3541 6.49481 15.6365 6.23677 15.6365 5.87552V5.46266ZM8.85696 10.0041C8.85696 10.3654 8.57447 10.6234 8.24063 10.6234C7.88111 10.6234 7.6243 10.3654 7.6243 10.0041V7.1141C7.6243 6.77865 7.88111 6.49481 8.24063 6.49481C8.57447 6.49481 8.85696 6.77865 8.85696 7.1141V10.0041ZM11.7331 10.0041C11.7331 10.3654 11.4507 10.6234 11.1168 10.6234C10.7573 10.6234 10.5005 10.3654 10.5005 10.0041V7.1141C10.5005 6.77865 10.7573 6.49481 11.1168 6.49481C11.4507 6.49481 11.7331 6.77865 11.7331 7.1141V10.0041ZM5.98077 10.0041C5.98077 10.3654 5.69829 10.6234 5.36445 10.6234C5.00492 10.6234 4.74812 10.3654 4.74812 10.0041V7.1141C4.74812 6.77865 5.00492 6.49481 5.36445 6.49481C5.69829 6.49481 5.98077 6.77865 5.98077 7.1141V10.0041Z"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <svg
                                            width={15}
                                            height={15}
                                            viewBox="0 0 15 15"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1585_341)">
                                                <path
                                                    d="M6.98716 0.938832C6.28609 1.04711 5.65949 1.38227 5.169 1.90563C4.62972 2.48055 4.3498 3.14571 4.31128 3.94235C4.25735 5.0561 4.80177 6.12086 5.74167 6.73703C6.20391 7.04125 6.64818 7.19594 7.18747 7.23977C8.18643 7.31711 9.03901 7.00258 9.72724 6.29875C10.2742 5.74188 10.5516 5.13344 10.6183 4.35743C10.7108 3.32102 10.3205 2.3568 9.54234 1.68133C9.03901 1.24821 8.57676 1.03164 7.93733 0.938832C7.62916 0.895004 7.26964 0.892426 6.98716 0.938832Z"/>
                                                <path
                                                    d="M4.65531 7.29655C3.49456 7.4203 2.68821 8.25561 2.31327 9.7303C2.06418 10.7126 1.99998 11.8933 2.15919 12.5405C2.29016 13.0587 2.71902 13.5846 3.21465 13.8373C3.43807 13.9507 3.75907 14.0435 4.02871 14.0744C4.18793 14.0951 5.40004 14.1002 7.71896 14.0951L11.1729 14.0873L11.3912 14.0255C12.2027 13.8037 12.7574 13.2572 12.9603 12.4889C13.0656 12.0893 13.0527 11.1354 12.9295 10.3826C12.6598 8.70678 11.9767 7.70131 10.8956 7.38678C10.6491 7.31459 10.2074 7.26045 10.0764 7.28623C9.95057 7.30944 9.77594 7.40225 9.38047 7.65749C8.95931 7.93077 8.90025 7.9617 8.58438 8.0803C8.21972 8.21694 7.91926 8.27624 7.56745 8.27624C7.20792 8.27624 6.93058 8.22467 6.56592 8.09577C6.2218 7.97202 6.20639 7.96428 5.66711 7.62139C5.38463 7.44092 5.17405 7.32491 5.09187 7.3017C4.94806 7.26561 4.94806 7.26561 4.65531 7.29655Z"/>
                                            </g>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                            <form className="mobile-menu-form">
                                <div className="input-with-btn d-flex flex-column">
                                    <input type="text" placeholder="Search here..."/>
                                    <button className="primary-btn1" type="submit">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="nav-right d-flex jsutify-content-end align-items-center">
                        <ul>
                            <li className="search-btn">
                                <Link to="/http://192.168.4.228:8081/">
                                    <svg width={15} height={15} viewBox="0 0 15 15">
                                        <path d="M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243
			                                    c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252
			                                    C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062
			                                    c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15
			                                    s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15
			                                    s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z"/>
                                    </svg>
                                </Link>
                                <form className="nav__search-form">
                                    <input type="text" placeholder="Search keyword"/>
                                    <button type="submit">
                                        <svg width={15} height={15} viewBox="0 0 15 15">
                                            <path
                                                d="M13.8914 12.3212L11.3164 9.74312C11.1877 9.63999 11.0332 9.56265 10.8787 9.56265H10.4667C11.1619 8.6603 11.5997 7.52593 11.5997 6.26265C11.5997 3.32358 9.1792 0.900146 6.2437 0.900146C3.28245 0.900146 0.887695 3.32358 0.887695 6.26265C0.887695 9.22749 3.28245 11.6251 6.2437 11.6251C7.4797 11.6251 8.6127 11.2126 9.5397 10.4908V10.9291C9.5397 11.0837 9.5912 11.2384 9.71995 11.3673L12.2692 13.9197C12.5267 14.1775 12.9129 14.1775 13.1447 13.9197L13.8657 13.1978C14.1232 12.9658 14.1232 12.5791 13.8914 12.3212ZM6.2437 9.56265C4.41545 9.56265 2.9477 8.09312 2.9477 6.26265C2.9477 4.45796 4.41545 2.96265 6.2437 2.96265C8.0462 2.96265 9.5397 4.45796 9.5397 6.26265C9.5397 8.09312 8.0462 9.56265 6.2437 9.56265Z"/>
                                        </svg>
                                    </button>
                                </form>
                            </li>
                            <li>
                                <a href="/favorite-products">
                                    <svg
                                        width={14}
                                        height={13}
                                        viewBox="0 0 14 13"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.4147 1.51371C11.0037 0.302997 8.92573 0.534835 7.61736 1.87434L7.12993 2.38954L6.61684 1.87434C5.33413 0.534835 3.23047 0.302997 1.81948 1.51371C0.203258 2.90473 0.126295 5.37767 1.56294 6.87174L6.53988 12.0237C6.84773 12.3586 7.38647 12.3586 7.69433 12.0237L12.6713 6.87174C14.1079 5.37767 14.0309 2.90473 12.4147 1.51371Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <svg
                                        width={16}
                                        height={13}
                                        viewBox="0 0 16 13"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.6365 5.46266C15.6365 5.12721 15.3541 4.84336 15.0202 4.84336H13.274L10.5262 1.07601C10.2694 0.688956 9.75576 0.611544 9.39624 0.895386C9.01104 1.15342 8.934 1.6695 9.21648 2.03075L11.2452 4.84336H5.21036L7.2391 2.03075C7.52158 1.6695 7.44454 1.15342 7.05934 0.895386C6.69982 0.611544 6.18621 0.688956 5.92941 1.07601L3.18163 4.84336H1.46105C1.10153 4.84336 0.844727 5.12721 0.844727 5.46266V5.87552C0.844727 6.23677 1.10153 6.49481 1.46105 6.49481H1.66649L2.33418 11.2169C2.41122 11.8362 2.92482 12.2749 3.54115 12.2749H12.9144C13.5308 12.2749 14.0444 11.8362 14.1214 11.2169L14.8148 6.49481H15.0202C15.3541 6.49481 15.6365 6.23677 15.6365 5.87552V5.46266ZM8.85696 10.0041C8.85696 10.3654 8.57447 10.6234 8.24063 10.6234C7.88111 10.6234 7.6243 10.3654 7.6243 10.0041V7.1141C7.6243 6.77865 7.88111 6.49481 8.24063 6.49481C8.57447 6.49481 8.85696 6.77865 8.85696 7.1141V10.0041ZM11.7331 10.0041C11.7331 10.3654 11.4507 10.6234 11.1168 10.6234C10.7573 10.6234 10.5005 10.3654 10.5005 10.0041V7.1141C10.5005 6.77865 10.7573 6.49481 11.1168 6.49481C11.4507 6.49481 11.7331 6.77865 11.7331 7.1141V10.0041ZM5.98077 10.0041C5.98077 10.3654 5.69829 10.6234 5.36445 10.6234C5.00492 10.6234 4.74812 10.3654 4.74812 10.0041V7.1141C4.74812 6.77865 5.00492 6.49481 5.36445 6.49481C5.69829 6.49481 5.98077 6.77865 5.98077 7.1141V10.0041Z"/>
                                    </svg>
                                </Link>
                            </li>
                            {
                                isLogin ?
                                    newAvatar ?
                                        <li className="user-profile-has--hover">
                                            <img className='user-avatar'
                                                 src={newAvatar}
                                            />
                                            <UserInfor/>
                                        </li> :
                                        <li className="user-profile-has--hover">
                                            <img className='user-avatar'
                                                 src={avatar}
                                            />
                                            <UserInfor/>
                                        </li>
                                    :
                                    <li>
                                        <Link to="/login">
                                            <svg
                                                width={15}
                                                height={15}
                                                viewBox="0 0 15 15"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1585_341)">
                                                    <path
                                                        d="M6.98716 0.938832C6.28609 1.04711 5.65949 1.38227 5.169 1.90563C4.62972 2.48055 4.3498 3.14571 4.31128 3.94235C4.25735 5.0561 4.80177 6.12086 5.74167 6.73703C6.20391 7.04125 6.64818 7.19594 7.18747 7.23977C8.18643 7.31711 9.03901 7.00258 9.72724 6.29875C10.2742 5.74188 10.5516 5.13344 10.6183 4.35743C10.7108 3.32102 10.3205 2.3568 9.54234 1.68133C9.03901 1.24821 8.57676 1.03164 7.93733 0.938832C7.62916 0.895004 7.26964 0.892426 6.98716 0.938832Z"/>
                                                    <path
                                                        d="M4.65531 7.29655C3.49456 7.4203 2.68821 8.25561 2.31327 9.7303C2.06418 10.7126 1.99998 11.8933 2.15919 12.5405C2.29016 13.0587 2.71902 13.5846 3.21465 13.8373C3.43807 13.9507 3.75907 14.0435 4.02871 14.0744C4.18793 14.0951 5.40004 14.1002 7.71896 14.0951L11.1729 14.0873L11.3912 14.0255C12.2027 13.8037 12.7574 13.2572 12.9603 12.4889C13.0656 12.0893 13.0527 11.1354 12.9295 10.3826C12.6598 8.70678 11.9767 7.70131 10.8956 7.38678C10.6491 7.31459 10.2074 7.26045 10.0764 7.28623C9.95057 7.30944 9.77594 7.40225 9.38047 7.65749C8.95931 7.93077 8.90025 7.9617 8.58438 8.0803C8.21972 8.21694 7.91926 8.27624 7.56745 8.27624C7.20792 8.27624 6.93058 8.22467 6.56592 8.09577C6.2218 7.97202 6.20639 7.96428 5.66711 7.62139C5.38463 7.44092 5.17405 7.32491 5.09187 7.3017C4.94806 7.26561 4.94806 7.26561 4.65531 7.29655Z"/>
                                                </g>
                                            </svg>
                                        </Link>
                                    </li>
                            }
                        </ul>
                        <div className="sidebar-button mobile-menu-btn">
                            <i
                                className="bi bi-list"
                                onClick={() =>
                                    dispatch({type: "mobileMenu", isMobileMenu: true})
                                }
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header1;
