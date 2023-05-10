import {Link} from "react-router-dom";
import React from "react";
import blogData from "../../data/blog.json";
import BlogCategoryWidget from "./BlogCategoryWidget";
import BlogPagination from "./BlogPagination";
import BlogRecentPostWidget from "./BlogRecentPostWidget";
import BlogSocialWidget from "./BlogSocialWidget";
import BlogTagWidget from "./BlogTagWidget";
import SearchWidget from "./SearchWidget";
function BlogStandard() {
  return (
    <div className="blog-grid-pages pt-120 mb-120">
      <div className="container">
        <div className="row g-lg-4 gy-5 justify-content-center mb-70">
          <div className="col-lg-8">
            {blogData.slice(0, 3).map((element) => {
              const {
                id,
                blogDescription,
                postAuthor,
                standardTitle,
                date,
                category,
                standardImage,
              } = element;
              return (
                <div key={id} className="blog-st-card mb-60">
                  <div className="blog-img">
                    <img className="img-fluid" src={standardImage} alt="" />
                    <div className="category">
                      <Link legacyBehavior href="/blog-grid">
                        <a>{category}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <ul>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>{date}</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>{postAuthor}</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>{standardTitle}</a>
                      </Link>
                    </h4>
                    <p>{blogDescription}</p>
                    <div className="more-btn">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          <span>Re</span>ad More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <BlogPagination />
          </div>

          <div className="col-lg-4">
            <div className="widget-area">
              <SearchWidget />
              <BlogCategoryWidget />
              <BlogRecentPostWidget />
              <BlogTagWidget />
              <BlogSocialWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogStandard;
