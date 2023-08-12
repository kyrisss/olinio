import { User } from "models/auth";

import { apiSlice } from "@redux/baseQuery";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
    getUserById: build.query<User, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
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

export const { useGetUsersQuery } = usersApi;
export const { useGetUserByIdQuery } = usersApi;
export const { useDeleteUserMutation } = usersApi;
export const { useUpdateUserMutation } = usersApi;
