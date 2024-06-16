import DataTable from 'react-data-table-component';
import { useBookStore, useUiStore, useFetch } from "../../hooks"
import { NewBookModal, LoanBookModal, DeleteBookModal } from "../components/";
import { getBooks } from '../../api'

export const BooksPage = () => {

    const columns = [
        {
            name: 'Titulo',
            selector: row => row.titulo,
        },
        {
            name: 'Disponibles',
            selector: row => row.disponibles,
        },
        {
            button: "true",
            cell: row => <button type="button" className="btn btn-outline-primary btn-block" onClick={() => handleButtonClickPrestar(row)}>Prestar</button>,
            ignoreRowClick: true
        },
        {
            button: "true",
            cell: row => <button type="button" className="btn btn-danger btn-block" onClick={() => handleButtonClickEliminar(row)}>Eliminar</button>,
            ignoreRowClick: true
        }
    ];

    const { data, getData } = useFetch(getBooks)
    const { setBook } = useBookStore()
    const { openNewBookModal, openLoanBookModal, openDeleteBookModal } = useUiStore()

    const handleButtonClickPrestar = (row) => {
        setBook(row)
        openLoanBookModal()
    };

    const handleButtonClickEliminar = (row) => {
        setBook(row)
        openDeleteBookModal()
    };

    return (
        <>
            <hr />
            <DataTable
                columns={columns}
                data={data}
                fixedHeader
            />
            <hr />
            <button className="btn btn-primary" onClick={openNewBookModal}>
                <i className="far fa-save"></i>
                <span>Agregar libro</span>
            </button>
            <NewBookModal onSucces={getData} />
            <LoanBookModal onSucces={getData} />
            <DeleteBookModal onSucces={getData} />
        </>

    )
}