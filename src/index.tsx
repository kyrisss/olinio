import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { ThemeProvider } from "@components/ThemeSwitcher/ThemeProvider";
import { store } from "@store/store";

import { AppRoutes } from "./routes/AppRoutes";

import "@styles/index.scss";

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </Provider>
);

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
