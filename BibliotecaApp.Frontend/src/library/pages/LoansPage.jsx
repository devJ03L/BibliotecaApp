import DataTable from 'react-data-table-component';
import { useFetch, useLoanStore, useUiStore } from "../../hooks"
import { getLoans } from '../../api'
import { ReturnBookModal } from '../components';

export const LoansPage = () => {

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
        },
        {
            name: 'Título',
            selector: row => row.libro.titulo,
        },
        {
            name: 'Fecha de prestamo',
            selector: row => row.fechaPrestamo,
        },
        {
            name: 'Fecha de vencimiento',
            selector: row => row.fechaDevolucion,
        },
        {
            button: "true",
            cell: row => <button type="button" className="btn btn-danger btn-block" onClick={() => handleButtonClickdevolver(row)}>Devolver</button>,
            ignoreRowClick: true
        }
    ];

    const { data, getData } = useFetch(getLoans)
    const { setLoan } = useLoanStore()
    const { openReturnBookModal } = useUiStore()

    const handleButtonClickdevolver = (row) => {
        setLoan(row)
        openReturnBookModal()
    }

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                fixedHeader
            />
            <hr />
            <ReturnBookModal onSucces={getData} />
        </>
    )
}