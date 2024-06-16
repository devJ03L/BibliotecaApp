import { useDispatch, useSelector } from "react-redux"
import { onOpenNewBookModal, onOpenLoanBookModal, onOpenDeleteBookModal, onCloseModal, onOpenReturnBookModal } from "../store"

export const useUiStore = () => {
    const dispatch = useDispatch()
    const {
        isNewBookModalOpen,
        isLoanBookModalOpen,
        isDeleteBookModalOpen,
        isReturnBookModalOpen
    } = useSelector(state => state.ui)

    const openNewBookModal = () => {
        dispatch(onOpenNewBookModal())
    }

    const openLoanBookModal = () => {
        dispatch(onOpenLoanBookModal())
    }

    const openReturnBookModal = () => {
        dispatch(onOpenReturnBookModal())
    }

    const openDeleteBookModal = () => {
        dispatch(onOpenDeleteBookModal())
    }

    const submitModal = () => {
        dispatch(onModalSubmit())
    }

    const closeModal = () => {
        dispatch(onCloseModal())
    }

    return {
        isNewBookModalOpen,
        isLoanBookModalOpen,
        isDeleteBookModalOpen,
        isReturnBookModalOpen,
        openNewBookModal,
        openLoanBookModal,
        openDeleteBookModal,
        openReturnBookModal,
        submitModal,
        closeModal
    }
}