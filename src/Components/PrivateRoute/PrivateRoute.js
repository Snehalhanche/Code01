import Header from "../Header/HeaderPage/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function PrivateRoute() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default PrivateRoute;
