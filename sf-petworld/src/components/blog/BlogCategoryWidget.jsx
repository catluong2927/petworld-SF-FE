import {Link} from "react-router-dom";
import React from "react";

function BlogCategoryWidget() {
  return (
    <div className="single-widgets widget_egns_categoris mb-30">
      <div className="widget-title">
        <h3>Category</h3>
      </div>
      <ul className="wp-block-categoris-cloud">
        <li>
          <Link legacyBehavior to="/blog-grid">
            <a>
              <span>Pet Grooming</span>
              <span>
                <span className="number-of-categoris">(30)</span>
                <i className="bi bi-arrow-right-short" />
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior to="/blog-grid">
            <a>
              <span>Medical Care</span>
              <span>
                <span className="number-of-categoris">(18)</span>
                <i className="bi bi-arrow-right-short" />
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior to="/blog-grid">
            <a>
              <span>Pet Bording</span>
              <span>
                <span className="number-of-categoris">(21)</span>
                <i className="bi bi-arrow-right-short" />
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior to="/blog-grid">
            <a>
              <span>Pet Daycare</span>
              <span>
                <span className="number-of-categoris">(25)</span>
                <i className="bi bi-arrow-right-short" />
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior to="/blog-grid">
            <a>
              <span>Pet Walking</span>
              <span>
                <span className="number-of-categoris">(29)</span>
                <i className="bi bi-arrow-right-short" />
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior to="/blog-grid">
            <a>
              <span>Education Pet</span>
              <span>
                <span className="number-of-categoris">(31)</span>
                <i className="bi bi-arrow-right-short" />
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BlogCategoryWidget;
