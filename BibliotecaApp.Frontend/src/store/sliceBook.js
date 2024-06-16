import { createSlice } from "@reduxjs/toolkit";

export const sliceBook = createSlice({
    name: 'book',
    initialState: {
        book: {}
    },
    reducers: {
        onSetBook: (state, { payload = {} }) => {
            state.book = payload
        },
        onClearBook: (state) => {
            state.book = {}
        }
    }
})

export const { onSetBook, onClearBook } = sliceBook.actions