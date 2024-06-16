import libraryAPI from "./libraryAPI"

export const getLoans = async () => {
    try {
        const { data } = await libraryAPI.get('/prestamo')
        return data
    } catch ({ response }) {
        return response.data
    }
}

export const createLoan = async (id) => {
    try {
        const { data } = await libraryAPI.post('/prestamo', { "libroId": id })
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

export const finishLoan = async (id) => {
    try {
        const { data } = await libraryAPI.put(`/prestamo/${id}`)
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