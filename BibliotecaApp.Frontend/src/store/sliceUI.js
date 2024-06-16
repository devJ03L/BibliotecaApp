import { createSlice } from "@reduxjs/toolkit";

export const sliceUI = createSlice({
    name: 'ui',
    initialState: {
        isNewBookModalOpen: false,
        isLoanBookModalOpen: false,
        isDeleteBookModalOpen: false,
        isReturnBookModalOpen: false
    },
    reducers: {
        onOpenNewBookModal: (state) => {
            state.isNewBookModalOpen = true
        },
        onOpenLoanBookModal: (state) => {
            state.isLoanBookModalOpen = true
        },
        onOpenDeleteBookModal: (state) => {
            state.isDeleteBookModalOpen = true
        },
        onOpenReturnBookModal: (state) => {
            state.isReturnBookModalOpen = true
        },
        onCloseModal: (state) => {
            state.isNewBookModalOpen = false
            state.isLoanBookModalOpen = false
            state.isDeleteBookModalOpen = false
            state.isReturnBookModalOpen = false
        }
    }
})


export const {
    onOpenNewBookModal,
    onOpenLoanBookModal,
    onOpenDeleteBookModal,
    onOpenReturnBookModal,
    onCloseModal
} = sliceUI.actions