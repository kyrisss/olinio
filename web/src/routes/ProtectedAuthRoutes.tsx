import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "@hooks/redux";
import { getAuthReducer } from "@redux/auth/auth.slice";

import { ROUTES } from "./config";

export const ProtectedAuthRoutes = () => {
  const { isLoggedIn } = useAppSelector(getAuthReducer);

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};
