import Modal from "react-modal"
import { useUiStore, useBookStore, useSubmit } from "../../hooks";
import { useNavigate } from "react-router-dom"
import { createLoan } from '../../api'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const LoanBookModal = ({ onSucces }) => {

    const { isLoanBookModalOpen, closeModal } = useUiStore()
    const { response, setResponse, handleSubmit } = useSubmit()
    const { book, clearBook } = useBookStore()
    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault()
        await handleSubmit(async () => await createLoan(book.id))
    }

    const onCloseModal = async () => {
        closeModal()
        clearBook()
        if (response.isOK) {
            setResponse({ isOK: false })
            navigate("/prestamos")
        }
    }

    return (
        <Modal
            isOpen={isLoanBookModalOpen}
            style={customStyles}
            className="modal modal-short"
            overlayClassName="modal-fondo">
            <h1> Nuevo prestamo </h1>
            <hr />
            {
                !response.data && <p>¿Desea prestar el libro?</p>
            }
            <form className="container" onSubmit={onSubmit}>
                {
                    !response.data
                        ? <button
                            type="submit"
                            className="btn btn-outline-primary btn-block">
                            <i className="far fa-save"></i>
                            <span> Aceptar</span>
                        </button>
                        : response.isOK
                            ?
                            <div className="alert alert-success" role="alert">
                                Libro prestado con éxito<br />
                                Titulo: {response.data.libro.titulo}<br />
                                Fecha de devolución: {response.data.fechaDevolucion}
                            </div>
                            : <div className="alert alert-danger" role="alert">{response.data}</div>
                }

                <button
                    type="button"
                    className="btn btn-danger btn-block"
                    onClick={onCloseModal}
                >
                    <i className="far fa-save"></i>
                    <span> Cerrar</span>
                </button>
            </form>

        </Modal>
    )
}