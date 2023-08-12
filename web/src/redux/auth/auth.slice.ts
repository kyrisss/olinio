import { User } from "models/auth";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/rootReducer";

export interface AuthState {
  email: string | null;
  firstName: string | null;
  isLoggedIn: boolean;
  lastName: string | null;
  phone: string | null;
  username: string | null;
}

const initialState: AuthState = {
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  isLoggedIn: false,
  username: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, { payload }: PayloadAction<User>) => {
      const { email, firstName, phone, username, lastName } = payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.phone = phone;
      state.isLoggedIn = true;
      state.email = email;
      state.username = username;
    },

    logout: () => initialState,
  },
});

export const { loginSuccess } = authSlice.actions;
export const { logout } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const getAuthReducer = (state: RootState) => state.authReducer;
