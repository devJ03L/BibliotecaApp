import { createSlice } from "@reduxjs/toolkit";

export const sliceLoan = createSlice({
    name: 'loan',
    initialState: {
        loan: {}
    },
    reducers: {
        onSetLoan: (state, { payload = {} }) => {
            state.loan = payload
        },
        onClearLoan: (state) => {
            state.loan = {}
        }
    }
})

export const { onSetLoan, onClearLoan } = sliceLoan.actions