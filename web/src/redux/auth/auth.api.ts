import { RegisterUserBody, User } from "models/auth";

import { apiSlice } from "@redux/baseQuery";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<User, Pick<User, "username" | "password">>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    registration: build.mutation<User, RegisterUserBody>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
export const { useRegistrationMutation } = authApi;
