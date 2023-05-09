import React from "react";

function BlogSocialWidget() {
  return (
    <div className="single-widgets widget_egns_social">
      <div className="widget-title">
        <h3>Social</h3>
      </div>
      <ul className="social-link d-flex align-items-center">
        <li>
          <a href="https://www.facebook.com/">
            <i className="bx bxl-facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <i className="bx bxl-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/">
            <i className="bx bxl-pinterest-alt" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="bx bxl-instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BlogSocialWidget;
