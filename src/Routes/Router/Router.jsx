import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import AddCoffee from "../../Pages/AddCoffee/AddCoffee";
import Update from "../../Pages/Update/Update";
import Root from "../../Layouts/Root/Root";
import DetailsCoffee from "../../Pages/DetailsCoffee/DetailsCoffee";
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const Router= createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
       
        children:[
            {
                path:'/',
                element: <Home/>,
                // loader: () => fetch('https://coffee-store-server-1-pi.vercel.app/coffees')
            },
            {
                path:'/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            
            {
                path:'/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: async ({params}) => await fetch(`https://coffee-store-server-1-pi.vercel.app/coffees/${params.id}`)
            },
            {
                path:'/view/:id',
                element: <DetailsCoffee></DetailsCoffee>,
                loader: ({params}) => fetch(`https://coffee-store-server-1-pi.vercel.app/coffees/${params.id}`)
            },
            {
                path:'/signup',
                element: <SignUp/>
            },
            {
                path:'/login',
                element: <SignIn/>
            },
        ]
    }
]);



export default Router;