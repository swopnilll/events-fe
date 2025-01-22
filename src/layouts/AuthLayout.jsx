import { Outlet } from "react-router-dom";

import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <>
      <div className="outlet-wrap-auth-layout flex flex-col min-h-screen">
        <main className="flex-grow pt-[--navbar-height]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
