import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";



const Root = () => {
    return (
        <div className="w-10/12 mx-auto">
            <header>
                <NavBar></NavBar>
            </header>
            
            

            

           
            <Outlet></Outlet>
            
            

            <footer className="w-full">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;