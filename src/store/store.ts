import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export { store };

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
