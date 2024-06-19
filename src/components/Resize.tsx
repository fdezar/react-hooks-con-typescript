import { useEffect, useState } from "react";

const Resize = () => {

    const [resize, setResize] = useState(window.innerWidth);
    const [data, setData] = useState([]);

    const windowResize = () => {
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', windowResize);
        setData([])
        // Cuando añadas el elemento, elimínalo también por un tema de memoria
        return () => {
            window.removeEventListener('resize', windowResize);
        }
    }, [])

    return (
        <>
        { resize }
        { data.length }
        </>
    )
}

export default Resize;