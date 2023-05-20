import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addUserApiSlice = createApi({
  reducerPath: "addUser",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8000",
    baseUrl: `${process.env.REACT_APP_MESS_APP_BASE_URL}`,
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

    getUsers: builder.query({
      query: () => "/add_user",
      providesTags: ["add_user"],
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
      invalidatesTags: ["add_user"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/add_user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["add_user"],
    }),

    makeRole: builder.mutation({
      query: ({ id, data }) => ({
        url: `/add_user/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["add_user"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
  useDeleteUserMutation,
  useMakeRoleMutation,
} = addUserApiSlice;
