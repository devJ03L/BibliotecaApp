import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from './store'
import { Library } from "./library/Library"

export const AppLibrary = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Library />
            </BrowserRouter>
        </Provider>
    )
}