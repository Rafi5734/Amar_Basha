import { configureStore } from "@reduxjs/toolkit";
import { logInApiSlice } from "../features/api/logInApiSlice";
import { addUserApiSlice } from "../features/api/addUserApiSlice";
import { mealListApiSlice } from "../features/api/mealListApiSlice";

export const store = configureStore({
  reducer: {
    [logInApiSlice.reducerPath]: logInApiSlice.reducer,
    [addUserApiSlice.reducerPath]: addUserApiSlice.reducer,
    [mealListApiSlice.reducerPath]: mealListApiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
      logInApiSlice.middleware,
      addUserApiSlice.middleware,
      mealListApiSlice.middleware
    ),
});
