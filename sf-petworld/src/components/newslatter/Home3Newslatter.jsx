import React from "react";

function Home3Newslatter() {
  return (
    <div className="home3-newsletter-area mb-120">
      <div className="newsletter-img">
        <img
          className="img-fluid"
          src="assets/images/bg/h3-newsletter-img.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="newsletter-wrap">
              <div className="section-title3 mb-40">
                <span>Get In Touch</span>
                <h2>Let’s Connect Our Newsletter</h2>
              </div>
              <form>
                <div className="form-inner">
                  <input type="text" placeholder="Type Your Email" />
                  <button type="submit">Connect</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Newslatter;
