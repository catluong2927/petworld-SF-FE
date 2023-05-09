import {Link} from "react-router-dom";
import React from "react";

function BlogTagWidget() {
  return (
    <div className="single-widgets widget_egns_tag mb-30">
      <div className="widget-title">
        <h3>All Tag</h3>
      </div>
      <p className="wp-block-tag-cloud">
        <Link legacyBehavior href="/blog-grid">
          <a>Grooming</a>
        </Link>
        <Link legacyBehavior href="/blog-grid">
          <a>Walking</a>
        </Link>
        <Link legacyBehavior href="/blog-grid">
          <a>Pet Care</a>
        </Link>
        <Link legacyBehavior href="/blog-grid">
          <a>Daycare</a>
        </Link>
        <Link legacyBehavior href="/blog-grid">
          <a>Bording</a>
        </Link>
        <Link legacyBehavior href="/blog-grid">
          <a>Madical</a>
        </Link>
        <Link legacyBehavior href="/blog-grid">
          <a>Vakcine</a>
        </Link>
        <Link legacyBehavior href="/blog-grid">
          <a>Education</a>
        </Link>
        <Link legacyBehavior href="/blog-grid">
          <a>Services</a>
        </Link>
      </p>
    </div>
  );
}

export default BlogTagWidget;
