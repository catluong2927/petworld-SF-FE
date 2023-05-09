import React from "react";
import BlogGrid from "../components/blog/BlogGrid";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
function blogGridPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Grid" pageTitle="Blog Grid" />
      <BlogGrid />
    </Layout>
  );
}

export default blogGridPage;
