import Modal from "react-modal"
import { useUiStore, useLoanStore, useSubmit } from "../../hooks";
import { finishLoan } from '../../api'

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

export const ReturnBookModal = ({ onSucces }) => {

    const { response, setResponse, handleSubmit } = useSubmit()
    const { isReturnBookModalOpen, closeModal } = useUiStore()
    const { loan, clearLoan } = useLoanStore()

    const onSubmit = async (event) => {
        event.preventDefault()
        await handleSubmit(async () => await finishLoan(loan.id))
    }

    const onCloseModal = async () => {
        closeModal()
        clearLoan()
        response.isOK && await onSucces()
        setResponse({ isOK: false })
    }

    return (
        <Modal
            isOpen={isReturnBookModalOpen}
            style={customStyles}
            className="modal modal-short"
            overlayClassName="modal-fondo">
            <h1> Devolver libro</h1>
            <hr />
            {
                !response.data && <p>¿Seguro que deseas devolver este libro?</p>
            }

            <form className="container" onSubmit={onSubmit}>
                {
                    !response.data
                        ? <button
                            type="submit"
                            className="btn btn-outline-primary btn-block">
                            <i className="far fa-save"></i>
                            <span> Devolver</span>
                        </button>
                        : response.isOK
                            ?
                            <div className="alert alert-success" role="alert">
                                Libro devuelto con éxito<br />
                                Titulo: {response.data.libro.titulo}<br />
                                Fecha de devolución: {response.data.fechaDevolucionReal}<br />
                                Ejemplares disponibles: {response.data.libro.disponibles}
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