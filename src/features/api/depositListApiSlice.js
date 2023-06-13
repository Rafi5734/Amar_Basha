import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const depositListApiSlice = createApi({
  reducerPath: "depositList",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8000",
    baseUrl: `${process.env.REACT_APP_MESS_APP_BASE_URL}`,
  }),
  tagTypes: ["deposit_list"],

  endpoints: (builder) => ({
    addDeposit: builder.mutation({
      query: (allDeposits) => ({
        url: "/deposit_list",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: allDeposits,
      }),
      invalidatesTags: ["deposit_list"],
    }),

    getDepositList: builder.query({
      query: () => "/deposit_list",
      providesTags: ["deposit_list"],
    }),

    getSingleDeposit: builder.query({
      query: (id) => `/deposit_list/${id}`,
      providesTags: (result, error, arg) => [{ type: "meal_list", id: arg }],
    }),

    updateSingleDeposit: builder.mutation({
      query: ({ id, data }) => ({
        url: `/deposit_list/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["deposit_list"],
    }),
    deleteAllPreviousDepositList: builder.mutation({
      query: (previousMonthData) => ({
        url: "/deposit_list/delete_previous",
        method: "DELETE",
        body: previousMonthData,
      }),
      invalidatesTags: ["deposit_list"],
    }),
  }),
});

export const {
  useAddDepositMutation,
  useGetDepositListQuery,
  useGetSingleDepositQuery,
  useUpdateSingleDepositMutation,
  useDeleteAllPreviousDepositListMutation,
} = depositListApiSlice;
