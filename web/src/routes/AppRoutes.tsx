import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "@components/Layout/MainLayout";
import { Loader } from "@components/Loader";
import { LoginPage } from "@views/LoginPage";
import { RegistrationPage } from "@views/RegistrationPage";
import { UserListPage } from "@views/UserListPage";

import { ROUTES } from "./config";

export const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to={ROUTES.USER_LIST} />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
          {/* <Route element={<ProtectedAuthRoutes />}> */}
          <Route index path={ROUTES.USER_LIST} element={<UserListPage />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
