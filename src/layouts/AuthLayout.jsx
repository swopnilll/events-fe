import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="outlet-wrap-auth-layout flex flex-col min-h-screen">
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
