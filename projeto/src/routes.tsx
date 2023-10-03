import{ createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home/index";
import { Sobre } from "./Pages/Sobre/index";
import { Contato } from "./Pages/Contato/index";
import { Produto } from "./Pages/Produto/index";

const router = createBrowserRouter ([
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
        path:"/produto",
        element:<Produto/>
    }
])

export {router};