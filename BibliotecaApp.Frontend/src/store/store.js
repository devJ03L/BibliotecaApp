import { configureStore } from "@reduxjs/toolkit";
import { sliceUI, sliceBook, sliceLoan } from "./";

export const store = configureStore({
    reducer: {
        ui: sliceUI.reducer,
        book: sliceBook.reducer,
        loan: sliceLoan.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})