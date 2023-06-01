import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { contactApi } from "./api/contactApi";
import contactSlice from "./feature/contactSlice";
import { authApi } from "./api/authApi";
import authSlice from "./feature/authSlice";



export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authSlice : authSlice,
    [contactApi.reducerPath]: contactApi.reducer,
    contactSlice : contactSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware,authApi.middleware),
});

setupListeners(store.dispatch);
