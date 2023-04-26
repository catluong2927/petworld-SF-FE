
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import Header1 from "./components/header/Header1";



const router = createBrowserRouter([
  {path:  '/', element: <Header1/>},

])
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
