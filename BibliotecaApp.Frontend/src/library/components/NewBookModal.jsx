import Modal from "react-modal"
import { useUiStore, useSubmit } from "../../hooks";
import { useState } from "react";
import { createBook } from '../../api'

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

export const NewBookModal = ({ onSucces }) => {

    const { response, setResponse, handleSubmit } = useSubmit()
    const { isNewBookModalOpen, closeModal } = useUiStore()
    const [formValues, setFormValues] = useState({
        titulo: "",
        totalEjemplares: 0
    })

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        await handleSubmit(async () => await createBook(formValues))
    }

    const onCloseModal = async () => {
        closeModal()
        setFormValues({
            titulo: "",
            totalEjemplares: 0
        })
        response.isOK && await onSucces()
        setResponse({ isOK: false })
    }

    return (
        <Modal
            isOpen={isNewBookModalOpen}
            style={customStyles}
            className="modal modal-large"
            overlayClassName="modal-fondo"
        >
            <h1> Nuevo libro </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>
                <div className="form-group mb-2">
                    <label>Título</label>
                    <input
                        className="form-control"
                        placeholder="Título"
                        name="titulo"
                        autoComplete="off"
                        value={formValues.titulo}
                        onChange={onInputChanged}
                        disabled={response.isOK}
                    />
                </div>
                <div className="form-group mb-2">
                    <label>Número de ejemplares</label>
                    <input
                        className="form-control"
                        placeholder="Número de ejemplares"
                        name="totalEjemplares"
                        autoComplete="off"
                        value={formValues.totalEjemplares}
                        onChange={onInputChanged}
                        disabled={response.isOK}
                    />
                </div>
                <hr />
                {
                    !response.data
                        ? <></>
                        : response.isOK
                            ? <div className="alert alert-success" role="alert">Libro guardado con éxito</div>
                            : <div className="alert alert-danger" role="alert">{response.data}</div>
                }

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                    disabled={response.isOK}
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
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