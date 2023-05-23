import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import {ServicePackage} from "./pages/ServicePackage";
import ServiceDetails  from "./pages/service-details";
import Shop from "./pages/shop";
import ShopDetail from "./pages/shop-details"
import Home from "./pages";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import {useState} from "react";
import {tokenLoader} from "./utilities/author";
import CartPage from "./pages/cart";
import CheckOutPage from "./pages/check-out";
import {Order} from "./components/order/Order";
import ErrorPage from "./pages/404";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import Auth from "./hoc/Auth";



const router = createBrowserRouter([

  {path:  '/',errorElement: <ErrorPage/>, loader: tokenLoader, id: 'token',children:[
      {index: true, element:<Home/>},
          {path:'service-packages', children:[
          {path: 'search/:name',id:'packages',  element: <ServicePackage/>},
          {path: ':packageId',id:'services',  element: <ServiceDetails/>},
          ]},
      {path: 'shop', element: <Shop/>},
      {path: 'shop-details/:id', element: <ShopDetail/>},
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
    const [token, setToken] = useState({})
  return (
        <RouterProvider router={router} />
  );
}

export default App;
