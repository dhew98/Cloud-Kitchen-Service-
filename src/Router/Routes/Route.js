import { createBrowserRouter } from "react-router-dom";

import Main from "../../layouts/Main";
import AddReview from "../../Pages/AddReview/AddReview ";
import AddServices from "../../Pages/AddServices/AddServices";
import Allservice from "../../Pages/Allservice/Allservice";
import Blog from "../../Pages/Blog/Blog";
import Header from "../../Pages/Header/Header";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute";




const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch("https://server-six-kappa.vercel.app/homeService")
                },
                {
                    path: '/services',
                    element: <Allservice></Allservice>,
                    loader: () => fetch("https://server-six-kappa.vercel.app/services")
                },
                {
                    path: '/services/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({ params }) => fetch(`https://server-six-kappa.vercel.app/services/${params.id}`)

                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/myreview',
                    element: <PrivateRoute><MyReview /></PrivateRoute>,

                },
                {
                    path: '/addService',
                    element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,

                },
                {
                    path: '/blog',
                    element: <Blog></Blog>,

                }

            ]
        }
    ]
)

export default router;