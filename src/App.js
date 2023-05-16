import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import {ServicePackage, loaderPackages as packageLoader} from "./pages/ServicePackage";
import ServiceDetails, {loader as serviceLoader} from "./pages/service-details";
import Shop from "./pages/shop";
import ShopDetail from "./pages/shop-details"
import Home1Service from "./components/service/Home1Service";
import Home from "./pages";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";



const router = createBrowserRouter([
  {path:  '/',children:[
      {index: true, element:<Home/>},
          {path:'service-packages', children:[
          {path: 'search/:name',id:'packages', loader: packageLoader,  element: <ServicePackage/>},
          {path: ':packageId',id:'services', loader: serviceLoader,  element: <ServiceDetails/>},
          ]},
      {path: 'shop', element: <Shop/>},
      {path: 'shop-details/:id', element: <ShopDetail/>},
      {path: 'test',  element: <Home1Service/>},
      {path:'about', element:<AboutPage/>},
      {path:'login', element:<LoginPage/>},
      {path:'sign-up', element:<SignUpPage/>},
    ]},
    ]
)
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
