
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import {ServicePackage, loaderPackages as packageLoader} from "./pages/ServicePackage";
import ServiceDetails, {loader as serviceLoader} from "./pages/service-details";
import Shop from "./pages/shop";
import Home1Service from "./components/service/Home1Service";



const router = createBrowserRouter([
  {path:  '/',children:[
      {path: 'service-packages/search/:name',id:'packages', loader: packageLoader,  element: <ServicePackage/>},
      {path: 'service-packages/:packageId',id:'services', loader: serviceLoader,  element: <ServiceDetails/>},
      {path: 'shop', loader: packageLoader,  element: <Shop/>},
      {path: 'test',  element: <Home1Service/>},

    ]},
    ]
)
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
