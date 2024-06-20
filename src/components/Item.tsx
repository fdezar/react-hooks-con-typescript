import { Props } from "../interfaces";
import { useEffect } from "react";

const Item = (/* item: Todo */ props: Props) => {

    useEffect(() => {
        console.log('Listado');
    }, []);

    return (
        <>
        {props.item?.task}
        <button onClick={() => props.deleteItem(props.item?.id)}>Eliminar tarea</button>
        </>
    )
}

export default Item;