import { createBrowserRouter } from "react-router-dom";

import Main from "../../layouts/Main";
import AddReview from "../../Pages/AddReview/AddReview ";
import Allservice from "../../Pages/Allservice/Allservice";
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
                    loader: () => fetch("http://localhost:5000/homeService")
                },
                {
                    path: '/services',
                    element: <Allservice></Allservice>,
                    loader: () => fetch("http://localhost:5000/services")
                },
                {
                    path: '/services/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

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
                    path: '/addReview/:id',
                    element: <PrivateRoute> <AddReview></AddReview></PrivateRoute>,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                {
                    path: '/myreview',
                    element: <PrivateRoute><MyReview /></PrivateRoute>,

                }
            ]
        }
    ]
)

export default router;