import React from "react";
import { createRoot } from "react-dom/client";

import { AppRoutes } from "./routes/AppRoutes";

import "@styles/index.scss";

const App = () => <AppRoutes />;

const container = document.getElementById("#root");
const root = createRoot(container!);
root.render(<App />);
