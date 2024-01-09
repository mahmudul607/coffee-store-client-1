import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import AddCoffee from "../../Pages/AddCoffee/AddCoffee";
import Update from "../../Pages/Update/Update";
import Root from "../../Layouts/Root/Root";

const Router= createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path:'/Update',
                element: <Update></Update>
            }
        ]
    }
]);



export default Router;