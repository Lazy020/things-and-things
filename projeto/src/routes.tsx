import{ createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout/index";
import { Home } from "./Pages/Home/index";
import { Sobre } from "./Pages/Sobre/index";
import { Contato } from "./Pages/Contato/index";
import { Produto } from "./Pages/Produto/index";
import { NotFound } from "./Pages/NotFound/index";

const router = createBrowserRouter ([
    { 
     element:<Layout/>,
     children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/sobre",
            element:<Sobre/>
        },
        {
            path:"/contato",
            element:<Contato/>
        },
        {
            path:"/produto/:id",
            element:<Produto/>
        },
        {
            path:"*",
            element:<NotFound/>
        }
    ]
  }

]);

export {router};