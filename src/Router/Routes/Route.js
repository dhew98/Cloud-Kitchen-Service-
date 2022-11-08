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
                }
            ]
        }
    ]
)

export default router;