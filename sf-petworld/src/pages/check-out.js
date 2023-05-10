import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import BillingDetails from "../components/shop/BillingDetails";
import OrderSummary from "../components/shop/OrderSummary";
import Payment from "../components/shop/Payment";
import ShipingAddress from "../components/shop/ShipingAddress";
import Layout from "../layout/Layout";

function checOutPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Check Out" pageTitle="Check Out" />
      <div className="checkout-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <BillingDetails />
              <ShipingAddress />
            </div>
            <aside className="col-lg-5">
              <OrderSummary />
              <Payment />
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default checOutPage;
