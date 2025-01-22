import { Outlet } from "react-router-dom";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="pt-[80px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
