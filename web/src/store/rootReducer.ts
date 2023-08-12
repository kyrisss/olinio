import { authReducer } from "@redux/auth/auth.slice";
import { apiSlice } from "@redux/baseQuery";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
