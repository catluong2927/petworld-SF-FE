import React from "react";
import BlogStandard from "../components/blog/BlogStandard";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
function BlogStandardPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
      <BlogStandard />
    </Layout>
  );
}

export default BlogStandardPage;
