import Modal from "react-modal"
import { useUiStore, useBookStore, useSubmit } from "../../hooks/";
import { deleteBook } from '../../api'

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

export const DeleteBookModal = ({ onSucces }) => {

    const { response, setResponse, handleSubmit } = useSubmit()
    const { isDeleteBookModalOpen, closeModal } = useUiStore()
    const { book, clearBook } = useBookStore()

    const onSubmit = async (event) => {
        event.preventDefault()
        await handleSubmit(async () => await deleteBook(book.id))
    }

    const onCloseModal = async () => {
        closeModal()
        clearBook()
        response.isOK && await onSucces()
        setResponse({ isOK: false })
    }

    return (
        <Modal
            isOpen={isDeleteBookModalOpen}
            style={customStyles}
            className="modal modal-short"
            overlayClassName="modal-fondo">
            <h1> Borrar libro</h1>
            <hr />
            {
                !response.data && <p>¿Seguro que desea eliminar este libro?</p>
            }

            <form className="container" onSubmit={onSubmit}>
                {
                    !response.data
                        ? <button
                            type="submit"
                            className="btn btn-outline-primary btn-block">
                            <i className="far fa-save"></i>
                            <span> Borrar</span>
                        </button>
                        : response.isOK
                            ?
                            <div className="alert alert-success" role="alert">
                                Libro eliminado con éxito<br />
                                Titulo: {response.data.titulo}<br />
                                Número de ejemplares: {response.data.totalEjemplares}
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