import { authReducer } from "@redux/auth/auth.slice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
