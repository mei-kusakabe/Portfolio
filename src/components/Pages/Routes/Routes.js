import { createBrowserRouter } from "react-router-dom";
import Home from "../AllPages/Home/Home";
import Main from "../layout/Main";
import FourZeroFour from "../AllPages/FourZeroFour/FourZeroFour"
import Contact from "../AllPages/Contact/Contact";
import Projects from "../AllPages/Projects/Projects";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },




        ]


    },

    { path: '*', element: <FourZeroFour></FourZeroFour> }

])