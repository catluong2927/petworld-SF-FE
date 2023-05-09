import {Link} from "react-router-dom";
import React from "react";

function Home2Blog() {
  return (
    <div className="h2-blog-area mb-120">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-11">
            <div className="section-title2 text-center">
              <h2>Our Newest blogs</h2>
            </div>
          </div>
        </div>
        <div className="row g-lg-4 gy-5 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-card-2">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog4.png"
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>August 10, 2022</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>Grooming</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      {" "}
                      Donec venenatis exid nibah goramt iaculisoni or Clonal
                      interdum.
                    </a>
                  </Link>
                </h4>
                <div className="more-btn">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      {" "}
                      <span>Re</span>ad More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-card-2">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog5.png"
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>August 12, 2022</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>Grooming</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Cras a mattis sapien Duis efficituroi mollis enim dictum.
                    </a>
                  </Link>
                </h4>
                <div className="more-btn">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      {" "}
                      <span>Re</span>ad More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-card-2">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog6.png"
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>August 14, 2022</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>Grooming</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      {" "}
                      Etiam fringilla consectetur nullaqul molestie neque
                      volutpat.
                    </a>
                  </Link>
                </h4>
                <div className="more-btn">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <span>Re</span>ad More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 pt-30 d-flex justify-content-center">
            <div className="view-details-btn">
              <Link legacyBehavior href="/blog-grid">
                <a className="primary-btn2 btn-lg">View All Blog</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2Blog;
