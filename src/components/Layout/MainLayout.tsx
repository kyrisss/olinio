import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
  <div className="mainLayout">
    {/* <Header /> */}
    <div className="outlet">
      <Outlet />
    </div>
    {/* <Footer /> */}
  </div>
);
