import { Outlet } from "react-router-dom";
import { Header } from "../Header/index.tsx";

export function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <br/>
        <footer>
            <span>Kirara the best support</span>
        </footer>
        
        
        </>
    )
}