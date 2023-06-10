import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bazarListApiSlice = createApi({
  reducerPath: "bazarList",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8000",
    baseUrl: `${process.env.REACT_APP_MESS_APP_BASE_URL}`,
  }),
  tagTypes: ["bazar_list"],
  endpoints: (builder) => ({
    addbazar: builder.mutation({
      query: (allBazar) => ({
        url: "/bazar_list",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: allBazar,
      }),
      invalidatesTags: ["bazar_list"],
    }),

    getBazarList: builder.query({
      query: () => "/bazar_list",
      providesTags: ["bazar_list"],
    }),

    getSingleBazar: builder.query({
      query: (id) => `/bazar_list/${id}`,
      providesTags: (result, error, arg) => [{ type: "bazar_list", id: arg }],
    }),

    updateSingleBazar: builder.mutation({
      query: ({ id, data }) => ({
        url: `/bazar_list/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["bazar_list"],
    }),
    deleteAllPreviousBazarList: builder.mutation({
      query: (previousMonthData) => ({
        url: `/bazar_list/delete_previous`,
        method: "DELETE",
        body: previousMonthData,
      }),
      invalidatesTags: ["bazar_list"],
    }),
  }),
});

export const {
  useAddbazarMutation,
  useGetBazarListQuery,
  useGetSingleBazarQuery,
  useUpdateSingleBazarMutation,
  useDeleteAllPreviousBazarListMutation,
} = bazarListApiSlice;
