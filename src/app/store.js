import { configureStore } from "@reduxjs/toolkit";
import { logInApiSlice } from "../features/api/logInApiSlice";

export const store = configureStore({
  reducer: { [logInApiSlice.reducerPath]: logInApiSlice.reducer },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(logInApiSlice.middleware),
});
