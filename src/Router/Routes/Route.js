import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Header from "../../Pages/Header/Header";
import Home from "../../Pages/Home/Home";


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
                }
            ]
        }
    ]
)

export default router;