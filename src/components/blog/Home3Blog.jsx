import {Link} from "react-router-dom";
import React from "react";

function Home3Blog() {
  return (
    <div className="home3-blog-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="section-title3">
              <h2>
                <img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" />
                <span>Our Latest Articles</span>
                <img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" />
              </h2>
            </div>
            <div className="h3-view-btn d-md-flex d-none">
              <Link legacyBehavior href="/blog-grid">
                <a>
                  {" "}
                  View All Blog
                  <img src="assets/images/icon/haf-button-2.svg" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-card3">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog7.png"
                  alt=""
                />
              </div>
              <div className="bolg-content">
                <div className="cetagoty">
                  <Link legacyBehavior href="/blog-grid">
                    <a>Dog bording</a>
                  </Link>
                </div>
                <div className="blog-meta">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>Angunel John</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>August 13, 2022</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      lobortis pharetra In necat boi risus osan that one far
                      fox.
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-card3">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog8.png"
                  alt=""
                />
              </div>
              <div className="bolg-content">
                <div className="cetagoty">
                  <Link legacyBehavior href="/blog-grid">
                    <a>Dog bording</a>
                  </Link>
                </div>
                <div className="blog-meta">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>Angunel John</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>August 13, 2022</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      {" "}
                      Vestibulum egetrisus ut est Proina ullamcorper aliquet.
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-card3">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog9.png"
                  alt=""
                />
              </div>
              <div className="bolg-content">
                <div className="cetagoty">
                  <Link legacyBehavior href="/blog-grid">
                    <a>Dog bording</a>
                  </Link>
                </div>
                <div className="blog-meta">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>Angunel John</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>August 13, 2022</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>Mauris semper mauris eget aliquet dictum diam mauris.</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-md-none d-block pt-30">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="h3-view-btn">
              <Link legacyBehavior href="/shop">
                <a>
                  View All Product
                  <img src="assets/images/icon/haf-button-2.svg" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Blog;
