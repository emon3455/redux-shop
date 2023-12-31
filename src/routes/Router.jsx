import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Error from "../error/Error";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import ProductDetails from "../component/ProductDetails";
import Shop from "../pages/shop/Shop";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/products/:id",
            element: <ProductDetails/>,
            loader: ({params})=> fetch(`https://fakestoreapi.com/products/${params.id}`) 
        },
        {
            path: "/cart",
            element: <Cart/>
        },
        {
            path: "/login",
            element: <Login/>
        }
      ]
    },
  ]);
  

export default router;