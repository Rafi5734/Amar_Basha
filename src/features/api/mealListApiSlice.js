import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealListApiSlice = createApi({
  reducerPath: "mealList",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8000",
    baseUrl: `${process.env.REACT_APP_MESS_APP_BASE_URL}`,
  }),
  tagTypes: ["meal_list"],
  endpoints: (builder) => ({
    addMeal: builder.mutation({
      query: (allMeal) => ({
        url: "/meal_list",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: allMeal,
      }),
      invalidatesTags: ["meal_list"],
    }),

    getMealList: builder.query({
      query: () => `/meal_list`,
      providesTags: ["meal_list"],
    }),

    getSingleMeal: builder.query({
      query: (id) => `/meal_list/${id}`,
      providesTags: (result, error, arg) => [{ type: "meal_list", id: arg }],
    }),

    updateSingleMeal: builder.mutation({
      query: ({ id, allMeal }) => ({
        url: `/meal_list/${id}`,
        method: "PUT",
        body: allMeal,
      }),
      invalidatesTags: ["meal_list"],
    }),

    deleteMealList: builder.mutation({
      query: (id) => ({
        url: `/meal_list/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["meal_list"],
    }),
    deleteAllPreviousMealList: builder.mutation({
      query: (previousMonthData) => ({
        url: `/meal_list/delete_previous`,
        method: "DELETE",
        body: previousMonthData,
      }),
      invalidatesTags: ["meal_list"],
    }),
  }),
});

export const {
  useAddMealMutation,
  useGetMealListQuery,
  useGetSingleMealQuery,
  useUpdateSingleMealMutation,
  useDeleteMealListMutation,
  useDeleteAllPreviousMealListMutation,
} = mealListApiSlice;
