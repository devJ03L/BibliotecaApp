import { useDispatch, useSelector } from "react-redux"
import { onSetBook, onClearBook } from "../store"

export const useBookStore = () => {
    const dispatch = useDispatch()
    const { book } = useSelector(state => state.book)

    const setBook = (book) => {
        dispatch(onSetBook(book))
    }

    const clearBook = () => {
        dispatch(onClearBook())
    }

    return {
        book,
        setBook,
        clearBook
    }

}