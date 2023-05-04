
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import Header1 from "./components/header/Header1";
import ShopCard from "./components/shop/ShopCard";
import Shop from "./pages/shop.js";


const router = createBrowserRouter([
  {path:  '/', element: <Shop/>},
  // {path: '/shop', element: <Shop/>}

])
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
