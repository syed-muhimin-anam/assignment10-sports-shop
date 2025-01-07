import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-10/12 mx-auto ">
        <header>
          <NavBar></NavBar>
        </header>

        <Outlet></Outlet>
      </div>

      <footer className="w-full bg-[#87c451]">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
