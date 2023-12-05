import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Cart from "../Pages/Cart/Cart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductCard from "../Shared/ProductCard/ProductCard";
import ProductDetails from "../Shared/ProductDetails/ProductDetails";
import UpdateProducts from "../Pages/UpdateProducts/UpdateProducts";
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: "/:brandName",
                element: <ProductCard></ProductCard>,
                loader: ({ params }) => fetch(`https://tech-server-seven.vercel.app/products/${params.brandName}`)
            },
            {
                path: "/:brandName/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-server-seven.vercel.app/products/${params.brandName}/${params.id}`)
            },
            {
                path: "/update/:brandName/:id",
                element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-server-seven.vercel.app/products/${params.brandName}/${params.id}`)
            }
        ]
    },
]);

export default Routes;