import React from "react";
import { Outlet } from "react-router-dom";
import cn from "classnames";

import { Header } from "@components/Header";
import { useTheme } from "@hooks/useTheme";

export const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("mainLayout", theme)}>
      <Header />
      <div className={cn("outlet", "wrapper")}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
