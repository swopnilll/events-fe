import { Outlet } from "react-router-dom";

import "./MainLayout.css";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="outlet-wrapper-main-layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
