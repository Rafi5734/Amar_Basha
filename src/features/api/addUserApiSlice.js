import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addUserApiSlice = createApi({
  reducerPath: "addUser",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  tagTypes: ["add_user"],
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (user) => ({
        url: "/add_user",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["add_user"],
    }),

    getSingleUser: builder.query({
      query: (id) => `/add_user/${id}`,
      providesTags: (result, error, arg) => [{ type: "add_user", id: arg }],
    }),

    updateSingleUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/add_user/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["all_user"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/add_user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["all_user"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
  useDeleteUserMutation,
} = addUserApiSlice;
