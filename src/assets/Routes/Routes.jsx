import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Cart from "../Pages/Cart/Cart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductCard from "../Shared/ProductCard/ProductCard";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add",
                element: <AddProducts></AddProducts>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/:brandName",
                element: <ProductCard></ProductCard>,
                loader: ({params})=>fetch(`http://localhost:5000/products/${params.brandName}`)
            }
        ]
    },
]);

export default Routes;