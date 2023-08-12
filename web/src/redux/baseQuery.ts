import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const API_URL = process.env.API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["GET", "GET_BY_ID"],
});
