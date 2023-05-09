import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function Contact() {
  return (
    <Layout>
      <Breadcrumb pageName="Contact Us" pageTitle="Contact Us" />
      <>
        <div>
          <div className="contact-pages pt-120 mb-120">
            <div className="container">
              <div className="row align-items-center g-lg-4 gy-5">
                <div className="col-lg-5">
                  <div className="contact-left">
                    <div className="hotline mb-80">
                      <h3>Call Us Now</h3>
                      <div className="icon">
                        <img src="assets/images/icon/phone-icon4.svg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <a href="tel:+012-3456-789102">+012-3456-789102</a>
                        </h6>
                        <h6>
                          <a href="tel:+012-3456-789102">+012-3456-789102</a>
                        </h6>
                      </div>
                    </div>
                    <div className="location">
                      <h3>Call Us Now</h3>
                      <div className="icon">
                        <img src="assets/images/icon/location4.svg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <a href="#">
                            168/170, Ave 01, Mirpur,
                            <br />
                            Dhaka, Bangladesh
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-form">
                    <h2>Have Any Questions</h2>
                    <form>
                      <div className="row">
                        <div className="col-lg-12 mb-40">
                          <div className="form-inner">
                            <input type="text" placeholder="Enter your name" />
                          </div>
                        </div>
                        <div className="col-lg-6 mb-40">
                          <div className="form-inner">
                            <input type="text" placeholder="Enter your email" />
                          </div>
                        </div>
                        <div className="col-lg-6 mb-40">
                          <div className="form-inner">
                            <input type="text" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-lg-12 mb-40">
                          <div className="form-inner">
                            <textarea
                              placeholder="Your message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-inner">
                            <button className="primary-btn1">
                              Send Message <i className="bi bi-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="location-map">
            <div className="vector">
              <img src="assets/images/bg/map-vector.png" alt="" />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48330.162702269045!2d-74.29798882771155!3d40.792034138683825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ab00d85ee855%3A0x93a15ba40269dd0!2sWest%20Orange%2C%20NJ%2007052%2C%20USA!5e0!3m2!1sen!2sbd!4v1658243800106!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Contact;
