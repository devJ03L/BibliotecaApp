import { useDispatch, useSelector } from "react-redux"
import { onSetLoan, onClearLoan } from "../store"

export const useLoanStore = () => {
    const dispatch = useDispatch()
    const { loan } = useSelector(state => state.loan)

    const setLoan = (loan) => {
        dispatch(onSetLoan(loan))
    }

    const clearLoan = () => {
        dispatch(onClearLoan())
    }

    return {
        loan,
        setLoan,
        clearLoan
    }

}