import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import {ServicePackage, loaderPackages as packageLoader} from "./pages/ServicePackage";
import ServiceDetails, {loader} from "./pages/service-details";
import Shop from "./pages/shop";
import ShopDetail from "./pages/shop-details"
import Home1Service from "./components/service/Home1Service";
import Home from "./pages";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import CartPage from "./pages/cart";
import CheckOutPage from "./pages/check-out";
import {Order} from "./components/order/Order";

import Contact from "./pages/contact";
import Profile from "./pages/profile";
import Auth from "./hoc/Auth";
import FavoriteProduct from "./components/favoriteProduct/FavoriteProduct";
const router = createBrowserRouter([

  {path:  '/',children:[
      {index: true, element:<Home/>},
          {path:'service-packages', children:[
          {path: 'search/:name',id:'packages',  element: <ServicePackage/>},
          {path: ':packageId',id:'services',  element: <ServiceDetails/>},                                                     
          ]},
      {path: 'shop', element: <Shop/>},
      {path: 'favorite', element: <FavoriteProduct />},
      {path: 'shop-details/:id', element: <ShopDetail/>},
      {path: 'test',  element: <Home1Service/>},
      {path:'about', element:<AboutPage/>},
      {path:'login', element:<LoginPage/>},
      {path:'sign-up', element:<SignUpPage/>},
      {path:'cart', element:<Auth><CartPage/></Auth>},
      {path:'check-out', element:<Auth><CheckOutPage/></Auth>},
      {path:'order', element:<Auth><Order/></Auth>},
      {path:'contact', element:<Contact/>},
      {path:'profile', element:<Profile/>},
    ]},
    ]
)
function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
