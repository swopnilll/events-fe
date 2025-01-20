import { Outlet } from "react-router-dom";

import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <>
      <h1>Auth Layout</h1>
      <div className="outlet-wrap-auth-layout">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AuthLayout;
