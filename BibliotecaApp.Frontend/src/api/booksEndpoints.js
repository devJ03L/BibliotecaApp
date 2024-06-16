import libraryAPI from "./libraryAPI"

export const getBooks = async () => {
    try {
        const { data } = await libraryAPI.get('/libro')
        return data
    } catch ({ response }) {
        return response.data
    }
}

export const deleteBook = async (id) => {
    try {
        const { data } = await libraryAPI.delete(`/libro/${id}`)
        return {
            data,
            isOK: true
        }
    } catch ({ response }) {
        return {
            data: response.data,
            isOK: false
        }
    }
}

export const createBook = async (libro) => {
    try {
        const { data } = await libraryAPI.post('/libro', {
            "titulo": libro.titulo,
            "totalEjemplares": libro.totalEjemplares
        })
        return {
            data,
            isOK: true
        }
    } catch ({ response }) {
        return {
            data: response.data,
            isOK: false
        }
    }
}