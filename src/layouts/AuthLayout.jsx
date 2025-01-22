import { Outlet } from "react-router-dom";

import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <>
      <div className="outlet-wrap-auth-layout">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AuthLayout;
