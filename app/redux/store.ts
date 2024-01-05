import { configureStore } from "@reduxjs/toolkit/react";
import libraryReducer from "./librarySlice";

export const store = configureStore({
    reducer: {
        library: libraryReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;