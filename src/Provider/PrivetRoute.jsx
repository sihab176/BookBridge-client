import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loader } = use(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      // <div className="flex justify-center h-screen mt-40">
      //   <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 mt-20"></div>
      // </div>

      <div className="flex-col gap-4 w-full flex items-center justify-center h-screen">
        <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivetRoute;