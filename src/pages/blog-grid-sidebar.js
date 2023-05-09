import React from "react";
import BlogGridSidebar from "../components/blog/BlogGridSidebar";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function blogGridSidebarPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Grid Sidebar" pageTitle="Blog Grid Sidebar" />
      <BlogGridSidebar />
    </Layout>
  );
}

export default blogGridSidebarPage;
