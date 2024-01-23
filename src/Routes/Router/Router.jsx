import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import AddCoffee from "../../Pages/AddCoffee/AddCoffee";
import Update from "../../Pages/Update/Update";
import Root from "../../Layouts/Root/Root";
import DetailsCoffee from "../../Pages/DetailsCoffee/DetailsCoffee";
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";

const Router= createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
       
        children:[
            {
                path:'/',
                element: <Home/>,
                loader: () => fetch('https://coffee-store-server-1-two.vercel.app/coffees')
            },
            {
                path:'/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            
            {
                path:'/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://coffee-store-server-1-two.vercel.app/coffees/${params.id}`)
            },
            {
                path:'/view/:id',
                element: <DetailsCoffee></DetailsCoffee>,
                loader: ({params}) => fetch(`https://coffee-store-server-1-two.vercel.app/coffees/${params.id}`)
            },
            {
                path:'/signup',
                element: <SignUp/>
            },
            {
                path:'/login',
                element: <SignIn/>
            }
        ]
    }
]);



export default Router;