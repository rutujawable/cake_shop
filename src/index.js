
import ReactDOM from "react-dom/client"


import './index.css';
import Home from "./views/Home/Home";
import Products from './views/Products/Products'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
    
            const root = ReactDOM.createRoot(document.getElementById("root"));

            const router =createBrowserRouter([
                {
                    path:"/",
                    element:<Home/>
                },

                {
                   path:"/Products",
                   element:<Products/>
               }
             
              
              
            ])
            root.render(<RouterProvider router={router} /> )            