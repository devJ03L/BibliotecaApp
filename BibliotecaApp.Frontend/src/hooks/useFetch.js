import { useEffect, useState } from "react"

export const useFetch = (predicate) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        const newdata = await predicate()
        setData(newdata)
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        data,
        getData,
        isLoading
    }
}
