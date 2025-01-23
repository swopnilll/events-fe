import { Outlet } from "react-router-dom";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow pt-[--navbar-height]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
