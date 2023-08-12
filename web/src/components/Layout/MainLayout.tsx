import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import cn from "classnames";

import { Header } from "@components/Header";
import { useTheme } from "@hooks/useTheme";

export const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("mainLayout", theme)}>
      <ToastContainer />
      <Header />
      <div className={cn("outlet", "wrapper")}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
