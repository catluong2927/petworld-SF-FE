import {Link} from "react-router-dom";
import React from "react";
import sidebarData from "../../data/blog.json";
import BlogCategoryWidget from "./BlogCategoryWidget";
import BlogPagination from "./BlogPagination";
import BlogRecentPostWidget from "./BlogRecentPostWidget";
import BlogSocialWidget from "./BlogSocialWidget";
import BlogTagWidget from "./BlogTagWidget";
import SearchWidget from "./SearchWidget";
function BlogGridSidebar() {
  return (
    <>
      <div className="blog-grid-pages pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-8">
              <div className="row g-lg-4 gy-5 justify-content-center mb-70">
                {sidebarData.slice(0, 8).map((elements) => {
                  const { id, image, title, date, category } = elements;
                  return (
                    <div key={id} className="col-lg-6 col-md-6 col-sm-10">
                      <div className="h1-blog-card">
                        <div className="blog-img">
                          <img className="img-fluid" src={image} alt="" />
                          <div className="category">
                            <Link legacyBehavior to="/blog-grid">
                              <a>{category}</a>
                            </Link>
                          </div>
                        </div>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <Link legacyBehavior to="/blog-grid">
                              <a>{date}</a>
                            </Link>
                          </div>
                          <h4>
                            <Link legacyBehavior to="/blog-details">
                              <a>{title}</a>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
    </>
  );
}

export default BlogGridSidebar;
