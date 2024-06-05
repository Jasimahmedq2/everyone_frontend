import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./features/auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedPartsReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedPartsReducer,
  },

  middleware: (getDefaultMiddle) =>
    getDefaultMiddle().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
