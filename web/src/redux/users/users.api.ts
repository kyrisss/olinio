import { User } from "models/auth";

import { apiSlice } from "@redux/baseQuery";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    deleteUser: build.mutation<User, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    updateUser: build.mutation<User, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "PATCH",
      }),
    }),
  }),
});
