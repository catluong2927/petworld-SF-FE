import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import {ServicePackage, loaderPackages as packageLoader} from "./pages/ServicePackage";
import ServiceDetails, {loader} from "./pages/service-details";
import Shop from "./pages/shop";
import ShopDetail from "./pages/shop-details"
import Home1Service from "./components/service/Home1Service";
import Home from "./pages";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import CloudinaryUploader from "./components/uploadFile/imageUpload";
import {useState} from "react";
import {tokenLoader} from "./utilities/author";
import CartPage from "./pages/cart";
import CheckOutPage from "./pages/check-out";
import {Order} from "./components/order/Order";
import ErrorPage from "./pages/404";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import Auth from "./hoc/Auth";
import ChangPassword from "./pages/updatepassword";
import FavoriteProduct from "./components/favoriteProduct/FavoriteProduct";
import ProfileSection from "./components/userProfile/UserProfile";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UpdateInfor from "./pages/updateimage";
import UpdateImage from "./pages/updateimage";



const router = createBrowserRouter([
  {path:  '/',children:[
      {index: true, element:<Home/>},
          {path:'service-packages', children:[
          {path: 'search/:name',id:'packages',  element: <ServicePackage/>},
          {path: ':packageId',id:'services',  element: <ServiceDetails/>},                                                     
          ]},
      {path: 'shop', element: <Shop/>},
      {path: 'shop-details/:id', element: <ShopDetail/>},
      {path: 'test',  element: <Home1Service/>},
      {path:'about', element:<AboutPage/>},
      {path:'login', element:<LoginPage/>},
      {path:'sign-up', element:<SignUpPage/>},
      {path:'cart', element:<Auth><CartPage/></Auth>},
      {path:'check-out', element:<Auth><CheckOutPage/></Auth>},
      {path:'order', element:<Auth><Order/></Auth>},
      {path:'contact', element:<Contact/>},
      // {path:'profile', element:<Profile/>},
      {path:'updatePassword', element:<ChangPassword/>},
      {path:'favorite-products',element:<FavoriteProduct/>},
      {path:'profile',element:<ProfileSection/>},
      {path:'update-image',element:<UpdateImage/>},
    ]},
    ]
)
function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
