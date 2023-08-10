import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "@components/Layout/MainLayout";
import { Loader } from "@components/Loader";
import { LoginPage } from "@views/LoginPage";
import { MainPage } from "@views/MainPage";

import { ROUTES } from "./config";
import { ProtectedAuthRoutes } from "./ProtectedAuthRoutes";

export const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          {/* <Route path={ROUTES.ERROR_404} element={<Page404 />} /> */}
          {/* <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} /> */}
          <Route element={<ProtectedAuthRoutes />}>
            <Route index element={<MainPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
