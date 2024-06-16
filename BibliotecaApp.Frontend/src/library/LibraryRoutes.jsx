import { Navigate, Route, Routes } from "react-router-dom"
import { BooksPage, LoansPage } from "./pages"

export const LibraryRoutes = () => {
    return (
        <Routes>
            <Route path="libros" element={<BooksPage />} />
            <Route path="prestamos" element={<LoansPage />} />
            <Route path="/" element={<Navigate to="libros" />} />
        </Routes>
    )
}