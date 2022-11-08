import { createBrowserRouter } from "react-router-dom";
import Allservice from "../../Allservice/Allservice";
import Main from "../../layouts/Main";
import Header from "../../Pages/Header/Header";
import Home from "../../Pages/Home/Home";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";


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
            ]
        }
    ]
)

export default router;