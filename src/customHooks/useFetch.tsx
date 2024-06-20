import { useEffect, useState } from "react";

const useFetch = (url: string) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);
            setData(await response.json());
            setLoading(false);
        }
        getData();
    }, []);

    return {
        loading,
        data
    }   
};

export default useFetch;