import { UpdateUserBody, User } from "models/auth";

import { apiSlice } from "@redux/baseQuery";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["GET"],
    }),
    getUserById: build.query<User, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
      providesTags: ["GET_BY_ID"],
    }),
    deleteUser: build.mutation<User, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GET", "GET_BY_ID"],
    }),
    updateUser: build.mutation<User, { body: UpdateUserBody; id: string }>({
      query: ({ id, body }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["GET_BY_ID"],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
export const { useGetUserByIdQuery } = usersApi;
export const { useDeleteUserMutation } = usersApi;
export const { useUpdateUserMutation } = usersApi;
