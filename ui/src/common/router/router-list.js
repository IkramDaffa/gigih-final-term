import Home from "../../module/home";
import VideoDetail from "../../module/videoDetail";
import AddProduct from "../../module/addProduct";
import { createBrowserRouter } from "react-router-dom";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/videoDetail",
    element: <VideoDetail />,
  },
  {
    path: "/addProduct",
    element: <AddProduct />,
  },
]);

export default routerList;
