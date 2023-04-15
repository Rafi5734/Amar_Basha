import { configureStore } from "@reduxjs/toolkit";
import { logInApiSlice } from "../features/api/logInApiSlice";
import { addUserApiSlice } from "../features/api/addUserApiSlice";

export const store = configureStore({
  reducer: {
    [logInApiSlice.reducerPath]: logInApiSlice.reducer,
    [addUserApiSlice.reducerPath]: addUserApiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
      logInApiSlice.middleware,
      addUserApiSlice.middleware
    ),
});
