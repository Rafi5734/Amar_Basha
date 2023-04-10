import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const logInApiSlice = createApi({
  reducerPath: "logIn",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/add_user",
    }),
  }),
});

export const { useGetUsersQuery } = logInApiSlice;
