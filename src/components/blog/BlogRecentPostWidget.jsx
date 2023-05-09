import {Link} from "react-router-dom";
import React from "react";

function BlogRecentPostWidget() {
  return (
    <div className="single-widgets widget_egns_recent_post mb-30">
      <div className="widget-title">
        <h3>Newest Posts</h3>
      </div>
      <div className="recent-post-wraper">
        <div className="widget-cnt mb-25">
          <div className="wi">
            <Link legacyBehavior href="/blog-details">
              <a>
                <img src="assets/images/blog/blog-sidebar-1.png" alt="image" />
              </a>
            </Link>
          </div>
          <div className="wc">
            <Link legacyBehavior href="/blog-grid">
              <a>July 18, 2022</a>
            </Link>
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a>Quisque laoreet Maecento facilisis tristique.</a>
              </Link>
            </h6>
          </div>
        </div>
        <div className="widget-cnt mb-25">
          <div className="wi">
            <Link legacyBehavior href="/blog-details">
              <a>
                <img src="assets/images/blog/blog-sidebar-2.png" alt="image" />
              </a>
            </Link>
          </div>
          <div className="wc">
            <Link legacyBehavior href="/blog-grid">
              <a>July 15, 2022</a>
            </Link>
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a>Etiam vel diam volutpatha pellentesque.</a>
              </Link>
            </h6>
          </div>
        </div>
        <div className="widget-cnt">
          <div className="wi">
            <Link legacyBehavior href="/blog-details.htm">
              <a>
                <img src="assets/images/blog/blog-sidebar-3.png" alt="image" />
              </a>
            </Link>
          </div>
          <div className="wc">
            <Link legacyBehavior href="/blog-grid">
              <a>July 14, 2022</a>
            </Link>
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a> Nunc finibus gravidato on porta. Nulla vitae.</a>
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogRecentPostWidget;
