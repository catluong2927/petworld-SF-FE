import React, { useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import BillingDetails from "../components/shop/BillingDetails";
import OrderSummary from "../components/shop/OrderSummary";
import Layout from "../layout/Layout";

function ChecOutPage() {
  const [items, setItems] = useState([]);

  return (
    <Layout>
      <Breadcrumb pageName="Check Out" pageTitle="Check Out" />
      <div className="checkout-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <BillingDetails onGetData={items} />
            </div>
            <aside className="col-lg-5">
              <OrderSummary onSendData={setItems} />
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ChecOutPage;
