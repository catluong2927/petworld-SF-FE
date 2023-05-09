import {Link} from "react-router-dom";
function Footer3() {
  return (
      <footer className="style2">
        <div className="container">
          <div className="row pt-80 pb-80 justify-content-center">
            <div className="col-lg-5 col-md-12">
              <div className="footer-widget">
                <div className="footer-icon">
                  <img src="assets/images/header2-logo.svg" alt="" />
                </div>
                <div className="widget-title">
                  <h2>
                    want <span>to Take</span>
                    <br />
                    your pet Food, <span>our Shop</span>?
                  </h2>
                </div>
                <div className="footer-btn">
                  <Link legacyBehavior to="/shop">
                    <a className="primary-btn6">Shop Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <div className="menu-container">
                  <ul>
                    <li>
                      <Link legacyBehavior to="/about">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior to="/shop">
                        <a>New Product</a>
                      </Link>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">Online Gift Card</a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">Bundle &amp; Save</a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">Pet Store Location</a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">Best Seller</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget one ">
                <div className="widget-title">
                  <h3>My Account</h3>
                </div>
                <div className="menu-container">
                  <ul>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">My Profile</a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">My Wish List</a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">Order Tracking</a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">My Order History</a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">Shoping Info</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget one mb-0">
                <div className="widget-title">
                  <h3>Install app</h3>
                  <p>Form App Store or Google Play</p>
                </div>
                <div className="download-link">
                  <ul>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">
                        <img src="assets/images/icon/google-play.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">
                        <img src="assets/images/icon/app-store.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <p>Secured Paynebt Gateways</p>
                <div className="payment-mathord">
                  <ul>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">
                        <img src="assets/images/icon/visa.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">
                        <img src="assets/images/icon/master-card.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">
                        <img src="assets/images/icon/amarican-ex.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="src/components/footer/Footer3#Footer3.jsx">
                        <img src="assets/images/icon/maestro.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-top align-items-center">
            <div className="col-lg-6">
              <div className="copyright-area">
                <p>
                  © 2023 Scooby is Proudly Powered by <a href="src/components/footer/Footer3#Footer3.jsx">Egens Lab.</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-md-end justify-content-center">
              <div className="social-area">
                <ul>
                  <li>
                    <a href="src/components/footer/Footer3.jsx">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="src/components/footer/Footer3.jsx">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="src/components/footer/Footer3.jsx">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="src/components/footer/Footer3.jsx">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer3;