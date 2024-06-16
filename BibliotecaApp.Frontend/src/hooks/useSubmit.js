import { useState } from "react";

export const useSubmit = () => {

    const [response, setResponse] = useState({ isOK: false })

    const handleSubmit = async (predicate) => {
        const resp = await predicate()
        console.log(resp)
        setResponse(resp)
    }

    return {
        response,
        setResponse,
        handleSubmit
    }
}